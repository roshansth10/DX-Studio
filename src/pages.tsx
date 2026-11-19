import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { LegalLayout } from "./components/LegalLayout";
import { PRIVACY, TERMS, ACCESSIBILITY } from "./data/legalContent";
import { ThemeMode, ProjectItem } from "./types";
import {
  CLIENT_SECTORS,
  PROJECTS,
  SERVICES,
  TEAM_MEMBERS,
  PROCESS_STEPS,
} from "./data/content";
import { PageShell } from "./components/PageShell";
import { FeaturedWork } from "./components/FeaturedWork";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { FinalCTA } from "./components/FinalCTA";
import { HeroSection } from "./components/HeroSection";
import { ContactModal } from "./components/ContactModal";
import { navigateTo } from "./routing";

interface PageProps {
  theme: ThemeMode;
  onOpenContact: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export interface JobPosition {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

/*
Sample future vacancy structure (not published or displayed):
{
  id: "front-end-developer",
  title: "Front-End Developer",
  location: "Kathmandu, Nepal",
  employmentType: "Full-time",
  description: "Build polished, accessible digital experiences for ambitious businesses.",
  responsibilities: [
    "Develop responsive interfaces with React and modern web technologies",
    "Collaborate with designers and engineers from prototype to launch",
  ],
  requirements: [
    "Strong TypeScript and React experience",
    "A thoughtful approach to accessibility and responsive design",
  ],
}
*/

export const JOB_OPENINGS: JobPosition[] = [];

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
      onExploreWork={() => navigateTo("/work")}
      onStartProject={() => navigateTo("/contact#project-inquiry")}
      onOpenConcepts={() => undefined}
    />
    <FeaturedWork theme={theme} onSelectProject={onSelectProject} preview />
    <PreviewBand
      theme={theme}
      eyebrow="Company"
      title="Built with purpose."
      description="Meet the approach, philosophy, and working method behind every DX Studio project."
      href="/about"
      label="About DX Studio"
    />
    <FinalCTA
      theme={theme}
      onOpenContact={() => navigateTo("/contact#project-inquiry")}
    />
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
    className="border-b py-10 sm:py-14 lg:py-16"
    style={{
      backgroundColor: "var(--theme-bg-page)",
      borderColor: "var(--theme-border)",
    }}
  >
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between lg:px-12">
      <div className="max-w-3xl">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
          // {eyebrow}
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
      eyebrow="Portfolio"
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
    className="group w-full text-left overflow-hidden rounded-2xl border theme-border-card theme-bg-card shadow-sm transition-shadow hover:shadow-xl flex flex-col"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
      <img
        src={project.image}
        alt={project.title}
        className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-5 sm:p-6 flex flex-col flex-1">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-600 truncate">
          {project.number} // {project.category}
        </span>
        <span className="font-mono text-xs theme-text-subtle shrink-0">
          {project.year}
        </span>
      </div>
      <h2 className="mt-2 font-heading text-xl sm:text-2xl font-bold theme-text-primary">
        {project.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed theme-text-muted line-clamp-3">
        {project.tagline}
      </p>
      <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-blue-600 mt-auto pt-2">
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
      eyebrow={project.category}
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
        <RouteButton label="Start a Project" href="/contact#project-inquiry" />
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
  <PageShell theme={theme}>
    <ServicesSection theme={theme} />
    <div className="mt-4 pb-2 text-center">
      <RouteButton label="Start a Project" href="/contact#project-inquiry" />
    </div>
  </PageShell>
);
export const TeamPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell theme={theme}>
    <TeamSection theme={theme} />
  </PageShell>
);
export const AboutPage: React.FC<PageProps> = ({
  theme,
  onOpenContact,
}) => {
  const isDark = theme === "obsidian";
  const isSand = theme === "sand-stone";

  const services = [
    {
      number: "01",
      title: "Website Design & Development",
      description:
        "Editorial, responsive websites built around clear positioning and dependable engineering.",
      featured: true,
    },
    {
      number: "02",
      title: "Custom Web Applications",
      description:
        "Purpose-built tools and platforms that streamline work and connect with business systems.",
    },
    {
      number: "03",
      title: "Digital Solutions",
      description:
        "Practical technology initiatives shaped around a specific challenge or opportunity.",
    },
    {
      number: "04",
      title: "Digital Marketing",
      description:
        "Search, content, and campaign direction focused on measurable growth.",
    },
    {
      number: "05",
      title: "Social Media Management",
      description:
        "Consistent, brand-led publishing designed to build reach and audience trust.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Understand",
      description:
        "Understand the business, its challenges, and its objectives.",
    },
    {
      number: "02",
      title: "Strategize",
      description:
        "Identify the right approach, technology, and direction.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Design, develop, test, and refine the solution.",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Launch, support, and improve the experience.",
    },
  ];

  const philosophy = [
    {
      number: "01",
      title: "Design",
      description:
        "Good design is more than appearance. It's about clarity, usability, and creating experiences that make sense.",
    },
    {
      number: "02",
      title: "Develop",
      description:
        "We turn ideas into functional digital products through thoughtful engineering, modern technologies, and reliable development practices.",
    },
    {
      number: "03",
      title: "Experience",
      description:
        "The final result matters. We focus on building digital experiences that are useful, intuitive, and meaningful to the people who use them.",
    },
  ];

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
      <section className="relative overflow-hidden">
        <div
          className={`pointer-events-none absolute inset-0 ${
            isDark ? "editorial-grid-dark" : "editorial-grid"
          } opacity-70`}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 sm:px-6 sm:pb-28 lg:px-12 lg:pb-36">
          <div className="gsap-heading-reveal">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // About DX Studio
            </span>
            <h1 className="mt-7 max-w-[1100px] font-heading text-5xl font-bold leading-[0.96] tracking-tight sm:text-7xl lg:text-[6.5rem]">
              We build what moves{" "}
              <span className="text-blue-600">businesses forward.</span>
            </h1>
          </div>

          <div className="mt-10 grid items-end gap-10 md:grid-cols-12 gsap-heading-reveal">
            <p className="max-w-2xl text-lg leading-relaxed theme-text-muted md:col-span-7 sm:text-xl">
              DX Studio brings together design, technology, and digital
              strategy to help businesses turn ideas into impactful digital
              experiences.
            </p>
            <div className="md:col-span-5 md:justify-self-end">
              <div className="flex min-w-[280px] items-center justify-between border-y py-4 theme-border">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-blue-600">
                  Our philosophy
                </span>
                <span className="font-heading text-sm font-bold">
                  DESIGN. DEVELOP. EXPERIENCE.
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px border theme-border md:grid-cols-4 gsap-stagger-container">
            {["Strategy", "Interface", "Engineering", "Outcome"].map(
              (item, index) => (
                <div
                  key={item}
                  className="relative min-h-28 p-5 theme-bg-card gsap-stagger-item sm:min-h-36 sm:p-7"
                >
                  <span className="absolute bottom-5 left-5 font-heading text-lg font-bold sm:bottom-7 sm:left-7 sm:text-2xl">
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="border-y py-20 theme-border sm:py-28 lg:py-36 gsap-section-reveal">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // Who We Are
            </span>
          </div>
          <div className="md:col-span-8">
            <h2 className="max-w-4xl font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              More than just a digital studio.
            </h2>
            <div className="mt-8 grid gap-6 text-base leading-relaxed theme-text-muted sm:text-lg md:grid-cols-2">
              <p>
                DX Studio is a technology-focused company built around solving
                real business challenges through digital solutions. From
                developing functional websites to creating meaningful digital
                experiences, we combine creativity with engineering to deliver
                solutions that serve a purpose.
              </p>
              <p>
                We believe technology should not simply make businesses look
                better online. It should help them work better, connect better,
                and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 gsap-section-reveal">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 flex items-end justify-between border-b pb-6 theme-border">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                // Our Philosophy
              </span>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                Design. Develop. Experience.
              </h2>
            </div>
          </div>
          <div className="divide-y border-b theme-border gsap-stagger-container">
            {philosophy.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 py-8 transition-colors duration-300 hover:text-blue-600 md:grid-cols-12 sm:py-10 gsap-stagger-item"
              >
                <span className="font-mono text-xs text-blue-600 md:col-span-1">
                  {item.number}
                </span>
                <h3 className="font-heading text-3xl font-bold sm:text-4xl md:col-span-3">
                  {item.title}
                </h3>
                <p className="max-w-xl text-base leading-relaxed theme-text-muted md:col-span-7 sm:text-lg">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y py-20 theme-border sm:py-28 lg:py-36 gsap-section-reveal">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12 max-w-3xl gsap-heading-reveal">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // What We Do
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              One team across the digital system.
            </h2>
          </div>

          <div className="grid gap-px border theme-border md:grid-cols-2 lg:grid-cols-6 gsap-stagger-container">
            {services.map((service) => (
              <article
                key={service.number}
                className={`group min-h-64 p-6 theme-bg-card transition-colors duration-300 gsap-stagger-item ${
                  isDark
                    ? "hover:bg-blue-600 hover:text-white"
                    : "hover:bg-blue-50 hover:text-neutral-950"
                } ${
                  service.featured
                    ? "md:col-span-2 lg:col-span-2 lg:row-span-2"
                    : "md:col-span-1 lg:col-span-2"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-blue-600">
                    {service.number}
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
                <h3
                  className={`mt-12 font-heading font-bold leading-tight ${
                    service.featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`mt-5 max-w-sm text-sm leading-relaxed theme-text-muted ${
                    isDark ? "group-hover:text-white/80" : ""
                  }`}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 lg:py-36 gsap-section-reveal">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-14 max-w-3xl gsap-heading-reveal">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // How We Work
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              From an idea to something real.
            </h2>
          </div>
          <div className="relative gsap-stagger-container">
            <div
              className="absolute left-5 top-0 h-full w-px bg-blue-600/40 md:left-0 md:right-0 md:top-5 md:h-px md:w-full"
              aria-hidden="true"
            />
            <div className="grid gap-10 md:grid-cols-4 md:gap-6">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="relative pl-14 md:pl-0 md:pt-14 gsap-stagger-item"
                >
                  <span className="absolute left-2.5 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 md:left-0 md:top-3" />
                  <span className="font-mono text-xs text-blue-600">
                    {step.number}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-bold">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed theme-text-muted sm:text-base">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`border-y py-20 sm:py-28 lg:py-36 ${
          isDark ? "border-neutral-800" : "border-[#DEDEDA]"
        } gsap-section-reveal`}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-12 lg:px-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // Our Approach
            </span>
          </div>
          <div className="md:col-span-8 gsap-heading-reveal">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
              Technology with a purpose.
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed theme-text-secondary sm:text-2xl">
              We don't believe in building digital products simply for the sake
              of having them. Every project should solve a problem, improve an
              experience, or create an opportunity.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`relative overflow-hidden py-20 sm:py-28 lg:py-36 ${
          isDark
            ? "bg-[#0E0E10]"
            : isSand
              ? "bg-[#DCD8D0]"
              : "bg-[#EDEDEA]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-end gap-10 md:grid-cols-12 gsap-heading-reveal">
            <div className="md:col-span-8">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                // Initiation
              </span>
              <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Have something in mind? Let's build it.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed theme-text-muted">
                Whether you're starting with an idea or looking to improve an
                existing digital presence, we're ready to explore what's
                possible.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:col-span-4 md:justify-end">
              <button
                onClick={() => navigateTo("/contact#project-inquiry")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-500"
              >
                Start a Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => navigateTo("/work")}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isDark
                    ? "border-neutral-700 text-white hover:border-blue-500 hover:text-blue-400"
                    : "border-neutral-300 text-neutral-950 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                Explore Our Work
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export const CareersPage: React.FC<PageProps> = ({ theme }) => (
  <PageShell
    theme={theme}
    eyebrow="Careers"
    title="Build What's Next. With Us."
    description="At DX Studio, meaningful work comes from curiosity, craft, and a willingness to keep learning. We're building a team that thinks carefully, collaborates openly, and helps businesses move forward."
  >
    <section className="py-6 sm:py-10">
      <div className="mb-10 gsap-heading-reveal">
        <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
          // Opportunities
        </span>
      </div>

      <div className="border-y py-12 sm:py-16 theme-border gsap-section-reveal">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-blue-600 theme-border">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          </span>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            No Open Positions at the Moment.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed theme-text-muted sm:text-lg">
            We don't have any active openings right now, but we're always
            interested in connecting with talented people. Check back soon!
          </p>
        </div>
      </div>
    </section>
  </PageShell>
);

export const JobDetailPage: React.FC<PageProps & { position?: JobPosition }> = ({
  theme,
  position,
}) => (
  <PageShell
    theme={theme}
    eyebrow="Careers"
    title={position?.title ?? "Position unavailable"}
    description={
      position
        ? `${position.location} · ${position.employmentType}`
        : "This position is no longer available."
    }
  >
    {position ? (
      <article className="grid gap-10 py-6 md:grid-cols-12 sm:py-10 gsap-section-reveal">
        <div className="md:col-span-8">
          <h2 className="font-heading text-2xl font-bold">About the role</h2>
          <p className="mt-4 leading-relaxed theme-text-muted">
            {position.description}
          </p>

          <h2 className="mt-10 font-heading text-2xl font-bold">
            Responsibilities
          </h2>
          <ul className="mt-4 space-y-3">
            {position.responsibilities.map((item) => (
              <li key={item} className="flex items-start gap-3 theme-text-muted">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="h-fit border-y py-6 md:col-span-4 theme-border">
          <h2 className="font-heading text-xl font-bold">Requirements</h2>
          <ul className="mt-4 space-y-3">
            {position.requirements.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm theme-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </article>
    ) : (
      <div className="border-y py-12 text-center theme-border">
        <button
          type="button"
          onClick={() => navigateTo("/careers")}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-blue-500"
        >
          View Careers
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    )}
  </PageShell>
);

export const ContactPage: React.FC<PageProps> = ({ theme, onOpenContact }) => (
  <main
    className={`flex-1 pt-28 sm:pt-36 ${
      theme === "obsidian"
        ? "bg-[#121214] text-white"
        : theme === "sand-stone"
          ? "bg-[#ECE9E2] text-neutral-950"
          : "bg-[#F7F7F5] text-neutral-950"
    }`}
  >
    <section
      className={`relative overflow-hidden pb-14 sm:pb-20 lg:pb-24 ${
        theme === "obsidian" ? "editorial-grid-dark" : "editorial-grid"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-12 md:grid-cols-12 md:gap-10 lg:gap-16">
          <div className="relative md:col-span-5 lg:col-span-5 gsap-heading-reveal">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // Start a Conversation
            </span>
            <h1 className="mt-6 font-heading text-[3.25rem] font-bold leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-[5.25rem]">
              Let's Build
              <span className="block text-blue-600">Something Together.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed theme-text-muted sm:text-xl">
              Have an idea, a challenge, or a digital project in mind? We'd
              like to understand what you're trying to build and explore how
              we can help.
            </p>
            <p className="mt-5 max-w-lg border-l-2 border-blue-600 pl-4 text-sm leading-relaxed theme-text-muted">
              Share a little context about your goals, budget, and timeline.
              We'll review your brief and respond within 24 hours.
            </p>
            <div className="mt-8 grid max-w-lg grid-cols-3 border-y theme-border">
              {[
                ["01", "Discuss"],
                ["02", "Define"],
                ["03", "Build"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="border-r py-3 pr-3 last:border-r-0 last:pl-3 theme-border"
                >
                  <span className="font-mono text-[10px] text-blue-600">{number}</span>
                  <span className="mt-1 block font-heading text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-7 md:justify-self-end md:w-full gsap-heading-reveal">
            <ContactModal
              isOpen={false}
              embedded
              onClose={() => undefined}
              theme={theme}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="border-t py-14 theme-border sm:py-20 lg:py-20 gsap-section-reveal">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 flex items-end justify-between border-b pb-5 theme-border gsap-heading-reveal">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
            // Contact Information
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest theme-text-subtle sm:block">
            Kathmandu · Nepal · UTC+5:45
          </span>
        </div>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <a
              href="mailto:info.dxcreativestudio@gmail.com"
              className="group block border-b pb-6 theme-border"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Email
              </span>
              <span className="mt-3 flex items-center justify-between gap-4 font-heading text-xl font-bold transition-colors group-hover:text-blue-600 sm:text-3xl">
                <span className="break-all">info.dxcreativestudio@gmail.com</span>
                <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </a>
            <div className="grid sm:grid-cols-2">
              <div className="border-b py-7 pr-0 sm:border-r sm:pr-7 theme-border">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  Phone / WhatsApp
                </span>
                <a
                  href="https://wa.me/9779764775438"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block font-heading text-xl font-bold hover:text-blue-600 sm:text-2xl"
                >
                  +977 9764775438
                </a>
              </div>
              <div className="border-b py-7 sm:pl-7 theme-border">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/dxcreativestudio/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 font-heading text-xl font-bold hover:text-blue-600 sm:text-2xl"
                >
                  @dxcreativestudio
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="py-7">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Office
              </span>
              <p className="mt-3 max-w-md font-heading text-2xl font-bold leading-tight sm:text-3xl">
                Kathmandu, Nepal
                <span className="block text-base font-medium theme-text-muted sm:text-lg">
                  Goldhunga, Tarkeshwor-5
                </span>
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Goldhunga%2C+Tarkeshwor-5%2C+Kathmandu%2C+Nepal"
            target="_blank"
            rel="noreferrer"
            className={`group relative flex min-h-72 overflow-hidden border p-6 lg:col-span-5 gsap-heading-reveal ${
              theme === "obsidian"
                ? "border-neutral-800 bg-[#18181b]"
                : "border-neutral-300 bg-[#E8E7E2]"
            }`}
          >
            <div
              className={`absolute inset-0 opacity-50 ${
                theme === "obsidian" ? "editorial-grid-dark" : "editorial-grid"
              }`}
            />
            <svg
              viewBox="0 0 240 180"
              fill="none"
              className="absolute right-[-8%] top-[-5%] h-[78%] w-[78%] text-neutral-400/40"
              aria-hidden="true"
            >
              <path d="M16 142C55 108 48 70 92 54C128 41 158 60 224 18" stroke="currentColor" strokeWidth="1" />
              <path d="M24 38C64 58 93 88 132 118C158 138 190 148 226 154" stroke="currentColor" strokeWidth="1" />
              <circle cx="136" cy="82" r="30" stroke="currentColor" />
              <circle cx="136" cy="82" r="18" stroke="currentColor" strokeDasharray="3 5" />
            </svg>
            <div className="relative z-10 mt-auto">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-600">
                Google Maps
              </span>
              <div className="mt-3 flex items-center gap-3 font-heading text-3xl font-bold">
                View Location
                <span className="flex h-9 w-9 items-center justify-center bg-blue-600 text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-2 text-sm theme-text-muted">
                Kathmandu, Nepal
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>
);

// ─── Legal Pages ──────────────────────────────────────────────────────────────

interface LegalPageProps {
  theme: ThemeMode;
}

export const PrivacyPage: React.FC<LegalPageProps> = ({ theme }) => (
  <LegalLayout
    page={PRIVACY}
    theme={theme}
    relatedPages={[
      { label: "Terms of Engagement", href: "/terms" },
      { label: "Accessibility", href: "/accessibility" },
    ]}
  />
);

export const TermsPage: React.FC<LegalPageProps> = ({ theme }) => (
  <LegalLayout
    page={TERMS}
    theme={theme}
    relatedPages={[
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Accessibility", href: "/accessibility" },
    ]}
  />
);

export const AccessibilityPage: React.FC<LegalPageProps> = ({ theme }) => (
  <LegalLayout
    page={ACCESSIBILITY}
    theme={theme}
    relatedPages={[
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Engagement", href: "/terms" },
    ]}
  />
);
