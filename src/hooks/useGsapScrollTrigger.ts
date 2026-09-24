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
    gsap.fromTo(
      heading,
      {
        opacity: 0,
        y: 24,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heading,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // 2. Reveal Whole Sections
  const sections = document.querySelectorAll<HTMLElement>('.gsap-section-reveal');
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 32,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 88%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  });

  // 3. Staggered child lists/cards inside containers
  const containers = document.querySelectorAll<HTMLElement>('.gsap-stagger-container');
  containers.forEach((container) => {
    const items = container.querySelectorAll<HTMLElement>('.gsap-stagger-item');
    if (items.length > 0) {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
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
    }, 60);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, dependencies);
}
