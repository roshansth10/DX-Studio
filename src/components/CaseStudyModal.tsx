import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ProjectItem, ThemeMode } from '../types';
import { getLenis } from '../hooks/useLenisScroll';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  theme: ThemeMode;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  const [isEntered, setIsEntered] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (project) {
      prevFocusRef.current = document.activeElement as HTMLElement | null;

      const raf = requestAnimationFrame(() => {
        setIsEntered(true);
      });

      const focusTimer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(focusTimer);
        setIsEntered(false);
      };
    } else {
      setIsEntered(false);
    }
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.stop();
    }

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const prevPaddingRight = document.body.style.paddingRight;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevLeft = document.body.style.left;
    const prevRight = document.body.style.right;
    const prevOverflow = document.body.style.overflow;

    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.paddingRight = prevPaddingRight;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.left = prevLeft;
      document.body.style.right = prevRight;
      document.body.style.overflow = prevOverflow;

      window.scrollTo({ top: scrollY, behavior: 'instant' });

      if (lenis) {
        lenis.start();
      }

      if (prevFocusRef.current && typeof prevFocusRef.current.focus === 'function') {
        prevFocusRef.current.focus();
      }
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={`modal-overlay fixed inset-0 z-[9999] grid place-items-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-[4px] transition-opacity duration-200 ease-out ${
        isEntered ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      data-lenis-prevent="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`modal-panel relative flex flex-col w-full max-w-4xl max-h-[calc(100dvh-48px)] overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 text-white shadow-2xl transition-all duration-200 ease-out transform-gpu ${
          isEntered
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-[0.98]'
        }`}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 px-4 py-4 sm:px-6 shrink-0 bg-neutral-900">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-blue-500 font-bold">
              {project.number} // CASE STUDY
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs text-neutral-300 font-medium">{project.client}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <kbd className="hidden sm:inline font-mono text-[10px] text-neutral-400 border border-neutral-700 bg-neutral-800/80 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close dialog (Escape)"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div
          data-lenis-prevent="true"
          className="overflow-y-auto overflow-x-hidden min-h-0 flex-1 p-4 sm:p-8 lg:p-10 space-y-8"
          style={{ overscrollBehavior: 'contain' }}
        >
          {/* Title & Tagline */}
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
              {project.category} ({project.year})
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed mt-3 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Hero Case Study Imagery */}
          <div className="relative w-full overflow-hidden rounded-2xl border border-neutral-800 bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="block w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overview & Key Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            <div className="md:col-span-7 space-y-4">
              <h3 className="font-heading text-xl font-bold">Challenge & Strategic Approach</h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {project.description}
              </p>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                DX Studio spearheaded the complete end-to-end lifecycle—from initial architectural discovery and user flow mapping to bespoke frontend engineering, performance optimization, and global deployment.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              <h3 className="font-heading text-xl font-bold">Measurable Outcomes</h3>
              <div className="space-y-2.5">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-800/50 p-3 text-sm font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables Specs */}
          <div className="border-t border-neutral-800 pt-6">
            <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
              Studio Deliverables
            </div>
            <div className="flex flex-wrap gap-2">
              {project.deliverables.map((del) => (
                <span
                  key={del}
                  className="rounded-lg border border-neutral-700 bg-neutral-800/80 px-3 py-1.5 text-xs font-mono text-neutral-300"
                >
                  {del}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col items-stretch gap-3 border-t border-neutral-800 bg-neutral-950 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 shrink-0">
          <span className="font-mono text-xs text-neutral-400">
            Interested in building something similar?
          </span>
          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-blue-500 transition-colors"
          >
            <span>Inquire for Similar Project</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
