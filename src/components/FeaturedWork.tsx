import React from "react";
import { ThemeMode, ProjectItem } from "../types";
import { PROJECTS } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import { TRANSLATIONS } from "../data/translations";
import { TiltCard } from "./TiltCard";
import { ImageReveal } from "./ImageReveal";
import { SectionAnchor } from "./SectionAnchor";
import { navigateTo } from "../routing";

interface FeaturedWorkProps {
  theme: ThemeMode;
  onSelectProject: (project: ProjectItem) => void;
  preview?: boolean;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({
  theme,
  onSelectProject,
  preview = false,
}) => {
  const t = TRANSLATIONS.en;
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  return (
    <section
      id="work"
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal ${
        isDark
          ? "bg-[#151518] text-white border-neutral-800"
          : isSand
            ? "bg-[#E5E2DA] text-neutral-950 border-[#D2CDC3]"
            : "bg-[#F2F2EF] text-neutral-950 border-[#E5E5E2]"
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
              isDark ? "text-neutral-400" : "text-neutral-600"
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
                    overlayColor="#0F172A"
                    accentColor="#2563EB"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-transparent pointer-events-none" />

                    <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8 z-10 pointer-events-auto">
                      {/* Top Bar */}
                      <div className="flex items-start justify-between gap-2 sm:gap-4">
                        <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-mono text-white font-medium border border-white/20 truncate max-w-[calc(100%-3rem)] sm:max-w-none">
                          {PROJECTS[0].number} // {PROJECTS[0].category}
                        </span>
                        <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      {/* Bottom Bar */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 text-white mt-auto pt-6">
                        <div className="max-w-xl">
                          <span className="font-mono text-[10px] sm:text-xs text-blue-400 uppercase tracking-widest block">
                            {PROJECTS[0].client} • {PROJECTS[0].year}
                          </span>
                          <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-0.5 sm:mt-1">
                            {PROJECTS[0].title}
                          </h3>
                          <p className="text-xs sm:text-base text-neutral-300 mt-1 sm:mt-2 line-clamp-1 sm:line-clamp-2">
                            {PROJECTS[0].tagline}
                          </p>
                        </div>

                        {PROJECTS[0].stats && (
                          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 sm:px-5 sm:py-3 text-left self-start md:self-auto shrink-0">
                            <div className="font-mono text-[9px] sm:text-[10px] uppercase text-neutral-300">
                              {PROJECTS[0].stats.label}
                            </div>
                            <div className="font-heading text-lg sm:text-2xl font-bold text-white">
                              {PROJECTS[0].stats.value}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ImageReveal>
                </div>
              </TiltCard>
            </div>
          )}

          {/* Projects 02 & 03: Asymmetric 2-Column Grid (Zentrix & Choice International Export) */}
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
                      overlayColor="#131722"
                      accentColor="#0D9488"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

                      <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 z-10 pointer-events-auto min-h-[240px]">
                        {/* Top Bar */}
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-mono text-white border border-white/20 truncate max-w-[calc(100%-3rem)] sm:max-w-none">
                            {PROJECTS[1].number} // {PROJECTS[1].category}
                          </span>
                          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="text-white mt-auto pt-6">
                          <span className="font-mono text-[10px] sm:text-xs text-teal-400 uppercase tracking-widest block">
                            {PROJECTS[1].client}
                          </span>
                          <h3 className="font-heading text-xl sm:text-3xl font-bold tracking-tight mt-0.5 sm:mt-1">
                            {PROJECTS[1].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-1 line-clamp-1 sm:line-clamp-2">
                            {PROJECTS[1].tagline}
                          </p>
                        </div>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="flex gap-2">
                    {PROJECTS[1].deliverables.slice(0, 2).map((d) => (
                      <span
                        key={d}
                        className="font-mono text-[11px] text-neutral-500"
                      >
                        • {d}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600">
                    Case Details →
                  </span>
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
                      overlayColor="#18181B"
                      accentColor="#6366F1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent pointer-events-none" />

                      <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 z-10 pointer-events-auto min-h-[240px]">
                        {/* Top Bar */}
                        <div className="flex items-start justify-between gap-2 sm:gap-4">
                          <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-mono text-white border border-white/20 truncate max-w-[calc(100%-3rem)] sm:max-w-none">
                            {PROJECTS[2].number} // {PROJECTS[2].category}
                          </span>
                          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="text-white mt-auto pt-6">
                          <span className="font-mono text-[10px] sm:text-xs text-indigo-400 uppercase tracking-widest block">
                            {PROJECTS[2].client}
                          </span>
                          <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight mt-0.5 sm:mt-1">
                            {PROJECTS[2].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-300 mt-1 line-clamp-1 sm:line-clamp-2">
                            {PROJECTS[2].tagline}
                          </p>
                        </div>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="font-mono text-[11px] text-neutral-500">
                    {PROJECTS[2].stats?.value} {PROJECTS[2].stats?.label}
                  </div>
                  <span className="font-mono text-xs font-bold text-blue-600">
                    Case Details →
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Project 04: LuxeCart (E-Commerce Showcase) */}
          {!preview && PROJECTS[3] && (
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
                    overlayColor="#0B132B"
                    accentColor="#3B82F6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/30 to-transparent pointer-events-none" />

                    <div className="relative flex flex-col justify-between h-full p-4 sm:p-6 lg:p-8 z-10 pointer-events-auto">
                      {/* Top Bar */}
                      <div className="flex items-start justify-between gap-2 sm:gap-4">
                        <span className="rounded-full bg-neutral-900/80 backdrop-blur-md px-3 py-1 text-[10px] sm:text-xs font-mono text-white border border-white/20 truncate max-w-[calc(100%-3rem)] sm:max-w-none">
                          {PROJECTS[3].number} // {PROJECTS[3].category}
                        </span>
                        <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full bg-white text-neutral-950 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                      </div>

                      {/* Bottom Bar */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 text-white mt-auto pt-6">
                        <div className="max-w-xl">
                          <span className="font-mono text-[10px] sm:text-xs text-blue-400 uppercase tracking-widest block">
                            {PROJECTS[3].client} • {PROJECTS[3].year}
                          </span>
                          <h3 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight mt-0.5 sm:mt-1">
                            {PROJECTS[3].title}
                          </h3>
                          <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mt-1 line-clamp-1 sm:line-clamp-2">
                            {PROJECTS[3].tagline}
                          </p>
                        </div>

                        {PROJECTS[3].stats && (
                          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 sm:px-5 sm:py-3 text-left self-start md:self-auto shrink-0">
                            <div className="font-mono text-[9px] sm:text-[10px] uppercase text-neutral-300">
                              {PROJECTS[3].stats.label}
                            </div>
                            <div className="font-heading text-lg sm:text-2xl font-bold text-white">
                              {PROJECTS[3].stats.value}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </ImageReveal>
                </div>
              </TiltCard>
            </div>
          )}
        </div>
        {preview && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => navigateTo("/work")}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-500"
            >
              More Work <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
