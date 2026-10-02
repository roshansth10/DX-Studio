import React from "react";
import { CATEGORIES } from "../data/luxecartData";
import { ArrowUpRight } from "lucide-react";
import { navigateTo } from "../routing";

export const CategoriesPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            DEPARTMENTS OF LUXECART
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Our Categories
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Explore our thoughtfully structured luxury categories, each dedicated to uncompromised material standard and master craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORIES.map((category) => (
            <div
              key={category.slug}
              onClick={() => navigateTo(`/categories/${category.slug}`)}
              className="group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 text-white group-hover:bg-red-600 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="font-mono text-xs text-red-500 uppercase tracking-widest font-bold">
                    {category.itemCount} Curated Pieces
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h2 className="font-heading text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                  {category.name}
                </h2>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {category.description}
                </p>
                <div className="pt-3">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest font-bold text-white group-hover:text-red-500">
                    Explore Category <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
