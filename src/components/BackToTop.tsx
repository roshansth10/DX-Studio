import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUp } from "lucide-react";
import { ThemeMode } from "../types";
import { scrollToTarget } from "../hooks/useLenisScroll";

interface BackToTopProps {
  theme: ThemeMode;
}

export const BackToTop: React.FC<BackToTopProps> = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDark = theme === "obsidian" || theme === "electric-cobalt";
  const isSand = theme === "sand-stone";

  // Track scroll position to reveal after scrolling past hero section (~450px)
  useEffect(() => {
    const handleScroll = () => {
      const pastHero = window.scrollY > 450;
      setIsVisible(pastHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Entrance & Exit Animations
  useEffect(() => {
    if (!containerRef.current) return;

    if (isVisible) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 24, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
          overwrite: "auto",
        },
      );
    } else {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: 18,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
        overwrite: "auto",
      });
    }
  }, [isVisible]);

  // Magnetic interaction tracking with elastic return
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.45;
    const deltaY = (e.clientY - centerY) * 0.45;

    gsap.to(buttonRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1.2, 0.4)",
      overwrite: "auto",
    });
  };

  const scrollToTop = () => {
    if (buttonRef.current) {
      // Tactile click compression
      gsap.to(buttonRef.current, {
        scale: 0.88,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }

    scrollToTarget(0);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-6 left-6 z-40 ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{ opacity: 0 }}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={scrollToTop}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-label="Back to top"
        title="Back to Top"
        className={`group flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-mono font-medium shadow-xl backdrop-blur-md transition-colors duration-300 select-none ${
          isDark
            ? "border-neutral-700 bg-neutral-900/90 text-neutral-300 hover:border-neutral-500 hover:text-white"
            : isSand
              ? "border-[#D0CBC0] bg-[#ECE9E2]/95 text-neutral-800 hover:border-neutral-950 hover:text-neutral-950"
              : "border-neutral-300/90 bg-white/95 text-neutral-800 hover:border-blue-600 hover:text-blue-600"
        }`}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 group-hover:-translate-y-0.5">
          <ArrowUp className="h-3 w-3 stroke-[2.5]" />
        </div>
        <span className="tracking-wider uppercase text-[11px] font-bold">
          Top
        </span>
      </button>
    </div>
  );
};
