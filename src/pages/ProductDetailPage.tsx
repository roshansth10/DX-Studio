import React, { useState } from "react";
import { PRODUCTS, Product } from "../data/luxecartData";
import { Star, ShieldCheck, Truck, RotateCcw, Minus, Plus, ArrowLeft } from "lucide-react";
import { navigateTo } from "../routing";

interface ProductDetailPageProps {
  slug: string;
  onAddToCart?: (product: Product, quantity: number, color: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  slug,
  onAddToCart,
}) => {
  const product: Product | undefined =
    PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [selectedColor, setSelectedColor] = useState(product.colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "details" | "shipping">("description");

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, quantity, selectedColor);
    } else {
      alert(`Added ${quantity} x ${product.name} (${selectedColor}) to your bag.`);
    }
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 3);

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => navigateTo("/collections")}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors mb-8 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collections
        </button>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute top-4 left-4 bg-neutral-950/90 px-3.5 py-1 text-xs font-mono text-red-500 border border-neutral-800">
                {product.category}
              </span>
            </div>
          </div>

          {/* Right: Product Details & Controls */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-red-500 text-xs font-mono mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                  ))}
                </div>
                <span className="font-bold">{product.rating}</span>
                <span className="text-neutral-500">({product.reviewCount} verified reviews)</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-white">
                {product.name}
              </h1>
              <div className="mt-3 font-mono text-2xl font-bold text-white">
                {product.formattedPrice}
              </div>
            </div>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light border-t border-b border-neutral-900 py-6">
              {product.description}
            </p>

            {/* Color Option Selector */}
            {product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="block text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Color Option: <span className="text-white font-bold">{selectedColor}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-xs font-mono border transition-all min-h-[44px] ${
                        selectedColor === color
                          ? "border-red-600 bg-red-600/10 text-white font-bold"
                          : "border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-700"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <div className="flex items-center justify-between border border-neutral-800 bg-neutral-900 min-h-[48px] w-full sm:w-36">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-neutral-400 hover:text-white transition-colors min-w-[44px] flex items-center justify-center"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-mono text-sm font-bold text-white px-2">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-neutral-400 hover:text-white transition-colors min-w-[44px] flex items-center justify-center"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold font-mono text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 min-h-[48px] cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                ADD TO CART
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-900 text-center font-mono text-[11px] text-neutral-400">
              <div className="p-2 bg-neutral-900 border border-neutral-800 flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Authentic Guarantee</span>
              </div>
              <div className="p-2 bg-neutral-900 border border-neutral-800 flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-red-500" />
                <span>Nepal Express</span>
              </div>
              <div className="p-2 bg-neutral-900 border border-neutral-800 flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-red-500" />
                <span>30-Day Returns</span>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="pt-6 border-t border-neutral-900">
              <div className="flex border-b border-neutral-900 gap-6">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`pb-3 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-colors min-h-[44px] ${
                    activeTab === "description"
                      ? "border-red-600 text-white"
                      : "border-transparent text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab("details")}
                  className={`pb-3 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-colors min-h-[44px] ${
                    activeTab === "details"
                      ? "border-red-600 text-white"
                      : "border-transparent text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  Details
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`pb-3 text-xs font-mono uppercase tracking-wider font-bold border-b-2 transition-colors min-h-[44px] ${
                    activeTab === "shipping"
                      ? "border-red-600 text-white"
                      : "border-transparent text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>

              <div className="py-6 text-sm text-neutral-300 leading-relaxed font-light">
                {activeTab === "description" && (
                  <p>{product.description}</p>
                )}
                {activeTab === "details" && (
                  <ul className="space-y-2 list-disc list-inside text-neutral-300 font-mono text-xs">
                    {product.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {activeTab === "shipping" && (
                  <p>{product.shippingReturns}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
