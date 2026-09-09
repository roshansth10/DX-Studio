import React, { useState } from "react";
import { ThemeMode } from "../types";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionAnchor } from "./SectionAnchor";

interface FinalCTAProps {
  theme: ThemeMode;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ theme, onOpenContact }) => {
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
  };

  const isDark = theme === "obsidian" || theme === "electric-cobalt";
  const isSand = theme === "sand-stone";

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-28 sm:py-36 lg:py-48 border-b scroll-mt-20 transition-colors duration-500 gsap-section-reveal ${
        isDark
          ? theme === "electric-cobalt"
            ? "bg-[#080E20] text-white border-blue-950/80"
            : "bg-[#0E0E10] text-white border-neutral-800"
          : isSand
            ? "bg-[#E0DDD5] text-neutral-950 border-[#CDC8BE]"
            : "bg-[#EDEDEA] text-neutral-950 border-[#E0E0DC]"
      }`}
    >
      {/* Abstract geometric line & DX Monogram backdrop */}
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center ${
          isDark ? "opacity-10" : "opacity-5"
        }`}
      >
        <svg
          width="800"
          height="800"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin duration-[120s]"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <path
            d="M20 20 L80 80 M80 20 L20 80"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12 gsap-heading-reveal">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
            08 // Initiation
          </span>
          <SectionAnchor id="contact" label="Contact" />
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          Have something worth building?
        </h2>

        <p
          className={`mx-auto max-w-xl text-lg sm:text-xl font-normal leading-relaxed mb-10 ${
            isDark ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          Tell us what you're working on. We'll figure out the rest. We review
          every project brief within 24 hours.
        </p>

        {/* Primary Interactive Action Form / Button */}
        <div className="mx-auto max-w-md">
          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/40 bg-emerald-950/20 p-4 text-emerald-400 font-medium text-sm flex items-center justify-center gap-2">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>
                Thank you. Our studio partner will reach out within 24 hours.
              </span>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={onOpenContact}
                className={`w-full group inline-flex items-center justify-center gap-3 rounded-full py-4 px-8 text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-900/40"
                    : "bg-neutral-950 text-white hover:bg-blue-600 hover:shadow-neutral-900/30"
                }`}
              >
                <span>Start a project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          )}

          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-neutral-400">
            <span>Kathmandu • UTC+5:45</span>
            <span>•</span>
            <a
              href="mailto:roshan.devworks@gmail.com"
              className="text-blue-600 hover:underline font-semibold"
            >
              roshan.devworks@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
