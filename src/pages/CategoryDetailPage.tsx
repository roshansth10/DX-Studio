import React from "react";
import { CATEGORIES, PRODUCTS, Category } from "../data/luxecartData";
import { ArrowLeft, ArrowUpRight, Star } from "lucide-react";
import { navigateTo } from "../routing";

interface CategoryDetailPageProps {
  slug: string;
}

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({ slug }) => {
  const category: Category | undefined =
    CATEGORIES.find((c) => c.slug === slug) || CATEGORIES[0];

  const categoryProducts = PRODUCTS.filter(
    (p) => p.categorySlug === category.slug || p.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-12">
        <button
          onClick={() => navigateTo("/categories")}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Categories
        </button>

        {/* Category Banner */}
        <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800 p-8 sm:p-12 lg:p-16 flex flex-col justify-end min-h-[300px]">
          <div className="absolute inset-0 z-0">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover opacity-40 filter brightness-[0.7] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
              DEPARTMENT SELECTION
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white">
              {category.name}
            </h1>
            <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-light">
              "{category.description}"
            </p>
          </div>
        </div>

        {/* Category Products Grid */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold text-white">
            Available Pieces ({categoryProducts.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {categoryProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigateTo(`/collections/${product.slug}`)}
                className="group cursor-pointer bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-square overflow-hidden bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md p-2 text-white group-hover:bg-red-600 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 mt-1 font-light">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-neutral-400 font-mono">
                      <Star className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                      <span>{product.rating}</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-white">
                      {product.formattedPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
