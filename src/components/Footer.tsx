import React, { useState, useEffect } from "react";
import { BrandLogo } from "./BrandLogo";
import { ThemeMode } from "../types";
import { ArrowUp, ArrowUpRight, Clock } from "lucide-react";
import { navigateTo } from "../routing";
import { scrollToTarget } from "../hooks/useLenisScroll";

interface FooterProps {
  theme: ThemeMode;
  onOpenConcepts?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const [ktmTime, setKtmTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Kathmandu is UTC+5:45
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setKtmTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    scrollToTarget(0);
  };

  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  return (
    <footer
      className={`relative pt-16 md:pt-20 pb-32 md:pb-16 transition-colors duration-500 ${
        isDark
          ? "bg-[#0B0B0D] text-white border-t border-neutral-800"
          : isSand
            ? "bg-[#DCD8D0] text-neutral-950 border-t border-[#CBC5B9]"
            : "bg-[#EAEAE6] text-neutral-950 border-t border-[#DEDEDA]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Tier: Logo & Statement & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-12 md:pb-16 border-b border-inherit">
          <div className="max-w-md">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/");
              }}
              className="inline-flex"
            >
              <BrandLogo theme={theme} size="lg" variant="full" />
            </a>
            <p
              className={`mt-4 text-base leading-relaxed ${
                isDark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Digital experiences for businesses moving forward. Combining
              strategy, design, and engineering into enduring digital capital.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isDark
                  ? "border-neutral-700 bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                  : "border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-100"
              }`}
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Middle Tier: Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 md:py-16 border-b border-inherit text-sm">
          {/* Column 1: Studio */}
          <div className="min-w-0">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Studio
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/work"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/work");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Selected Work
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  href="/philosophy"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/philosophy");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="/process"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/process");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Process
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/team");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a
                  href="/sectors"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/sectors");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Sectors
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/contact");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="min-w-0">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Services
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Brand & Identity
                </a>
              </li>
              {/* UI/UX & Products hidden for now
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  UI/UX & Products
                </a>
              </li>
              */}
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  SEO & Growth
                </a>
              </li>
              {/* Creative Technology hidden for now
              <li>
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo("/services");
                  }}
                  className="hover:text-blue-600 transition-colors"
                >
                  Creative Technology
                </a>
              </li>
              */}
            </ul>
          </div>

          {/* Column 3: Connect (Full-width on mobile, 1 col on desktop) */}
          <div className="col-span-2 md:col-span-1 min-w-0">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Connect
            </div>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:roshan.devworks@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors text-[14px] sm:text-sm font-mono min-w-0 [overflow-wrap:anywhere]"
                >
                  <span>roshan.devworks@gmail.com</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dxcreativestudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9779764775438"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </a>
              </li>
              {/* LinkedIn link disabled temporarily
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                </a>
              </li>
              */}
            </ul>
          </div>

          {/* Column 4: Location & Live Status (Full-width on mobile, 1 col on desktop) */}
          <div className="col-span-2 md:col-span-1 min-w-0">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
              Studio Location
            </div>
            <div className="space-y-2">
              <div className="font-medium text-sm sm:text-base">
                Kathmandu, Nepal
              </div>
              <div className="text-xs text-neutral-400 dark:text-neutral-400">
                Goldhunga, Tarkeshwor-5
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-inherit px-3.5 py-2 font-mono text-[13px] whitespace-nowrap w-fit">
                <Clock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                <span>KTM: {ktmTime || "18:48:00"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 text-xs font-mono text-neutral-500">
          <div className="leading-relaxed">
            © 2026 DX Studio. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2">
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/privacy");
              }}
              className="hover:underline"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/terms");
              }}
              className="hover:underline"
            >
              Terms of Engagement
            </a>
            <a
              href="/accessibility"
              onClick={(e) => {
                e.preventDefault();
                navigateTo("/accessibility");
              }}
              className="hover:underline"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
