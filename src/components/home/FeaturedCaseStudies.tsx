import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const cardAccents = [
  { border: "border-accent/20", hoverBorder: "hover:border-accent/50", hoverShadow: "hover:shadow-[0_12px_40px_rgba(0,201,167,0.15)]", glow: "rgba(0,201,167,0.12)", tag: "bg-accent/15 border-accent/25 text-accent", metric: "text-accent" },
  { border: "border-blue-500/20", hoverBorder: "hover:border-blue-400/50", hoverShadow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)]", glow: "rgba(59,130,246,0.12)", tag: "bg-blue-500/15 border-blue-400/25 text-blue-300", metric: "text-blue-400" },
  { border: "border-violet-500/20", hoverBorder: "hover:border-violet-400/50", hoverShadow: "hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)]", glow: "rgba(139,92,246,0.12)", tag: "bg-violet-500/15 border-violet-400/25 text-violet-300", metric: "text-violet-400" },
];

export default function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-primary scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-4">
            <TrendingUp className="w-3 h-3" /> Real Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Proof That Speaks For Itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Real results from real campaigns — how I&apos;ve helped businesses generate leads and maximise ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {caseStudies.map((cs, i) => {
            const a = cardAccents[i % cardAccents.length];
            const thirdMetricLabel = cs.roasLabel ?? "ROAS";
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className={`group relative bg-primary-light border ${a.border} ${a.hoverBorder} ${a.hoverShadow} rounded-2xl p-6 md:p-7 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col`}
              >
                {/* glow */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top right, ${a.glow} 0%, transparent 60%)` }} />

                <div className="relative z-10 flex flex-col flex-1">
                  <span className={`self-start inline-flex items-center px-2.5 py-1 rounded-full border text-xs font-semibold mb-4 ${a.tag}`}>
                    {cs.industry}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-white/40 text-xs mb-6">{cs.client}</p>

                  {/* metrics bar */}
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl bg-white/4 border border-white/6">
                    <div>
                      <p className="text-white/35 text-[10px] uppercase tracking-wide mb-1">Ad Spend</p>
                      <p className="text-white font-bold text-sm">{cs.adSpend}</p>
                    </div>
                    <div>
                      <p className="text-white/35 text-[10px] uppercase tracking-wide mb-1">Results</p>
                      <p className="text-white font-bold text-sm">{cs.leads}</p>
                    </div>
                    <div>
                      <p className="text-white/35 text-[10px] uppercase tracking-wide mb-1">{thirdMetricLabel}</p>
                      <p className={`font-bold text-sm ${a.metric}`}>{cs.roas}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-white/40 group-hover:text-accent font-medium text-sm transition-all mt-auto">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent border border-accent/30 hover:bg-accent hover:text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
