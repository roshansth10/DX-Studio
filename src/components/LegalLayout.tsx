import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronDown, Mail } from "lucide-react";
import { ThemeMode } from "../types";
import { LegalPage, LegalSection } from "../data/legalContent";
import { navigateTo } from "../routing";

interface LegalLayoutProps {
  page: LegalPage;
  theme: ThemeMode;
  relatedPages: { label: string; href: string }[];
}

// ─── TOC ──────────────────────────────────────────────────────────────────────

const TOC: React.FC<{
  sections: LegalSection[];
  activeId: string;
  theme: ThemeMode;
}> = ({ sections, activeId, theme }) => {
  const isDark = theme === "obsidian";
  const visible = sections.filter((s) => s.title && s.id);
  return (
    <nav aria-label="On this page">
      <p
        className="font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-blue-600 mb-4"
        id="toc-label"
      >
        On this page
      </p>
      <ul className="space-y-1" aria-labelledby="toc-label">
        {visible.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`block text-xs font-mono py-1 pr-2 border-l-2 pl-3 transition-all duration-150 leading-snug ${
                  isActive
                    ? "border-blue-600 text-blue-600 font-semibold"
                    : isDark
                      ? "border-neutral-700 text-neutral-400 hover:text-neutral-200 hover:border-neutral-500"
                      : "border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-400"
                }`}
              >
                {s.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// ─── COLLAPSIBLE TOC (mobile) ────────────────────────────────────────────────

const CollapsibleTOC: React.FC<{
  sections: LegalSection[];
  activeId: string;
  theme: ThemeMode;
}> = ({ sections, activeId, theme }) => {
  const [open, setOpen] = useState(false);
  const isDark = theme === "obsidian";
  const visible = sections.filter((s) => s.title && s.id);
  return (
    <div
      className={`rounded-xl border mb-8 text-sm ${
        isDark ? "border-neutral-800 bg-neutral-900/60" : "border-neutral-200 bg-white/60"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 font-mono text-[11px] uppercase tracking-widest text-blue-600 font-bold"
        aria-expanded={open}
      >
        <span>On this page</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="px-4 pb-4 space-y-1">
          {visible.map((s) => {
            const isActive = activeId === s.id;
            return (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    setTimeout(
                      () =>
                        document
                          .getElementById(s.id)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
                      120,
                    );
                  }}
                  className={`block py-1.5 font-mono text-xs transition-colors ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : isDark
                        ? "text-neutral-400 hover:text-neutral-200"
                        : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

// ─── SECTION ─────────────────────────────────────────────────────────────────

const LegalSectionBlock: React.FC<{
  section: LegalSection;
  theme: ThemeMode;
  isFirst: boolean;
}> = ({ section, theme, isFirst }) => {
  const isDark = theme === "obsidian";
  if (!section.title && !section.paragraphs?.length && !section.items?.length) {
    return null;
  }
  return (
    <section
      id={section.id || undefined}
      style={{ scrollMarginTop: "calc(5.5rem + 24px)" }}
      className={isFirst ? "" : "mt-12"}
    >
      {section.title && (
        <h2
          className={`font-heading text-xl sm:text-2xl font-bold mb-4 ${
            isDark ? "text-neutral-100" : "text-neutral-900"
          }`}
        >
          {section.title}
        </h2>
      )}
      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className={`text-base leading-[1.75] mb-4 last:mb-0 ${
            isDark ? "text-neutral-400" : "text-neutral-600"
          }`}
        >
          {p}
        </p>
      ))}
      {section.items && section.items.length > 0 && (
        <ul className="mt-3 space-y-2.5 mb-4">
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-[5px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600" />
              <span
                className={`text-base leading-[1.75] ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

// ─── MAIN LAYOUT ─────────────────────────────────────────────────────────────

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  page,
  theme,
  relatedPages,
}) => {
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  const [activeId, setActiveId] = useState(
    page.sections.find((s) => s.title && s.id)?.id ?? "",
  );

  // IntersectionObserver for active section
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    const ids = page.sections.filter((s) => s.title && s.id).map((s) => s.id);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, [page]);

  const bgClass = isDark
    ? "bg-[#121214] text-white border-neutral-800"
    : isSand
      ? "bg-[#ECE9E2] text-neutral-950 border-[#D8D4CC]"
      : "bg-[#F7F7F5] text-neutral-950 border-[#E5E5E2]";

  return (
    <>
      {/* Skip to content */}
      <a
        href="#legal-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <main
        id="legal-content"
        className={`flex-1 pt-28 sm:pt-36 pb-6 sm:pb-8 ${bgClass}`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          {/* Back link */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateTo("/");
            }}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-600 hover:underline mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to home
          </a>

          {/* Page header */}
          <div
            className="max-w-4xl border-b pb-12 sm:pb-16"
            style={{ borderColor: "var(--theme-border)" }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
              {page.eyebrow}
            </span>
            <h1
              className={`mt-5 font-heading text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-balance ${
                isDark ? "text-neutral-50" : "text-neutral-950"
              }`}
            >
              {page.title}
            </h1>
            <p
              className={`mt-3 font-mono text-xs ${
                isDark ? "text-neutral-500" : "text-neutral-400"
              }`}
            >
              Last updated: {page.lastUpdated}
            </p>
          </div>

          {/* Mobile collapsible TOC */}
          <div className="mt-10 lg:hidden">
            <CollapsibleTOC
              sections={page.sections}
              activeId={activeId}
              theme={theme}
            />
          </div>

          {/* Two-column layout */}
          <div className="mt-10 lg:mt-14 lg:grid lg:grid-cols-[1fr_220px] lg:gap-16 xl:grid-cols-[1fr_240px]">
            {/* Reading column */}
            <article className="min-w-0 max-w-[70ch]">
              {page.sections.map((section, idx) => (
                <LegalSectionBlock
                  key={section.id || idx}
                  section={section}
                  theme={theme}
                  isFirst={idx === 0}
                />
              ))}

              {/* Divider before contact card */}
              <div
                className="mt-14 mb-10 border-t"
                style={{ borderColor: "var(--theme-border)" }}
              />

              {/* Contact card */}
              <div
                className={`rounded-2xl border p-6 sm:p-8 ${
                  isDark
                    ? "border-neutral-800 bg-neutral-900/60"
                    : "border-neutral-200 bg-white"
                }`}
              >
                <p
                  className={`font-mono text-[10px] uppercase tracking-[0.25em] font-bold text-blue-600 mb-3`}
                >
                  Get in Touch
                </p>
                <p
                  className={`text-sm leading-relaxed mb-5 ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {page.contactIntro}
                </p>
                <a
                  href="mailto:roshan.devworks@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  roshan.devworks@gmail.com
                </a>
              </div>

              {/* Related legal pages */}
              {relatedPages.length > 0 && (
                <div className="mt-8">
                  <p
                    className={`font-mono text-[10px] uppercase tracking-[0.25em] font-bold mb-4 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Related
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {relatedPages.map((rp) => (
                      <a
                        key={rp.href}
                        href={rp.href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo(rp.href);
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-mono transition-colors hover:border-blue-600 hover:text-blue-600 ${
                          isDark
                            ? "border-neutral-700 text-neutral-400"
                            : "border-neutral-300 text-neutral-500"
                        }`}
                      >
                        {rp.label}
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sticky sidebar TOC — desktop only */}
            <aside className="hidden lg:block">
              <div
                className="sticky"
                style={{ top: "calc(5.5rem + 24px)" }}
              >
                <TOC
                  sections={page.sections}
                  activeId={activeId}
                  theme={theme}
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};
