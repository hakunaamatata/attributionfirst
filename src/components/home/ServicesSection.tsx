"use client";

import { Target, BarChart3, Megaphone, Filter, MapPin, TrendingUp, Zap, Bot, ArrowRight, Search, Globe } from "lucide-react";
import { services } from "@/data/services";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  BarChart3,
  Megaphone,
  Filter,
  Layout: Globe,
  MapPin,
  Search,
};

/* ---------- Standard card (dark) ---------- */
function StandardCard({ service }: { service: (typeof services)[number] }) {
  const Icon = iconMap[service.icon] || Target;
  const features = service.features.slice(0, 3);
  return (
    <div className="group relative bg-primary-light border border-white/[0.07] rounded-2xl p-6 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_32px_rgba(0,201,167,0.12)] transition-all duration-300 overflow-hidden flex flex-col">
      {/* subtle corner glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 text-accent rounded-xl mb-4 group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-white mb-2 group-hover:text-accent transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-white/50 text-xs leading-relaxed mb-4 flex-1">
          {service.description}
        </p>
        <ul className="space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-white/40 text-xs">
              <span className="w-1 h-1 rounded-full bg-accent/60 shrink-0 mt-1.5" />
              {f}
            </li>
          ))}
        </ul>
        {service.metric && (
          <div className="mt-4 flex items-start gap-2 bg-accent/8 border border-accent/15 rounded-lg px-2.5 py-2">
            <TrendingUp className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
            <p className="text-accent/80 text-[11px] leading-snug">{service.metric}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------- SEO featured card ---------- */
function SEOCard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 4);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-violet-500/20 hover:border-violet-400/40 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(139,92,246,0.18)] transition-all duration-300">
      {/* gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0f0a1e] via-[#130d2a] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12)_0%,transparent_60%)]" />
      {/* grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 p-7 md:p-8 flex flex-col md:flex-row gap-8 items-start">
        {/* left */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-5">
            <div className="inline-flex items-center justify-center w-11 h-11 bg-violet-500/15 border border-violet-500/30 text-violet-400 rounded-xl group-hover:bg-violet-500 group-hover:text-white group-hover:border-violet-500 transition-all duration-300">
              <Search className="w-5 h-5" />
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-[10px] font-bold tracking-widest uppercase">
              <Zap className="w-2.5 h-2.5" /> SEO
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
            {service.title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            {service.description}
          </p>
        </div>

        {/* right: features grid */}
        <div className="shrink-0 w-full md:w-64">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-3">What&apos;s included</p>
          <ul className="space-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-white/55 text-xs leading-snug">
                <span className="w-4 h-4 rounded-md bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-violet-400" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          {service.metric && (
            <div className="mt-4 flex items-start gap-2 bg-violet-500/10 border border-violet-400/20 rounded-lg px-3 py-2">
              <TrendingUp className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
              <p className="text-violet-300/80 text-[11px] leading-snug">{service.metric}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Landing Page + AI SEO featured card ---------- */
function LandingAICard({ service }: { service: (typeof services)[number] }) {
  const features = service.features.slice(0, 4);
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/50 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,201,167,0.2)] transition-all duration-300">
      {/* gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#021a14] via-[#051f18] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,167,0.2)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,153,255,0.08)_0%,transparent_55%)]" />
      {/* circuit dots */}
      <div className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: "radial-gradient(circle, #00C9A7 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative z-10 p-7 md:p-8">
        {/* top row */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="inline-flex items-center justify-center w-11 h-11 bg-accent/15 border border-accent/30 text-accent rounded-xl group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-all duration-300">
                <Bot className="w-5 h-5" />
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-[10px] font-bold tracking-widest uppercase">
                <TrendingUp className="w-2.5 h-2.5" /> Trending
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-tight">
              {service.title}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              {service.description}
            </p>
          </div>

          {/* AI tags cluster */}
          {service.tags && (
            <div className="shrink-0 w-full md:w-56">
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-semibold mb-3">Optimization Disciplines</p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag.label}
                    title={tag.tooltip}
                    className="cursor-help inline-flex items-center px-2.5 py-1 rounded-lg bg-accent/10 border border-accent/25 text-accent text-[11px] font-bold tracking-wide hover:bg-accent hover:text-primary transition-all duration-200"
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <p className="text-white/20 text-[10px] mt-2 leading-snug">Hover each tag for definition</p>
            </div>
          )}
        </div>

        {/* bottom: features + metric */}
        <div className="border-t border-white/6 pt-5 flex flex-col md:flex-row gap-6 items-start">
          <ul className="flex-1 grid grid-cols-2 gap-x-4 gap-y-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-white/50 text-xs leading-snug">
                <span className="w-4 h-4 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-1 h-1 rounded-full bg-accent" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          {service.metric && (
            <div className="shrink-0 md:w-64 flex items-start gap-2 bg-accent/10 border border-accent/25 rounded-xl px-3 py-2.5">
              <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <p className="text-accent/90 text-xs font-medium leading-snug">{service.metric}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function ServicesSection() {
  // Split: first 4 standard, last two are SEO + Landing special
  const standardServices = services.filter(
    (s) => s.slug !== "landing-page-optimization" && s.slug !== "local-search-gmb-ads"
  );
  const seoService = services.find((s) => s.slug === "local-search-gmb-ads")!;
  const landingService = services.find((s) => s.slug === "landing-page-optimization")!;

  return (
    <section id="services" className="py-16 md:py-24 bg-primary scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3" /> What I Do
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Services That Drive Growth
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            End-to-end performance marketing solutions designed to generate
            leads, reduce costs, and maximize your return on ad spend.
          </p>
        </div>

        {/* Standard 4-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {standardServices.map((service) => (
            <StandardCard key={service.slug} service={service} />
          ))}
        </div>

        {/* Featured 2-card row */}
        <div className="grid md:grid-cols-2 gap-4">
          <SEOCard service={seoService} />
          <LandingAICard service={landingService} />
        </div>

        {/* CTA strip */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent border border-accent/30 hover:bg-accent hover:text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
