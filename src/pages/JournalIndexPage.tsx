import React from "react";
import { ARTICLES } from "../data/luxecartData";
import { ArrowUpRight } from "lucide-react";
import { navigateTo } from "../routing";

export const JournalIndexPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            EDITORIAL & DISPATCHES
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            The Luxe Journal
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Insights, trends, and stories from the world of luxury.
          </p>
        </div>

        {/* 4 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ARTICLES.map((article) => (
            <div
              key={article.slug}
              onClick={() => navigateTo(`/journal/${article.slug}`)}
              className="group cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
                />
                <span className="absolute top-4 left-4 bg-neutral-950/90 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-red-500 border border-neutral-800">
                  {article.categoryTag}
                </span>
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2.5 text-white group-hover:bg-red-600 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-neutral-500">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>By {article.author}</span>
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-white group-hover:text-red-500 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {article.teaser}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-white font-bold group-hover:text-red-500">
                    Read Story <ArrowUpRight className="w-3.5 h-3.5" />
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
