import React from "react";
import { ThemeMode } from "../types";
import { SectionAnchor } from "./SectionAnchor";

interface PageShellProps {
  theme: ThemeMode;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  theme,
  eyebrow,
  title,
  description,
  children,
}) => {
  const isDark = theme === "obsidian" || theme === "electric-cobalt";
  const isSand = theme === "sand-stone";

  return (
    <main
      className={`min-h-screen border-b pt-28 sm:pt-36 ${
        isDark
          ? theme === "electric-cobalt"
            ? "bg-[#0B132B] text-white border-blue-950/80"
            : "bg-[#121214] text-white border-neutral-800"
          : isSand
            ? "bg-[#ECE9E2] text-neutral-950 border-[#D8D4CC]"
            : "bg-[#F7F7F5] text-neutral-950 border-[#E5E5E2]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:pb-24 lg:px-12 lg:pb-32">
        <div
          className="max-w-4xl border-b pb-12 sm:pb-16 gsap-heading-reveal"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
              {eyebrow}
            </span>
            <SectionAnchor
              id={eyebrow.toLowerCase().replace(/[^a-z]+/g, "-")}
              label={title}
            />
          </div>
          <h1 className="mt-5 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed theme-text-muted">
            {description}
          </p>
        </div>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </main>
  );
};
