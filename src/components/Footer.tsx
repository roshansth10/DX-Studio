import React from "react";
import { STORE_INFO } from "../data/luxecartData";
import { navigateTo } from "../routing";

export const Footer: React.FC = () => {
  const handleNav = (path: string) => {
    navigateTo(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12 font-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-neutral-900">
          {/* Brand & Store Location */}
          <div className="lg:col-span-2 space-y-4">
            {/* Clickable LUXECART logo: redirects to landing page & scrolls to hero */}
            <button
              onClick={() => handleNav("/")}
              className="text-left focus:outline-none cursor-pointer group flex items-center min-h-[44px]"
            >
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-white group-hover:text-red-500 transition-colors">
                LUXECART
              </span>
            </button>

            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              Curating deliberate fashion, fine jewelry, timepieces, and lifestyle pieces from master artisans worldwide. Effortless luxury, thoughtfully selected.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-400 space-y-1">
              <p className="text-white font-medium">Flagship Boutique:</p>
              <p>{STORE_INFO.address}</p>
              <p>Phone: {STORE_INFO.phone}</p>
              <p>Email: {STORE_INFO.email}</p>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              Shop Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-light">
              <li>
                <button
                  onClick={() => handleNav("/collections")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  All Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/categories/womens-fashion")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Women's Fashion
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/categories/leather-goods")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Leather Goods
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/categories/timepieces")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Timepieces
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/categories/beauty-fragrance")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Beauty & Fragrance
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              Company & Privileges
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400 font-light">
              <li>
                <button
                  onClick={() => handleNav("/about")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/membership")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Luxe Membership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/reviews")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Client Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/journal")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  The Luxe Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/contact")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/faq")}
                  className="hover:text-white transition-colors py-1 min-h-[44px] sm:min-h-0 flex items-center cursor-pointer"
                >
                  FAQ & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-red-500 font-bold">
              Private Dispatch
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Subscribe to receive private collection previews, exclusive invitations, and dispatches.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for joining our private newsletter list.");
              }}
              className="space-y-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full bg-neutral-900 border border-neutral-800 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:border-red-600 focus:outline-none min-h-[44px]"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold font-mono text-xs uppercase tracking-[0.15em] py-3 transition-all duration-300 min-h-[44px] cursor-pointer shadow-md active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <p>© 2026 LuxeCart. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav("/contact")} className="hover:text-neutral-300 cursor-pointer">
              Durbar Marg, Kathmandu
            </button>
            <span>•</span>
            <button onClick={() => handleNav("/contact")} className="hover:text-neutral-300 cursor-pointer">
              Concierge Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
