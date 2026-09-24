import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Section Entrance Animation Helper
 * Gently applies a slight vertical Y-axis shift and opacity fade
 * to section headings and content wrappers as they enter the viewport.
 */
export function initSectionEntranceAnimations() {
  // 1. Reveal Section Headings (Eyebrow, Title, Subtitle)
  const headingElements = document.querySelectorAll<HTMLElement>('.gsap-heading-reveal');
  headingElements.forEach((heading) => {
    gsap.from(heading, {
      opacity: 0,
      y: 20,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: heading,
        start: 'top 95%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });

  // 2. Reveal Whole Sections
  const sections = document.querySelectorAll<HTMLElement>('.gsap-section-reveal');
  sections.forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 24,
      duration: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 95%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });

  // 3. Staggered child lists/cards inside containers
  const containers = document.querySelectorAll<HTMLElement>('.gsap-stagger-container');
  containers.forEach((container) => {
    const items = container.querySelectorAll<HTMLElement>('.gsap-stagger-item');
    if (items.length > 0) {
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 92%',
          toggleActions: 'play none none none',
          once: true,
        },
      });
    }
  });

  ScrollTrigger.refresh();
}

/**
 * React Hook for GSAP ScrollTrigger Section Entrance
 */
export function useGsapScrollTrigger(dependencies: any[] = []) {
  useEffect(() => {
    const timer = setTimeout(() => {
      initSectionEntranceAnimations();
    }, 50);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, dependencies);
}
