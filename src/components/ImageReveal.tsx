import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatioClass?: string;
  overlayColor?: string;
  accentColor?: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  aspectRatioClass = '',
  overlayColor = '#121215',
  accentColor = '#2563EB',
  className = '',
  imgClassName = '',
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !curtainRef.current || !imgRef.current) return;

    // Check for user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (curtainRef.current) curtainRef.current.style.display = 'none';
      if (contentRef.current) contentRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(curtainRef.current, { yPercent: 0, autoAlpha: 1 });
      gsap.set(imgRef.current, { scale: 1.14 });
      if (contentRef.current) {
        gsap.set(contentRef.current, { opacity: 0, y: 8 });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 84%',
          once: true,
        },
      });

      // 1. Curtain overlay slides upward to reveal the photograph beneath
      tl.to(curtainRef.current, {
        yPercent: -101,
        duration: 1.15,
        ease: 'power3.inOut',
      })
      // 2. Underlying photograph simultaneously eases from scaled state to resting scale
      .to(
        imgRef.current,
        {
          scale: 1.0,
          duration: 1.35,
          ease: 'power2.out',
        },
        '<+=0.08'
      );

      // 3. Editorial content / badges / metadata fade in with upward micro-translation
      if (contentRef.current) {
        tl.to(
          contentRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          },
          '-=0.45'
        );
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${aspectRatioClass} ${className}`}
    >
      {/* Sliding Colored Reveal Curtain with Leading Architectural Edge Line */}
      <div
        ref={curtainRef}
        style={{ backgroundColor: overlayColor }}
        className="absolute inset-0 z-30 pointer-events-none will-change-transform flex flex-col justify-end"
        aria-hidden="true"
      >
        {/* Leading Accent Line Indicator on Curtain Edge */}
        <div
          ref={accentLineRef}
          style={{ backgroundColor: accentColor }}
          className="h-[3px] w-full shadow-md opacity-90"
        />
      </div>

      {/* Underlying Image (natural aspect) */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`relative z-0 block w-full h-auto object-contain will-change-transform transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
      />

      {/* Overlay Children Content (Badges, Tags, Stats, Headlines) */}
      {children && (
        <div ref={contentRef} className="absolute inset-0 z-10 h-full w-full pointer-events-auto">
          {children}
        </div>
      )}
    </div>
  );
};
