"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-700 ${
        scrolled ? "glass-strong py-3.5" : "bg-transparent py-6 md:py-7"
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="container-wide grid grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8 lg:px-12">
        <a href="#" className="group flex items-center gap-2.5" aria-label="Attribution First home">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.1] bg-charcoal-elevated text-[10px] font-bold text-accent">
            AF
          </span>
          <span className="hidden text-[12px] font-semibold tracking-[0.14em] text-white sm:block">
            ATTRIBUTION FIRST
          </span>
        </a>

        <div className="hidden items-center justify-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[13px] text-muted transition-colors hover:text-white"
              onMouseEnter={() => setHovered(link.href)}
              onMouseLeave={() => setHovered("")}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-accent transition-transform duration-500 ${
                  hovered === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden justify-end lg:flex">
          <a href="#contact" className="btn-nav">
            Talk to us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          className="col-start-3 justify-self-end lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.1]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex w-4 flex-col gap-1">
            <span className={`block h-px bg-white transition-all ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-white transition-all ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-charcoal/98 px-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="block py-4 text-3xl font-medium tracking-tight text-white"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.04 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="#contact" className="btn-primary mt-8 w-fit" onClick={() => setMobileOpen(false)}>
              Talk to us →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
