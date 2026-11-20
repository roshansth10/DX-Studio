import React from "react";
import { ThemeMode } from "../types";
import { TEAM_MEMBERS } from "../data/content";

interface TeamSectionProps {
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ theme }) => {
  const teamSections = [
    { title: "Leadership", memberIds: ["roshan-shrestha"] },
    {
      title: "Team Leads",
      memberIds: ["aachal-shrestha", "shrishma-poudel"],
    },
    {
      title: "Management",
      memberIds: ["bijay-babu-bhatta", "aadarsha-paudel"],
    },
    {
      title: "Development & Engineering",
      memberIds: [
        "injal-thapa",
        "muna-kc",
        "bikash-kattel",
        "aashish-sapkota",
      ],
    },
    {
      title: "Design & Quality",
      memberIds: ["binisha-chhetri", "sandhya-gurung"],
    },
    { title: "Search & Visibility", memberIds: ["anisha-bhandari"] },
  ];

  const membersById = new Map(
    TEAM_MEMBERS.map((member) => [member.id, member]),
  );

  const renderMemberCard = (memberId: string) => {
    const member = membersById.get(memberId);
    if (!member) return null;

    return (
      <article
        key={member.id}
        className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 gsap-stagger-item hover:-translate-y-1 hover:shadow-xl"
        style={{
          backgroundColor: "var(--theme-bg-card)",
          borderColor: "var(--theme-border-card)",
        }}
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden border-b transition-colors duration-300"
          style={{
            borderColor: "var(--theme-border)",
            backgroundColor: "var(--theme-bg-card-subtle)",
          }}
        >
          <img
            src={encodeURI(member.portrait)}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.02]"
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

  const renderSection = ({
    title,
    memberIds,
  }: {
    title: string;
    memberIds: string[];
  }) => (
    <section key={title} className="gsap-section-reveal">
      <div className="mb-6 flex items-center gap-4">
        <h3 className="font-heading text-2xl font-bold tracking-tight theme-text-primary sm:text-3xl">
          {title}
        </h3>
        <div
          className="h-px flex-1 theme-border"
          style={{ backgroundColor: "var(--theme-border)" }}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 gsap-stagger-container">
        {memberIds.map(renderMemberCard)}
      </div>
    </section>
  );

  return (
    <section
      id="team"
      data-theme={theme}
      className="relative pt-0 pb-8 sm:pb-12 lg:pb-12 scroll-mt-20 transition-colors duration-300 gsap-section-reveal theme-bg-page theme-border"
      style={{
        backgroundColor: "var(--theme-bg-page)",
        borderColor: "var(--theme-border)",
      }}
    >
      <div className="relative z-10">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b gsap-heading-reveal theme-border"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <div>
            <div className="flex items-center flex-wrap gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-blue-600 font-bold">
                // Our Team
              </span>
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl theme-text-primary">
              Different minds.
              <span className="block text-blue-600">One direction.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base leading-relaxed theme-text-muted">
              DX Studio brings together people across design, development, and
              technology to turn ideas into digital experiences. Every project
              is shaped by the people doing the work, from the first
              conversation to the final build.
            </p>
          </div>
        </div>

        <div className="space-y-16 pt-8 sm:space-y-20">
          {teamSections.map(renderSection)}
        </div>
      </div>
    </section>
  );
};
