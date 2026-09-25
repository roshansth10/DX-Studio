import React, { useState } from 'react';
import { ThemeMode, ServiceItem } from '../types';
import { SERVICES } from '../data/content';
import { ArrowUpRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { SectionAnchor } from './SectionAnchor';

interface ServicesSectionProps {
  theme: ThemeMode;
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ theme, onSelectService }) => {
  const t = TRANSLATIONS.en;
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const isDark = theme === 'obsidian';
  const isSand = theme === 'sand-stone';

  return (
    <section
      id="services"
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden py-24 sm:py-32 lg:py-40 border-b scroll-mt-20 transition-colors duration-500 ${
        isDark
          ? 'bg-[#121214] text-white border-neutral-800'
          : isSand
          ? 'bg-[#ECE9E2] text-neutral-950 border-[#D8D4CC]'
          : 'bg-[#F7F7F5] text-neutral-950 border-[#E5E5E2]'
      }`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 gsap-heading-reveal">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                {t.services.eyebrow}
              </span>
              <SectionAnchor id="services" label="Services" />
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {t.services.title}
            </h2>
          </div>
          <p
            className={`max-w-md text-base sm:text-lg leading-relaxed ${
              isDark ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            {t.services.subtitle}
          </p>
        </div>

        {/* Editorial Service List */}
        <div className={`divide-y border-y gsap-stagger-container ${isDark ? 'divide-neutral-800 border-neutral-800' : 'divide-neutral-300 border-neutral-300'}`}>
          {SERVICES.map((service, index) => {
            const isHovered = activeHoverIndex === index;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.number}
                data-cursor="service"
                onMouseEnter={() => setActiveHoverIndex(index)}
                onMouseLeave={() => setActiveHoverIndex(null)}
                className={`group relative transition-all duration-300 gsap-stagger-item ${
                  isHovered
                    ? isDark
                      ? 'bg-neutral-800/40'
                      : isSand
                      ? 'bg-white/40'
                      : 'bg-white/70'
                    : ''
                }`}
              >
                {/* Main Clickable Row */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="flex cursor-pointer items-center justify-between py-8 md:py-12 px-2 sm:px-6 transition-transform duration-300"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 w-full items-center">
                    {/* Number */}
                    <div className="md:col-span-2 font-mono text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 group-hover:text-blue-600 transition-colors">
                      {service.number}
                    </div>

                    {/* Title & Category */}
                    <div className="md:col-span-4 flex flex-col">
                      <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {service.title}
                      </h3>
                      <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider mt-1">
                        {service.category}
                      </span>
                    </div>

                    {/* Short Description */}
                    <div
                      className={`md:col-span-5 text-sm sm:text-base pr-4 ${
                        isDark ? 'text-neutral-300' : 'text-neutral-600'
                      }`}
                    >
                      {service.summary}
                    </div>

                    {/* Arrow / Toggle Icon */}
                    <div className="md:col-span-1 flex justify-end">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                          isHovered
                            ? 'border-blue-600 bg-blue-600 text-white rotate-45'
                            : isDark
                            ? 'border-neutral-700 bg-neutral-800/80 text-neutral-300'
                            : 'border-neutral-300 bg-white text-neutral-700'
                        }`}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Capabilities Details */}
                {isExpanded && (
                  <div
                    className={`px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t ${
                      isDark ? 'border-neutral-800/60 bg-neutral-900/30' : 'border-neutral-200 bg-white/40'
                    }`}
                  >
                    {/* Capabilities list */}
                    <div className="lg:col-span-6">
                      <div className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold mb-3">
                        Sub-Specialties
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.subItems.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm font-medium">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Deliverables */}
                    <div className="lg:col-span-6">
                      <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                        Core Deliverables
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((del) => (
                          <span
                            key={del}
                            className={`rounded-md border px-3 py-1 text-xs font-mono ${
                              isDark
                                ? 'border-neutral-700 bg-neutral-800/70 text-neutral-300'
                                : 'border-neutral-300 bg-white text-neutral-700'
                            }`}
                          >
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
