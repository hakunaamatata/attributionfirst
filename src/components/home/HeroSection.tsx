import Link from "next/link";
import { ArrowRight, CheckCircle, LineChart, Sparkles } from "lucide-react";
import HeroDashboard from "./HeroDashboard";

const channelPills: { label: string; className: string }[] = [
  {
    label: "Paid search",
    className:
      "border-blue-500/45 bg-blue-500/12 text-blue-800 shadow-blue-500/10 dark:border-blue-400/35 dark:bg-blue-500/15 dark:text-blue-200 dark:shadow-blue-900/20",
  },
  {
    label: "Paid social",
    className:
      "border-fuchsia-500/45 bg-fuchsia-500/12 text-fuchsia-900 shadow-fuchsia-500/10 dark:border-fuchsia-400/35 dark:bg-fuchsia-500/15 dark:text-fuchsia-200 dark:shadow-fuchsia-900/20",
  },
  {
    label: "GA4 & measurement",
    className:
      "border-amber-500/45 bg-amber-500/12 text-amber-950 shadow-amber-500/10 dark:border-amber-400/35 dark:bg-amber-500/15 dark:text-amber-100 dark:shadow-amber-900/20",
  },
  {
    label: "SEO",
    className:
      "border-emerald-500/45 bg-emerald-500/12 text-emerald-900 shadow-emerald-500/10 dark:border-emerald-400/35 dark:bg-emerald-500/15 dark:text-emerald-200 dark:shadow-emerald-900/20",
  },
  {
    label: "CRO & landing pages",
    className:
      "border-cyan-500/45 bg-cyan-500/12 text-cyan-950 shadow-cyan-500/10 dark:border-cyan-400/35 dark:bg-cyan-500/15 dark:text-cyan-100 dark:shadow-cyan-900/20",
  },
];

const trustBadges: { label: string; className: string; iconClass: string }[] = [
  {
    label: "Google Ads Certified",
    className:
      "border-blue-500/50 bg-linear-to-r from-blue-500/18 to-indigo-500/12 text-blue-900 dark:border-blue-400/40 dark:from-blue-500/22 dark:to-indigo-500/15 dark:text-blue-100",
    iconClass: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "Meta Ads Certified",
    className:
      "border-violet-500/50 bg-linear-to-r from-violet-500/18 to-fuchsia-500/12 text-violet-950 dark:border-fuchsia-400/35 dark:from-violet-500/22 dark:to-fuchsia-500/15 dark:text-fuchsia-100",
    iconClass: "text-fuchsia-600 dark:text-violet-400",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden scroll-mt-0"
    >
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-linear-to-br from-bg via-bg-hero-mid to-bg-hero-end transition-[background] duration-300" />

      {/* Large accent orbs */}
      <div className="pointer-events-none absolute left-[-5%] top-[-10%] h-[600px] w-[600px] animate-float rounded-full bg-accent/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-15%] right-[-10%] h-[700px] w-[700px] animate-float-delayed rounded-full bg-accent/6 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full bg-accent/5 blur-[100px]" />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 [background-size:60px_60px] opacity-[0.035] light:opacity-[0.055]"
        style={{
          backgroundImage: `linear-gradient(var(--app-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--app-grid-line) 1px, transparent 1px)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-36 sm:px-6 md:py-44 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-in-up">
            <div className="hero-stagger">
              <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-accent">
                <LineChart className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-text-secondary">
                  Digital marketing · Performance · Attribution
                </span>
              </p>

              <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-primary md:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                Performance Marketing
                <br />
                That Drives{" "}
                <span className="text-accent">Real Revenue</span>
              </h1>

              <p className="mb-6 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl">
                I run and scale{" "}
                <span className="font-medium text-primary">Google Ads</span>,{" "}
                <span className="font-medium text-primary">Meta campaigns</span>, and{" "}
                <span className="font-medium text-primary">full-funnel tracking</span>{" "}
                (GA4, conversions, offline signals) so every rupee ties back to pipeline and
                revenue — for brands in India and the UAE.
              </p>

              <div className="mb-8 flex flex-wrap gap-2">
                {channelPills.map((pill) => (
                  <span
                    key={pill.label}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] ${pill.className}`}
                  >
                    {pill.label}
                  </span>
                ))}
              </div>

              <div className="mb-10 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.label}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium shadow-sm backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] ${badge.className}`}
                  >
                    <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${badge.iconClass}`} aria-hidden="true" />
                    {badge.label}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[0_8px_40px_rgba(30,64,175,0.35)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Get a Free Audit
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/#case-studies"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-[var(--app-cta-secondary-bg)] px-8 py-4 text-[15px] font-semibold text-primary backdrop-blur-sm transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  See Case Studies
                </Link>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-3 lg:hidden"
            role="list"
            aria-label="Campaign metric highlights"
          >
            {[
              { label: "Clicks", value: "4.6K" },
              { label: "Impressions", value: "106K" },
              { label: "Avg. CPC", value: "₹107" },
              { label: "Conversions", value: "1.2K" },
            ].map((row) => (
              <div
                key={row.label}
                role="listitem"
                className="hero-stat-tile rounded-xl border border-border bg-white p-4 text-center shadow-sm backdrop-blur-sm dark:bg-white/[0.04]"
              >
                <p className="mb-1 text-xs text-text-tertiary">{row.label}</p>
                <p className="text-xl font-bold text-accent">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="animation-delay-300 hidden animate-fade-in-up lg:block">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
