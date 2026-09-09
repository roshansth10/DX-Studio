import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface ParticleCanvasProps {
  theme: ThemeMode;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  baseAlpha: number;
}

export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isInside: boolean }>({ x: -1000, y: -1000, isInside: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 22 : 48;
    const maxDistance = isMobile ? 90 : 130;

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.35 + 0.15,
        baseAlpha: Math.random() * 0.35 + 0.15
      });
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isInside: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isInside = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const isDark = theme === 'obsidian';
    const isSand = theme === 'sand-stone';
    const isCobalt = theme === 'electric-cobalt';

    const particleRgb = isDark 
      ? '200, 215, 255' 
      : isSand 
      ? '100, 110, 140' 
      : isCobalt 
      ? '59, 130, 246' 
      : '37, 99, 235';

    const lineRgb = isDark 
      ? '120, 150, 220' 
      : isSand 
      ? '140, 130, 120' 
      : isCobalt 
      ? '96, 165, 250' 
      : '59, 130, 246';

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gentle repulsion / pull
        if (mouseRef.current.isInside) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 0.8;
            p.y -= (dy / dist) * force * 0.8;
            p.alpha = Math.min(0.8, p.baseAlpha + force * 0.4);
          } else {
            p.alpha += (p.baseAlpha - p.alpha) * 0.05;
          }
        }

        ctx.fillStyle = `rgba(${particleRgb}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * (isDark ? 0.12 : 0.08);
            ctx.strokeStyle = `rgba(${lineRgb}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
