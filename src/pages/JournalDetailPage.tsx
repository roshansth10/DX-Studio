import React from "react";
import { ARTICLES, Article } from "../data/luxecartData";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { navigateTo } from "../routing";

interface JournalDetailPageProps {
  slug: string;
}

export const JournalDetailPage: React.FC<JournalDetailPageProps> = ({ slug }) => {
  const article: Article | undefined =
    ARTICLES.find((a) => a.slug === slug) || ARTICLES[0];

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-4xl mx-auto space-y-10">
        <button
          onClick={() => navigateTo("/journal")}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Luxe Journal
        </button>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400">
            <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 text-red-500 font-bold uppercase tracking-wider">
              {article.categoryTag}
            </span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>By {article.author}</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-neutral-200 font-heading font-light leading-relaxed border-l-2 border-red-600 pl-4 py-1 italic">
            "{article.teaser}"
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
          {article.content ? (
            article.content.map((p, idx) => <p key={idx}>{p}</p>)
          ) : (
            <p>{article.teaser}</p>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="pt-12 border-t border-neutral-900 flex items-center justify-between">
          <button
            onClick={() => navigateTo("/journal")}
            className="font-mono text-xs text-red-500 hover:text-red-400 uppercase tracking-widest font-bold min-h-[44px]"
          >
            ← Back to Journal Index
          </button>
          <button
            onClick={() => navigateTo("/collections")}
            className="inline-flex items-center gap-2 font-mono text-xs text-white hover:text-red-500 uppercase tracking-widest font-bold min-h-[44px]"
          >
            Explore Catalog <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
};
