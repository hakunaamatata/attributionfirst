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
          <Link href="/" className="flex items-center gap-3.5 group">
            {/* Logo icon */}
            <div className="relative w-11 h-11 shrink-0">
              {/* Glow halo */}
              <div
                className="absolute inset-[-6px] rounded-2xl blur-xl opacity-50 transition-opacity duration-300 group-hover:opacity-75"
                style={{ background: "radial-gradient(ellipse at 40% 40%, #f59e0b 0%, #7c3aed 50%, transparent 75%)" }}
              />
              {/* Tile */}
              <div
                className="relative w-11 h-11 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #23205a 0%, #130f35 55%, #0a0720 100%)",
                  boxShadow: [
                    "0 1px 0 rgba(255,255,255,0.15) inset",
                    "0 -1px 0 rgba(0,0,0,0.6) inset",
                    "0 8px 32px rgba(124,58,237,0.55)",
                    "0 2px 8px rgba(0,0,0,0.7)",
                  ].join(", "),
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Top-left gloss */}
                <div
                  className="absolute top-0 left-0 w-[65%] h-[45%] rounded-tl-2xl opacity-[0.12]"
                  style={{ background: "linear-gradient(135deg, white 0%, transparent 100%)" }}
                />
                {/* Bottom purple bloom */}
                <div
                  className="absolute bottom-0 right-0 w-full h-1/2 opacity-20"
                  style={{ background: "radial-gradient(ellipse at 80% 100%, #7c3aed 0%, transparent 70%)" }}
                />

                <svg viewBox="0 0 26 26" className="w-[22px] h-[22px] relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="af-base" x1="2" y1="20" x2="20" y2="23" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6"/>
                      <stop offset="1" stopColor="#5b21b6"/>
                    </linearGradient>
                    <linearGradient id="af-bl" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop stopColor="#bfdbfe"/>
                      <stop offset="1" stopColor="#7dd3fc"/>
                    </linearGradient>
                    <linearGradient id="af-bd" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
                      <stop stopColor="#93c5fd"/>
                      <stop offset="1" stopColor="#3b82f6"/>
                    </linearGradient>
                    <filter id="af-glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="0.8" result="blur"/>
                      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                    </filter>
                  </defs>

                  {/* Purple platform base */}
                  <rect x="1.5" y="19.5" width="17" height="2.8" rx="1.2" fill="url(#af-base)"/>
                  <rect x="1.5" y="19.5" width="17" height="1" rx="1" fill="rgba(255,255,255,0.15)"/>

                  {/* Bars — ascending, alternating light/dark */}
                  <rect x="1.8"  y="15"   width="2.6" height="4.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7"/>
                  <rect x="1.8"  y="15"   width="2.6" height="0.9" rx="0.6" fill="white"   fillOpacity="0.45"/>

                  <rect x="5.0"  y="11.5" width="2.6" height="8"   rx="0.6" fill="#60a5fa" fillOpacity="0.9"/>
                  <rect x="5.0"  y="11.5" width="2.6" height="0.9" rx="0.6" fill="white"   fillOpacity="0.3"/>

                  <rect x="8.2"  y="13"   width="2.6" height="6.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7"/>
                  <rect x="8.2"  y="13"   width="2.6" height="0.9" rx="0.6" fill="white"   fillOpacity="0.45"/>

                  <rect x="11.4" y="9"    width="2.6" height="10.5" rx="0.6" fill="#60a5fa" fillOpacity="0.9"/>
                  <rect x="11.4" y="9"    width="2.6" height="0.9"  rx="0.6" fill="white"   fillOpacity="0.3"/>

                  <rect x="14.6" y="11"   width="2.6" height="8.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7"/>
                  <rect x="14.6" y="11"   width="2.6" height="0.9" rx="0.6" fill="white"   fillOpacity="0.45"/>

                  <rect x="17.8" y="6"    width="2.6" height="13.5" rx="0.6" fill="#3b82f6"/>
                  <rect x="17.8" y="6"    width="2.6" height="0.9"  rx="0.6" fill="white"   fillOpacity="0.4"/>

                  {/* Arrow glow (blurred copy) */}
                  <path d="M2.8 15.8 6.2 12.2 9.3 14 13 9.5 19.5 2.5" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.25"/>
                  {/* Arrow */}
                  <path d="M2.8 15.8 6.2 12.2 9.3 14 13 9.5 19.5 2.5" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Arrowhead */}
                  <path d="M15.8 2.2 19.5 2.5 19.8 6.2" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Tip sparkle */}
                  <circle cx="19.6" cy="2.6" r="1.5" fill="#fbbf24" fillOpacity="0.35"/>
                  <circle cx="19.6" cy="2.6" r="0.7" fill="#fef08a"/>
                </svg>
              </div>
              {/* Drop shadow */}
              <div
                className="absolute -bottom-2 left-1 right-1 h-3 rounded-full blur-lg opacity-35"
                style={{ background: "radial-gradient(ellipse, #7c3aed, transparent 70%)" }}
              />
            </div>

            {/* Wordmark */}
            <div className="flex flex-col justify-center gap-1">
              <span
                className="block font-black leading-none tracking-tight"
                style={{
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(90deg, #ffffff 0%, #dde4ff 70%, #c4b5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 12px rgba(167,139,250,0.35))",
                }}
              >
                ATTRIBUTION
              </span>
              <span
                className="block font-bold leading-none"
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.28em",
                  background: "linear-gradient(90deg, #fbbf24 0%, #f59e0b 50%, #fcd34d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 8px rgba(251,191,36,0.5))",
                }}
              >
                FIRST
              </span>
            </div>
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
        <div className="md:hidden border-t border-white/8" style={{ backdropFilter: "blur(12px)", background: "rgba(10,15,26,0.97)" }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors text-white/70 hover:text-accent hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.callUrl}
              className="flex items-center justify-center gap-2 mt-3 bg-accent hover:bg-accent-hover text-primary font-bold px-5 py-3 rounded-xl transition-colors text-sm w-full"
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
