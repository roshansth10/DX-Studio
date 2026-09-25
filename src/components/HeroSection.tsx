import React, { useState } from "react";
import { ThemeMode } from "../types";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { ParticleCanvas } from "./ParticleCanvas";
import { ScrambleHeadline } from "./ScrambleHeadline";
import { TRANSLATIONS } from "../data/translations";
import { MagneticElement } from "./MagneticElement";

interface HeroSectionProps {
  theme: ThemeMode;
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenConcepts?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  theme,
  onExploreWork,
  onStartProject,
}) => {
  const t = TRANSLATIONS.en;
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMouseOffset({ x: x * 18, y: y * 18 });
  };

  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className={`relative min-h-[92vh] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32 flex flex-col justify-between border-b transition-colors duration-500 ${
        isDark
          ? "bg-[#121214] text-white border-neutral-800"
          : isSand
            ? "bg-[#ECE9E2] text-neutral-900 border-[#D8D4CC]"
            : "bg-[#F7F7F5] text-neutral-950 border-[#E5E5E2]"
      }`}
    >
      {/* Background Interactive Particle Canvas */}
      <ParticleCanvas theme={theme} />

      {/* Subtle Editorial Topographic / Grid lines */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-40 ${
          isDark ? "editorial-grid-dark" : "editorial-grid"
        }`}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12 my-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] font-semibold mb-6 transition-all duration-300">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span
                className={isDark ? "text-neutral-300" : "text-neutral-700"}
              >
                {t.hero.eyebrow}
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-blue-600 font-bold">
                {t.hero.established}
              </span>
            </div>

            {/* Main Editorial Headline with Scramble Effect */}
            <div className="relative group w-full mb-6">
              <ScrambleHeadline
                preText={t.hero.headlinePre}
                highlightText={t.hero.headlineHighlight}
                postText={t.hero.headlinePost}
                triggerKey={t.hero.headlineHighlight}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance select-none"
              />
              <span className="hidden group-hover:inline-block font-mono text-[10px] text-neutral-400 tracking-wider transition-opacity mt-1">
                [{t.hero.rescrablePrompt}]
              </span>
            </div>

            {/* Supporting Editorial Copy */}
            <p
              className={`max-w-xl text-lg sm:text-xl font-body font-normal leading-relaxed mb-8 ${
                isDark ? "text-neutral-300" : "text-neutral-600"
              }`}
            >
              {t.hero.subtitle}
            </p>

            {/* CTAs with Magnetic Hover */}
            <div className="flex w-full flex-col items-stretch gap-3 mb-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
              <MagneticElement strength={0.25}>
                <button
                  onClick={onExploreWork}
                  id="hero-cta-explore"
                    className={`group inline-flex w-full items-center justify-center gap-3 rounded-full px-5 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md sm:w-auto sm:px-7 ${
                    isDark
                      ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-900/30"
                      : "bg-neutral-950 text-white hover:bg-blue-600 hover:shadow-neutral-900/20"
                  }`}
                >
                  <span>{t.hero.exploreWork}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </MagneticElement>

              <MagneticElement strength={0.2}>
                <button
                  onClick={onStartProject}
                  id="hero-cta-start"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 sm:w-auto sm:px-6 ${
                    isDark
                      ? "border-neutral-700 bg-neutral-800/40 text-neutral-200 hover:bg-neutral-800 hover:border-neutral-500"
                      : "border-neutral-300 bg-white/60 text-neutral-800 hover:bg-white hover:border-neutral-400 shadow-xs"
                  }`}
                >
                  <span>{t.hero.startProject}</span>
                </button>
              </MagneticElement>
            </div>

            {/* Editorial Metadata / Studio Signals */}
            <div
              className={`grid grid-cols-1 min-[400px]:grid-cols-3 gap-4 min-[400px]:gap-6 pt-6 border-t w-full max-w-lg text-left ${
                isDark
                  ? "border-neutral-800 text-neutral-400"
                  : "border-neutral-300/80 text-neutral-600"
              }`}
            >
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  {t.hero.locationLabel}
                </div>
                <div
                  className={`font-medium text-sm mt-0.5 ${isDark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  {t.hero.locationVal}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  {t.hero.focusLabel}
                </div>
                <div
                  className={`font-medium text-sm mt-0.5 ${isDark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  {t.hero.focusVal}
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  {t.hero.methodologyLabel}
                </div>
                <div
                  className={`font-medium text-sm mt-0.5 ${isDark ? "text-neutral-200" : "text-neutral-900"}`}
                >
                  {t.hero.methodologyVal}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mouseOffset.x * 0.4}deg) rotateX(${-mouseOffset.y * 0.4}deg) translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              }}
            >
              {/* Primary Architectural Card (Layer 1) */}
              <div
                className={`relative overflow-hidden rounded-2xl border p-2 shadow-2xl transition-all duration-300 ${
                  isDark
                    ? "border-neutral-700/80 bg-neutral-900/90 shadow-black/60"
                    : isSand
                      ? "border-[#D8D4CC] bg-white/90 shadow-neutral-400/20"
                      : "border-neutral-200/90 bg-white/95 shadow-neutral-300/30"
                }`}
              >
                {/* Browser/Viewport header mockup bar */}
                <div className="flex items-center justify-between border-b px-3 py-2 border-inherit">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  </div>
                  <div className="rounded bg-neutral-100 dark:bg-neutral-800 px-3 py-0.5 font-mono text-[10px] text-neutral-500">
                    dxstudio.co/case/himaly
                  </div>
                  <div className="font-mono text-[10px] text-blue-600 font-semibold">
                    {t.hero.liveTag}
                  </div>
                </div>

                {/* Layered Project Imagery */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-950">
                  <img
                    src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop"
                    alt="Himaly Travel Discovery Platform"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />

                  {/* Floating Metadata on the image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-blue-400">
                        {t.hero.featuredCase}
                      </div>
                      <div className="font-heading text-lg font-bold">
                        Himaly — Discover the Himalayas
                      </div>
                    </div>
                    <div className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-mono backdrop-blur-md">
                      Destinations
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Layer 2: Mobile Interface Crop Preview */}
              <div
                className={`absolute -bottom-6 -left-6 z-20 w-44 rounded-xl border p-1.5 shadow-2xl transition-all duration-300 hidden sm:block ${
                  isDark
                    ? "border-neutral-700 bg-neutral-900 shadow-black"
                    : "border-neutral-200 bg-white"
                }`}
                style={{
                  transform: `translate3d(${-mouseOffset.x * 1.5}px, ${-mouseOffset.y * 1.5}px, 20px)`,
                }}
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
                    alt="Sports E-Commerce Mobile UI"
                    className="aspect-[9/16] w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-1.5 text-left">
                  <div className="font-mono text-[9px] text-neutral-400 uppercase">
                    Zentrix Sports
                  </div>
                  <div className="text-[11px] font-bold leading-tight">
                    Power Your Game
                  </div>
                </div>
              </div>

              {/* Floating Layer 3: Architectural Typographic Badge */}
              <div
                className={`absolute -top-5 -right-4 z-20 rounded-xl border p-3 shadow-xl backdrop-blur-md transition-all duration-300 ${
                  isDark
                    ? "border-neutral-700 bg-neutral-900/90 text-white"
                    : "border-neutral-200 bg-white/95 text-neutral-900"
                }`}
                style={{
                  transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 15px)`,
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white font-mono font-bold text-xs">
                    DX
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-none">
                      Studio Quality
                    </div>
                    <div className="font-mono text-[10px] text-neutral-400 mt-0.5">
                      Zero Templates
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 mx-auto mt-8 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
          {t.hero.scrollPrompt}
        </span>
        <ArrowDown className="h-3.5 w-3.5 animate-bounce text-blue-600" />
      </div>
    </section>
  );
};
