import React, { useState, useEffect } from 'react';
import { ThemeMode, ProjectItem } from './types';
import { Navigation } from './components/Navigation';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { HeroSection } from './components/HeroSection';
import { IntroStatement } from './components/IntroStatement';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyDXSection } from './components/WhyDXSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { TrustSection } from './components/TrustSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DesignConceptsModal } from './components/DesignConceptsModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { CurtainWipe } from './components/CurtainWipe';
import { BackToTop } from './components/BackToTop';
import { useGsapScrollTrigger } from './hooks/useGsapScrollTrigger';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { Layers } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('warm-light');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [conceptsOpen, setConceptsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  // Global Keyboard Shortcuts (Escape to dismiss active modal, Space to toggle ambient audio)
  const handleEscapeModals = () => {
    if (selectedProject) {
      setSelectedProject(null);
      return;
    }
    if (conceptsOpen) {
      setConceptsOpen(false);
      return;
    }
    if (contactOpen) {
      setContactOpen(false);
      return;
    }
  };

  const { audioToast } = useKeyboardShortcuts({
    onEscape: handleEscapeModals,
  });

  // Initialize GSAP ScrollTrigger transitions
  useGsapScrollTrigger([theme]);

  // Set background class and data-theme on document/body according to theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'obsidian' || theme === 'electric-cobalt') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    document.body.className = `antialiased selection:bg-blue-600 selection:text-white ${
      theme === 'obsidian'
        ? 'bg-[#121214] text-white'
        : theme === 'sand-stone'
        ? 'bg-[#ECE9E2] text-neutral-950'
        : theme === 'electric-cobalt'
        ? 'bg-[#0B132B] text-white'
        : 'bg-[#F7F7F5] text-neutral-950'
    }`;
  }, [theme]);

  // Handle direct anchor linking (e.g. #team, #services, #work) on page load and hash change
  useEffect(() => {
    const handleHashNavigation = () => {
      const rawHash = window.location.hash.replace('#', '');
      if (rawHash) {
        // Support alias: if '#trust' is visited, scroll to 'sectors'
        const targetId = rawHash === 'trust' ? 'sectors' : rawHash;
        const el = document.getElementById(targetId);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    setContactOpen(true);
  };

  return (
    <div
      data-theme={theme}
      className={`min-h-screen font-body transition-colors duration-500 ${
        theme === 'obsidian'
          ? 'bg-[#121214] text-white'
          : theme === 'sand-stone'
          ? 'bg-[#ECE9E2] text-neutral-950'
          : theme === 'electric-cobalt'
          ? 'bg-[#0B132B] text-white'
          : 'bg-[#F7F7F5] text-neutral-950'
      }`}
    >
      {/* GSAP Page Entrance Curtain Wipe */}
      <CurtainWipe />

      {/* Slim Monochromatic Scroll Progress Indicator */}
      <ScrollProgress theme={theme} />

      {/* Subtle Custom Cursor for Desktop */}
      <CustomCursor theme={theme} />

      {/* Sticky Editorial Navigation */}
      <Navigation
        theme={theme}
        onSelectTheme={(t) => setTheme(t)}
        onOpenContact={() => setContactOpen(true)}
        onOpenConcepts={() => setConceptsOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with Layered Visual & Particle Network */}
        <HeroSection
          theme={theme}
          onExploreWork={scrollToWork}
          onStartProject={scrollToContact}
          onOpenConcepts={() => setConceptsOpen(true)}
        />

        {/* 2. Editorial Statement & Philosophy */}
        <IntroStatement theme={theme} />

        {/* 3. Core Services List with Cursor Previews */}
        <ServicesSection theme={theme} />

        {/* 4. Selected Work / Case Studies Portfolio */}
        <FeaturedWork
          theme={theme}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 5. Why DX Section (Principles) */}
        <WhyDXSection theme={theme} />

        {/* 6. Process Section (5-Stage Horizontal Scrubber) */}
        <ProcessSection theme={theme} />

        {/* 7. Meet the Team (Collective & Senior Practitioners) */}
        <TeamSection theme={theme} />

        {/* 8. Built for Ambitious Businesses / Sectors */}
        <TrustSection theme={theme} />

        {/* 9. Final Statement & CTA */}
        <FinalCTA
          theme={theme}
          onOpenContact={() => setContactOpen(true)}
        />
      </main>

      {/* 9. Editorial Footer */}
      <Footer
        theme={theme}
        onOpenConcepts={() => setConceptsOpen(true)}
      />

      {/* Modals & Overlays */}
      <DesignConceptsModal
        isOpen={conceptsOpen}
        onClose={() => setConceptsOpen(false)}
        currentTheme={theme}
        onApplyTheme={(newTheme) => setTheme(newTheme)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={theme}
        onStartProject={() => {
          setSelectedProject(null);
          setContactOpen(true);
        }}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        theme={theme}
      />

      {/* Back To Top Floating Magnetic Button */}
      <BackToTop theme={theme} />

      {/* Accessible Keyboard HUD Notification */}
      {audioToast.visible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all duration-300"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-neutral-700/80 bg-neutral-900/95 px-4 py-2 text-xs font-mono text-white shadow-2xl backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="tracking-wide font-medium">{audioToast.message}</span>
          </div>
        </div>
      )}

      {/* Floating Design Themes Quick Bar at Bottom Right */}
      <aside aria-label="Theme selector" className="fixed bottom-6 right-6 z-30 flex items-center gap-2 rounded-full border border-neutral-300/80 bg-white/90 p-1.5 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/90">
        <button
          onClick={() => setConceptsOpen(true)}
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-mono font-bold text-neutral-800 hover:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-400"
          title="Explore Studio Art Direction Studies"
        >
          <Layers className="h-3.5 w-3.5 text-blue-600" />
          <span className="hidden sm:inline">Art Direction</span>
        </button>

        <div className="h-4 w-[1px] bg-neutral-300 dark:bg-neutral-700" />

        <div className="flex items-center gap-1">
          <button
            onClick={() => setTheme('warm-light')}
            className={`h-6 w-6 rounded-full border-2 transition-all ${
              theme === 'warm-light' ? 'border-blue-600 scale-110' : 'border-neutral-400'
            }`}
            style={{ backgroundColor: '#F7F7F5' }}
            title="Warm Scandinavian (Primary)"
          />
          <button
            onClick={() => setTheme('obsidian')}
            className={`h-6 w-6 rounded-full border-2 transition-all ${
              theme === 'obsidian' ? 'border-blue-600 scale-110' : 'border-neutral-400'
            }`}
            style={{ backgroundColor: '#121214' }}
            title="Obsidian Dark"
          />
          <button
            onClick={() => setTheme('sand-stone')}
            className={`h-6 w-6 rounded-full border-2 transition-all ${
              theme === 'sand-stone' ? 'border-blue-600 scale-110' : 'border-neutral-400'
            }`}
            style={{ backgroundColor: '#ECE9E2' }}
            title="Sand & Stone"
          />
          <button
            onClick={() => setTheme('electric-cobalt')}
            className={`h-6 w-6 rounded-full border-2 transition-all ${
              theme === 'electric-cobalt' ? 'border-blue-500 scale-110' : 'border-neutral-400'
            }`}
            style={{ backgroundColor: '#0B132B' }}
            title="Electric Cobalt"
          />
        </div>
      </aside>
    </div>
  );
}
