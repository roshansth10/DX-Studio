import { useEffect, useState } from 'react';
import { studioAudio } from '../utils/ambientAudio';

interface KeyboardShortcutsProps {
  onEscape?: () => void;
}

export function useKeyboardShortcuts({ onEscape }: KeyboardShortcutsProps = {}) {
  const [audioToast, setAudioToast] = useState<{ message: string; visible: boolean }>({
    message: '',
    visible: false,
  });

  useEffect(() => {
    let toastTimer: NodeJS.Timeout;

    const handleKeyDown = async (e: KeyboardEvent) => {
      // 1. ESCAPE key: Close any open modal
      if (e.key === 'Escape') {
        if (onEscape) {
          onEscape();
        }
        return;
      }

      // 2. SPACE key: Toggle studio ambient soundscape
      if (e.key === ' ' || e.code === 'Space') {
        const target = e.target as HTMLElement | null;
        const tagName = target?.tagName?.toLowerCase();
        const isEditable =
          tagName === 'input' ||
          tagName === 'textarea' ||
          tagName === 'select' ||
          Boolean(target?.isContentEditable);

        // Do not intercept Space if typing in form fields or search inputs
        if (isEditable) {
          return;
        }

        // Prevent page scroll down on spacebar
        e.preventDefault();

        const willBeUnmuted = await studioAudio.toggle();

        clearTimeout(toastTimer);
        setAudioToast({
          message: willBeUnmuted ? 'Ambient Soundscape: Active [Space]' : 'Ambient Soundscape: Muted [Space]',
          visible: true,
        });

        toastTimer = setTimeout(() => {
          setAudioToast((prev) => ({ ...prev, visible: false }));
        }, 2200);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(toastTimer);
    };
  }, [onEscape]);

  return { audioToast };
}
