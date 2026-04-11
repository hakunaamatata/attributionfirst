"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteConfig";
import BrandLogo from "./BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const [pillStyle, setPillStyle] = useState<React.CSSProperties>({});
  const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const navContainerRef = useRef<HTMLDivElement>(null);
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

  // Highlight active nav link based on current pathname
  useEffect(() => {
    const match = navLinks.findIndex((l) => {
      if (l.href === "/") return pathname === "/";
      return pathname === l.href || pathname.startsWith(l.href + "/");
    });
    setActiveIdx(match >= 0 ? match : null);
  }, [pathname]);

  // Hover pill positioning
  const updatePill = useCallback((idx: number | null) => {
    if (idx !== null && linkRefs.current[idx] && navContainerRef.current) {
      const el = linkRefs.current[idx]!;
      const container = navContainerRef.current;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setPillStyle({
        width: elRect.width + 16,
        height: elRect.height + 8,
        left: elRect.left - containerRect.left - 8,
        top: elRect.top - containerRect.top - 4,
        opacity: 1,
      });
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, []);

  useEffect(() => {
    updatePill(hoveredIdx);
  }, [hoveredIdx, updatePill]);

  // Active underline positioning
  useEffect(() => {
    if (activeIdx !== null && linkRefs.current[activeIdx] && navContainerRef.current) {
      const el = linkRefs.current[activeIdx]!;
      const container = navContainerRef.current;
      const elRect = el.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      setUnderlineStyle({
        width: elRect.width - 8,
        left: elRect.left - containerRect.left + 4,
        opacity: 1,
      });
    } else {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeIdx, mounted]);

  // Recalculate on resize
  useEffect(() => {
    if (!mounted) return;
    const onResize = () => {
      updatePill(hoveredIdx);
      if (activeIdx !== null && linkRefs.current[activeIdx] && navContainerRef.current) {
        const el = linkRefs.current[activeIdx]!;
        const container = navContainerRef.current;
        const elRect = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        setUnderlineStyle({
          width: elRect.width - 8,
          left: elRect.left - containerRect.left + 4,
          opacity: 1,
        });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [mounted, hoveredIdx, activeIdx, updatePill]);

  const showScrolledStyles = mounted && isScrolled;

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        showScrolledStyles
          ? "top-3 left-4 right-4 rounded-2xl shadow-lg shadow-black/20 border border-white/[0.06]"
          : "top-0 left-0 right-0 border-b border-transparent"
      }`}
      style={{
        backdropFilter: showScrolledStyles ? "blur(20px) saturate(1.4)" : undefined,
        background: showScrolledStyles ? "rgba(6, 9, 24, 0.85)" : undefined,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <BrandLogo size={44} />
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

          {/* Desktop nav */}
          <div ref={navContainerRef} className="hidden md:flex items-center gap-1 relative">
            {/* Hover pill */}
            <div
              className="absolute rounded-lg bg-accent/8 pointer-events-none transition-all duration-300 ease-out"
              style={pillStyle}
            />

            {/* Active section underline */}
            <div
              className="absolute bottom-0 h-[2px] bg-accent rounded-full pointer-events-none transition-all duration-500 ease-in-out"
              style={underlineStyle}
            />

            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                ref={(el) => { linkRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative text-sm font-medium transition-colors duration-200 px-3 py-2 ${
                  activeIdx === i
                    ? "text-accent"
                    : "text-text-secondary hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={siteConfig.callUrl}
              className="relative ml-4 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2 rounded-lg transition-all duration-200 text-sm hover:shadow-[0_4px_20px_rgba(139,92,246,0.3)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
            >
              <Phone className="w-4 h-4" />
              Book Strategy Call
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200 text-text-secondary hover:bg-bg active:scale-90"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`} />
              <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          isMobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-border px-4 py-4 space-y-1" style={{ backdropFilter: "blur(16px)", background: "rgba(11, 17, 32, 0.97)" }}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-accent/6 hover:translate-x-1 ${
                activeIdx === i
                  ? "text-accent bg-accent/6 border-l-2 border-accent"
                  : "text-text-secondary hover:text-accent"
              }`}
              style={{
                transitionDelay: isMobileOpen ? `${i * 50}ms` : "0ms",
                opacity: isMobileOpen ? 1 : 0,
                transform: isMobileOpen ? "translateY(0)" : "translateY(-8px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.callUrl}
            className="flex items-center justify-center gap-2 mt-3 bg-accent hover:bg-accent-hover text-white font-bold px-5 py-3 rounded-xl transition-all duration-300 text-sm w-full hover:shadow-lg hover:shadow-accent/20"
            style={{
              transitionDelay: isMobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: isMobileOpen ? 1 : 0,
              transform: isMobileOpen ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <Phone className="w-4 h-4" />
            Book Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
}
