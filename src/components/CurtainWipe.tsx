import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CurtainWipe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const insigniaRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsDone(true);
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsDone(true);
        },
      });

      // Initial state
      gsap.set(containerRef.current, { visibility: 'visible' });
      gsap.set(insigniaRef.current, { opacity: 0, y: 20 });
      gsap.set(panelsRef.current, { yPercent: 0 });

      // Step 1: Reveal studio insignia
      tl.to(insigniaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      })
        // Step 2: Hold briefly
        .to({}, { duration: 0.35 })
        // Step 3: Insignia lifts upward and dissolves
        .to(insigniaRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.4,
          ease: 'power3.in',
        })
        // Step 4: Vertical curtain panels wipe upward in stagger
        .to(panelsRef.current, {
          yPercent: -100,
          duration: 0.85,
          stagger: 0.08,
          ease: 'expo.inOut',
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-auto select-none"
      style={{ visibility: 'hidden' }}
      aria-hidden="true"
    >
      {/* 4 Vertical Curtain Columns */}
      <div className="absolute inset-0 flex w-full h-full">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) panelsRef.current[index] = el;
            }}
            className="h-full w-1/4 bg-[#121214] border-r border-neutral-800/40 last:border-r-0 relative"
          >
            {/* Subtle architectural vertical grain line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neutral-800/20" />
          </div>
        ))}
      </div>

      {/* Editorial Insignia Centered on Stage */}
      <div
        ref={insigniaRef}
        className="relative z-10 m-auto flex flex-col items-center justify-center text-center px-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-blue-400">
            DX STUDIO // ATELIER
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white mb-3">
          Digital Craftsmanship
        </h2>

        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          <span>Paris</span>
          <span>•</span>
          <span>Zürich</span>
          <span>•</span>
          <span>Kathmandu</span>
        </div>

        <div className="mt-6 h-[1.5px] w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
    </div>
  );
};
