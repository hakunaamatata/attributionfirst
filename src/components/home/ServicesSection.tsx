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
    cardBg: "bg-bg-card",
    glow1: "rgba(59,130,246,0.1)",
    glow2: "rgba(139,92,246,0.06)",
    border: "border-white/8",
    hoverBorder: "hover:border-violet-400/50",
    hoverShadow: "hover:shadow-lg hover:shadow-accent/10",
    iconRing: "bg-violet-500/10 border-violet-500/25",
    iconText: "text-violet-500",
    iconHover: "group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500",
    featureBox: "bg-white/4 border-white/8",
    featureDot: "bg-violet-500",
    tagBase: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    tagHover: "hover:bg-violet-500/15 hover:border-violet-500/30",
    metricBg: "bg-violet-500/10",
    metricBorder: "border-violet-500/25",
    metricIcon: "text-violet-500",
    badge: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    badgeLabel: "Performance",
  },
  "google-ads-management": {
    cardBg: "bg-bg-card",
    glow1: "rgba(139,92,246,0.1)",
    glow2: "rgba(0,185,153,0.06)",
    border: "border-white/8",
    hoverBorder: "hover:border-accent/40",
    hoverShadow: "hover:shadow-lg hover:shadow-accent/10",
    iconRing: "bg-violet-500/10 border-violet-500/25",
    iconText: "text-accent",
    iconHover: "group-hover:bg-accent group-hover:text-white group-hover:border-accent",
    featureBox: "bg-white/4 border-white/8",
    featureDot: "bg-accent",
    tagBase: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    tagHover: "hover:bg-violet-500/15 hover:border-violet-500/30",
    metricBg: "bg-violet-500/10",
    metricBorder: "border-violet-500/25",
    metricIcon: "text-accent",
    badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    badgeLabel: "Google Ads",
  },
  "meta-ads-campaigns": {
    cardBg: "bg-bg-card",
    glow1: "rgba(139,92,246,0.1)",
    glow2: "rgba(99,102,241,0.06)",
    border: "border-white/8",
    hoverBorder: "hover:border-violet-400/50",
    hoverShadow: "hover:shadow-lg hover:shadow-accent/10",
    iconRing: "bg-violet-500/10 border-violet-500/25",
    iconText: "text-violet-500",
    iconHover: "group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500",
    featureBox: "bg-white/4 border-white/8",
    featureDot: "bg-violet-500",
    tagBase: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    tagHover: "hover:bg-violet-500/15 hover:border-violet-500/30",
    metricBg: "bg-violet-500/10",
    metricBorder: "border-violet-500/25",
    metricIcon: "text-violet-500",
    badge: "bg-violet-500/10 border-violet-500/25 text-violet-300",
    badgeLabel: "Meta",
  },
  "lead-generation-funnels": {
    cardBg: "bg-bg-card",
    glow1: "rgba(249,115,22,0.1)",
    glow2: "rgba(234,88,12,0.06)",
    border: "border-white/8",
    hoverBorder: "hover:border-orange-400/50",
    hoverShadow: "hover:shadow-lg hover:shadow-orange-500/10",
    iconRing: "bg-orange-500/10 border-orange-500/25",
    iconText: "text-orange-500",
    iconHover: "group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500",
    featureBox: "bg-white/4 border-white/8",
    featureDot: "bg-orange-500",
    tagBase: "bg-orange-500/10 border-orange-500/25 text-orange-300",
    tagHover: "hover:bg-orange-500/15 hover:border-orange-500/30",
    metricBg: "bg-orange-500/10",
    metricBorder: "border-orange-500/25",
    metricIcon: "text-orange-500",
    badge: "bg-orange-500/10 border-orange-500/25 text-orange-300",
    badgeLabel: "Funnels",
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
    <div className={`group relative ${t.cardBg} border ${t.border} ${t.hoverBorder} ${t.hoverShadow} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-default`}>
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
        <h3 className={`text-base font-bold text-primary mb-2 ${t.iconText.replace("text-", "group-hover:text-")} transition-colors leading-snug`}>
          {service.title}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        {/* divider */}
        <div className="border-t border-white/8 mb-4" />

        {/* features with icon boxes */}
        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-text-secondary text-xs leading-snug">
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
            <p className="text-text-secondary text-[11px] leading-snug">{service.metric}</p>
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
    <div className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 h-full flex flex-col bg-bg-card">
      <div className="relative z-10 p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 rounded-xl group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            <MapPin className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-[10px] font-bold tracking-widest uppercase">
            <Zap className="w-2.5 h-2.5" /> Local
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-primary mb-2 leading-tight group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-white/8 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-text-secondary text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-white/4 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-cyan-500" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span key={tag.label} title={tag.tooltip}
                className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-[11px] font-semibold hover:bg-cyan-500/15 transition-colors">
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-cyan-500/10 border border-cyan-500/25 rounded-lg px-3 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-text-secondary text-[11px] leading-snug">{service.metric}</p>
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
    <div className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-violet-400/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col bg-bg-card">
      <div className="relative z-10 p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-500/10 border border-violet-500/25 text-violet-500 rounded-xl group-hover:bg-violet-500 group-hover:text-white transition-all duration-300">
            <Search className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-[10px] font-bold tracking-widest uppercase">
            <Zap className="w-2.5 h-2.5" /> SEO
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-primary mb-2 leading-tight group-hover:text-violet-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-white/8 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-text-secondary text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-white/4 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-violet-500" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {service.tags.map((tag) => (
              <span key={tag.label} title={tag.tooltip}
                className="cursor-help inline-flex items-center px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/25 text-violet-300 text-[11px] font-semibold hover:bg-violet-500/15 transition-colors">
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-violet-500/10 border border-violet-500/25 rounded-lg px-3 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
            <p className="text-text-secondary text-[11px] leading-snug">{service.metric}</p>
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
    <div className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 h-full flex flex-col bg-bg-card">
      <div className="relative z-10 p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-500/10 border border-violet-500/25 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <Bot className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-[10px] font-bold tracking-widest uppercase">
            <TrendingUp className="w-2.5 h-2.5" /> Trending
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-primary mb-2 leading-tight group-hover:text-accent transition-colors">
          {service.title}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        <div className="border-t border-white/8 mb-4" />

        <ul className="space-y-2 mb-4 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-text-secondary text-xs leading-snug">
              <span className="w-4 h-4 rounded-md bg-white/4 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="w-1 h-1 rounded-full bg-accent" />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="mb-3">
            <p className="text-text-tertiary text-[10px] uppercase tracking-widest font-semibold mb-2">AI Disciplines</p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span key={tag.label} title={tag.tooltip}
                  className="cursor-help inline-flex items-center px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/25 text-violet-300 text-[11px] font-bold tracking-wide hover:bg-accent hover:text-white hover:border-accent transition-all duration-200">
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.metric && (
          <div className="flex items-start gap-2 bg-violet-500/10 border border-violet-500/25 rounded-xl px-3 py-2.5">
            <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <p className="text-text-secondary text-xs font-medium leading-snug">{service.metric}</p>
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

  const [cardW, setCardW] = useState(300);
  const GAP = 16;

  useEffect(() => {
    const update = () => setCardW(window.innerWidth < 640 ? Math.min(window.innerWidth - 48, 300) : 300);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

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
    el.scrollTo({ left: clamped * (cardW + GAP), behavior: "smooth" });
    setActiveIdx(clamped);
  }, [orderedServices.length, cardW]);

  const onScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (cardW + GAP));
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

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIdx(activeIdx - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIdx(activeIdx + 1);
    }
  }, [activeIdx, scrollToIdx]);

  return (
    <section id="services" className="py-16 md:py-24 bg-bg scroll-mt-24 overflow-hidden" aria-label="Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-3">
            <Zap className="w-3 h-3" /> What I Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight">
            Services That Drive Growth
          </h2>
          <p className="text-text-secondary text-sm md:text-base mt-2 max-w-xl mx-auto">
            End-to-end performance marketing — from paid ads to AI search optimisation.
          </p>
        </div>
        <div className="flex justify-end mb-4">
          <div className="flex items-center gap-2 shrink-0">
            <button onClick={() => scrollToIdx(activeIdx - 1)} disabled={!canPrev} aria-label="Previous"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/6 text-text-tertiary flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToIdx(activeIdx + 1)} disabled={!canNext} aria-label="Next"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/6 text-text-tertiary flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-xl"
          style={{ cursor: "grab" }}
          tabIndex={0}
          role="region"
          aria-label="Services carousel"
          onKeyDown={handleKeyDown}
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
            <div key={service.slug} className="snap-start shrink-0" style={{ width: cardW }}>
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
                className="relative flex items-center justify-center w-6 h-6">
                <span className={`block rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-white/20 hover:bg-white/30"}`} />
              </button>
            ))}
          </div>
          <Link href="/services"
            className="inline-flex items-center gap-2 text-accent border border-accent/30 hover:bg-accent hover:text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 text-sm">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
