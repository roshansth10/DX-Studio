import React, { useEffect, useState } from "react";
import { Layers } from "lucide-react";
import { ThemeMode, ProjectItem } from "./types";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
import { DesignConceptsModal } from "./components/DesignConceptsModal";
import { ContactModal } from "./components/ContactModal";
import { CurtainWipe } from "./components/CurtainWipe";
import { BackToTop } from "./components/BackToTop";
import { useGsapScrollTrigger } from "./hooks/useGsapScrollTrigger";
import { useLenisScroll } from "./hooks/useLenisScroll";
import { useKeyboardShortcuts } from "./hooks/useKeyboardShortcuts";
import { usePathname, navigateTo } from "./routing";
import { PROJECTS } from "./data/content";
import {
  AboutPage,
  ContactPage,
  HomePage,
  PhilosophyPage,
  ProcessPage,
  ProjectPage,
  SectorsPage,
  ServicesPage,
  TeamPage,
  WorkPage,
} from "./pages";

const themeBackground = (theme: ThemeMode) =>
  theme === "obsidian"
    ? "bg-[#121214] text-white"
    : theme === "sand-stone"
      ? "bg-[#ECE9E2] text-neutral-950"
      : "bg-[#F7F7F5] text-neutral-950";

export default function App() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ThemeMode>("warm-light");
  const [conceptsOpen, setConceptsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useLenisScroll(pathname);

  const { audioToast } = useKeyboardShortcuts({
    onEscape: () => {
      setConceptsOpen(false);
      setContactOpen(false);
    },
  });

  useGsapScrollTrigger([theme, pathname]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle(
      "dark",
      theme === "obsidian",
    );
    document.body.className = `antialiased selection:bg-blue-600 selection:text-white ${themeBackground(theme)}`;
    const pageTitle =
      pathname === "/"
        ? "DX Studio — Digital Creative & Technology Studio"
        : pathname.startsWith("/work/")
          ? "Project Case Study — DX Studio"
          : `${pathname
              .slice(1)
              .replace(/-/g, " ")
              .replace(/\b\w/g, (letter) => letter.toUpperCase())} — DX Studio`;
    document.title = pageTitle;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, theme]);

  const openProject = (project: ProjectItem) =>
    navigateTo(`/work/${project.id}`);
  const pageProps = {
    theme,
    onOpenContact: () => setContactOpen(true),
    onSelectProject: openProject,
  };
  const projectSlug = pathname.startsWith("/work/")
    ? pathname.split("/")[2]
    : "";
  const project = PROJECTS.find((item) => item.id === projectSlug);

  let page: React.ReactNode;
  if (pathname === "/") page = <HomePage {...pageProps} />;
  else if (pathname === "/work") page = <WorkPage {...pageProps} />;
  else if (project) page = <ProjectPage {...pageProps} project={project} />;
  else if (pathname === "/services") page = <ServicesPage {...pageProps} />;
  else if (pathname === "/philosophy") page = <PhilosophyPage {...pageProps} />;
  else if (pathname === "/process") page = <ProcessPage {...pageProps} />;
  else if (pathname === "/team") page = <TeamPage {...pageProps} />;
  else if (pathname === "/sectors") page = <SectorsPage {...pageProps} />;
  else if (pathname === "/about") page = <AboutPage {...pageProps} />;
  else if (pathname === "/contact") page = <ContactPage {...pageProps} />;
  else page = <HomePage {...pageProps} />;

  return (
    <div
      data-theme={theme}
      className={`min-h-screen font-body transition-colors duration-500 ${themeBackground(theme)}`}
    >
      <CurtainWipe />
      <ScrollProgress theme={theme} />
      <CustomCursor theme={theme} />
      <Navigation
        theme={theme}
        onSelectTheme={setTheme}
        onOpenContact={() => navigateTo("/contact")}
        onOpenConcepts={() => setConceptsOpen(true)}
      />
      {page}
      <Footer theme={theme} onOpenConcepts={() => setConceptsOpen(true)} />
      <DesignConceptsModal
        isOpen={conceptsOpen}
        onClose={() => setConceptsOpen(false)}
        currentTheme={theme}
        onApplyTheme={setTheme}
      />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        theme={theme}
      />
      <BackToTop theme={theme} />
      {audioToast.visible && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 pointer-events-none"
        >
          <div className="flex items-center gap-2.5 rounded-full border border-neutral-700/80 bg-neutral-900/95 px-4 py-2 text-xs font-mono text-white shadow-2xl">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            {audioToast.message}
          </div>
        </div>
      )}
      <aside
        aria-label="Theme selector"
        className="fixed bottom-6 right-6 z-30 flex items-center gap-1.5 rounded-full border border-neutral-300/80 bg-white/90 p-1.5 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/90"
      >
        <div className="flex items-center gap-1">
          {(["warm-light", "obsidian", "sand-stone"] as ThemeMode[]).map(
            (item) => (
              <button
                key={item}
                onClick={() => setTheme(item)}
                className={`h-6 w-6 rounded-full border-2 transition-all ${theme === item ? "border-blue-600 scale-110" : "border-neutral-400"}`}
                style={{
                  backgroundColor:
                    item === "warm-light"
                      ? "#F7F7F5"
                      : item === "obsidian"
                        ? "#121214"
                        : "#ECE9E2",
                }}
                title={item}
              />
            ),
          )}
        </div>
      </aside>
    </div>
  );
}
