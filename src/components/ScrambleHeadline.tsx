import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ScrambleHeadlineProps {
  preText: string;
  highlightText: string;
  postText: string;
  highlightClassName?: string;
  triggerKey?: string | number;
  isActive?: boolean;
  className?: string;
  onComplete?: () => void;
}

const GLYPHS = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';

interface CharacterQueue {
  from: string;
  to: string;
  start: number;
  end: number;
  char: string;
}

export const ScrambleHeadline: React.FC<ScrambleHeadlineProps> = ({
  preText,
  highlightText,
  postText,
  highlightClassName = 'text-blue-600 italic font-medium',
  triggerKey,
  isActive = true,
  className = '',
  onComplete,
}) => {
  const [displayedPre, setDisplayedPre] = useState(preText);
  const [displayedHighlight, setDisplayedHighlight] = useState(highlightText);
  const [displayedPost, setDisplayedPost] = useState(postText);
  const [isScrambling, setIsScrambling] = useState(false);

  const frameRef = useRef<number | null>(null);
  const fullSentence = `${preText}${highlightText}${postText}`;

  const scramble = useCallback(() => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    const segments = [
      { text: preText, setter: setDisplayedPre },
      { text: highlightText, setter: setDisplayedHighlight },
      { text: postText, setter: setDisplayedPost },
    ];

    setIsScrambling(true);

    let globalFrame = 0;
    const queueList = segments.map((seg, segIdx) => {
      const segStartOffset = segIdx * 6; // small stagger across segments
      const queue: CharacterQueue[] = [];

      for (let i = 0; i < seg.text.length; i++) {
        const char = seg.text[i];
        if (char === ' ') {
          queue.push({ from: ' ', to: ' ', start: 0, end: 0, char: ' ' });
          continue;
        }
        // Stagger characters: start after a small progressive delay, scramble for 12-18 frames
        const start = segStartOffset + Math.floor(i * 1.4);
        const duration = 12 + Math.floor(Math.random() * 8);
        const end = start + duration;
        queue.push({
          from: '',
          to: char,
          start,
          end,
          char: '',
        });
      }
      return { queue, setter: seg.setter, full: seg.text };
    });

    const maxFrame = Math.max(
      ...queueList.flatMap((item) => item.queue.map((q) => q.end))
    );

    const step = () => {
      globalFrame++;
      let allDone = true;

      queueList.forEach(({ queue, setter, full }) => {
        let output = '';
        let segmentDone = true;

        for (let i = 0; i < queue.length; i++) {
          const item = queue[i];
          if (item.to === ' ') {
            output += ' ';
            continue;
          }

          if (globalFrame >= item.end) {
            output += item.to;
          } else if (globalFrame >= item.start) {
            segmentDone = false;
            allDone = false;
            // Scramble with a random glyph from the palette
            const randomGlyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            output += randomGlyph;
          } else {
            // Before scramble starts, show target character or subtle glyph
            segmentDone = false;
            allDone = false;
            output += item.to;
          }
        }

        setter(output);
      });

      if (!allDone && globalFrame < maxFrame + 5) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        // Ensure final exact text is set cleanly
        queueList.forEach(({ setter, full }) => setter(full));
        setIsScrambling(false);
        if (onComplete) onComplete();
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [preText, highlightText, postText, onComplete]);

  // Trigger whenever triggerKey or texts change or on activation
  useEffect(() => {
    if (!isActive) {
      setDisplayedPre(preText);
      setDisplayedHighlight(highlightText);
      setDisplayedPost(postText);
      return;
    }

    scramble();

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [preText, highlightText, postText, triggerKey, isActive, scramble]);

  return (
    <h1
      className={className}
      aria-label={fullSentence}
      title="Click to re-scramble headline"
      onClick={scramble}
      style={{ cursor: isScrambling ? 'progress' : 'pointer' }}
    >
      <span>{displayedPre}</span>
      <span className={highlightClassName}>{displayedHighlight}</span>
      <span>{displayedPost}</span>
    </h1>
  );
};
