import React, { useEffect } from 'react';
import { ProjectItem, ThemeMode } from '../types';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  theme: ThemeMode;
  onStartProject: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  theme,
  onStartProject,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const isDark = theme === 'obsidian';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative my-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 text-white shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-blue-500 font-bold">
              {project.number} // CASE STUDY
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs text-neutral-300 font-medium">{project.client}</span>
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline font-mono text-[10px] text-neutral-400 border border-neutral-700 bg-neutral-800/80 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
            <button
              onClick={onClose}
              aria-label="Close dialog (Escape)"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-8 lg:p-10 space-y-8">
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
        <div className="flex flex-col items-stretch gap-3 border-t border-neutral-800 bg-neutral-950 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
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
    </div>
  );
};
