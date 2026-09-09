import React, { useRef } from 'react';
import gsap from 'gsap';

interface MagneticElementProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0.1 to 0.6
  active?: boolean;
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  className = '',
  strength = 0.35,
  active = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(containerRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.25,
      ease: 'power2.out',
      overwrite: 'auto',
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      x: 0,
      y: 0,
      duration: 0.65,
      ease: 'elastic.out(1.15, 0.4)',
      overwrite: 'auto',
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block transition-transform duration-75 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};
