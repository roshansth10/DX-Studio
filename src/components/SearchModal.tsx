import React, { useState } from "react";
import { Search, X, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../data/luxecartData";
import { navigateTo } from "../routing";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleSelect = (slug: string) => {
    navigateTo(`/collections/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 animate-fadeIn font-body">
      <div className="mx-auto max-w-3xl pt-12">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-red-500 stroke-[1.5]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search collections, leather goods, watches..."
              className="w-full bg-transparent text-xl sm:text-2xl text-white placeholder-neutral-500 focus:outline-none font-heading"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-2.5 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="mt-8 space-y-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {[
                "Maison Noir",
                "Cashmere Coat",
                "Silk Scarf",
                "Chronograph",
                "Oud Parfum",
                "Gold Jewelry",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-neutral-900 border border-neutral-800 px-4 py-2 text-xs text-neutral-300 hover:border-red-600 hover:text-white transition-colors min-h-[44px]"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="mt-8 space-y-4 max-h-[60vh] overflow-y-auto">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              Found {filteredProducts.length} Results
            </span>
            {filteredProducts.length === 0 ? (
              <p className="text-neutral-400 text-sm py-8 text-center font-light">
                No luxury pieces matched "{query}". Try searching for cashmere, leather, or watches.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleSelect(product.slug)}
                    className="flex items-center gap-4 p-3 border border-neutral-800 bg-neutral-900/60 hover:bg-neutral-800 transition-colors text-left group min-h-[44px]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover bg-black"
                    />
                    <div className="flex-1">
                      <span className="font-mono text-[10px] text-red-500 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h4 className="font-heading text-sm font-semibold text-white group-hover:text-red-400">
                        {product.name}
                      </h4>
                      <p className="font-mono text-xs text-neutral-400 mt-0.5">
                        {product.formattedPrice}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-red-500" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
