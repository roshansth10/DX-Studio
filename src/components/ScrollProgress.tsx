import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../types';

interface ScrollProgressProps {
  theme: ThemeMode;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'obsidian';
  const isSand = theme === 'sand-stone';
  const isCobalt = theme === 'electric-cobalt';

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2.5px] w-full bg-transparent pointer-events-none overflow-hidden"
    >
      <div
        className={`h-full transition-all duration-75 ease-out ${
          isDark
            ? 'bg-neutral-100'
            : isSand
            ? 'bg-neutral-900'
            : isCobalt
            ? 'bg-blue-400'
            : 'bg-neutral-950'
        }`}
        style={{
          width: `${scrollProgress}%`,
          transformOrigin: 'left center',
        }}
      />
    </div>
  );
};
