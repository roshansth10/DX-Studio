import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let globalLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return globalLenis;
}

export function scrollToTarget(
  target: string | number | HTMLElement,
  options?: {
    offset?: number;
    immediate?: boolean;
    duration?: number;
    easing?: (t: number) => number;
    onComplete?: () => void;
  }
) {
  if (globalLenis) {
    globalLenis.scrollTo(target, options);
  } else if (typeof target === 'number') {
    window.scrollTo({
      top: target,
      behavior: options?.immediate ? 'auto' : 'smooth',
    });
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
    }
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: options?.immediate ? 'auto' : 'smooth' });
  }
}

export function useLenisScroll(pathname?: string) {
  useEffect(() => {
    // Initialize Lenis with refined inertia smooth scroll config
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    globalLenis = lenis;

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Synchronize GSAP ticker animation frame with Lenis update loop
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateRaf);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  // Reset scroll to top immediately on route change
  useEffect(() => {
    if (pathname && globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
}
