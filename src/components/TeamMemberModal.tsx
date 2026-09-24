import React, { useEffect } from "react";
import { TeamMember, ThemeMode } from "../types";
import {
  X,
  MapPin,
  Briefcase,
  Award,
  ExternalLink,
  Linkedin,
  Twitter,
  Github,
  Quote,
} from "lucide-react";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
  theme: ThemeMode;
  onSelectProject?: (projectId: string) => void;
}

export const TeamMemberModal: React.FC<TeamMemberModalProps> = ({
  member,
  onClose,
  theme,
  onSelectProject,
}) => {
  useEffect(() => {
    if (!member) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [member, onClose]);

  if (!member) return null;

  const isDark = theme === "obsidian" || theme === "electric-cobalt";
  const isSand = theme === "sand-stone";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative my-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border shadow-2xl transition-all duration-300 ${
          isDark
            ? theme === "electric-cobalt"
              ? "border-blue-950 bg-[#0F1D40] text-white"
              : "border-neutral-800 bg-[#161618] text-white"
            : isSand
              ? "border-[#D8D4CC] bg-[#F4F1EA] text-neutral-950"
              : "border-neutral-200 bg-white text-neutral-950"
        }`}
      >
        {/* Modal Top Bar */}
        <div
          className={`flex items-center justify-between border-b px-6 py-4 ${
            isDark
              ? "border-neutral-800/80"
              : isSand
                ? "border-[#E0DCD4]"
                : "border-neutral-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-blue-600">
              [{member.number} / COLLECTIVE]
            </span>
            <span className="text-neutral-400">•</span>
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
              {member.department}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <kbd
              className={`hidden sm:inline font-mono text-[10px] px-1.5 py-0.5 rounded border ${
                isDark
                  ? "text-neutral-400 border-neutral-700 bg-neutral-800/80"
                  : "text-neutral-500 border-neutral-300 bg-neutral-100"
              }`}
            >
              ESC
            </kbd>
            <button
              onClick={onClose}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                isDark
                  ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700"
                  : "border-neutral-200 bg-neutral-100 text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200"
              }`}
              aria-label="Close details (Escape)"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden">
          {/* Portrait Column */}
          <div
            className={`md:col-span-5 relative overflow-hidden min-h-[280px] sm:min-h-[340px] md:min-h-full border-b md:border-b-0 md:border-r ${
              isDark
                ? "border-neutral-800/80 bg-neutral-900"
                : isSand
                  ? "border-[#E0DCD4] bg-[#ECE9E2]"
                  : "border-neutral-200 bg-neutral-100"
            }`}
          >
            <img
              src={encodeURI(member.portrait)}
              alt={member.name}
              className="h-full w-full object-cover filter contrast-[1.02]"
              style={{
                objectPosition: member.portraitPosition || "center 20%",
              }}
            />
            {/* Ambient Vignette for mobile typography legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent md:hidden" />
            <div className="absolute bottom-4 left-4 right-4 md:hidden text-white">
              <span className="font-mono text-xs text-blue-400 font-bold block mb-1">
                {member.role}
              </span>
              <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Header Info */}
              <div className="hidden md:block">
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-blue-600 font-bold mb-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {member.location}
                </span>
                <h2
                  className={`font-heading text-3xl font-bold tracking-tight ${
                    isDark ? "text-white" : "text-neutral-950"
                  }`}
                >
                  {member.name}
                </h2>
                <p
                  className={`text-sm font-mono mt-1 font-medium ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {member.role}
                </p>
              </div>

              {/* Bio */}
              <p
                className={`mt-4 text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-neutral-300" : "text-neutral-800"
                }`}
              >
                {member.bio}
              </p>

              {/* Quote / Credo */}
              <div
                className={`mt-5 rounded-2xl p-4 border relative ${
                  isDark
                    ? "border-neutral-800 bg-neutral-900/60"
                    : isSand
                      ? "border-[#E0DCD4] bg-[#ECE9E2]/60"
                      : "border-neutral-200 bg-neutral-50"
                }`}
              >
                <Quote className="h-4 w-4 text-blue-600 mb-1 opacity-80" />
                <p
                  className={`text-xs sm:text-sm italic font-heading ${
                    isDark ? "text-neutral-200" : "text-neutral-900"
                  }`}
                >
                  "{member.quote}"
                </p>
              </div>

              {/* Focus Areas & Specialties */}
              <div className="mt-6">
                <h4
                  className={`font-mono text-[11px] uppercase tracking-wider font-semibold mb-2.5 ${
                    isDark ? "text-neutral-400" : "text-neutral-700"
                  }`}
                >
                  Core Specialties
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {member.specialties.map((spec) => (
                    <span
                      key={spec}
                      className={`rounded-full px-3 py-1 text-xs font-mono border font-medium ${
                        isDark
                          ? "border-neutral-800 bg-neutral-900 text-neutral-300"
                          : isSand
                            ? "border-[#D8D4CC] bg-[#E5E1D8] text-neutral-900"
                            : "border-neutral-300 bg-neutral-100 text-neutral-900"
                      }`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Led Projects */}
              {member.ledProjects && member.ledProjects.length > 0 && (
                <div className="mt-5">
                  <h4
                    className={`font-mono text-[11px] uppercase tracking-wider font-semibold mb-2 ${
                      isDark ? "text-neutral-400" : "text-neutral-700"
                    }`}
                  >
                    Key Case Studies Led
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {member.ledProjects.map((p) => (
                      <span
                        key={p}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700"
                      >
                        <Award className="h-3 w-3" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Socials & Actions */}
            <div
              className={`pt-5 border-t flex items-center justify-between ${
                isDark
                  ? "border-neutral-800"
                  : isSand
                    ? "border-[#E0DCD4]"
                    : "border-neutral-200"
              }`}
            >
              <span
                className={`font-mono text-xs font-medium ${
                  isDark ? "text-neutral-400" : "text-neutral-600"
                }`}
              >
                {member.experience}
              </span>

              <div className="flex items-center gap-3">
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full border transition-colors ${
                      isDark
                        ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500"
                        : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400"
                    }`}
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full border transition-colors ${
                      isDark
                        ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500"
                        : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400"
                    }`}
                    aria-label="Twitter"
                  >
                    <Twitter className="h-3.5 w-3.5" />
                  </a>
                )}
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full border transition-colors ${
                      isDark
                        ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500"
                        : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400"
                    }`}
                    aria-label="GitHub"
                  >
                    <Github className="h-3.5 w-3.5" />
                  </a>
                )}
                {member.socials.portfolio && (
                  <a
                    href={member.socials.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2 rounded-full border transition-colors ${
                      isDark
                        ? "border-neutral-700 bg-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-500"
                        : "border-neutral-300 bg-neutral-100 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400"
                    }`}
                    aria-label="Portfolio"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
