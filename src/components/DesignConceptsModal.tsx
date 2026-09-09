import React, { useState, useEffect } from "react";
import { ThemeMode, DesignConcept } from "../types";
import { DESIGN_CONCEPTS } from "../data/content";
import {
  X,
  Layers,
  Check,
  ZoomIn,
  Eye,
  Download,
  ArrowRight,
} from "lucide-react";

interface DesignConceptsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeMode;
  onApplyTheme: (theme: ThemeMode) => void;
}

export const DesignConceptsModal: React.FC<DesignConceptsModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  onApplyTheme,
}) => {
  const [selectedConcept, setSelectedConcept] = useState<DesignConcept>(
    DESIGN_CONCEPTS[0],
  );
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getThemeFromConcept = (id: string): ThemeMode => {
    if (id === "dark-obsidian") return "obsidian";
    if (id === "sand-stone") return "sand-stone";
    return "warm-light";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-neutral-950/85 backdrop-blur-md">
      <div className="relative flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 text-white shadow-2xl">
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-neutral-800 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Layers className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-heading text-base font-bold sm:text-lg">
                DX Studio — Art Direction Studies
              </h2>
              <p className="font-mono text-xs text-neutral-400">
                Architectural Layout Systems & Curated Palette Explorations
              </p>
            </div>
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

        {/* Modal Body: Two columns (Gallery & Details) */}
        <div className="grid flex-1 grid-cols-1 lg:grid-cols-12 overflow-hidden">
          {/* Main Visual Display */}
          <div className="lg:col-span-8 relative flex min-w-0 flex-col justify-center bg-black/60 p-4 sm:p-6 overflow-y-auto">
            <div className="relative group overflow-hidden rounded-xl border border-neutral-800 bg-black">
              <img
                src={selectedConcept.imagePath}
                alt={selectedConcept.name}
                className={`w-full object-contain transition-all duration-300 ${
                  isZoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                referrerPolicy="no-referrer"
              />

              {/* Zoom toggle overlay */}
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-neutral-900/80 px-3 py-1.5 text-xs font-mono text-white backdrop-blur-md border border-neutral-700 hover:bg-neutral-800"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>{isZoomed ? "Reset View" : "Zoom In"}</span>
              </button>
            </div>

            <div className="mt-3 flex flex-col gap-2 text-xs font-mono text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
              <span>
                Aspect Ratio: {selectedConcept.aspect} • High-Fidelity UI
                Presentation
              </span>
              <span className="text-blue-400 font-semibold">
                {selectedConcept.theme}
              </span>
            </div>
          </div>

          {/* Right Sidebar: Concept Selectors & Rationale */}
          <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800 bg-neutral-900/90 p-6 overflow-y-auto">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-4">
                Explore Themes ({DESIGN_CONCEPTS.length})
              </div>

              <div className="space-y-3">
                {DESIGN_CONCEPTS.map((concept) => {
                  const isSelected = selectedConcept.id === concept.id;
                  return (
                    <button
                      key={concept.id}
                      data-cursor="concept"
                      onClick={() => {
                        setSelectedConcept(concept);
                        setIsZoomed(false);
                      }}
                      className={`w-full text-left rounded-xl border p-3.5 transition-all ${
                        isSelected
                          ? "border-blue-600 bg-blue-950/30 shadow-md"
                          : "border-neutral-800 bg-neutral-800/40 hover:border-neutral-700 hover:bg-neutral-800/80"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-heading text-sm font-bold text-white">
                          <span
                            className="h-3 w-3 rounded-full border border-neutral-600"
                            style={{ backgroundColor: concept.dominantColor }}
                          />
                          <span>{concept.name}</span>
                        </div>
                        {isSelected && (
                          <span className="rounded-full bg-blue-600 p-0.5 text-white">
                            <Check className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-neutral-400 line-clamp-2">
                        {concept.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Selected Concept Deep Dive */}
              <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950/60 p-4">
                <div className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold mb-2">
                  Art Direction Notes
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  {selectedConcept.description}
                </p>
                <div className="font-mono text-[10px] text-neutral-500">
                  Typography: Grotesk Display + Clean Monospace Metadata
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-2 border-t border-neutral-800 pt-4">
              <button
                onClick={() => {
                  onApplyTheme(getThemeFromConcept(selectedConcept.id));
                  onClose();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-blue-500 transition-colors shadow-md"
              >
                <span>Apply This Theme to Live Site</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-mono text-neutral-400 hover:text-white"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
