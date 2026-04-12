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
  topBar: string;
  glow1: string;
  glow2: string;
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  iconRing: string;
  iconText: string;
  iconHover: string;
  titleHover: string;
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
    topBar: "bg-linear-to-r from-blue-600 to-indigo-600",
    glow1: "rgba(37,99,235,0.14)",
    glow2: "rgba(79,70,229,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-blue-500/45 dark:hover:border-blue-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-blue-500/15",
    iconRing: "bg-blue-500/10 border-blue-500/25 dark:bg-blue-500/15 dark:border-blue-400/35",
    iconText: "text-blue-600 dark:text-blue-400",
    iconHover:
      "group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 dark:group-hover:bg-blue-500 dark:group-hover:border-blue-500",
    titleHover: "group-hover:text-blue-700 dark:group-hover:text-blue-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-blue-500 dark:bg-blue-400",
    tagBase: "bg-blue-500/10 border-blue-500/25 text-blue-900 dark:text-blue-300",
    tagHover: "hover:bg-blue-500/15 hover:border-blue-500/35",
    metricBg: "bg-blue-500/10",
    metricBorder: "border-blue-500/25",
    metricIcon: "text-blue-600 dark:text-blue-400",
    badge: "bg-blue-500/10 border-blue-500/25 text-blue-900 dark:text-blue-300",
    badgeLabel: "Performance",
  },
  "seo-optimisation": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-emerald-600 to-teal-600",
    glow1: "rgba(5,150,105,0.14)",
    glow2: "rgba(13,148,136,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-emerald-500/45 dark:hover:border-emerald-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-emerald-500/15",
    iconRing: "bg-emerald-500/10 border-emerald-500/25 dark:bg-emerald-500/15 dark:border-emerald-400/35",
    iconText: "text-emerald-600 dark:text-emerald-400",
    iconHover:
      "group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 dark:group-hover:bg-emerald-500 dark:group-hover:border-emerald-500",
    titleHover: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-emerald-500 dark:bg-emerald-400",
    tagBase: "bg-emerald-500/10 border-emerald-500/25 text-emerald-900 dark:text-emerald-300",
    tagHover: "hover:bg-emerald-500/15 hover:border-emerald-500/35",
    metricBg: "bg-emerald-500/10",
    metricBorder: "border-emerald-500/25",
    metricIcon: "text-emerald-600 dark:text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/25 text-emerald-900 dark:text-emerald-300",
    badgeLabel: "SEO",
  },
  "landing-page-optimization": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-fuchsia-600 to-violet-600",
    glow1: "rgba(192,38,211,0.12)",
    glow2: "rgba(124,58,237,0.1)",
    border: "border-border",
    hoverBorder: "hover:border-fuchsia-500/45 dark:hover:border-fuchsia-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-fuchsia-500/15",
    iconRing: "bg-fuchsia-500/10 border-fuchsia-500/25 dark:bg-fuchsia-500/15 dark:border-fuchsia-400/35",
    iconText: "text-fuchsia-600 dark:text-fuchsia-400",
    iconHover:
      "group-hover:bg-fuchsia-600 group-hover:text-white group-hover:border-fuchsia-600 dark:group-hover:bg-fuchsia-500 dark:group-hover:border-fuchsia-500",
    titleHover: "group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-fuchsia-500 dark:bg-fuchsia-400",
    tagBase: "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-900 dark:text-fuchsia-300",
    tagHover: "hover:bg-fuchsia-500/15 hover:border-fuchsia-500/35",
    metricBg: "bg-fuchsia-500/10",
    metricBorder: "border-fuchsia-500/25",
    metricIcon: "text-fuchsia-600 dark:text-fuchsia-400",
    badge: "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-900 dark:text-fuchsia-300",
    badgeLabel: "Trending",
  },
  "google-ads-management": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-sky-600 to-blue-600",
    glow1: "rgba(2,132,199,0.14)",
    glow2: "rgba(37,99,235,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-sky-500/45 dark:hover:border-sky-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-sky-500/15",
    iconRing: "bg-sky-500/10 border-sky-500/25 dark:bg-sky-500/15 dark:border-sky-400/35",
    iconText: "text-sky-600 dark:text-sky-400",
    iconHover:
      "group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 dark:group-hover:bg-sky-500 dark:group-hover:border-sky-500",
    titleHover: "group-hover:text-sky-700 dark:group-hover:text-sky-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-sky-500 dark:bg-sky-400",
    tagBase: "bg-sky-500/10 border-sky-500/25 text-sky-900 dark:text-sky-300",
    tagHover: "hover:bg-sky-500/15 hover:border-sky-500/35",
    metricBg: "bg-sky-500/10",
    metricBorder: "border-sky-500/25",
    metricIcon: "text-sky-600 dark:text-sky-400",
    badge: "bg-sky-500/12 border-sky-500/25 text-sky-900 dark:text-sky-300",
    badgeLabel: "Google Ads",
  },
  "meta-ads-campaigns": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-violet-600 to-purple-600",
    glow1: "rgba(124,58,237,0.14)",
    glow2: "rgba(147,51,234,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-violet-500/45 dark:hover:border-violet-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-violet-500/15",
    iconRing: "bg-violet-500/10 border-violet-500/25 dark:bg-violet-500/15 dark:border-violet-400/35",
    iconText: "text-violet-600 dark:text-violet-400",
    iconHover:
      "group-hover:bg-violet-600 group-hover:text-white group-hover:border-violet-600 dark:group-hover:bg-violet-500 dark:group-hover:border-violet-500",
    titleHover: "group-hover:text-violet-700 dark:group-hover:text-violet-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-violet-500 dark:bg-violet-400",
    tagBase: "bg-violet-500/10 border-violet-500/25 text-violet-900 dark:text-violet-300",
    tagHover: "hover:bg-violet-500/15 hover:border-violet-500/35",
    metricBg: "bg-violet-500/10",
    metricBorder: "border-violet-500/25",
    metricIcon: "text-violet-600 dark:text-violet-400",
    badge: "bg-violet-500/10 border-violet-500/25 text-violet-900 dark:text-violet-300",
    badgeLabel: "Meta",
  },
  "lead-generation-funnels": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-cyan-600 to-sky-500",
    glow1: "rgba(8,145,178,0.14)",
    glow2: "rgba(14,165,233,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-cyan-500/45 dark:hover:border-cyan-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-cyan-500/15",
    iconRing: "bg-cyan-500/10 border-cyan-500/25 dark:bg-cyan-500/15 dark:border-cyan-400/35",
    iconText: "text-cyan-600 dark:text-cyan-400",
    iconHover:
      "group-hover:bg-cyan-600 group-hover:text-white group-hover:border-cyan-600 dark:group-hover:bg-cyan-500 dark:group-hover:border-cyan-500",
    titleHover: "group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-cyan-500 dark:bg-cyan-400",
    tagBase: "bg-cyan-500/10 border-cyan-500/25 text-cyan-900 dark:text-cyan-300",
    tagHover: "hover:bg-cyan-500/15 hover:border-cyan-500/35",
    metricBg: "bg-cyan-500/10",
    metricBorder: "border-cyan-500/25",
    metricIcon: "text-cyan-600 dark:text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/25 text-cyan-900 dark:text-cyan-300",
    badgeLabel: "Funnels",
  },
  "local-search-gmb-ads": {
    cardBg: "bg-bg-card",
    topBar: "bg-linear-to-r from-amber-600 to-orange-500",
    glow1: "rgba(217,119,6,0.14)",
    glow2: "rgba(234,88,12,0.08)",
    border: "border-border",
    hoverBorder: "hover:border-amber-500/45 dark:hover:border-amber-400/40",
    hoverShadow: "hover:shadow-lg hover:shadow-amber-500/15",
    iconRing: "bg-amber-500/10 border-amber-500/25 dark:bg-amber-500/15 dark:border-amber-400/35",
    iconText: "text-amber-600 dark:text-amber-400",
    iconHover:
      "group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 dark:group-hover:bg-amber-500 dark:group-hover:border-amber-500",
    titleHover: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    featureBox: "bg-bg-elevated/45 border-border",
    featureDot: "bg-amber-500 dark:bg-amber-400",
    tagBase: "bg-amber-500/10 border-amber-500/25 text-amber-950 dark:text-amber-300",
    tagHover: "hover:bg-amber-500/15 hover:border-amber-500/35",
    metricBg: "bg-amber-500/10",
    metricBorder: "border-amber-500/25",
    metricIcon: "text-amber-600 dark:text-amber-400",
    badge: "bg-amber-500/10 border-amber-500/25 text-amber-950 dark:text-amber-300",
    badgeLabel: "Local",
  },
};

