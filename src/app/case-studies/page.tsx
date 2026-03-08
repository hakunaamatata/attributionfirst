import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real campaigns. Explore detailed case studies showing how data-driven PPC strategies deliver measurable ROI.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Detailed breakdowns of campaigns I&apos;ve managed — the
            challenges, strategies, and results.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-primary to-primary-mid p-8">
                  <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                    {cs.industry}
                  </span>
                  <h2 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {cs.title}
                  </h2>
                  <p className="text-white/60 text-sm mt-1">{cs.client}</p>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-text-secondary text-xs mb-1">
                        Ad Spend
                      </p>
                      <p className="text-primary font-bold">{cs.adSpend}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs mb-1">
                        Results
                      </p>
                      <p className="text-primary font-bold text-sm">
                        {cs.leads}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs mb-1">ROAS</p>
                      <p className="text-accent font-bold">{cs.roas}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs mb-1">
                        Period
                      </p>
                      <p className="text-primary font-bold">{cs.period}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-accent font-medium text-sm group-hover:gap-3 transition-all">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
