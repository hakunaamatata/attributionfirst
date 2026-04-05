"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import {
  Target, BarChart3, Megaphone, Filter, MapPin,
  TrendingUp, Zap, Bot, ArrowRight, Search, Globe,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { services } from "@/data/services";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, BarChart3, Megaphone, Filter, Layout: Globe, MapPin, Search,
};

/* ─── card accent configs ─────────────────────────────────────────── */
const cardThemes: Record<string, {
  bg: string; border: string; hoverBorder: string; hoverShadow: string;
  iconBg: string; iconColor: string; iconHoverBg: string; iconHoverText: string;
  dotColor: string; featureDot: string; glowBg: string;
  badge?: string; badgeText?: string; badgeIcon?: string;
}> = {
  "performance-marketing": {
    bg: "bg-[#0e1828]",
    border: "border-blue-500/15",
    hoverBorder: "hover:border-blue-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(59,130,246,0.14)]",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "text-blue-400",
    iconHoverBg: "group-hover:bg-blue-500",
    iconHoverText: "group-hover:text-white",
    dotColor: "bg-blue-400",
    featureDot: "bg-blue-400/50",
    glowBg: "bg-blue-500/6",
  },
  "google-ads-management": {
    bg: "bg-[#0e1a14]",
    border: "border-accent/15",
    hoverBorder: "hover:border-accent/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(0,201,167,0.14)]",
    iconBg: "bg-accent/10 border-accent/20",
    iconColor: "text-accent",
    iconHoverBg: "group-hover:bg-accent",
    iconHoverText: "group-hover:text-primary",
    dotColor: "bg-accent",
    featureDot: "bg-accent/50",
    glowBg: "bg-accent/6",
    badge: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
    badgeText: "Google Ads",
    badgeIcon: "⭐",
  },
  "meta-ads-campaigns": {
    bg: "bg-[#0f0e1c]",
    border: "border-indigo-500/15",
    hoverBorder: "hover:border-indigo-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(99,102,241,0.14)]",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    iconColor: "text-indigo-400",
    iconHoverBg: "group-hover:bg-indigo-500",
    iconHoverText: "group-hover:text-white",
    dotColor: "bg-indigo-400",
    featureDot: "bg-indigo-400/50",
    glowBg: "bg-indigo-500/6",
    badge: "bg-indigo-500/15 border-indigo-400/30 text-indigo-300",
    badgeText: "Meta",
    badgeIcon: "🎯",
  },
  "lead-generation-funnels": {
    bg: "bg-[#0f1a0e]",
    border: "border-orange-500/15",
    hoverBorder: "hover:border-orange-400/40",
    hoverShadow: "hover:shadow-[0_8px_32px_rgba(249,115,22,0.14)]",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    iconColor: "text-orange-400",
    iconHoverBg: "group-hover:bg-orange-500",
    iconHoverText: "group-hover:text-white",
    dotColor: "bg-orange-400",
    featureDot: "bg-orange-400/50",
    glowBg: "bg-orange-500/6",
    badge: "bg-orange-500/15 border-orange-400/30 text-orange-300",
    badgeText: "Funnels",
    badgeIcon: "🔥",
  },
};

