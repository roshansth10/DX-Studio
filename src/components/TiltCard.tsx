import React, { useRef } from 'react';
import gsap from 'gsap';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt degrees (e.g., 6)
  perspective?: number;
  glare?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6.5,
  perspective = 1100,
  glare = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate proportional tilt
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: perspective,
      transformOrigin: 'center center',
      duration: 0.35,
      ease: 'power2.out',
      overwrite: 'auto',
    });

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      gsap.to(glareRef.current, {
        opacity: 0.18,
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`,
        duration: 0.25,
        overwrite: 'auto',
      });
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.75,
      ease: 'power3.out',
      overwrite: 'auto',
    });

    if (glare && glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.5,
        overwrite: 'auto',
      });
    }
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className="will-change-transform"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative ${className}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 z-30 mix-blend-overlay"
          />
        )}
      </div>
    </div>
  );
};