function serviceTheme(slug: string): Theme {
  return themes[slug] ?? themes["performance-marketing"];
}

/* ─────────────────────────────────────────────────────────────────────
   Standard card — same depth as featured cards
───────────────────────────────────────────────────────────────────── */
function StandardCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.icon] || Target;
  const t = serviceTheme(service.slug);
  const features = service.features.slice(0, 4);

  return (
    <div
      className={`group relative ${t.cardBg} border ${t.border} ${t.hoverBorder} ${t.hoverShadow} rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-default`}
    >
      <div className={`absolute left-0 right-0 top-0 z-20 h-1 ${t.topBar} rounded-t-2xl`} aria-hidden />
      {/* dual radial glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top right, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse at bottom left, ${t.glow2} 0%, transparent 55%)`,
        }}
      />

      <div className="relative z-10 flex flex-1 flex-col p-6">
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
        <h3 className={`text-base font-bold text-primary mb-2 leading-snug transition-colors ${t.titleHover}`}>
          {service.title}
        </h3>
        <p className="text-text-secondary text-xs leading-relaxed mb-5">
          {service.description}
        </p>

        {/* divider */}
        <div className="border-t border-border mb-4" />

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
   Local Search & GMB Ads
───────────────────────────────────────────────────────────────────── */
function LocalCard({ service, theme: t }: { service: (typeof services)[number]; theme: Theme }) {
  const features = service.features.slice(0, 4);
  return (
    <div
      className={`group relative ${t.cardBg} overflow-hidden rounded-2xl border ${t.border} ${t.hoverBorder} ${t.hoverShadow} flex h-full flex-col transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={`absolute left-0 right-0 top-0 z-20 h-1 ${t.topBar} rounded-t-2xl`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top right, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse at bottom left, ${t.glow2} 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-10 flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${t.iconRing} ${t.iconText} ${t.iconHover} transition-all duration-300`}
          >
            <MapPin className="h-6 w-6" />
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${t.badge}`}
          >
            <Zap className="h-2.5 w-2.5" /> {t.badgeLabel}
          </span>
        </div>

        <h3 className={`mb-2 text-lg font-extrabold leading-tight text-primary transition-colors ${t.titleHover}`}>
          {service.title}
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-text-secondary">{service.description}</p>

        <div className="mb-4 border-t border-border" />

        <ul className="mb-4 flex-1 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs leading-snug text-text-secondary">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${t.featureBox}`}
              >
                <span className={`h-1 w-1 rounded-full ${t.featureDot}`} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag.label}
                title={tag.tooltip}
                className={`inline-flex cursor-help items-center rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors ${t.tagBase} ${t.tagHover}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className={`flex items-start gap-2 rounded-lg border px-3 py-2 ${t.metricBg} ${t.metricBorder}`}>
            <TrendingUp className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.metricIcon}`} />
            <p className="text-[11px] leading-snug text-text-secondary">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   SEO Optimisation
───────────────────────────────────────────────────────────────────── */
function SEOCard({ service, theme: t }: { service: (typeof services)[number]; theme: Theme }) {
  const features = service.features.slice(0, 5);
  return (
    <div
      className={`group relative ${t.cardBg} overflow-hidden rounded-2xl border ${t.border} ${t.hoverBorder} ${t.hoverShadow} flex h-full flex-col transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={`absolute left-0 right-0 top-0 z-20 h-1 ${t.topBar} rounded-t-2xl`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top right, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse at bottom left, ${t.glow2} 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-10 flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${t.iconRing} ${t.iconText} ${t.iconHover} transition-all duration-300`}
          >
            <Search className="h-6 w-6" />
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${t.badge}`}
          >
            <Zap className="h-2.5 w-2.5" /> {t.badgeLabel}
          </span>
        </div>

        <h3 className={`mb-2 text-lg font-extrabold leading-tight text-primary transition-colors ${t.titleHover}`}>
          {service.title}
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-text-secondary">{service.description}</p>

        <div className="mb-4 border-t border-border" />

        <ul className="mb-4 flex-1 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs leading-snug text-text-secondary">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${t.featureBox}`}
              >
                <span className={`h-1 w-1 rounded-full ${t.featureDot}`} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {service.tags.map((tag) => (
              <span
                key={tag.label}
                title={tag.tooltip}
                className={`inline-flex cursor-help items-center rounded-md px-2 py-0.5 text-[11px] font-semibold transition-colors ${t.tagBase} ${t.tagHover}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
        )}

        {service.metric && (
          <div className={`flex items-start gap-2 rounded-lg border px-3 py-2 ${t.metricBg} ${t.metricBorder}`}>
            <TrendingUp className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${t.metricIcon}`} />
            <p className="text-[11px] leading-snug text-text-secondary">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────
   Landing Page + AI SEO
───────────────────────────────────────────────────────────────────── */
function LandingAICard({ service, theme: t }: { service: (typeof services)[number]; theme: Theme }) {
  const features = service.features.slice(0, 4);
  return (
    <div
      className={`group relative ${t.cardBg} overflow-hidden rounded-2xl border ${t.border} ${t.hoverBorder} ${t.hoverShadow} flex h-full flex-col transition-all duration-300 hover:-translate-y-1`}
    >
      <div className={`absolute left-0 right-0 top-0 z-20 h-1 ${t.topBar} rounded-t-2xl`} aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at top right, ${t.glow1} 0%, transparent 55%), radial-gradient(ellipse at bottom left, ${t.glow2} 0%, transparent 55%)`,
        }}
      />
      <div className="relative z-10 flex flex-1 flex-col p-7">
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${t.iconRing} ${t.iconText} ${t.iconHover} transition-all duration-300`}
          >
            <Bot className="h-6 w-6" />
          </div>
          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest ${t.badge}`}
          >
            <TrendingUp className="h-2.5 w-2.5" /> {t.badgeLabel}
          </span>
        </div>

        <h3 className={`mb-2 text-lg font-extrabold leading-tight text-primary transition-colors ${t.titleHover}`}>
          {service.title}
        </h3>
        <p className="mb-5 text-xs leading-relaxed text-text-secondary">{service.description}</p>

        <div className="mb-4 border-t border-border" />

        <ul className="mb-4 flex-1 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs leading-snug text-text-secondary">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${t.featureBox}`}
              >
                <span className={`h-1 w-1 rounded-full ${t.featureDot}`} />
              </span>
              {f}
            </li>
          ))}
        </ul>

        {service.tags && (
          <div className="mb-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              AI Disciplines
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag.label}
                  title={tag.tooltip}
                  className={`inline-flex cursor-help items-center rounded-lg border px-2.5 py-1 text-[11px] font-bold tracking-wide transition-all duration-200 ${t.tagBase} ${t.tagHover}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}

        {service.metric && (
          <div className={`flex items-start gap-2 rounded-xl border px-3 py-2.5 ${t.metricBg} ${t.metricBorder}`}>
            <TrendingUp className={`mt-0.5 h-4 w-4 shrink-0 ${t.metricIcon}`} />
            <p className="text-xs font-medium leading-snug text-text-secondary">{service.metric}</p>
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

  /** Performance Marketing first, then SEO + Landing (previously at end), then remaining services. */
  const orderedServices = [
    services.find((s) => s.slug === "performance-marketing")!,
    services.find((s) => s.slug === "seo-optimisation")!,
    services.find((s) => s.slug === "landing-page-optimization")!,
    services.find((s) => s.slug === "google-ads-management")!,
    services.find((s) => s.slug === "meta-ads-campaigns")!,
    services.find((s) => s.slug === "lead-generation-funnels")!,
    services.find((s) => s.slug === "local-search-gmb-ads")!,
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
              className="w-10 h-10 rounded-xl border border-border bg-white/6 text-text-tertiary flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scrollToIdx(activeIdx + 1)} disabled={!canNext} aria-label="Next"
              className="w-10 h-10 rounded-xl border border-border bg-white/6 text-text-tertiary flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent disabled:opacity-25 disabled:cursor-not-allowed transition-all duration-200">
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
          {orderedServices.map((service) => {
            const theme = serviceTheme(service.slug);
            return (
              <div key={service.slug} className="snap-start shrink-0" style={{ width: cardW }}>
                {service.slug === "local-search-gmb-ads" ? (
                  <LocalCard service={service} theme={theme} />
                ) : service.slug === "seo-optimisation" ? (
                  <SEOCard service={service} theme={theme} />
                ) : service.slug === "landing-page-optimization" ? (
                  <LandingAICard service={service} theme={theme} />
                ) : (
                  <StandardCard service={service} />
                )}
              </div>
            );
          })}
          <div className="shrink-0 w-4" />
        </div>

        {/* Dots + CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {orderedServices.map((_, i) => (
              <button key={i} onClick={() => scrollToIdx(i)} aria-label={`Go to slide ${i + 1}`}
                className="relative flex items-center justify-center w-6 h-6">
                <span className={`block rounded-full transition-all duration-300 ${i === activeIdx ? "w-6 h-2 bg-accent" : "w-2 h-2 bg-text-muted/25 hover:bg-text-muted/40"}`} />
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