/* ─── Standard card ───────────────────────────────────────────────── */
function StandardCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.icon] || Target;
  const features = service.features.slice(0, 3);
  const t = cardThemes[service.slug] ?? cardThemes["performance-marketing"];

  return (
    <div className={`group relative ${t.bg} border ${t.border} ${t.hoverBorder} ${t.hoverShadow} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full`}>
      {/* corner glow */}
      <div className={`absolute top-0 right-0 w-40 h-40 ${t.glowBg} rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none`} />

      <div className="relative z-10 flex flex-col flex-1">
        {/* icon + badge row */}
        <div className="flex items-start justify-between mb-5">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${t.iconBg} border ${t.iconColor} ${t.iconHoverBg} ${t.iconHoverText} rounded-xl transition-all duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          {t.badge && (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[10px] font-semibold ${t.badge}`}>
              {t.badgeIcon} {t.badgeText}
            </span>
          )}
        </div>

        <h3 className={`text-base font-bold text-white mb-2 group-hover:${t.iconColor.replace("text-", "text-")} transition-colors leading-snug`}>
          {service.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        {/* divider */}
        <div className="border-t border-white/5 mb-4" />

        <ul className="space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-white/40 text-xs leading-snug">
              <span className={`w-1.5 h-1.5 rounded-full ${t.featureDot} shrink-0 mt-1`} />
              {f}
            </li>
          ))}
        </ul>

        {service.metric && (
          <div className={`mt-4 flex items-start gap-2 bg-white/4 border border-white/8 rounded-lg px-2.5 py-2`}>
            <TrendingUp className={`w-3.5 h-3.5 ${t.iconColor} shrink-0 mt-0.5`} />
            <p className="text-white/50 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── SEO featured card ───────────────────────────────────────────── */
function SEOCard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 5);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/45 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(139,92,246,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-br from-[#0f0a1e] via-[#130d2a] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.22)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.1)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* header */}
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-500/15 border border-violet-500/30 text-violet-400 rounded-xl group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <Search className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-[10px] font-bold tracking-widest uppercase">
            <Zap className="w-2.5 h-2.5" /> SEO
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2 leading-tight group-hover:text-violet-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        <div className="border-t border-violet-500/10 mb-4" />

        <ul className="space-y-2 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-white/50 text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-violet-400" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* SEO tags */}
        {service.tags && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {service.tags.map((tag) => (
              <span key={tag.label} title={tag.tooltip} className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-violet-500/12 border border-violet-400/25 text-violet-300 text-[11px] font-semibold hover:bg-violet-500/25 transition-colors">
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className="mt-3 flex items-start gap-2 bg-violet-500/10 border border-violet-400/20 rounded-lg px-3 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
            <p className="text-violet-300/80 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Landing + AI SEO featured card ─────────────────────────────── */
function LandingAICard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 4);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,201,167,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-br from-[#021a14] via-[#051f18] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,167,0.2)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,153,255,0.08)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00C9A7 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 p-7 flex flex-col flex-1">
        {/* header */}
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/15 border border-accent/30 text-accent rounded-xl group-hover:bg-accent group-hover:text-primary transition-all duration-300">
            <Bot className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold tracking-widest uppercase">
            <TrendingUp className="w-2.5 h-2.5" /> Trending
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2 leading-tight group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        <div className="border-t border-accent/10 mb-4" />

        <ul className="space-y-2 mb-4">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-white/50 text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* AI discipline tags */}
        {service.tags && (
          <div className="mt-auto">
            <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-2">AI Disciplines</p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span key={tag.label} title={tag.tooltip} className="cursor-help inline-flex items-center px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/25 text-accent text-[11px] font-bold tracking-wide hover:bg-accent hover:text-primary transition-all duration-200">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.metric && (
          <div className="mt-3 flex items-start gap-2 bg-accent/10 border border-accent/25 rounded-xl px-3 py-2.5">
            <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-accent/90 text-xs font-medium leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */
export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_W = 320; // px — must match min-w in JSX below
  const GAP = 16;

  const specialSlugs = ["local-search-gmb-ads", "landing-page-optimization"];
  const orderedServices = [
    ...services.filter((s) => !specialSlugs.includes(s.slug)),
    services.find((s) => s.slug === "local-search-gmb-ads")!,
    services.find((s) => s.slug === "landing-page-optimization")!,
  ];

  const scrollToIdx = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, orderedServices.length - 1));
    el.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setActiveIdx(clamped);
  }, [orderedServices.length]);

  const prev = () => scrollToIdx(activeIdx - 1);
  const next = () => scrollToIdx(activeIdx + 1);

  /* sync dot indicator on native scroll */
  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (CARD_W + GAP));
    setActiveIdx(idx);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <section id="services" className="py-16 md:py-24 bg-primary scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
              <Zap className="w-3 h-3" /> What I Do
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              Services That Drive Growth
            </h2>
            <p className="text-white/45 text-sm md:text-base mt-2 max-w-xl">
              End-to-end performance marketing — from paid ads to AI search optimisation.
            </p>
          </div>

          {/* arrow buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/60 flex items-center justify-center hover:bg-accent/15 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={!canNext}
              aria-label="Next"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/60 flex items-center justify-center hover:bg-accent/15 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const el = trackRef.current;
            if (!el) return;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (me: MouseEvent) => {
              const x = me.pageX - el.offsetLeft;
              el.scrollLeft = scrollLeft - (x - startX);
            };
            const onUp = () => {
              el.style.cursor = "grab";
              window.removeEventListener("mousemove", onMove);
              window.removeEventListener("mouseup", onUp);
            };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {orderedServices.map((service) => (
            <div
              key={service.slug}
              className="snap-start shrink-0"
              style={{ width: CARD_W }}
            >
              {service.slug === "local-search-gmb-ads" ? (
                <SEOCard service={service} />
              ) : service.slug === "landing-page-optimization" ? (
                <LandingAICard service={service} />
              ) : (
                <StandardCard service={service} />
              )}
            </div>
          ))}

          {/* trailing spacer so last card isn't flush against edge */}
          <div className="shrink-0 w-4" />
        </div>

        {/* Dot indicators + CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {orderedServices.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIdx
                    ? "w-6 h-2 bg-accent"
                    : "w-2 h-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent border border-accent/30 hover:bg-accent hover:text-primary font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
