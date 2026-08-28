"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteData";

const scrollNavLinks = [
  { label: "Services", href: "#services", sectionIds: ["services"] },
  { label: "Approach", href: "#approach", sectionIds: ["approach", "approach-scroll"] },
  { label: "Case Studies", href: "#case-studies", sectionIds: ["case-studies"] },
  { label: "About", href: "#about", sectionIds: ["about"] },
  { label: "Insights", href: "#insights", sectionIds: ["insights"] },
] as const;

const blogNavLink = { label: "Blog", href: siteConfig.blogUrl } as const;
const contactNavLink = { label: "Contact", href: siteConfig.contactUrl } as const;

const CONTACT_SECTION_ID = "contact";
const SCROLL_OFFSET = 128;

type ScrollHref = (typeof scrollNavLinks)[number]["href"];
type ActiveNav = ScrollHref | "#contact" | typeof blogNavLink.href | typeof contactNavLink.href | "";

function resolveActiveSection(): ScrollHref | "#contact" | "" {
  if (typeof window === "undefined") return "";

  const scrollPos = window.scrollY + SCROLL_OFFSET;
  const markers: { href: ScrollHref | "#contact"; top: number }[] = [];

  for (const link of scrollNavLinks) {
    for (const sectionId of link.sectionIds) {
      const el = document.getElementById(sectionId);
      if (!el) continue;

      markers.push({
        href: link.href,
        top: el.getBoundingClientRect().top + window.scrollY,
      });
    }
  }

  const contactSection = document.getElementById(CONTACT_SECTION_ID);
  if (contactSection) {
    markers.push({
      href: "#contact",
      top: contactSection.getBoundingClientRect().top + window.scrollY,
    });
  }

  markers.sort((a, b) => a.top - b.top);

  let active: ScrollHref | "#contact" | "" = "";
  for (const marker of markers) {
    if (marker.top <= scrollPos) {
      active = marker.href;
    }
  }

  const nearBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
  if (nearBottom) {
    active = "#contact";
  }

  return active;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<ActiveNav | "">("");
  const [activeSection, setActiveSection] = useState<ScrollHref | "#contact" | "">("");
  const rafRef = useRef<number | null>(null);

  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isContactPage = pathname === "/contact";
  const isHomePage = pathname === "/";

  const updateActiveSection = useCallback(() => {
    if (!isHomePage) return;
    setActiveSection(resolveActiveSection());
  }, [isHomePage]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (!isHomePage || rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        rafRef.current = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isHomePage, updateActiveSection]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const getLinkActive = (href: ActiveNav) => {
    if (href === blogNavLink.href) return isBlogPage;
    if (href === contactNavLink.href) return isContactPage;
    if (!isHomePage) return false;
    return activeSection === href;
  };

  const isCtaActive = isContactPage || (isHomePage && activeSection === "#contact");

  const handleNavClick = (href: ActiveNav) => {
    if (href.startsWith("#")) {
      setActiveSection(href as ScrollHref | "#contact");
    }
    setMobileOpen(false);
  };

  const renderNavItem = (link: { label: string; href: string }, compact = false) => {
    const isActive = getLinkActive(link.href as ActiveNav);
    const isHovered = hovered === link.href;

    return (
      <a
        key={link.href}
        href={link.href}
        aria-current={isActive ? "page" : undefined}
        className={`relative rounded-full ${compact ? "px-3 py-2 text-[12px]" : "px-3.5 py-2 text-[13px]"} transition-colors duration-300 ${
          isActive ? "text-white" : "text-muted hover:text-white"
        }`}
        onMouseEnter={() => setHovered(link.href as ActiveNav)}
        onMouseLeave={() => setHovered("")}
        onClick={() => handleNavClick(link.href as ActiveNav)}
      >
        {isActive && (
          <motion.span
            layoutId="navbar-active-pill"
            className="absolute inset-0 rounded-full border border-border-hover bg-accent/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}

        <span className="relative z-[1]">{link.label}</span>

        {isActive && (
          <motion.span
            layoutId="navbar-active-line"
            className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent"
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}

        {!isActive && isHovered && (
          <span className="absolute bottom-1 left-3.5 right-3.5 h-px origin-left scale-x-100 bg-white/25 transition-transform duration-500" />
        )}
      </a>
    );
  };

  const allNavLinks = [...scrollNavLinks, blogNavLink];

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
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Attribution First home">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.1] bg-charcoal-elevated text-[10px] font-bold text-accent">
            AF
          </span>
          <span className="hidden text-[12px] font-semibold tracking-[0.14em] text-white sm:block">
            ATTRIBUTION FIRST
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-0.5 lg:flex">
          {allNavLinks.map((link) => renderNavItem(link, true))}
        </div>

        <div className="hidden justify-end lg:flex">
          <a
            href={contactNavLink.href}
            aria-current={isCtaActive ? "page" : undefined}
            className={`btn-nav relative transition-colors duration-300 ${
              isCtaActive ? "border-border-active text-white" : ""
            }`}
            onClick={() => handleNavClick(contactNavLink.href)}
          >
            {isCtaActive && (
              <motion.span
                layoutId="navbar-cta-ring"
                className="absolute -inset-px rounded-full border border-border-active"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            Talk to us
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          className="col-start-3 flex h-10 w-10 items-center justify-center justify-self-end rounded-lg border border-white/[0.1] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex w-4 flex-col gap-1">
            <span
              className={`block h-px bg-white transition-all ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span className={`block h-px bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`block h-px bg-white transition-all ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
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
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-charcoal/98 px-8 py-24 lg:hidden"
          >
            {allNavLinks.map((link, i) => {
              const isActive = getLinkActive(link.href as ActiveNav);

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative block py-4 pl-5 text-3xl font-medium tracking-tight transition-colors ${
                    isActive ? "text-accent" : "text-white"
                  }`}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                  onClick={() => handleNavClick(link.href as ActiveNav)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-mobile-active"
                      className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  {link.label}
                </motion.a>
              );
            })}
            <a
              href={contactNavLink.href}
              className={`btn-primary mt-8 w-fit ${isCtaActive ? "ring-2 ring-border-active" : ""}`}
              onClick={() => handleNavClick(contactNavLink.href)}
            >
              Talk to us →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
