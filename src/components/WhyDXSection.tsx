import React from 'react';
import { ThemeMode } from '../types';
import { PRINCIPLES } from '../data/content';
import { Target, Compass, Cpu, Check } from 'lucide-react';
import { SectionAnchor } from './SectionAnchor';

interface WhyDXSectionProps {
  theme: ThemeMode;
}

export const WhyDXSection: React.FC<WhyDXSectionProps> = ({ theme }) => {
  const isDark = theme === 'obsidian' || theme === 'electric-cobalt';
  const isSand = theme === 'sand-stone';

  const icons = [Target, Compass, Cpu];

  return (
    <section
      id="why-dx"
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal ${
        isDark
          ? theme === 'electric-cobalt'
            ? 'bg-[#0B132B] text-white border-blue-950/80'
            : 'bg-[#121214] text-white border-neutral-800'
          : isSand
          ? 'bg-[#ECE9E2] text-neutral-950 border-[#D8D4CC]'
          : 'bg-[#F7F7F5] text-neutral-950 border-[#E5E5E2]'
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Editorial Eyebrow & Big Statement */}
        <div className="mb-20 gsap-heading-reveal">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold inline-block">
              04 // Core Principles
            </span>
            <SectionAnchor id="why-dx" label="Core Principles" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl text-balance">
            Strategy before pixels.{' '}
            <span className="text-blue-600 italic">Purpose before technology.</span>
          </h2>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 gsap-stagger-container">
          {PRINCIPLES.map((principle, index) => {
            const Icon = icons[index];

            return (
              <div
                key={principle.number}
                className={`relative flex flex-col justify-between rounded-2xl border p-8 transition-all duration-300 gsap-stagger-item ${
                  isDark
                    ? 'border-neutral-800 bg-neutral-900/60 hover:border-neutral-700'
                    : isSand
                    ? 'border-[#D8D4CC] bg-white/70 hover:border-neutral-400'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 shadow-xs'
                }`}
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between border-b pb-6 mb-6 border-inherit">
                    <span className="font-mono text-xs font-bold tracking-widest text-blue-600">
                      {principle.number}
                    </span>
                    <Icon className="h-5 w-5 text-neutral-400" />
                  </div>

                  {/* Title & Statement */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight mb-3">
                    {principle.title}
                  </h3>

                  <p className="font-body text-base font-semibold leading-snug mb-4">
                    {principle.statement}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-neutral-400' : 'text-neutral-600'
                    }`}
                  >
                    {principle.details}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 pt-6 border-t border-inherit">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider">
                    Non-negotiable Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
