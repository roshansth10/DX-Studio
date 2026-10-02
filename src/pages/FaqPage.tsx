import React, { useState } from "react";
import { FAQS } from "../data/luxecartData";
import { ChevronDown } from "lucide-react";

export const FaqPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            HELP & KNOWLEDGE BASE
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            Find immediate answers regarding order fulfillment, membership privileges, authenticity verification, and delivery across Nepal.
          </p>
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
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-lg font-semibold text-white hover:text-red-500 transition-colors min-h-[44px]"
                >
                  <span className="text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800 pt-4 animate-fadeIn font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};
