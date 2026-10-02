import React from "react";
import { TESTIMONIALS } from "../data/luxecartData";
import { Star, CheckCircle } from "lucide-react";

export const ReviewsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            VERIFIED CLIENT FEEDBACK
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            What Our Clients Say
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Real experiences from the LuxeCart community.
          </p>

          {/* Average-rating summary badge */}
          <div className="inline-flex items-center gap-3 p-4 bg-neutral-900 border border-neutral-800 mt-4">
            <div className="flex items-center text-red-600">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-mono text-sm font-bold text-white">
              4.9 out of 5, based on 340+ verified reviews
            </span>
          </div>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 bg-neutral-900 border border-neutral-800 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-red-600">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 border border-emerald-800">
                    <CheckCircle className="w-3 h-3" /> Verified Order
                  </span>
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed italic font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-800 border border-neutral-700 flex items-center justify-center font-heading font-bold text-white">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">{item.author}</h4>
                  <span className="text-xs font-mono text-red-500">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
