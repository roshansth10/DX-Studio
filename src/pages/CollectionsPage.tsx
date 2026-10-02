import React, { useState } from "react";
import { PRODUCTS, CATEGORIES } from "../data/luxecartData";
import { ArrowUpRight, Star } from "lucide-react";
import { navigateTo } from "../routing";

export const CollectionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoriesList = ["All", ...CATEGORIES.map((c) => c.name)];

  const filteredProducts =
    selectedCategory === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            THE LUXECART CATALOG
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Our Collections
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            A small, deliberate collection of fashion, accessories, and lifestyle pieces from master artisans who treat craft as a discipline.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono transition-all min-h-[44px] flex items-center cursor-pointer ${
                selectedCategory === cat
                  ? "bg-red-600 text-white font-bold border border-red-600 shadow-md"
                  : "bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-red-600/50 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
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
                <span className="absolute top-3 left-3 bg-neutral-950/90 px-3 py-1 text-[10px] font-mono text-white border border-neutral-800">
                  {product.category}
                </span>
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
    </main>
  );
};
