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

        {/* Mobile Layout (< 768px): Clean Stacked Editorial Cards */}
        <div className="block md:hidden space-y-6">
          {PROJECTS.slice(0, preview ? 3 : 4).map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-[#18181B] border-neutral-800 text-white shadow-lg"
                  : isSand
                    ? "bg-[#ECE9E2] border-[#D2CDC3] text-neutral-950 shadow-md"
                    : "bg-white border-[#E5E5E2] text-neutral-950 shadow-md"
              }`}
            >
              {/* Image Area: 16/10 aspect ratio, clean image with top-right action button only */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/90">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Round Arrow Button (40px, 12px inset) */}
                <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              {/* Card Body on solid surface with 16px to 20px padding and 12px vertical rhythm */}
              <div className="p-4 sm:p-5 flex flex-col gap-3">
                {/* Category Row */}
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>
                    {project.number} // {project.shortCategory || project.portfolioCategory || project.category}
                  </span>
                </div>

                {/* Title (22px to 24px) */}
                <h3 className="font-heading text-[22px] font-bold tracking-tight leading-snug">
                  {project.title}
                </h3>

                {/* Description (max 2 lines, 15px, line-height 1.5) */}
                <p
                  className={`text-[15px] leading-relaxed line-clamp-2 ${
                    isDark ? "text-neutral-300" : "text-neutral-600"
                  }`}
                >
                  {project.tagline || project.description}
                </p>

                {/* Stats Row (if present) */}
                {project.stats && (
                  <div
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-1 font-mono text-xs w-fit ${
                      isDark
                        ? "bg-neutral-800/80 text-neutral-300 border border-neutral-700/60"
                        : isSand
                          ? "bg-[#DFDBD0] text-neutral-800 border border-[#D0CBC0]"
                          : "bg-neutral-100 text-neutral-800 border border-neutral-200"
                    }`}
                  >
                    <span className="text-neutral-400 uppercase text-[10px]">
                      {project.stats.label}:
                    </span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">
                      {project.stats.value}
                    </span>
                  </div>
                )}

                {/* Deliverables Tags Row */}
                {project.deliverables && project.deliverables.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.deliverables.slice(0, 3).map((d) => (
                      <span
                        key={d}
                        className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-medium border ${
                          isDark
                            ? "bg-neutral-800/50 border-neutral-800 text-neutral-400"
                            : isSand
                              ? "bg-[#E5E1D8] border-[#D8D4CC] text-neutral-700"
                              : "bg-neutral-50 border-neutral-200 text-neutral-600"
                        }`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}

                {/* Case Details Link (own line, left aligned, min 44px tap target) */}
                <div className="pt-0.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 min-h-[44px]">
                    <span>Case Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout (>= 768px): Asymmetrical Editorial Portfolio */}
        <div className="hidden md:block space-y-24 md:space-y-36 gsap-stagger-container">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

                    {/* Floating Tag */}
                    <div className="absolute top-6 left-6 right-16 flex items-center gap-2 z-20">
                      <span className="rounded-full bg-neutral-900/70 backdrop-blur-md px-3.5 py-1 text-xs font-mono text-white font-medium border border-white/30 truncate max-w-full">
                        {PROJECTS[0].number} // {PROJECTS[0].category}
                      </span>
                    </div>

                    {/* Hover Overlay Arrow */}
                    <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-950 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white z-20">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>

                    {/* Overlay Bottom Content */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white z-20">
                      <div>
                        <span className="font-mono text-xs text-blue-400 uppercase tracking-widest">
                          {PROJECTS[0].client} • {PROJECTS[0].year}
                        </span>
                        <h3 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-1">
                          {PROJECTS[0].title}
                        </h3>
                        <p className="text-base text-neutral-300 max-w-xl mt-2 line-clamp-2">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                      <div className="absolute top-6 left-6 right-14">
                        <span className="inline-block rounded-full bg-neutral-900/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-white border border-white/20 truncate max-w-full">
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
                        <h3 className="font-heading text-3xl font-bold tracking-tight mt-1">
                          {PROJECTS[1].title}
                        </h3>
                        <p className="text-sm text-neutral-300 max-w-md mt-1 line-clamp-2">
                          {PROJECTS[1].tagline}
                        </p>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="flex gap-2 flex-wrap">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                      <div className="absolute top-6 left-6 right-14">
                        <span className="inline-block rounded-full bg-neutral-900/70 backdrop-blur-md px-3 py-1 text-xs font-mono text-white border border-white/20 truncate max-w-full">
                          {PROJECTS[2].number} // {PROJECTS[2].category}
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
                        <p className="text-sm text-neutral-300 mt-1 line-clamp-2">
                          {PROJECTS[2].tagline}
                        </p>
                      </div>
                    </ImageReveal>
                  </div>
                </TiltCard>

                <div className="mt-4 flex items-center justify-between px-2">
                  <div className="font-mono text-[11px] text-neutral-500">
                    Cargo & Courier Logistics
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
