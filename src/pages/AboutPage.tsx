import React from "react";
import { CheckCircle2, ShieldCheck, Package, Sparkles } from "lucide-react";

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Hero Header */}
        <div className="text-center space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            THE LUXECART HERITAGE
          </span>
          <h1 className="font-heading text-4xl sm:text-7xl font-bold tracking-tight text-white">
            Our Story
          </h1>
        </div>

        {/* Verbatim Body Copy */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 space-y-8 shadow-2xl">
          <p className="text-xl sm:text-2xl text-neutral-100 font-heading font-light leading-relaxed">
            LuxeCart began with a simple belief: luxury should be effortless to find, not just to own. We curate a small, deliberate collection of fashion, accessories, and lifestyle pieces from makers who treat craft as a discipline, not a trend.
          </p>

          <div className="h-[1px] w-full bg-neutral-800" />

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Every item in our collection is selected by hand. We don't chase volume — we chase pieces that hold up to a closer look: the weight of real leather, the finish on a clasp, the way a fabric catches light. If it wouldn't earn a place in our own homes, it doesn't earn a place on LuxeCart.
          </p>
        </div>

        {/* Sub-section: What We Stand For */}
        <div className="space-y-8">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              CORE GUIDING PRINCIPLES
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold mt-2">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <Sparkles className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Curated, not cluttered</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Every product is chosen, never mass-listed.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Authenticity guaranteed</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Every piece is verified before it reaches you.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <Package className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Considered packaging</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                The unboxing is part of the experience.
              </p>
            </div>

            <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-3">
              <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
                <CheckCircle2 className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">Quiet quality</h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Designed to last well past the season it was bought in.
              </p>
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <div className="text-center pt-8 border-t border-neutral-900">
          <p className="font-heading text-2xl sm:text-4xl font-light italic text-white">
            "LuxeCart is a place to shop slowly."
          </p>
        </div>
      </div>
    </main>
  );
};
