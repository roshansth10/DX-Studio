import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Mail } from "lucide-react";
import { ThemeMode, ProjectItem } from "./types";
import {
  CLIENT_SECTORS,
  PROJECTS,
  SERVICES,
  TEAM_MEMBERS,
  PROCESS_STEPS,
  PRINCIPLES,
} from "./data/content";
import { PageShell } from "./components/PageShell";
import { FeaturedWork } from "./components/FeaturedWork";
import { IntroStatement } from "./components/IntroStatement";
import { ProcessSection } from "./components/ProcessSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { TrustSection } from "./components/TrustSection";
import { FinalCTA } from "./components/FinalCTA";
import { HeroSection } from "./components/HeroSection";
import { WhyDXSection } from "./components/WhyDXSection";
import { navigateTo } from "./routing";

interface PageProps {
  theme: ThemeMode;
  onOpenContact: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

const RouteButton: React.FC<{
  label: string;
  href: string;
  dark?: boolean;
}> = ({ label, href, dark }) => (
  <button
    onClick={() => navigateTo(href)}
    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${dark ? "bg-neutral-950 text-white hover:bg-blue-600" : "bg-blue-600 text-white hover:bg-blue-500"}`}
  >
    {label}
    <ArrowUpRight className="h-3.5 w-3.5" />
  </button>
);

export const HomePage: React.FC<PageProps> = ({
  theme,
  onOpenContact,
  onSelectProject,
}) => (
  <main>
    <HeroSection
      theme={theme}
      onExploreWork={() => {
        const el = document.getElementById("work");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else navigateTo("/work");
      }}
      onStartProject={onOpenContact}
      onOpenConcepts={() => undefined}
    />
    <IntroStatement theme={theme} />
    <ServicesSection theme={theme} />
    <FeaturedWork theme={theme} onSelectProject={onSelectProject} />
    <WhyDXSection theme={theme} />
    <ProcessSection theme={theme} />
    <TeamSection theme={theme} />
    <TrustSection theme={theme} />
    <FinalCTA theme={theme} onOpenContact={onOpenContact} />
  </main>
);

const PreviewBand: React.FC<{
  theme: ThemeMode;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  label: string;
}> = ({ theme, eyebrow, title, description, href, label }) => (
  <section
    className="border-b py-20 sm:py-28"
    style={{
      backgroundColor: "var(--theme-bg-page)",
      borderColor: "var(--theme-border)",
    }}
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-12">
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-heading text-4xl sm:text-6xl font-bold tracking-tight theme-text-primary">
          {title}
        </h2>
        <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed theme-text-muted">
          {description}
        </p>
      </div>
      <RouteButton label={label} href={href} />
    </div>
  </section>
);

export const WorkPage: React.FC<PageProps> = ({ theme, onSelectProject }) => {
  const categories = [
    "All",
    "Ecommerce",
    "Travel & Trek",
    "Creative Websites",
    "Branding",
    "Other",
  ];
  const [category, setCategory] = useState("All");
  const projects =
    category === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.portfolioCategory === category);
  return (
    <PageShell
      theme={theme}
      eyebrow="03 // Portfolio"
      title="Selected Work"
      description="A considered collection of digital products, identities, and experiences built for ambitious teams."
    >
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-full border px-4 py-2 text-xs font-mono transition-colors ${category === item ? "border-blue-600 bg-blue-600 text-white" : "theme-border theme-text-primary hover:border-blue-500"}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </PageShell>
  );
};

const ProjectCard: React.FC<{
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}> = ({ project, onSelect }) => (
  <button
    onClick={() => {
      onSelect(project);
      navigateTo(`/work/${project.id}`);
    }}
    className="group text-left overflow-hidden rounded-2xl border theme-border-card theme-bg-card shadow-sm transition-shadow hover:shadow-xl"
  >
    <div className="overflow-hidden bg-neutral-950">
      <img
        src={project.image}
        alt={project.title}
        className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
          {project.category}
        </span>
        <span className="font-mono text-xs theme-text-subtle">
          {project.year}
        </span>
      </div>
      <h2 className="mt-2 font-heading text-2xl font-bold theme-text-primary">
        {project.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed theme-text-muted">
        {project.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-blue-600">
        View Project <ArrowUpRight className="h-3 w-3" />
      </span>
    </div>
  </button>
);

export const ProjectPage: React.FC<PageProps & { project: ProjectItem }> = ({
  theme,
  project,
  onOpenContact,
  onSelectProject,
}) => {
  const related = PROJECTS.filter((item) => item.id !== project.id).slice(0, 2);
  return (
    <PageShell
      theme={theme}
      eyebrow={`${project.number} // ${project.category}`}
      title={project.title}
      description={project.tagline}
    >
      <div className="overflow-hidden rounded-2xl border theme-border-card bg-black">
        <img
          src={project.image}
          alt={project.title}
          className="block w-full h-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500"
        >
          Visit Live Site
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
            Project Overview
          </span>
          <p className="mt-4 text-lg leading-relaxed theme-text-secondary">
            {project.description}
          </p>
        </div>
        <div className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
            Deliverables
          </span>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <span
                key={item}
                className="rounded-lg border px-3 py-2 text-xs font-mono theme-border theme-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        className="mt-12 border-t pt-8"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-blue-600">
          Outcomes
        </span>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="flex gap-2 rounded-xl border p-4 text-sm theme-border theme-bg-card"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
              {metric}
            </div>
          ))}
        </div>
      </div>
      <div
        className="mt-12 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "var(--theme-border)" }}
      >
        <p className="font-heading text-2xl font-bold theme-text-primary">
          Build something with us.
        </p>
        <RouteButton label="Start a Project" href="/contact" />
      </div>
      <div className="mt-16">
        <h2 className="font-heading text-3xl font-bold theme-text-primary">
          Related Work
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {related.map((item) => (
            <ProjectCard
              key={item.id}
              project={item}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
};

export const ServicesPage: React.FC<PageProps> = ({ theme, onOpenContact }) => (
  <PageShell
    theme={theme}
    eyebrow="02 // Capabilities"
    title="Services"
    description="Strategy, identity, experience, engineering, and growth working as one focused studio."
  >
    <ServicesSection theme={theme} />
    <div className="mt-12 text-center">
      <RouteButton label="Start a Project" href="/contact" />
    </div>
  </PageShell>
);
export const PhilosophyPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="04 // Philosophy"
    title="Purpose before technology."
    description="We reject decorative vanity. Every decision begins with the business mechanics, user motivations, and commercial imperatives behind the work."
  >
    <IntroStatement theme={theme} />
  </PageShell>
);
export const ProcessPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="05 // Engagement Model"
    title="From idea to impact."
    description="A transparent, sprint-based workflow designed to eliminate guesswork, accelerate execution, and protect creative integrity."
  >
    <ProcessSection theme={theme} />
  </PageShell>
);
export const TeamPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="06 // Collective"
    title="People behind the craft."
    description="A focused Kathmandu team combining design, engineering, strategy, and direct collaboration."
  >
    <TeamSection theme={theme} />
  </PageShell>
);
export const SectorsPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="07 // Trust & Reach"
    title="Built for ambitious businesses."
    description="We partner with teams across sectors where thoughtful digital work creates meaningful momentum."
  >
    <TrustSection theme={theme} />
  </PageShell>
);
export const AboutPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="About DX Studio"
    title="Small team. Serious craft."
    description="DX Studio is a Kathmandu-based creative technology studio helping ambitious organizations turn complex ideas into clear, durable digital experiences."
  >
    <div className="grid gap-8 md:grid-cols-3">
      {PRINCIPLES.map((item) => (
        <div
          key={item.number}
          className="rounded-2xl border p-6 theme-border theme-bg-card"
        >
          <span className="font-mono text-xs text-blue-600">{item.number}</span>
          <h2 className="mt-4 font-heading text-2xl font-bold theme-text-primary">
            {item.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed theme-text-muted">
            {item.details}
          </p>
        </div>
      ))}
    </div>
  </PageShell>
);
export const ContactPage: React.FC<PageProps> = ({ theme, onOpenContact }) => (
  <PageShell
    theme={theme}
    eyebrow="08 // Initiation"
    title="Have something worth building?"
    description="Tell us what you are working on. We will figure out the rest and review your brief within 24 hours."
  >
    <div className="flex flex-col items-start gap-6 rounded-2xl border p-6 sm:p-10 theme-border theme-bg-card">
      <a
        href="mailto:roshan.devworks@gmail.com"
        className="inline-flex items-center gap-2 text-lg font-semibold text-blue-600 hover:underline"
      >
        <Mail className="h-5 w-5" />
        roshan.devworks@gmail.com
      </a>
      <button
        onClick={onOpenContact}
        className="rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500"
      >
        Open Project Brief
      </button>
    </div>
  </PageShell>
);
