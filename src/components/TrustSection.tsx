import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ThemeMode } from "../types";
import { CLIENT_SECTORS, TESTIMONIALS } from "../data/content";
import { ArrowLeft, ArrowRight, Quote, Globe2, TrendingUp } from "lucide-react";
import { SectionAnchor } from "./SectionAnchor";

interface TrustSectionProps {
  theme: ThemeMode;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ theme }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);

  const isDark = theme === "obsidian";

  // GSAP animated transition when currentIndex changes
  useEffect(() => {
    if (quoteRef.current && authorRef.current) {
      const xOffset = direction === "next" ? 24 : -24;

      gsap.fromTo(
        quoteRef.current,
        {
          opacity: 0,
          x: xOffset,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        authorRef.current,
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          delay: 0.1,
          ease: "power2.out",
        },
      );
    }
  }, [currentIndex, direction]);

  // Gentle auto-rotation (can be paused on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section
      id="sectors"
      data-theme={theme}
      className="relative overflow-hidden py-24 sm:py-32 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal theme-bg-page theme-border"
      style={{
        backgroundColor: "var(--theme-bg-page)",
        borderColor: "var(--theme-border)",
        color: "var(--theme-text-primary)",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl gsap-heading-reveal">
          <div className="flex items-center flex-wrap gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
              07 // TRUST & REACH
            </span>
            <span className="h-[1px] w-6 bg-blue-600/40" />
            <span className="font-mono text-xs uppercase tracking-widest theme-text-subtle">
              Partnerships & Perspectives
            </span>
            <SectionAnchor id="sectors" label="Trust & Reach" />
          </div>

          <h2 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight theme-text-primary">
            Built for ambitious businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed theme-text-muted">
            We partner with industry pioneers, scaling tech founders, and
            storied heritage brands who value craft, velocity, and enduring
            quality.
          </p>
        </div>

        {/* Text-Focused Editorial Testimonial Carousel */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mb-20 rounded-3xl border p-8 sm:p-12 lg:p-16 transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--theme-bg-card)",
            borderColor: "var(--theme-border-card)",
          }}
        >
          {/* Top Status & Controls Bar */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="font-bold text-blue-600">
                [{currentTestimonial.number} / 0{TESTIMONIALS.length}]
              </span>
              <span className="theme-text-subtle">•</span>
              <span className="theme-text-secondary font-medium">
                {currentTestimonial.company}
              </span>
            </div>

            {/* Impact Metric Pill */}
            <div className="flex items-center gap-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-semibold ${
                  isDark
                    ? "border border-blue-500/30 bg-blue-950/40 text-blue-400"
                    : "border border-blue-200 bg-blue-50 text-blue-700"
                }`}
              >
                <TrendingUp className="h-3 w-3" />
                {currentTestimonial.impactMetric}
              </span>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-all theme-border theme-bg-card-subtle theme-text-primary hover:border-blue-500"
                  style={{
                    backgroundColor: "var(--theme-bg-card-subtle)",
                    borderColor: "var(--theme-border)",
                    color: "var(--theme-text-primary)",
                  }}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border transition-all theme-border theme-bg-card-subtle theme-text-primary hover:border-blue-500"
                  style={{
                    backgroundColor: "var(--theme-bg-card-subtle)",
                    borderColor: "var(--theme-border)",
                    color: "var(--theme-text-primary)",
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Main Editorial Quote */}
          <div className="py-8 sm:py-12">
            <div className="mb-4">
              <Quote className="h-8 w-8 text-blue-600/40" />
            </div>

            <div
              ref={quoteRef}
              className="min-h-[140px] sm:min-h-[120px] flex items-center"
            >
              <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-relaxed theme-text-primary">
                "{currentTestimonial.quote}"
              </blockquote>
            </div>
          </div>
          {/* Bottom Attribution & Project Tag */}
          <div
            ref={authorRef}
            className="pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div>
              <div className="font-heading text-lg font-bold theme-text-primary">
                {currentTestimonial.author}
              </div>
              <div className="text-xs sm:text-sm font-mono theme-text-muted mt-0.5">
                {currentTestimonial.role}, {currentTestimonial.company}
              </div>
              <div className="text-xs font-mono theme-text-subtle mt-0.5">
                {currentTestimonial.location}
              </div>
            </div>

            <div className="flex flex-col sm:items-end">
              <span className="font-mono text-[11px] uppercase tracking-wider font-semibold mb-1 theme-text-subtle">
                Project Scope
              </span>
              <span className="font-mono text-xs font-medium text-blue-600">
                {currentTestimonial.project}
              </span>
            </div>
          </div>
          {/* Subtle Carousel Progress Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => {
                  setDirection(idx > currentIndex ? "next" : "prev");
                  setCurrentIndex(idx);
                }}
                aria-label={`Jump to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-blue-600"
                    : "w-2 opacity-40 hover:opacity-80"
                }`}
                style={
                  idx !== currentIndex
                    ? { backgroundColor: "var(--theme-text-muted)" }
                    : undefined
                }
              />
            ))}
          </div>
        </div>

        {/* Client Sectors Breakdown */}
        <div className="mb-8 gsap-heading-reveal">
          <h3 className="font-heading text-2xl font-bold tracking-tight mb-2 theme-text-primary">
            Industries & Client Reach
          </h3>
          <p className="text-sm font-mono theme-text-subtle">
            Tailored digital execution across high-impact verticals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gsap-stagger-container">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.name}
              className="rounded-2xl border p-6 transition-all duration-300 gsap-stagger-item hover:shadow-md"
              style={{
                backgroundColor: "var(--theme-bg-card)",
                borderColor: "var(--theme-border-card)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-heading text-lg font-bold theme-text-primary">
                  {sector.name}
                </h4>
                <span className="font-mono text-xs font-semibold text-blue-600">
                  {sector.count}
                </span>
              </div>
              <p className="text-sm leading-relaxed theme-text-muted">
                {sector.description}
              </p>
            </div>
          ))}
        </div>

        {/* Global Standard Operations Notice */}
        <div
          className="mt-12 rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{
            backgroundColor: "var(--theme-bg-card-subtle)",
            borderColor: "var(--theme-border)",
          }}
        >
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-blue-600 shrink-0" />
            <div className="text-sm font-medium theme-text-secondary">
              Headquartered in Kathmandu, Nepal • Engineering for teams from
              Kathmandu.
            </div>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest shrink-0 theme-text-subtle">
            UTC+5:45 Operations
          </div>
        </div>
      </div>
    </section>
  );
};
