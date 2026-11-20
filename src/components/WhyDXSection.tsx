import React from "react";
import {
  ArrowUpRight,
  Code2,
  Fingerprint,
  Globe2,
  Megaphone,
  Palette,
  Search,
} from "lucide-react";
import { ThemeMode } from "../types";
import { navigateTo } from "../routing";

interface WhyDXSectionProps {
  theme: ThemeMode;
}

const FEATURES = [
  {
    title: "Web Development",
    description:
      "Modern, responsive websites tailored to your business needs.",
    icon: Globe2,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions to simplify your business operations.",
    icon: Code2,
  },
  {
    title: "UI/UX & Graphic Design",
    description: "Creative designs and user-friendly digital experiences.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your website's visibility and reach more people through search.",
    icon: Search,
  },
  {
    title: "Social Media Marketing",
    description: "Build your brand and connect with your audience online.",
    icon: Megaphone,
  },
  {
    title: "Branding & Digital Identity",
    description:
      "Create a distinctive identity that makes your business stand out.",
    icon: Fingerprint,
  },
];

export const WhyDXSection: React.FC<WhyDXSectionProps> = ({ theme }) => {
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  return (
    <section
      id="why-dx"
      className={`border-b py-12 transition-colors duration-500 sm:py-16 lg:py-20 ${
        isDark
          ? "border-neutral-800 bg-[#18181B] text-white"
          : isSand
            ? "border-[#E5E5E2] bg-[#F7F7F5] text-neutral-950"
            : "border-[#D8D4CC] bg-[#ECE9E2] text-neutral-950"
      }`}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
        <div className="max-w-md">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            // Why Choose DX Studio
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Why Choose DX Studio?
          </h2>
          <p className="mt-5 text-base leading-relaxed theme-text-muted sm:text-lg">
            We combine creativity, technology, and strategy to help your
            business grow in the digital world.
          </p>
          <button
            type="button"
            onClick={() => navigateTo("/services")}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-500"
          >
            Explore Our Services
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {FEATURES.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                isDark
                  ? "border-neutral-800 bg-neutral-900/60 hover:border-neutral-700"
                  : isSand
                    ? "border-[#D8D4CC] bg-white/70 hover:border-neutral-400"
                    : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <h3 className="mt-5 font-heading text-lg font-bold tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed theme-text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
