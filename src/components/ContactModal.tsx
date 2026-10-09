import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ThemeMode } from "../types";
import { getLenis } from "../hooks/useLenisScroll";
import { X, Send, Check } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

const AVAILABLE_SERVICES = [
  "Brand & Identity",
  "UI/UX Design",
  "Web Development",
  "E-Commerce",
  "SEO & Growth",
];

const BUDGET_TIERS = [
  "Under NPR 50K",
  "NPR 50K – 1.5L",
  "NPR 1.5L – 3L",
  "NPR 3L – 5L",
  "NPR 5L+",
];

interface FormErrors {
  services?: string;
  budget?: string;
  name?: string;
  email?: string;
  overview?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectOverview, setProjectOverview] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isEntered, setIsEntered] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  // Reset form and manage entrance animation when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      prevFocusRef.current = document.activeElement as HTMLElement | null;
      setSelectedServices([]);
      setSelectedBudget("");
      setName("");
      setEmail("");
      setProjectOverview("");
      setSubmitted(false);
      setErrors({});
      setTouched({});

      const raf = requestAnimationFrame(() => {
        setIsEntered(true);
      });

      const focusTimer = setTimeout(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        closeBtnRef.current?.focus();
      }, 50);

      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(focusTimer);
        setIsEntered(false);
      };
    } else {
      setIsEntered(false);
    }
  }, [isOpen]);

  // ESC key handler and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Robust body scroll lock & Lenis synchronization
  useEffect(() => {
    if (!isOpen) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.stop();
    }

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const prevPaddingRight = document.body.style.paddingRight;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevLeft = document.body.style.left;
    const prevRight = document.body.style.right;
    const prevOverflow = document.body.style.overflow;

    // Compensate for scrollbar disappearance and lock body position
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";

    return () => {
      // Restore body styles
      document.body.style.paddingRight = prevPaddingRight;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.left = prevLeft;
      document.body.style.right = prevRight;
      document.body.style.overflow = prevOverflow;

      // Restore exact scroll position without jump
      window.scrollTo({ top: scrollY, behavior: "instant" });

      if (lenis) {
        lenis.start();
      }

      if (prevFocusRef.current && typeof prevFocusRef.current.focus === "function") {
        prevFocusRef.current.focus();
      }
    };
  }, [isOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
    if (touched.services) validateField("services");
  };

  const validateField = (field: string) => {
    const newErrors: FormErrors = { ...errors };

    if (field === "services") {
      newErrors.services =
        selectedServices.length === 0
          ? "Please select at least one service."
          : undefined;
    }
    if (field === "budget") {
      newErrors.budget = !selectedBudget
        ? "Please select a budget range."
        : undefined;
    }
    if (field === "name") {
      newErrors.name = !name.trim() ? "Your name is required." : undefined;
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = !email.trim()
        ? "Work email is required."
        : !emailRegex.test(email)
          ? "Please enter a valid email address."
          : undefined;
    }
    if (field === "overview") {
      newErrors.overview = !projectOverview.trim()
        ? "Please describe your project."
        : undefined;
    }

    setErrors(newErrors);
  };

  const validate = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors: FormErrors = {};

    if (selectedServices.length === 0)
      newErrors.services = "Please select at least one service.";
    if (!selectedBudget)
      newErrors.budget = "Please select a budget range.";
    if (!name.trim())
      newErrors.name = "Your name is required.";
    if (!email.trim())
      newErrors.email = "Work email is required.";
    else if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email address.";
    if (!projectOverview.trim())
      newErrors.overview = "Please describe your project.";

    setErrors(newErrors);
    setTouched({
      services: true,
      budget: true,
      name: true,
      email: true,
      overview: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return createPortal(
    <div
      className={`modal-overlay fixed inset-0 z-[9999] grid place-items-center p-4 sm:p-6 bg-black/75 backdrop-blur-[4px] transition-opacity duration-200 ease-out ${
        isEntered ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      data-lenis-prevent="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={`modal-panel relative flex flex-col w-full max-w-2xl max-h-[calc(100dvh-48px)] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 text-white shadow-2xl transition-all duration-200 ease-out transform-gpu ${
          isEntered
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-[0.98]"
        }`}
      >
        {/* ── Header ── (sticky top inside modal) */}
        <div className="flex items-center justify-between gap-4 border-b border-neutral-800 px-5 py-4 sm:px-7 shrink-0 bg-neutral-900">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-blue-500">
              START A PROJECT
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-[11px] font-mono text-neutral-400">
              DX Studio Client Brief
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <kbd className="hidden sm:inline font-mono text-[10px] text-neutral-500 border border-neutral-700 bg-neutral-800 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close dialog"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-400 hover:border-neutral-500 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* ── Scrollable content area ── */}
        <div
          ref={scrollRef}
          data-lenis-prevent="true"
          className="overflow-y-auto overflow-x-hidden min-h-0 flex-1"
          style={{ overscrollBehavior: "contain" }}
        >
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            {submitted ? (
              /* ── Success State ── */
              <div className="py-10 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/40 bg-blue-600/15 text-blue-400">
                  <Check className="h-7 w-7" strokeWidth={2.5} />
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                  Project brief received.
                </h3>
                <p className="mx-auto max-w-sm text-sm text-neutral-400 leading-relaxed">
                  Thanks for reaching out, {name.split(" ")[0] || "there"}. We'll review your brief and get back to you soon.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:border-neutral-500 hover:text-white transition-colors"
                >
                  Done
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <form onSubmit={handleSubmit} noValidate className="space-y-7">
                {/* Intro */}
                <div>
                  <h3
                    id="contact-modal-title"
                    className="font-heading text-2xl sm:text-3xl font-bold leading-tight mb-1.5"
                  >
                    Let's build something exceptional.
                  </h3>
                  <p className="text-[13px] text-neutral-400 leading-relaxed">
                    Tell us what you need and give us a little context about your project.
                  </p>
                </div>

                {/* ── Services Needed ── */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-2.5">
                    Services Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {AVAILABLE_SERVICES.map((svc) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`rounded-full px-3.5 py-1.5 text-[12px] font-mono transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            isSelected
                              ? "bg-blue-600 text-white font-semibold shadow-sm shadow-blue-900/30"
                              : "border border-neutral-700 bg-neutral-800/70 text-neutral-300 hover:border-neutral-500 hover:text-white"
                          }`}
                        >
                          {isSelected && (
                            <span className="mr-1 text-blue-200">✓</span>
                          )}
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                  {touched.services && errors.services && (
                    <p className="mt-1.5 text-[11px] font-mono text-red-400">
                      {errors.services}
                    </p>
                  )}
                </div>

                {/* ── Project Budget ── */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                    Project Budget
                  </label>
                  <p className="text-[12px] text-neutral-500 mb-3 leading-snug">
                    What budget range have you set aside for this project?
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {BUDGET_TIERS.map((tier) => {
                      const isSelected = selectedBudget === tier;
                      return (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => {
                            setSelectedBudget(tier);
                            setTouched((t) => ({ ...t, budget: true }));
                            setErrors((e) => ({ ...e, budget: undefined }));
                          }}
                          className={`rounded-xl py-2.5 px-3 text-[12px] font-mono text-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                            isSelected
                              ? "border border-blue-500 bg-blue-950/50 text-blue-300 font-semibold"
                              : "border border-neutral-800 bg-neutral-800/50 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                  {touched.budget && errors.budget && (
                    <p className="mt-1.5 text-[11px] font-mono text-red-400">
                      {errors.budget}
                    </p>
                  )}
                  <p className="mt-2.5 text-[11px] font-mono text-neutral-600 leading-relaxed">
                    Your selection helps us understand the project scope. Final pricing will depend on your requirements.
                  </p>
                </div>

                {/* ── Name & Email ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, name: true }));
                        validateField("name");
                      }}
                      placeholder="e.g. Roshan Shrestha"
                      className={`w-full rounded-xl border bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        touched.name && errors.name
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-neutral-700 focus:border-blue-500"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-[11px] font-mono text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => {
                        setTouched((t) => ({ ...t, email: true }));
                        validateField("email");
                      }}
                      placeholder="you@company.com"
                      className={`w-full rounded-xl border bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none transition-colors ${
                        touched.email && errors.email
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-neutral-700 focus:border-blue-500"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-[11px] font-mono text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* ── Project Overview ── */}
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1.5">
                    Project Overview / Goals
                  </label>
                  <textarea
                    rows={4}
                    value={projectOverview}
                    onChange={(e) => setProjectOverview(e.target.value)}
                    onBlur={() => {
                      setTouched((t) => ({ ...t, overview: true }));
                      validateField("overview");
                    }}
                    placeholder="Tell us about your brand, current challenges, project goals, target launch date, and anything else we should know..."
                    className={`w-full rounded-xl border bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none resize-none transition-colors ${
                      touched.overview && errors.overview
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-neutral-700 focus:border-blue-500"
                    }`}
                  />
                  {touched.overview && errors.overview && (
                    <p className="mt-1 text-[11px] font-mono text-red-400">
                      {errors.overview}
                    </p>
                  )}
                </div>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-blue-500 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-blue-900/20"
                >
                  <span>Send Project Brief</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
