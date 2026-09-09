import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { ThemeMode } from '../types';
import { ArrowUpRight, Menu, X, Palette, Layers, Volume2, VolumeX } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { MagneticElement } from './MagneticElement';
import { studioAudio } from '../utils/ambientAudio';

interface NavigationProps {
  theme: ThemeMode;
  onSelectTheme: (theme: ThemeMode) => void;
  onOpenContact: () => void;
  onOpenConcepts: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  theme,
  onSelectTheme,
  onOpenContact,
  onOpenConcepts,
}) => {
  const t = TRANSLATIONS.en;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const unsub = studioAudio.subscribe(setIsMuted);
    return () => unsub();
  }, []);

  const handleToggleSound = () => {
    studioAudio.toggle();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'obsidian' || theme === 'electric-cobalt';
  const isSand = theme === 'sand-stone';

  const themeOptions: { id: ThemeMode; label: string; bg: string; border: string }[] = [
    { id: 'warm-light', label: 'Warm Scandinavian (Default)', bg: '#F7F7F5', border: '#E5E5E2' },
    { id: 'obsidian', label: 'Obsidian Dark', bg: '#121214', border: '#27272A' },
    { id: 'sand-stone', label: 'Sand & Stone', bg: '#ECE9E2', border: '#D8D4CC' },
    { id: 'electric-cobalt', label: 'Electric Cobalt Studio', bg: '#0F172A', border: '#1E293B' },
  ];

  const navLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.philosophy, href: '#philosophy' },
    { label: t.nav.process, href: '#process' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.sectors, href: '#sectors' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (window.history.pushState) {
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = targetId;
        }
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#121214]/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-lg shadow-black/10'
              : isSand
              ? 'bg-[#ECE9E2]/90 backdrop-blur-md border-b border-[#D8D4CC]/80 py-3.5 shadow-sm'
              : 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-[#E5E5E2]/80 py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <MagneticElement strength={0.2}>
            <a href="#" className="group flex items-center" id="nav-logo">
              <BrandLogo theme={theme} size="md" variant="full" />
            </a>
          </MagneticElement>

          {/* Desktop Nav Links with GSAP Magnetic Hover Effect */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <MagneticElement key={link.label} strength={0.35}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative inline-block px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                    isDark ? 'text-neutral-300 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="absolute -bottom-0.5 left-2 right-2 h-[1.5px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-16px)]" />
                </a>
              </MagneticElement>
            ))}
          </nav>

          {/* Actions: Ambient Audio Loop + Theme Selector + Art Direction + Contact CTA */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Subtle Mute/Unmute Studio Ambient Soundscape Toggle */}
            <button
              type="button"
              onClick={handleToggleSound}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-mono transition-all duration-300 ${
                isMuted
                  ? isDark
                    ? 'border-neutral-700/80 bg-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-500'
                    : 'border-neutral-300 bg-white/90 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 shadow-2xs'
                  : isDark
                  ? 'border-blue-500/80 bg-blue-950/40 text-blue-400 shadow-sm'
                  : 'border-blue-300 bg-blue-50 text-blue-700 shadow-sm'
              }`}
              aria-label={isMuted ? 'Unmute studio ambient loop (Space)' : 'Mute studio ambient loop (Space)'}
              aria-keyshortcuts="Space"
              title={isMuted ? 'Listen to Studio Ambient Loop (Space)' : 'Mute Studio Ambient Loop (Space)'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-3.5 w-3.5 opacity-70" />
                  <span className="text-[11px] font-medium">Sound: Off</span>
                  <kbd className="hidden xl:inline text-[9px] px-1 rounded border border-neutral-400/40 opacity-70">
                    Space
                  </kbd>
                </>
              ) : (
                <>
                  <Volume2 className="h-3.5 w-3.5 text-blue-500 animate-pulse" />
                  <span className="text-[11px] font-semibold">Sound: Live</span>
                  {/* Subtle animated sound wave equalizer bars */}
                  <span className="flex items-center gap-0.5 h-3 ml-0.5">
                    <span className="w-0.5 bg-blue-500 rounded-full animate-pulse h-2" />
                    <span className="w-0.5 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.15s] h-3" />
                    <span className="w-0.5 bg-blue-500 rounded-full animate-pulse [animation-delay:-0.3s] h-1.5" />
                  </span>
                  <kbd className="hidden xl:inline text-[9px] px-1 rounded border border-blue-400/40 opacity-70">
                    Space
                  </kbd>
                </>
              )}
            </button>

            {/* Design Concept Explorations Button */}
            <button
              onClick={onOpenConcepts}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 border ${
                isDark
                  ? 'border-neutral-700 bg-neutral-800/60 text-blue-400 hover:border-blue-500 hover:bg-neutral-800'
                  : 'border-neutral-300 bg-white/80 text-neutral-800 hover:border-blue-600 hover:text-blue-600 shadow-xs'
              }`}
              title="Explore Studio Art Direction Studies"
            >
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              <span>{t.nav.designConcepts}</span>
            </button>

            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 ${
                  isDark
                    ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:border-neutral-500'
                    : 'border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 shadow-xs'
                }`}
                title={t.nav.palette}
              >
                <Palette className="h-3.5 w-3.5" />
              </button>

              {themeMenuOpen && (
                <div
                  className={`absolute right-0 mt-2 w-56 rounded-xl border p-2 shadow-2xl z-50 backdrop-blur-lg ${
                    isDark ? 'border-neutral-800 bg-neutral-900/95 text-white' : 'border-neutral-200 bg-white/95 text-neutral-900'
                  }`}
                >
                  <div className="px-2 py-1.5 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                    {t.nav.palette}
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        onSelectTheme(opt.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                        theme === opt.id
                          ? 'bg-blue-600 text-white font-semibold'
                          : isDark
                          ? 'hover:bg-neutral-800 text-neutral-300'
                          : 'hover:bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      <span
                        className="h-3.5 w-3.5 rounded-full border"
                        style={{ backgroundColor: opt.bg, borderColor: opt.border }}
                      />
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Magnetic Contact CTA Button */}
            <MagneticElement strength={0.25}>
              <button
                onClick={onOpenContact}
                id="nav-cta-talk"
                className={`group relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm overflow-hidden ${
                  isDark
                    ? 'bg-white text-neutral-950 hover:bg-blue-500 hover:text-white'
                    : 'bg-neutral-950 text-white hover:bg-blue-600'
                }`}
              >
                <span>{t.nav.letsTalk}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </MagneticElement>
          </div>

          {/* Mobile Menu Toggle & Compact Actions */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Ambient Audio Toggle */}
            <button
              onClick={handleToggleSound}
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                !isMuted
                  ? isDark
                    ? 'border-blue-500 bg-blue-950/60 text-blue-400'
                    : 'border-blue-500 bg-blue-50 text-blue-600'
                  : isDark
                  ? 'border-neutral-700 bg-neutral-800 text-neutral-400'
                  : 'border-neutral-300 bg-white text-neutral-600'
              }`}
              aria-label={isMuted ? 'Unmute studio ambient loop' : 'Mute studio ambient loop'}
              title={isMuted ? 'Listen to studio ambient loop' : 'Mute studio sound'}
            >
              {!isMuted ? <Volume2 className="h-4 w-4 text-blue-500 animate-pulse" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                isDark ? 'border-neutral-700 bg-neutral-800 text-white' : 'border-neutral-300 bg-white text-neutral-900'
              }`}
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col justify-between p-6 md:hidden backdrop-blur-xl ${
            isDark ? 'bg-neutral-950/98 text-white' : 'bg-[#F7F7F5]/98 text-neutral-950'
          }`}
        >
          <div className="flex items-center justify-between border-b pb-4 border-inherit">
            <BrandLogo theme={theme} size="sm" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                isDark ? 'border-neutral-700 text-white' : 'border-neutral-300 text-neutral-900'
              }`}
              aria-label="Close navigation menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="my-auto flex flex-col gap-6 text-2xl font-heading font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcepts();
              }}
              className="text-left text-blue-600 font-bold flex items-center gap-2"
            >
              <Layers className="h-5 w-5" />
              <span>{t.nav.designConcepts}</span>
            </button>
          </div>

          <div className="space-y-4 border-t pt-4 border-inherit">
            {/* Mobile Studio Audio Control Row */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-neutral-400">Studio Soundscape</span>
              <button
                onClick={handleToggleSound}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border transition-colors ${
                  !isMuted
                    ? 'bg-blue-600 text-white border-blue-600'
                    : isDark
                    ? 'border-neutral-700 bg-neutral-800 text-neutral-300'
                    : 'border-neutral-300 bg-white text-neutral-700'
                }`}
              >
                {!isMuted ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                <span>{!isMuted ? 'Live' : 'Muted'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-neutral-400">{t.nav.palette}</span>
              <div className="flex gap-2">
                {themeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => onSelectTheme(opt.id)}
                    className={`h-7 w-7 rounded-full border-2 ${
                      theme === opt.id ? 'border-blue-600 scale-110' : 'border-neutral-400'
                    }`}
                    style={{ backgroundColor: opt.bg }}
                    title={opt.label}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3 text-sm font-bold text-white uppercase tracking-wider"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
