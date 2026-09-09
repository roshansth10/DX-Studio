import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../types';

interface CustomCursorProps {
  theme: ThemeMode;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ theme }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<{
    text: string;
    variant: 'default' | 'hover' | 'view' | 'drag' | 'link';
  }>({ text: '', variant: 'default' });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="view"]');
      const interactiveBtn = target.closest('button, a, [data-cursor="pointer"]');
      const serviceRow = target.closest('[data-cursor="service"]');
      const conceptCard = target.closest('[data-cursor="concept"]');

      if (projectCard) {
        setCursorState({ text: 'VIEW', variant: 'view' });
      } else if (serviceRow) {
        setCursorState({ text: 'EXPLORE', variant: 'view' });
      } else if (conceptCard) {
        setCursorState({ text: 'THEME', variant: 'view' });
      } else if (interactiveBtn) {
        setCursorState({ text: '', variant: 'hover' });
      } else {
        setCursorState({ text: '', variant: 'default' });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleHoverCheck);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isDark = theme === 'obsidian';

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {cursorState.variant === 'view' ? (
        <div
          className={`flex h-16 w-16 items-center justify-center rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 shadow-xl ${
            isDark ? 'bg-blue-600 text-white' : 'bg-neutral-900 text-white'
          }`}
        >
          {cursorState.text}
        </div>
      ) : cursorState.variant === 'hover' ? (
        <div
          className={`h-9 w-9 rounded-full border transition-all duration-150 ${
            isDark ? 'border-blue-400 bg-blue-500/10' : 'border-blue-600 bg-blue-600/10'
          }`}
        />
      ) : (
        <div
          className={`h-2.5 w-2.5 rounded-full transition-all duration-150 ${
            isDark ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]' : 'bg-neutral-900'
          }`}
        />
      )}
    </div>
  );
};
