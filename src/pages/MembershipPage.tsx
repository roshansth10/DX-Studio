import React, { useState } from "react";
import { MEMBERSHIP_TIERS, FAQS } from "../data/luxecartData";
import { CheckCircle2, ChevronDown, Clock, UserCheck, Tag, RotateCcw } from "lucide-react";

export const MembershipPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            PRIVILEGED ACCESS
          </span>
          <h1 className="font-heading text-4xl sm:text-7xl font-bold tracking-tight">
            Luxe Membership
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
            Join our exclusive membership program for privileged access and benefits.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-8 flex flex-col justify-between border transition-all duration-300 ${
                tier.popular
                  ? "bg-neutral-900 border-red-600 shadow-2xl z-10"
                  : "bg-neutral-900/60 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-600 text-white font-mono text-[10px] uppercase tracking-widest font-bold px-4 py-1">
                  Most Popular
                </span>
              )}
              <div>
                <h2 className="font-heading text-3xl font-bold text-white">{tier.name}</h2>
                <p className="text-xs text-neutral-400 mt-2 min-h-[36px] font-light">{tier.description}</p>
                <div className="my-6 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-extrabold text-white">{tier.priceFormatted}</span>
                  <span className="font-mono text-xs text-neutral-400">{tier.period}</span>
                </div>
                <div className="h-[1px] bg-neutral-800 mb-6" />
                <ul className="space-y-3">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300 font-light">
                      <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-800">
                <button
                  onClick={() => alert(`Selected ${tier.name} membership.`)}
                  className={`w-full py-4 font-bold font-mono text-xs uppercase tracking-[0.18em] transition-all duration-300 min-h-[48px] cursor-pointer shadow-lg active:scale-95 ${
                    tier.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-neutral-900 border border-neutral-700 hover:border-red-600 text-white hover:bg-neutral-800"
                  }`}
                >
                  {tier.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section: Why Members Choose LuxeCart */}
        <div className="pt-12 border-t border-neutral-900 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              UNCOMPROMISED MEMBER EXPERIENCE
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold">
              Why Members Choose LuxeCart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Early Access</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Shop new collections up to 48 hours before public release.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <UserCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Dedicated Support</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Gold and Platinum members get a named account contact.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <Tag className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Member Pricing</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Ongoing discounts, not just a one-time perk.
              </p>
            </div>

            <div className="p-6 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <RotateCcw className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">Effortless Returns</h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Extended return windows on every membership tier.
              </p>
            </div>
          </div>
        </div>

        {/* Membership FAQ block */}
        <div className="pt-12 border-t border-neutral-900 max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              MEMBERSHIP QUESTIONS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mt-2">
              Membership FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-900 border border-neutral-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-semibold text-white hover:text-red-500 transition-colors min-h-[44px]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-red-600 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800 pt-4 animate-fadeIn font-light">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
