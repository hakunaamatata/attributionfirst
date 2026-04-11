import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import HeroDashboard from "./HeroDashboard";

const trustBadges = [
  "Google Ads Certified",
  "Meta Ads Certified",
  "₹7Cr+ Managed",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-0"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-[#0a0d2e] to-bg-hero-end" />

      {/* Large accent orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/6 rounded-full blur-[150px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/4 rounded-full blur-[100px] animate-glow-pulse pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-emerald-500/20 backdrop-blur-sm">
              <span
                className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse-dot shrink-0"
                aria-hidden="true"
              />
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold text-primary leading-[1.08] tracking-tight mb-6">
              Performance Marketing
              <br />
              That Drives{" "}
              <span
                className="bg-linear-to-r from-accent via-violet-400 to-indigo-400 bg-clip-text text-transparent animate-gradient"
                style={{ backgroundSize: "200% 200%" }}
              >
                Real Revenue
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg leading-relaxed">
              Specializing in Google Ads & Meta Ads. 5+ years turning ad spend into measurable, scalable growth for brands across India & UAE.
            </p>

            {/* Trust badges - horizontal row */}
            <div className="flex flex-wrap gap-3 mb-10">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-text-secondary text-sm backdrop-blur-sm"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 text-[15px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Get a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-accent/40 text-primary font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-accent/5 text-[15px] cursor-pointer backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See Case Studies
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <div className="flex gap-8 md:gap-12">
                {[
                  { value: "₹7Cr+", label: "Ad Spend" },
                  { value: "10K+", label: "Leads" },
                  { value: "3x", label: "Avg ROAS" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
                    <p className="text-text-tertiary text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: compact stats row */}
          <div className="grid grid-cols-2 gap-3 mt-6 lg:hidden" role="list" aria-label="Campaign highlights">
            {[
              { label: "Clicks", value: "4.6K", color: "text-blue-400", bg: "bg-blue-500/[0.06]", border: "border-blue-500/15" },
              { label: "Impressions", value: "106K", color: "text-cyan-400", bg: "bg-cyan-500/[0.06]", border: "border-cyan-500/15" },
              { label: "Avg. CPC", value: "₹107", color: "text-amber-400", bg: "bg-amber-500/[0.06]", border: "border-amber-500/15" },
              { label: "Conversions", value: "1.2K", color: "text-emerald-400", bg: "bg-emerald-500/[0.06]", border: "border-emerald-500/15" },
            ].map((s) => (
              <div key={s.label} role="listitem" className={`${s.bg} rounded-xl p-4 border ${s.border} text-center backdrop-blur-sm`}>
                <p className="text-text-tertiary text-xs mb-1">{s.label}</p>
                <p className={`font-bold text-xl ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>

          <div className="animate-fade-in-up animation-delay-300 hidden lg:block">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
