import React, { useState } from 'react';
import { ThemeMode } from '../types';
import { PROCESS_STEPS } from '../data/content';
import { ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { SectionAnchor } from './SectionAnchor';

interface ProcessSectionProps {
  theme: ThemeMode;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ theme }) => {
  const [activeStep, setActiveStep] = useState(0);

  const isDark = theme === 'obsidian' || theme === 'electric-cobalt';
  const isSand = theme === 'sand-stone';

  return (
    <section
      id="process"
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
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 gsap-heading-reveal">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                05 // Engagement Model
              </span>
              <SectionAnchor id="process" label="Process" />
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              From idea to impact.
            </h2>
          </div>
          <p
            className={`max-w-md text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            A transparent, sprint-based workflow designed to eliminate guesswork, accelerate execution, and protect creative integrity.
          </p>
        </div>

        {/* Interactive Horizontal Timeline Navigation */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex min-w-[640px] items-center justify-between border-b pb-4 border-inherit">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-1 flex-col items-start px-4 text-left transition-all duration-300`}
                >
                  <span
                    className={`font-mono text-xs font-bold tracking-widest transition-colors ${
                      isActive ? 'text-blue-600' : 'text-neutral-400 group-hover:text-neutral-600'
                    }`}
                  >
                    {step.number}
                  </span>
                  <span
                    className={`font-heading text-lg sm:text-xl font-bold mt-1 transition-colors ${
                      isActive
                        ? isDark
                          ? 'text-white'
                          : 'text-neutral-950'
                        : isDark
                        ? 'text-neutral-500'
                        : 'text-neutral-400'
                    }`}
                  >
                    {step.title}
                  </span>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-blue-600 transition-all duration-300" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div
          className={`relative rounded-3xl border p-8 md:p-12 transition-all duration-500 ${
            isDark
              ? 'border-neutral-800 bg-neutral-900/80 shadow-2xl'
              : isSand
              ? 'border-[#D8D4CC] bg-white/90 shadow-sm'
              : 'border-neutral-200 bg-white shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="rounded-full bg-blue-600/10 px-3 py-1 font-mono text-xs font-bold text-blue-600">
                  STAGE {PROCESS_STEPS[activeStep].number}
                </span>
                <span className="flex items-center gap-1 font-mono text-xs text-neutral-400">
                  <Clock className="h-3.5 w-3.5" />
                  {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3">
                {PROCESS_STEPS[activeStep].tagline}
              </h3>

              <p
                className={`text-base sm:text-lg leading-relaxed mb-8 ${
                  isDark ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                {PROCESS_STEPS[activeStep].description}
              </p>

              {/* Outputs List */}
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                  Key Deliverables & Artifacts:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROCESS_STEPS[activeStep].outputs.map((out) => (
                    <div key={out} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Graphic / Monogram step diagram */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                className={`flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center rounded-full border-2 border-dashed transition-all duration-500 relative ${
                  isDark ? 'border-neutral-700 bg-neutral-950/50' : 'border-neutral-300 bg-neutral-50/80'
                }`}
              >
                <div className="text-center">
                  <div className="font-mono text-4xl sm:text-5xl font-black text-blue-600">
                    {PROCESS_STEPS[activeStep].number}
                  </div>
                  <div className="font-heading text-lg font-bold mt-1">
                    {PROCESS_STEPS[activeStep].title}
                  </div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest mt-0.5">
                    {PROCESS_STEPS[activeStep].duration}
                  </div>
                </div>

                {/* Orbiting accent dot */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-blue-600 shadow-md shadow-blue-500/50" />
              </div>
            </div>
          </div>

          {/* Step Navigation Controls */}
          <div className="mt-8 pt-8 border-t flex items-center justify-between border-inherit">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 disabled:opacity-30 hover:text-blue-600 transition-colors"
            >
              ← Previous Stage
            </button>
            <div className="flex gap-1.5">
              {PROCESS_STEPS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Jump to stage ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeStep === i
                      ? 'w-8 bg-blue-600'
                      : isDark
                      ? 'w-2 bg-neutral-700 hover:bg-neutral-600'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
              disabled={activeStep === PROCESS_STEPS.length - 1}
              className="font-mono text-xs font-semibold uppercase tracking-wider text-neutral-500 disabled:opacity-30 hover:text-blue-600 transition-colors"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
