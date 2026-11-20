import React from "react";
import { ThemeMode } from "../types";
import { TEAM_MEMBERS } from "../data/content";

interface TeamSectionProps {
  theme: ThemeMode;
}

const TEAM_SECTIONS = [
  { id: "leadership", title: "Leadership", memberIds: ["roshan-shrestha"] },
  {
    id: "team-leads",
    title: "Team Leads",
    memberIds: ["aachal-shrestha", "shrishma-poudel"],
  },
  {
    id: "management",
    title: "Management",
    memberIds: ["bijay-babu-bhatta", "aadarsha-paudel"],
  },
  {
    id: "development-engineering",
    title: "Development & Engineering",
    memberIds: [
      "injal-thapa",
      "muna-kc",
      "bikash-kattel",
      "aashish-sapkota",
    ],
  },
  {
    id: "design-quality",
    title: "Design & Quality",
    memberIds: ["binisha-chhetri", "sandhya-gurung"],
  },
  {
    id: "search-visibility",
    title: "Search & Visibility",
    memberIds: ["anisha-bhandari"],
  },
] as const;

const SectionHeading: React.FC<{
  number: string;
  title: string;
  count: number;
}> = ({ number, title, count }) => (
  <div className="mb-7">
    <div className="flex items-baseline gap-4">
      <span className="font-mono text-xs font-bold tracking-widest text-blue-600">
        {number}
      </span>
      <h2 className="font-heading text-2xl font-bold tracking-tight theme-text-primary sm:text-3xl">
        {title}
      </h2>
      <span className="ml-auto whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-widest theme-text-subtle">
        {String(count).padStart(2, "0")} {count === 1 ? "Member" : "Members"}
      </span>
    </div>
    <div
      className="mt-4 h-px w-full"
      style={{ backgroundColor: "var(--theme-border)" }}
    />
  </div>
);

export const TeamSection: React.FC<TeamSectionProps> = ({ theme }) => {
  const membersById = new Map(
    TEAM_MEMBERS.map((member) => [member.id, member]),
  );
  const leadership = membersById.get("roshan-shrestha");

  const renderMemberCard = (memberId: string) => {
    const member = membersById.get(memberId);
    if (!member) return null;

    return (
      <article
        key={member.id}
        className="group relative overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
        style={{
          backgroundColor: "var(--theme-bg-card)",
          borderColor: "var(--theme-border-card)",
        }}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden border-b"
          style={{
            borderColor: "var(--theme-border)",
            backgroundColor: "var(--theme-bg-card-subtle)",
          }}
        >
          <img
            src={encodeURI(member.portrait)}
            alt={member.name}
            className="h-full w-full object-cover contrast-[1.02] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            style={{
              objectPosition: member.portraitPosition || "center 20%",
            }}
            loading="lazy"
          />
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="font-heading text-xl font-bold tracking-tight theme-text-primary sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-2 font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
            {member.role}
          </p>
        </div>
      </article>
    );
  };

  return (
    <section
      id="team"
      data-theme={theme}
      className="relative scroll-mt-20 pb-16 transition-colors duration-300 sm:pb-24 lg:pb-28"
    >
      <div className="relative z-10">
        <header className="grid gap-8 pb-12 gsap-heading-reveal lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              // THE PEOPLE BEHIND DX
            </span>
            <h1 className="mt-5 max-w-3xl font-heading text-5xl font-bold leading-[0.98] tracking-[-0.045em] theme-text-primary sm:text-6xl lg:text-7xl">
              Different minds.
              <span className="block text-blue-600">One direction.</span>
            </h1>
          </div>
          <p className="max-w-xl text-base leading-relaxed theme-text-muted sm:text-lg">
            DX Studio brings together people across design, development, and
            technology to turn ideas into digital experiences. Every project is
            shaped by the people doing the work, from the first conversation to
            the final build.
          </p>
        </header>

        <div className="space-y-16 pt-16 sm:space-y-24 sm:pt-20">
          {leadership && (
            <section id="leadership" className="scroll-mt-36 gsap-section-reveal">
              <SectionHeading number="01" title="Leadership" count={1} />
              <article
                className="grid overflow-hidden rounded-3xl border md:grid-cols-[0.9fr_1.1fr]"
                style={{
                  backgroundColor: "var(--theme-bg-card)",
                  borderColor: "var(--theme-border-card)",
                }}
              >
                <div
                  className="aspect-[4/3] overflow-hidden border-b md:border-b-0 md:border-r"
                  style={{
                    backgroundColor: "var(--theme-bg-card-subtle)",
                    borderColor: "var(--theme-border)",
                  }}
                >
                  <img
                    src={encodeURI(leadership.portrait)}
                    alt={leadership.name}
                    className="h-full w-full object-cover contrast-[1.02]"
                    style={{
                      objectPosition: leadership.portraitPosition || "center 20%",
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                    {leadership.role}
                  </span>
                  <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight theme-text-primary sm:text-4xl">
                    {leadership.name}
                  </h3>
                  <p className="mt-4 line-clamp-3 max-w-md text-sm leading-relaxed theme-text-muted sm:text-base">
                    {leadership.bio}
                  </p>
                </div>
              </article>
            </section>
          )}

          {TEAM_SECTIONS.slice(1).map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-36 gsap-section-reveal"
            >
              <SectionHeading
                number={String(index + 2).padStart(2, "0")}
                title={section.title}
                count={section.memberIds.length}
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.memberIds.map(renderMemberCard)}
              </div>
            </section>
          ))}

        </div>
      </div>
    </section>
  );
};
