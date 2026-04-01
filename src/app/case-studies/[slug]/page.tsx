import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Phone, MessageCircle, CheckCircle, FileDown, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { siteConfig } from "@/data/siteConfig";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Case Study Not Found" };
  const url = `${siteConfig.siteUrl}/case-studies/${slug}`;
  return {
    title: `${cs.title} - Case Study`,
    description: cs.challenge.slice(0, 160),
    alternates: { canonical: url },
    openGraph: { url },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary via-primary-light to-primary-mid relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          <span className="inline-block bg-accent/20 text-accent text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            {cs.industry}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {cs.title}
          </h1>
          <p className="text-white/60 text-lg">{cs.client}</p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="relative -mt-10 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-text-secondary text-xs mb-1">Ad Spend</p>
                <p className="text-2xl font-bold text-primary">{cs.adSpend}</p>
              </div>
              <div className="text-center">
                <p className="text-text-secondary text-xs mb-1">Results</p>
                <p className="text-2xl font-bold text-primary">{cs.leads}</p>
              </div>
              <div className="text-center">
                <p className="text-text-secondary text-xs mb-1">{cs.roasLabel ?? "ROAS"}</p>
                <p className="text-2xl font-bold text-accent">{cs.roas}</p>
              </div>
              <div className="text-center">
                <p className="text-text-secondary text-xs mb-1">Period</p>
                <p className="text-2xl font-bold text-primary">{cs.period}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Challenge */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                The Challenge
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {cs.challenge}
              </p>
            </div>

            {/* Strategy */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                The Strategy
              </h2>
              <ul className="space-y-3">
                {cs.strategy.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                Results
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {cs.results.map((result) => {
                  const useHero = result.highlight && result.subline;
                  const sublineParts = result.subline?.split(" → ");
                  const hasArrow = sublineParts && sublineParts.length >= 2;
                  return (
                    <div
                      key={result.label}
                      className="bg-surface rounded-2xl border border-border flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px] p-6 text-center"
                    >
                      {useHero ? (
                        <>
                          <p className="text-2xl md:text-3xl font-bold text-accent leading-none mb-2">
                            {result.highlight}
                          </p>
                          {hasArrow ? (
                            <p className="text-text-secondary text-xs font-medium mb-3 flex items-center gap-1.5 justify-center flex-wrap">
                              <span className="tabular-nums">{sublineParts[0]}</span>
                              <ArrowRight className="w-3.5 h-3.5 text-accent/70 shrink-0" />
                              <span className="tabular-nums font-semibold text-primary">{sublineParts[1]}</span>
                            </p>
                          ) : (
                            <p className="text-text-secondary text-xs font-medium mb-3 tabular-nums">
                              {result.subline}
                            </p>
                          )}
                          <p className="text-text-secondary text-sm font-medium">
                            {result.label}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-xl md:text-2xl font-bold text-accent leading-snug mb-2 min-h-13 flex items-center justify-center">
                            {result.value}
                          </p>
                          <p className="text-text-secondary text-sm font-medium">
                            {result.label}
                          </p>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Takeaways */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {cs.keyTakeaways.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download PDF (when available) */}
            {cs.pdfUrl && (
              <div className="pt-4 border-t border-border">
                <a
                  href={cs.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors"
                >
                  <FileDown className="w-5 h-5" />
                  Download full case study (PDF)
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Want Results Like These?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Let&apos;s discuss how I can help your business achieve similar growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Book Strategy Call
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
