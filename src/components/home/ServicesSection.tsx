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
  Target, BarChart3, Megaphone, Filter, Layout: Globe, Search, MapPin,
};

/* ─────────────────────────────────────────────────────────────────────
   Per-card colour themes
───────────────────────────────────────────────────────────────────── */
type Theme = {
  cardBg: string;
  glow1: string;          /* radial top-right */
  glow2: string;          /* radial bottom-left */
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  iconRing: string;
  iconText: string;
  iconHover: string;
  featureBox: string;
  featureDot: string;
  tagBase: string;
  tagHover: string;
  metricBg: string;
  metricBorder: string;
  metricIcon: string;
  badge: string;
  badgeLabel: string;
};

const themes: Record<string, Theme> = {
  "performance-marketing": {
    cardBg: "bg-[#0b1525]",
    glow1: "rgba(59,130,246,0.13)",
    glow2: "rgba(37,99,235,0.07)",
    border: "border-blue-500/15",
    hoverBorder: "hover:border-blue-400/45",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.18)]",
    iconRing: "bg-blue-500/12 border-blue-500/25",
    iconText: "text-blue-400",
    iconHover: "group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
    featureBox: "bg-blue-500/10 border-blue-500/20",
    featureDot: "bg-blue-400",
    tagBase: "bg-blue-500/10 border-blue-400/25 text-blue-300",
    tagHover: "hover:bg-blue-500/25 hover:border-blue-400/50",
    metricBg: "bg-blue-500/8",
    metricBorder: "border-blue-400/20",
    metricIcon: "text-blue-400",
    badge: "bg-blue-500/15 border-blue-400/30 text-blue-300",
    badgeLabel: "🎯 Performance",
  },
  "google-ads-management": {
    cardBg: "bg-[#091a12]",
    glow1: "rgba(0,201,167,0.14)",
    glow2: "rgba(0,185,153,0.07)",
    border: "border-accent/15",
    hoverBorder: "hover:border-accent/45",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(0,201,167,0.18)]",
    iconRing: "bg-accent/12 border-accent/25",
    iconText: "text-accent",
    iconHover: "group-hover:bg-accent group-hover:text-primary group-hover:border-accent",
    featureBox: "bg-accent/10 border-accent/20",
    featureDot: "bg-accent",
    tagBase: "bg-accent/10 border-accent/25 text-accent",
    tagHover: "hover:bg-accent/25 hover:border-accent/50",
    metricBg: "bg-accent/8",
    metricBorder: "border-accent/20",
    metricIcon: "text-accent",
    badge: "bg-emerald-500/15 border-emerald-400/30 text-emerald-300",
    badgeLabel: "⭐ Google Ads",
  },
  "meta-ads-campaigns": {
    cardBg: "bg-[#0d0b1e]",
    glow1: "rgba(139,92,246,0.14)",
    glow2: "rgba(99,102,241,0.07)",
    border: "border-violet-500/15",
    hoverBorder: "hover:border-violet-400/45",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(139,92,246,0.18)]",
    iconRing: "bg-violet-500/12 border-violet-500/25",
    iconText: "text-violet-400",
    iconHover: "group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500",
    featureBox: "bg-violet-500/10 border-violet-500/20",
    featureDot: "bg-violet-400",
    tagBase: "bg-violet-500/10 border-violet-400/25 text-violet-300",
    tagHover: "hover:bg-violet-500/25 hover:border-violet-400/50",
    metricBg: "bg-violet-500/8",
    metricBorder: "border-violet-400/20",
    metricIcon: "text-violet-400",
    badge: "bg-violet-500/15 border-violet-400/30 text-violet-300",
    badgeLabel: "🎯 Meta",
  },
  "lead-generation-funnels": {
    cardBg: "bg-[#150f06]",
    glow1: "rgba(249,115,22,0.14)",
    glow2: "rgba(234,88,12,0.07)",
    border: "border-orange-500/15",
    hoverBorder: "hover:border-orange-400/45",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(249,115,22,0.18)]",
    iconRing: "bg-orange-500/12 border-orange-500/25",
    iconText: "text-orange-400",
    iconHover: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500",
    featureBox: "bg-orange-500/10 border-orange-500/20",
    featureDot: "bg-orange-400",
    tagBase: "bg-orange-500/10 border-orange-400/25 text-orange-300",
    tagHover: "hover:bg-orange-500/25 hover:border-orange-400/50",
    metricBg: "bg-orange-500/8",
    metricBorder: "border-orange-400/20",
    metricIcon: "text-orange-400",
    badge: "bg-orange-500/15 border-orange-400/30 text-orange-300",
    badgeLabel: "🔥 Funnels",
  },
};

