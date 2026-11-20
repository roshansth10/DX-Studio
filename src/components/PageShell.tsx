import React from "react";
import { ThemeMode } from "../types";

interface PageShellProps {
  theme: ThemeMode;
  eyebrow?: string;
  title?: string;
  description?: string;
  descriptionOnRight?: boolean;
  children: React.ReactNode;
}

export const AccentTitle: React.FC<{ title: string }> = ({ title }) => {
  const words = title.trim().split(/\s+/);
  const accentWordCount = words.length > 3 ? 2 : 1;
  const baseTitle = words.slice(0, -accentWordCount).join(" ");
  const accentTitle = words.slice(-accentWordCount).join(" ");

  return (
    <>
      {baseTitle && `${baseTitle} `}
      <span className="text-blue-600">{accentTitle}</span>
    </>
  );
};

export const PageShell: React.FC<PageShellProps> = ({
  theme,
  eyebrow,
  title,
  description,
  descriptionOnRight = false,
  children,
}) => {
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <main
      className={`flex-1 pt-28 sm:pt-36 ${
        isDark
          ? "bg-[#121214] text-white"
          : isSand
            ? "bg-[#ECE9E2] text-neutral-950"
            : "bg-[#F7F7F5] text-neutral-950"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 sm:pb-12 lg:pb-14 lg:px-12">
        {hasHeader && (
          <div
            className={`${descriptionOnRight ? "max-w-none" : "max-w-4xl"} border-b pb-6 sm:pb-8 gsap-heading-reveal ${
              descriptionOnRight
                ? "grid gap-8 md:grid-cols-12 md:items-end md:gap-10"
                : ""
            }`}
            style={{ borderColor: "var(--theme-border)" }}
          >
            <div className={descriptionOnRight ? "md:col-span-7" : ""}>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                  // {eyebrow}
                </span>
              </div>
              <h1 className="mt-5 font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-balance">
                {title && <AccentTitle title={title} />}
              </h1>
            </div>
            <p
              className={`text-base leading-relaxed theme-text-muted sm:text-xl ${
                descriptionOnRight
                  ? "max-w-md md:col-span-5 md:justify-self-end md:text-right"
                  : "mt-6 max-w-2xl"
              }`}
            >
              {description}
            </p>
          </div>
        )}
        <div className={hasHeader ? "mt-6 sm:mt-8" : ""}>{children}</div>
      </div>
    </main>
  );
};
