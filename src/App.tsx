import React, { useEffect, useState } from "react";
import { ThemeMode, ProjectItem } from "./types";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";
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
  AccessibilityPage,
  CareersPage,
  ContactPage,
  HomePage,
  JOB_OPENINGS,
  JobDetailPage,
  NotFoundPage,
  PrivacyPage,
  ProjectPage,
  ServicesPage,
  TeamPage,
  TermsPage,
  WorkPage,
} from "./pages";

const themeBackground = (theme: ThemeMode) =>
  theme === "obsidian"
    ? "bg-[#121214] text-white"
    : theme === "sand-stone"
      ? "bg-[#ECE9E2] text-neutral-950"
      : "bg-[#F7F7F5] text-neutral-950";

const SITE_URL = "https://www.dxcreativestudio.com";

interface PageMetadata {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
}

const PAGE_METADATA: Record<string, PageMetadata> = {
  "/": {
    title: "DX Studio | Website Design & Development in Kathmandu, Nepal",
    description:
      "DX Studio is a Kathmandu-based design and technology studio offering website design, website development, software, SEO, social media, and digital campaigns.",
    url: `${SITE_URL}/`,
  },
  "/about": {
    title: "About DX Studio | Design. Develop. Experience.",
    description:
      "Learn how DX Studio combines design, engineering, and purposeful digital experiences to help businesses in Nepal and beyond.",
    url: `${SITE_URL}/about`,
  },
  "/services": {
    title: "Digital Services in Nepal | DX Studio",
    description:
      "Explore DX Studio services for website design, website development, software development, SEO, social media management, and digital advertising campaigns.",
    url: `${SITE_URL}/services`,
  },
  "/work": {
    title: "Featured Work | DX Studio Portfolio",
    description:
      "View DX Studio's selected websites and digital projects across ecommerce, travel, branding, sports, and other industries.",
    url: `${SITE_URL}/work`,
  },
  "/team": {
    title: "Meet the Team | DX Studio",
    description:
      "Meet the DX Studio team working across design, development, strategy, and project delivery.",
    url: `${SITE_URL}/team`,
  },
  "/careers": {
    title: "Careers at DX Studio | Kathmandu, Nepal",
    description:
      "Explore career opportunities and opportunities to grow with DX Studio.",
    url: `${SITE_URL}/careers`,
  },
  "/contact": {
    title: "Contact DX Studio | Start a Project",
    description:
      "Contact DX Studio in Kathmandu, Nepal to discuss website design, development, software, SEO, social media, or digital campaign needs.",
    url: `${SITE_URL}/contact`,
  },
  "/privacy": {
    title: "Privacy Policy | DX Studio",
    description:
      "Read the DX Studio privacy policy and how information collected through the website is handled.",
    url: `${SITE_URL}/privacy`,
  },
  "/terms": {
    title: "Terms of Engagement | DX Studio",
    description:
      "Review DX Studio terms for website projects and digital service engagements.",
    url: `${SITE_URL}/terms`,
  },
  "/accessibility": {
    title: "Accessibility Statement | DX Studio",
    description:
      "Read DX Studio's accessibility statement and how to report a barrier.",
    url: `${SITE_URL}/accessibility`,
  },
};

export default function App() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<ThemeMode>("warm-light");
  const [contactOpen, setContactOpen] = useState(false);

  useLenisScroll(pathname);

  const { audioToast } = useKeyboardShortcuts({
    onEscape: () => {
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
    const hash = window.location.hash;
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    const projectSlug = pathname.startsWith("/work/")
      ? pathname.split("/")[2]
      : "";
    const project = PROJECTS.find((item) => item.id === projectSlug);
    const metadata: PageMetadata =
      project
        ? {
            title: `${project.title} | DX Studio Project`,
            description: project.tagline,
            url: `${SITE_URL}/work/${project.id}`,
            type: "article",
          }
        : PAGE_METADATA[pathname] ?? {
            title: "DX Studio | Digital Creative & Technology Studio",
            description:
              "DX Studio provides design, development, software, SEO, social media, and digital campaign services.",
            url: `${SITE_URL}${pathname === "/" ? "/" : pathname}`,
          };

    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute("href", metadata.url);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", metadata.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", metadata.url);
    document
      .querySelector('meta[property="og:type"]')
      ?.setAttribute("content", metadata.type ?? "website");
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", metadata.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", metadata.description);
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
  const jobSlug = pathname.startsWith("/careers/")
    ? pathname.split("/")[2]
    : "";
  const position = JOB_OPENINGS.find((item) => item.id === jobSlug);

  let page: React.ReactNode;
  if (pathname === "/") page = <HomePage {...pageProps} />;
  else if (pathname === "/work") page = <WorkPage {...pageProps} />;
  else if (project) page = <ProjectPage {...pageProps} project={project} />;
  else if (pathname === "/services") page = <ServicesPage {...pageProps} />;
  else if (pathname === "/team") page = <TeamPage {...pageProps} />;
  else if (pathname === "/about") page = <AboutPage {...pageProps} />;
  else if (pathname === "/careers") page = <CareersPage {...pageProps} />;
  else if (pathname.startsWith("/careers/"))
    page = position
      ? <JobDetailPage {...pageProps} position={position} />
      : <NotFoundPage {...pageProps} />;
  else if (pathname === "/contact") page = <ContactPage {...pageProps} />;
  else if (pathname === "/privacy") page = <PrivacyPage theme={theme} />;
  else if (pathname === "/terms") page = <TermsPage theme={theme} />;
  else if (pathname === "/accessibility") page = <AccessibilityPage theme={theme} />;
  else page = <NotFoundPage {...pageProps} />;

  return (
    <div
      data-theme={theme}
      className={`min-h-screen flex flex-col font-body transition-colors duration-500 ${themeBackground(theme)}`}
    >
      <CurtainWipe />
      <ScrollProgress theme={theme} />
      <CustomCursor theme={theme} />
      <Navigation
        theme={theme}
        onSelectTheme={setTheme}
        onOpenContact={() => setContactOpen(true)}
      />
      <div className="flex-1 flex flex-col">{page}</div>
      {pathname !== "/contact" && <Footer theme={theme} />}
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 rounded-full border border-neutral-300/80 bg-white/90 p-1.5 shadow-xl backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/90"
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