/* ─────────────────────────────────────────────────────────────────────
   Standard card — same depth as featured cards
───────────────────────────────────────────────────────────────────── */
function StandardCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.icon] || Target;
  const t = themes[service.slug] ?? themes["performance-marketing"];
  const features = service.features.slice(0, 4);

  return (
    <div className={`group relative ${t.cardBg} border ${t.border} ${t.hoverBorder} ${t.hoverShadow} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full flex flex-col`}>
      {/* dual radial glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse at bottom left, ${t.glow2} 0%, transparent 55%)` }} />

      <div className="relative z-10 p-6 flex flex-col flex-1">
        {/* icon + badge */}
        <div className="flex items-start justify-between mb-5">
          <div className={`inline-flex items-center justify-center w-12 h-12 ${t.iconRing} border ${t.iconText} ${t.iconHover} rounded-xl transition-all duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${t.badge}`}>
            {t.badgeLabel}
          </span>
        </div>

        {/* title + description */}
        <h3 className={`text-base font-bold text-white mb-2 ${t.iconText.replace("text-", "group-hover:text-")} transition-colors leading-snug`}>
          {service.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        {/* divider */}
        <div className="border-t border-white/5 mb-4" />

        {/* features with icon boxes */}
        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-white/55 text-xs leading-snug">
              <span className={`w-4 h-4 rounded-md ${t.featureBox} border flex items-center justify-center shrink-0 mt-0.5`}>
                <span className={`w-1 h-1 rounded-full ${t.featureDot}`} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* tags */}
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span
                key={tag.label}
                title={tag.tooltip}
                className={`cursor-help inline-flex items-center px-2 py-0.5 rounded-md border text-[11px] font-semibold transition-colors ${t.tagBase} ${t.tagHover}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {/* metric banner */}
        {service.metric && (
          <div className={`flex items-start gap-2 ${t.metricBg} border ${t.metricBorder} rounded-lg px-3 py-2`}>
            <TrendingUp className={`w-3.5 h-3.5 ${t.metricIcon} shrink-0 mt-0.5`} />
            <p className="text-white/60 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Local Search & GMB Ads card — cyan/sky theme
───────────────────────────────────────────────────────────────────── */
function LocalCard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 4);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400/45 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(6,182,212,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-br from-[#041820] via-[#061e28] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.2)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.08)_0%,transparent_55%)]" />
      {/* map-pin dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #06b6d4 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

      <div className="relative z-10 p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-[10px] font-bold tracking-widest uppercase">
            <Zap className="w-2.5 h-2.5" /> Local
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-white mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
          {service.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-cyan-500/10 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-white/55 text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span key={tag.label} title={tag.tooltip}
                className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-cyan-500/12 border border-cyan-400/25 text-cyan-300 text-[11px] font-semibold hover:bg-cyan-500/25 transition-colors">
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-cyan-500/10 border border-cyan-400/20 rounded-lg px-3 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-cyan-300/80 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SEO Optimisation card — violet theme
───────────────────────────────────────────────────────────────────── */
function SEOCard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 5);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/45 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(139,92,246,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-br from-[#0f0a1e] via-[#130d2a] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.22)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.1)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 p-7 flex flex-col flex-1">
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
        <p className="text-white/45 text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-violet-500/10 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-white/55 text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-violet-400" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span key={tag.label} title={tag.tooltip}
                className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-violet-500/12 border border-violet-400/25 text-violet-300 text-[11px] font-semibold hover:bg-violet-500/25 transition-colors">
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-violet-500/10 border border-violet-400/20 rounded-lg px-3 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
            <p className="text-violet-300/80 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Landing Page + AI SEO featured card
───────────────────────────────────────────────────────────────────── */
function LandingAICard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 4);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,201,167,0.2)] transition-all duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-br from-[#021a14] via-[#051f18] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,167,0.2)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,153,255,0.08)_0%,transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #00C9A7 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative z-10 p-7 flex flex-col flex-1">
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
        <p className="text-white/45 text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-accent/10 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-white/55 text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="mb-3">
            <p className="text-white/25 text-[10px] uppercase tracking-widest font-semibold mb-2">AI Disciplines</p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span key={tag.label} title={tag.tooltip}
                  className="cursor-help inline-flex items-center px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/25 text-accent text-[11px] font-bold tracking-wide hover:bg-accent hover:text-primary transition-all duration-200">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-accent/10 border border-accent/25 rounded-xl px-3 py-2.5">
            <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-accent/90 text-xs font-medium leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Section
───────────────────────────────────────────────────────────────────── */
export default function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_W = 300;
  const GAP = 16;

  const specialSlugs = ["local-search-gmb-ads", "seo-optimisation", "landing-page-optimization"];
  const orderedServices = [
    ...services.filter((s) => !specialSlugs.includes(s.slug)),
    services.find((s) => s.slug === "local-search-gmb-ads")!,
    services.find((s) => s.slug === "seo-optimisation")!,
    services.find((s) => s.slug === "landing-page-optimization")!,
  ];

  const scrollToIdx = useCallback((idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, orderedServices.length - 1));
    el.scrollTo({ left: clamped * (CARD_W + GAP), behavior: "smooth" });
    setActiveIdx(clamped);
  }, [orderedServices.length]);

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
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => scrollToIdx(activeIdx - 1)} disabled={!canPrev} aria-label="Previous"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/60 flex items-center justify-center hover:bg-accent/15 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToIdx(activeIdx + 1)} disabled={!canNext} aria-label="Next"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white/60 flex items-center justify-center hover:bg-accent/15 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
          style={{ cursor: "grab" }}
          onMouseDown={(e) => {
            const el = trackRef.current;
            if (!el) return;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (me: MouseEvent) => { el.scrollLeft = scrollLeft - (me.pageX - el.offsetLeft - startX); };
            const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {orderedServices.map((service) => (
            <div key={service.slug} className="snap-start shrink-0" style={{ width: CARD_W }}>
              {service.slug === "local-search-gmb-ads" ? (
                <LocalCard service={service} />
              ) : service.slug === "seo-optimisation" ? (
                <SEOCard service={service} />
              ) : service.slug === "landing-page-optimization" ? (
                <LandingAICard service={service} />
              ) : (
                <StandardCard service={service} />
              )}
            </div>
          ))}
          <div className="shrink-0 w-4" />
        </div>

        {/* Dots + CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {orderedServices.map((_, i) => (
              <button key={i} onClick={() => scrollToIdx(i)} aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <Link href="/services"
            className="inline-flex items-center gap-2 text-accent border border-accent/30 hover:bg-accent hover:text-primary font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
