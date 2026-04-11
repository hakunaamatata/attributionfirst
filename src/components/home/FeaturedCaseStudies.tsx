import Link from "next/link";
import { ArrowRight, TrendingUp, ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const cardAccents = [
  {
    gradient: "from-violet-500/20 via-transparent to-transparent",
    hoverBorder: "hover:border-accent/30",
    hoverGlow: "hover:shadow-[0_8px_60px_rgba(139,92,246,0.12)]",
    tag: "bg-violet-500/12 border-violet-500/25 text-violet-300",
    metric: "text-accent",
    badge: "bg-violet-500/15 text-violet-300",
  },
  {
    gradient: "from-blue-500/20 via-transparent to-transparent",
    hoverBorder: "hover:border-blue-400/30",
    hoverGlow: "hover:shadow-[0_8px_60px_rgba(59,130,246,0.12)]",
    tag: "bg-blue-500/12 border-blue-500/25 text-blue-300",
    metric: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300",
  },
  {
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    hoverBorder: "hover:border-emerald-400/30",
    hoverGlow: "hover:shadow-[0_8px_60px_rgba(16,185,129,0.12)]",
    tag: "bg-emerald-500/12 border-emerald-500/25 text-emerald-300",
    metric: "text-emerald-400",
    badge: "bg-emerald-500/15 text-emerald-300",
  },
];

export default function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="relative py-20 md:py-28 bg-bg scroll-mt-24">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <TrendingUp className="w-3 h-3" aria-hidden="true" /> Real Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            Proof That Speaks For Itself
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto">
            Real results from real campaigns — how I&apos;ve helped businesses generate leads and maximise ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => {
            const a = cardAccents[i % cardAccents.length];
            const thirdMetricLabel = cs.roasLabel ?? "ROAS";
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group relative bg-bg-card border border-white/[0.06] ${a.hoverBorder} ${a.hoverGlow} rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-32 bg-linear-to-b ${a.gradient} pointer-events-none`} />

                <div className="relative z-10 p-6 md:p-7 flex flex-col flex-1">
                  {/* Industry + arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg border text-xs font-semibold ${a.tag}`}>
                      {cs.industry}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-tertiary group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-200">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-1.5 group-hover:text-accent transition-colors leading-snug line-clamp-2">
                    {cs.title}
                  </h3>
                  <p className="text-text-tertiary text-xs mb-6">{cs.client}</p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {[
                      { label: "Ad Spend", value: cs.adSpend },
                      { label: "Results", value: cs.leads },
                      { label: thirdMetricLabel, value: cs.roas, highlight: true },
                    ].map((metric) => (
                      <div key={metric.label} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.04]">
                        <p className="text-text-muted text-[10px] uppercase tracking-wider mb-1">{metric.label}</p>
                        <p className={`font-bold text-sm ${metric.highlight ? a.metric : "text-primary"}`}>
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent hover:text-white border border-accent/30 hover:bg-accent font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
