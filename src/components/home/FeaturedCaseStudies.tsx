import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-surface scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            Proof That Speaks For Itself
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Real results from real campaigns. Here&apos;s how I&apos;ve helped businesses
            generate leads and maximize ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((cs) => {
            const thirdMetricLabel = cs.roasLabel ?? "ROAS";
            return (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              className="group bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                {cs.industry}
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                {cs.title}
              </h3>
              <p className="text-text-secondary text-sm mb-6">{cs.client}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <p className="text-text-secondary text-xs mb-1">Ad Spend</p>
                  <p className="text-primary font-bold">{cs.adSpend}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-xs mb-1">Results</p>
                  <p className="text-primary font-bold text-sm">{cs.leads}</p>
                </div>
                <div>
                  <p className="text-text-secondary text-xs mb-1">{thirdMetricLabel}</p>
                  <p className="text-accent font-bold">{cs.roas}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
