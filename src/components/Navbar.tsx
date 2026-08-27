"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#attribution" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-6"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-5 md:px-8 lg:px-12">
        <a
          href="#"
          className="group flex items-center gap-2.5"
          aria-label="Attribution First home"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-charcoal-elevated text-[10px] font-bold text-accent transition-colors group-hover:border-accent/40">
            AF
          </span>
          <span className="hidden text-[13px] font-semibold tracking-[0.12em] text-white sm:block">
            ATTRIBUTION FIRST
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-[13px] text-muted transition-colors hover:text-white"
              onMouseEnter={() => setActiveSection(link.href)}
              onMouseLeave={() => setActiveSection("")}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-px origin-left bg-accent transition-transform duration-300 ${
                  activeSection === link.href ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary text-[13px]">
            Talk to us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-4 flex-col gap-1">
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-charcoal/98 px-8 lg:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display block py-4 text-4xl font-semibold tracking-tight text-white"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <a
              href="#contact"
              className="btn-primary mt-10 w-fit"
              onClick={() => setMobileOpen(false)}
            >
              {siteConfig.primaryCta} →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
