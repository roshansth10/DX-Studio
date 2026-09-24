import React, { useState } from "react";
import { ThemeMode, TeamMember } from "../types";
import { TEAM_MEMBERS } from "../data/content";
import { ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { TeamMemberModal } from "./TeamMemberModal";
import { SectionAnchor } from "./SectionAnchor";

interface TeamSectionProps {
  theme: ThemeMode;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ theme }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [, setHoveredMember] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filterOptions = [
    { id: "all", label: "All Collective", count: TEAM_MEMBERS.length },
    {
      id: "leadership",
      label: "Leadership",
      count: TEAM_MEMBERS.filter((m) => m.department === "leadership").length,
    },
    {
      id: "design",
      label: "Design & UX",
      count: TEAM_MEMBERS.filter((m) => m.department === "design").length,
    },
    {
      id: "engineering",
      label: "Engineering",
      count: TEAM_MEMBERS.filter((m) => m.department === "engineering").length,
    },
    {
      id: "strategy",
      label: "Strategy & Growth",
      count: TEAM_MEMBERS.filter((m) => m.department === "strategy").length,
    },
    {
      id: "management",
      label: "Management",
      count: TEAM_MEMBERS.filter((m) => m.department === "management").length,
    },
  ];

  const filteredMembers =
    activeFilter === "all"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.department === activeFilter);

  return (
    <section
      id="team"
      data-theme={theme}
      className="relative border-t py-24 sm:py-32 scroll-mt-20 transition-colors duration-300 gsap-section-reveal theme-bg-page theme-border"
      style={{
        backgroundColor: "var(--theme-bg-page)",
        borderColor: "var(--theme-border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b gsap-heading-reveal theme-border"
          style={{ borderColor: "var(--theme-border)" }}
        >
          <div>
            <div className="flex items-center flex-wrap gap-3">
              <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                06 • COLLECTIVE
              </span>
              <span className="h-[1px] w-6 bg-blue-600/40" />
              <span className="font-mono text-xs uppercase tracking-widest theme-text-subtle">
                People Behind The Craft
              </span>
              <SectionAnchor id="team" label="Collective" />
            </div>

            <h2 className="mt-4 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl theme-text-primary">
              Meet the thinkers, makers, and architects.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base leading-relaxed theme-text-muted">
              We operate as a high-caliber multidisciplinary studio. No
              intermediaries, no junior handoffs—every client partners directly
              with seasoned specialists.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-8">
          <div className="flex items-center flex-wrap gap-2">
            {filterOptions.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono transition-all duration-200 border ${
                    isActive
                      ? "bg-blue-600 border-blue-600 text-white font-bold shadow-md"
                      : "theme-border theme-bg-card theme-text-primary hover:border-blue-500 shadow-2xs"
                  }`}
                  style={
                    !isActive
                      ? {
                          backgroundColor: "var(--theme-bg-card)",
                          borderColor: "var(--theme-border)",
                          color: "var(--theme-text-primary)",
                        }
                      : undefined
                  }
                >
                  <span>{f.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${
                      isActive
                        ? "bg-blue-800 text-white"
                        : "theme-bg-card-subtle theme-text-secondary"
                    }`}
                    style={
                      !isActive
                        ? {
                            backgroundColor: "var(--theme-bg-card-subtle)",
                            color: "var(--theme-text-secondary)",
                          }
                        : undefined
                    }
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-2 font-mono text-xs font-medium theme-text-subtle">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Studio Collective • 8 Senior Practitioners</span>
          </div>
        </div>

        {/* Team Members Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 gsap-stagger-container">
          {filteredMembers.map((member) => {
            return (
              <div
                key={member.id}
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
                onClick={() => setSelectedMember(member)}
                className="group relative flex flex-col rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 gsap-stagger-item hover:shadow-xl hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--theme-bg-card)",
                  borderColor: "var(--theme-border-card)",
                }}
              >
                {/* Portrait Container with Architectural Frame */}
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

                  {/* High Legibility Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 pointer-events-none" />

                  {/* Top Corner Badges: Number & Location */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="rounded-full bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 font-mono text-[11px] font-bold text-white border border-white/20 shadow-sm">
                      {member.number}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-neutral-950/70 backdrop-blur-md px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-100 border border-white/20 shadow-sm">
                      <MapPin className="h-3 w-3 text-blue-400" />
                      {member.location.split(",")[0]}
                    </span>
                  </div>

                  {/* Quick Expand Button on image corner */}
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-neutral-950 shadow-md backdrop-blur-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Card Body - Dynamic CSS Variable Typography */}
                <div className="flex flex-col flex-1 p-6 pt-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-bold">
                      {member.role}
                    </span>
                    <span
                      className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full border font-medium"
                      style={{
                        backgroundColor: "var(--theme-bg-card-subtle)",
                        borderColor: "var(--theme-border)",
                        color: "var(--theme-text-subtle)",
                      }}
                    >
                      {member.department}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold tracking-tight mt-2 transition-colors theme-text-primary">
                    {member.name}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed line-clamp-3 theme-text-muted">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                    {member.specialties.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-md px-2 py-0.5 text-[11px] font-mono border font-medium"
                        style={{
                          backgroundColor: "var(--theme-bg-card-subtle)",
                          borderColor: "var(--theme-border)",
                          color: "var(--theme-text-secondary)",
                        }}
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div
                    className="mt-auto pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--theme-border)" }}
                  >
                    <span className="font-mono text-xs font-semibold theme-text-subtle">
                      {member.experience}
                    </span>
                    <span className="text-xs font-bold text-blue-600 group-hover:underline inline-flex items-center gap-1">
                      <span>View Profile</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Culture & Model Callout */}
        <div
          className="mt-16 rounded-3xl p-8 sm:p-10 border transition-all duration-300 shadow-sm"
          style={{
            backgroundColor: "var(--theme-bg-card-subtle)",
            borderColor: "var(--theme-border)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 font-mono text-xs text-blue-600 font-bold mb-2">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>DIRECT ACCESS PROMISE</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight theme-text-primary">
                Intentionally compact. Globally collaborative.
              </h3>
              <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-2xl theme-text-muted">
                We believe exceptional digital products are crafted by small,
                focused teams with direct lines of communication. When you hire
                DX Studio, you collaborate directly with the people shaping your
                code and brand.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div
                className="rounded-2xl p-4 border flex items-center justify-between"
                style={{
                  backgroundColor: "var(--theme-bg-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div>
                  <div className="font-mono text-xs font-medium theme-text-subtle">
                    Studio Headquarters
                  </div>
                  <div className="font-heading text-base font-bold theme-text-primary">
                    Kathmandu, Nepal
                  </div>
                </div>
                <div className="font-mono text-xs text-blue-600 font-bold">
                  UTC +5:45
                </div>
              </div>

              <div
                className="rounded-2xl p-4 border flex items-center justify-between"
                style={{
                  backgroundColor: "var(--theme-bg-card)",
                  borderColor: "var(--theme-border)",
                }}
              >
                <div>
                  <div className="font-mono text-xs font-medium theme-text-subtle">
                    Project Capacity
                  </div>
                  <div className="font-heading text-base font-bold theme-text-primary">
                    Max 3 Projects at a time
                  </div>
                </div>
                <div className="font-mono text-xs text-emerald-600 font-bold">
                  Quality First
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member Details Modal */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
        theme={theme}
      />
    </section>
  );
};
