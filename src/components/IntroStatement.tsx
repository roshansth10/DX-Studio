import React from 'react';
import { ThemeMode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SectionAnchor } from './SectionAnchor';

interface IntroStatementProps {
  theme: ThemeMode;
}

export const IntroStatement: React.FC<IntroStatementProps> = ({ theme }) => {
  const t = TRANSLATIONS.en;
  const isDark = theme === 'obsidian';
  const isSand = theme === 'sand-stone';

  return (
    <section
      id="philosophy"
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal ${
        isDark
          ? 'bg-[#151518] text-white border-neutral-800'
          : isSand
          ? 'bg-[#E5E2DA] text-neutral-950 border-[#D2CDC3]'
          : 'bg-[#F2F2EF] text-neutral-950 border-[#E5E5E2]'
      }`}
    >
      {/* Huge cropped architectural DX watermark typography */}
      <div
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 select-none font-heading text-[26vw] font-black leading-none tracking-tighter opacity-[0.035] dark:opacity-[0.04]"
        aria-hidden="true"
      >
        DX
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Section Marker */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                  {t.intro.eyebrow}
                </span>
                <SectionAnchor id="philosophy" label="Philosophy" />
              </div>
              <span
                className={`text-sm font-medium ${
                  isDark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {t.intro.standard}
              </span>
            </div>
          </div>

          {/* Statement & Elaboration */}
          <div className="lg:col-span-9">
            {/* Primary Editorial Quote */}
            <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-balance mb-12 gsap-heading-reveal">
              {t.intro.quotePre}
              <span className="text-blue-600">{t.intro.quoteHighlight}</span>
            </blockquote>

            {/* Two-Column Supporting Narrative */}
            <div
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg leading-relaxed pt-8 border-t ${
                isDark ? 'border-neutral-800 text-neutral-300' : 'border-neutral-300 text-neutral-700'
              }`}
            >
              <div>
                <p className="mb-4">
                  {t.intro.p1}
                </p>
                <p>
                  {t.intro.p2}
                </p>
              </div>

              <div>
                <p className="mb-4">
                  {t.intro.p3}
                </p>
                <div
                  className={`mt-6 rounded-xl border p-4 backdrop-blur-xs ${
                    isDark ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-300/80 bg-white/60'
                  }`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold mb-1">
                    {t.intro.directImpactLabel}
                  </div>
                  <div className="font-heading text-xl font-bold">
                    {t.intro.directImpactHeadline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
