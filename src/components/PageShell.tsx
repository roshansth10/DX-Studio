import React from "react";
import { ThemeMode } from "../types";

interface PageShellProps {
  theme: ThemeMode;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({
  theme,
  eyebrow,
  title,
  description,
  children,
}) => {
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <main
      className={`flex-1 ${
        hasHeader ? "pt-28 sm:pt-36" : ""
      } ${
        isDark
          ? "bg-[#121214] text-white"
          : isSand
            ? "bg-[#ECE9E2] text-neutral-950"
            : "bg-[#F7F7F5] text-neutral-950"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-4 sm:pb-6 lg:px-12">
        {hasHeader && (
          <div
            className="max-w-4xl border-b pb-12 sm:pb-16 gsap-heading-reveal"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                {eyebrow}
              </span>
            </div>
            <h1 className="mt-5 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed theme-text-muted">
              {description}
            </p>
          </div>
        )}
        <div className={hasHeader ? "mt-12 sm:mt-16" : ""}>{children}</div>
      </div>
    </main>
  );
};
