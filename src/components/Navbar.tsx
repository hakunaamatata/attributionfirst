"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteConfig";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const showScrolledStyles = mounted && isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyles
          ? "shadow-sm border-b border-white/10"
          : "border-b border-transparent"
      }`}
      style={
        showScrolledStyles
          ? {
              backdropFilter: "blur(12px)",
              background: "rgba(10, 15, 30, 0.85)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
              JK
            </div>
            <span
              className={`font-bold text-lg transition-colors ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              {siteConfig.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-accent text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Call
            </a>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg transition-colors text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors text-text-secondary hover:bg-surface"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.callUrl}
              className="flex items-center justify-center gap-2 mt-3 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm w-full"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
