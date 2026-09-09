import React from 'react';
import { ThemeMode, ProjectItem } from '../types';
import { PROJECTS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { TiltCard } from './TiltCard';
import { ImageReveal } from './ImageReveal';
import { SectionAnchor } from './SectionAnchor';

interface FeaturedWorkProps {
  theme: ThemeMode;
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ theme, onSelectProject }) => {
  const t = TRANSLATIONS.en;
  const isDark = theme === 'obsidian' || theme === 'electric-cobalt';
  const isSand = theme === 'sand-stone';

  return (
    <section
      id="work"
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal ${
        isDark
          ? theme === 'electric-cobalt'
            ? 'bg-[#0E1738] text-white border-blue-950/80'
            : 'bg-[#151518] text-white border-neutral-800'
          : isSand
          ? 'bg-[#E5E2DA] text-neutral-950 border-[#D2CDC3]'
          : 'bg-[#F2F2EF] text-neutral-950 border-[#E5E5E2]'
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 gsap-heading-reveal">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                {t.work.eyebrow}
              </span>
              <SectionAnchor id="work" label="Featured Work" />
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t.work.title}
            </h2>
          </div>
          <p
            className={`max-w-md text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            {t.work.subtitle}
          </p>
        </div>

        {/* Asymmetrical Editorial Portfolio Layout */}
        <div className="space-y-24 md:space-y-36 gsap-stagger-container">
          {/* Project 01: Himaly (Full Wide Hero Project) */}
          {PROJECTS[0] && (
            <div
              key={PROJECTS[0].id}
              data-cursor="view"
              onClick={() => onSelectProject(PROJECTS[0])}
              className="group cursor-pointer gsap-stagger-item"
            >
              <TiltCard maxTilt={5}>
                <div className="relative overflow-hidden rounded-2xl border bg-black shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <ImageReveal
                    src={PROJECTS[0].image}
                    alt={PROJECTS[0].title}
                    aspectRatioClass="aspect-[16/9]"
                    overlayColor="#0F172A"
                    accentColor="#2563EB"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-white font-medium border border-white/30">
                        {PROJECTS[0].number} // {PROJECTS[0].category}
                      </span>
                    </div>

                    {/* Hover Overlay Arrow */}
                    <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    {/* Overlay Bottom Content */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                      <div>
                        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                          {PROJECTS[0].client} • {PROJECTS[0].year}
                        </span>
                        <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-1">
                          {PROJECTS[0].title}
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mt-2 line-clamp-2">
                          {PROJECTS[0].tagline}
                        </p>
                      </div>

                      {PROJECTS[0].stats && (
                        <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-left">
                          <div className="font-mono text-[10px] uppercase text-neutral-300">
                            {PROJECTS[0].stats.label}
                          </div>
                          <div className="font-heading text-2xl font-bold text-white">
                            {PROJECTS[0].stats.value}
                          </div>
                        </div>
                      )}
                    </div>
                  </ImageReveal>
                </div>
              </TiltCard>
            </div>
          )}

          {/* Projects 02 & 03: Asymmetric 2-Column Grid (Zentrix & Aawaj) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Project 02 (Tall/Editorial 7 cols) */}
            {PROJECTS[1] && (
              <div
                key={PROJECTS[1].id}
                data-cursor="view"
                onClick={() => onSelectProject(PROJECTS[1])}
                className="lg:col-span-7 group cursor-pointer gsap-stagger-item"
              >
                <TiltCard maxTilt={6}>
                  <div className="relative overflow-hidden rounded-2xl border bg-black shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <ImageReveal
                      src={PROJECTS[1].image}
                      alt={PROJECTS[1].title}
                      aspectRatioClass="aspect-[4/3]"
                      overlayColor="#131722"
                      accentColor="#0D9488"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                      
                      <div className="absolute top-6 left-6">
                        <span className="rounded-full bg-neutral-900/60 backdrop-blur-md px-3 py-1 text-xs font-mono text-white border border-white/20">
                          {PROJECTS[1].number} // {PROJECTS[1].category}
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="font-mono text-xs text-teal-400 uppercase tracking-widest">
                          {PROJECTS[1].client}
                        </span>
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mt-1">
                          {PROJECTS[1].title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-1 line-clamp-2">
                          {PROJECTS[1].tagline}
                        </p>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="flex gap-2">
                    {PROJECTS[1].deliverables.slice(0, 2).map((d) => (
                      <span key={d} className="font-mono text-[11px] text-neutral-500">
                        • {d}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600">Case Details →</span>
                </div>
              </div>
            )}

            {/* Project 03 (Square/Tactical 5 cols offset) */}
            {PROJECTS[2] && (
              <div
                key={PROJECTS[2].id}
                data-cursor="view"
                onClick={() => onSelectProject(PROJECTS[2])}
                className="lg:col-span-5 lg:mt-16 group cursor-pointer gsap-stagger-item"
              >
                <TiltCard maxTilt={6.5}>
                  <div className="relative overflow-hidden rounded-2xl border bg-black shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                    <ImageReveal
                      src={PROJECTS[2].image}
                      alt={PROJECTS[2].title}
                      aspectRatioClass="aspect-square"
                      overlayColor="#18181B"
                      accentColor="#6366F1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                      <div className="absolute top-6 left-6">
                        <span className="rounded-full bg-neutral-900/60 backdrop-blur-md px-3 py-1 text-xs font-mono text-white border border-white/20">
                          {PROJECTS[2].number} // Audio App
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest">
                          {PROJECTS[2].client}
                        </span>
                        <h3 className="font-heading text-2xl font-bold tracking-tight mt-1">
                          {PROJECTS[2].title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-2">
                          {PROJECTS[2].tagline}
                        </p>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="font-mono text-[11px] text-neutral-500">
                    2.1M Minutes Streamed
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600">Case Details →</span>
                </div>
              </div>
            )}
          </div>

          {/* Project 04: Lumina Arch (Wide Architecture Monograph) */}
          {PROJECTS[3] && (
            <div
              key={PROJECTS[3].id}
              data-cursor="view"
              onClick={() => onSelectProject(PROJECTS[3])}
              className="group cursor-pointer gsap-stagger-item"
            >
              <TiltCard maxTilt={5}>
                <div className="relative overflow-hidden rounded-2xl border bg-black shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                  <ImageReveal
                    src={PROJECTS[3].image}
                    alt={PROJECTS[3].title}
                    aspectRatioClass="aspect-[21/9] sm:aspect-[16/7]"
                    overlayColor="#0B132B"
                    accentColor="#3B82F6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                    <div className="absolute top-6 left-6">
                      <span className="rounded-full bg-white/20 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-white border border-white/30">
                        {PROJECTS[3].number} // {PROJECTS[3].category}
                      </span>
                    </div>

                    <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
                      <div>
                        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                          {PROJECTS[3].client} • {PROJECTS[3].year}
                        </span>
                        <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight mt-1">
                          {PROJECTS[3].title}
                        </h3>
                        <p className="text-sm text-neutral-300 max-w-lg mt-1 line-clamp-2">
                          {PROJECTS[3].tagline}
                        </p>
                      </div>

                      <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-left">
                        <div className="font-mono text-[10px] uppercase text-neutral-300">
                          {PROJECTS[3].stats?.label}
                        </div>
                        <div className="font-heading text-2xl font-bold text-white">
                          {PROJECTS[3].stats?.value}
                        </div>
                      </div>
                    </div>
                  </ImageReveal>
                </div>
              </TiltCard>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
