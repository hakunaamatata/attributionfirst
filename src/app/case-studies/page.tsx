import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { caseStudyCardThemes } from "@/data/sectionThemes";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real campaigns. Explore detailed case studies showing how data-driven PPC strategies deliver measurable ROI.",
  alternates: { canonical: `${siteConfig.siteUrl}/case-studies` },
  openGraph: { url: `${siteConfig.siteUrl}/case-studies` },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative flex min-h-[min(50vh,540px)] flex-col justify-center overflow-hidden border-b border-white/8 bg-bg pt-40 pb-20 md:min-h-[min(46vh,600px)] md:pt-48 md:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-cyan-600/12 via-bg to-violet-600/14 dark:from-cyan-500/10 dark:to-violet-950/45"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(34,211,238,0.18),transparent_50%)] dark:bg-[radial-gradient(ellipse_80%_50%_at_40%_-20%,rgba(139,92,246,0.22),transparent_55%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-cyan-500 via-violet-500 to-amber-500 opacity-90" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Case Studies
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            Detailed breakdowns of campaigns I&apos;ve managed — the
            challenges, strategies, and results.
          </p>
        </div>
      </section>

      {/* Proof — tall section, multi-color ambient background */}
      <section className="relative overflow-hidden bg-bg py-16 md:min-h-[min(72vh,900px)] md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-emerald-600/8 via-transparent to-violet-600/10 dark:from-emerald-500/6 dark:to-violet-950/30"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 h-[min(70vw,480px)] w-[min(95vw,900px)] -translate-x-1/2 translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_65%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(167,139,250,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex min-h-0 max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-3xl md:text-4xl">
              Proof That Speaks For Itself
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Real results from real campaigns. Here&apos;s how I&apos;ve helped businesses
              generate leads and maximize ROI.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {caseStudies.map((cs, i) => {
              const cardTheme = caseStudyCardThemes[i % caseStudyCardThemes.length];
              return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${cardTheme.card}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b ${cardTheme.glow} opacity-80`}
                  aria-hidden
                />
                <div className="relative z-10">
                <span
                  className={`mb-4 inline-block rounded-full border px-3 py-1.5 text-xs font-semibold ${cardTheme.badge}`}
                >
                  {cs.industry}
                </span>
                <h3 className="mb-2 text-xl font-bold text-primary transition-colors group-hover:text-accent">
                  {cs.title}
                </h3>
                <p className="mb-6 text-sm text-text-secondary">{cs.client}</p>

                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div>
                    <p className="mb-1 text-xs text-text-secondary">Ad Spend</p>
                    <p className="font-bold text-primary">{cs.adSpend}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-text-secondary">Results</p>
                    <p className="text-sm font-bold text-primary">{cs.leads}</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-text-secondary">{cs.roasLabel ?? "ROAS"}</p>
                    <p className="font-bold text-accent">{cs.roas}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-accent transition-all group-hover:gap-3">
                  Read Full Case Study
                  <ArrowRight className="h-4 w-4" />
                </div>
                </div>
              </Link>
            );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
