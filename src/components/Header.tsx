import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { usePathname, navigateTo } from "../routing";

interface HeaderProps {
  cartCount?: number;
  onOpenCart?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount = 0,
  onOpenCart,
  onOpenSearch,
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Collections", href: "/collections" },
    { label: "Categories", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Membership", href: "/membership" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (href: string) => {
    navigateTo(href);
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-neutral-950/95 backdrop-blur-md border-b border-neutral-900 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-neutral-950/90 via-neutral-950/40 to-transparent py-4.5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo - Clickable with Hand Pointer */}
            <button
              onClick={() => handleNavClick("/")}
              className="text-left focus:outline-none min-h-[44px] flex items-center cursor-pointer group"
            >
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-[0.18em] text-white uppercase group-hover:text-red-500 transition-colors">
                LUXECART
              </span>
            </button>

            {/* Desktop Nav Links (Sentence case, thin weight, hand cursor) */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`relative text-xs font-light tracking-[0.08em] transition-all py-2.5 min-h-[44px] flex flex-col items-center justify-center cursor-pointer ${
                      active ? "text-red-500 font-medium" : "text-neutral-300 hover:text-red-500"
                    }`}
                  >
                    {/* Active Red Dot Indicator Above Link */}
                    {active && (
                      <span className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                    )}
                    <span>{link.label}</span>
                    {/* Red Accent Underline */}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-red-600" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={onOpenSearch}
                aria-label="Search catalog"
                className="p-2.5 text-neutral-300 hover:text-red-500 transition-colors rounded-full hover:bg-neutral-800/60 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                <Search className="w-4.5 h-4.5 stroke-[1.5]" />
              </button>

              <button
                onClick={onOpenCart}
                aria-label={`Shopping bag with ${cartCount} items`}
                className="relative p-2.5 text-neutral-300 hover:text-red-500 transition-colors rounded-full hover:bg-neutral-800/60 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                <ShoppingBag className="w-4.5 h-4.5 stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-mono font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation drawer"
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2.5 text-neutral-300 hover:text-red-500 transition-colors rounded-lg hover:bg-neutral-800/60 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 stroke-[1.5]" />
                ) : (
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-neutral-950/98 backdrop-blur-2xl pt-24 pb-8 px-6 overflow-y-auto animate-fadeIn font-body">
          <div className="flex flex-col space-y-3 my-auto">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left font-sans text-xl font-light tracking-wide py-3 border-b border-neutral-900 min-h-[48px] flex items-center justify-between transition-colors cursor-pointer ${
                    active ? "text-white font-normal pl-2 border-red-600" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-red-600" />}
                    <span>{link.label}</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-600">→</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col items-center gap-2 text-center text-xs font-mono text-neutral-400">
            <span>Durbar Marg, Kathmandu, Nepal</span>
            <span>+977 1-4250000 • concierge@luxecart.com</span>
          </div>
        </div>
      )}
    </>
  );
};
