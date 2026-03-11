import { Phone, MessageCircle, CheckCircle, Shield, Clock, BarChart3, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { caseStudies } from "@/data/caseStudies";

export default function GoogleAdsLandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-primary via-primary-light to-primary-mid relative overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Stop Wasting Ad Spend.{" "}
            <span className="text-accent">Start Generating Real Leads.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Google Ads & Meta Ads expert with 5+ years of experience and
            ₹7Cr+ in managed ad spend. I help businesses generate high-quality
            leads at lower costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 text-lg"
            >
              <Phone className="w-5 h-5" />
              Book Free Strategy Call
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Me
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              No long-term contracts
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent" />
              Results in 30 days
            </span>
            <span className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-accent" />
              Transparent reporting
            </span>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">₹7Cr+</p>
              <p className="text-text-secondary text-sm">Ad Spend Managed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">2000+</p>
              <p className="text-text-secondary text-sm">Leads Generated</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-accent">3x</p>
              <p className="text-text-secondary text-sm">Average ROAS</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-text-secondary text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Are you facing these problems?
              </h2>
              <ul className="space-y-4">
                {[
                  "High cost per acquisition eating into profits",
                  "Low quality leads that never convert",
                  "Wasted ad budget on non-performing campaigns",
                  "No proper tracking or attribution setup",
                  "Agencies that don't understand your business",
                ].map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span className="text-text-secondary">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100">
              <h2 className="text-2xl font-bold text-primary mb-6">
                How I solve it:
              </h2>
              <ul className="space-y-4">
                {[
                  "Thorough keyword audit and strategic pruning",
                  "Precision audience targeting and segmentation",
                  "Data-driven bid optimization using Looker Studio",
                  "Full GA4 + GTM conversion tracking setup",
                  "Personalized strategy aligned with your revenue goals",
                ].map((solution) => (
                  <li key={solution} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Case Studies */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">
            Real Results, Real Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs) => (
              <div
                key={cs.slug}
                className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
              >
                <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {cs.industry}
                </span>
                <h3 className="font-bold text-primary mb-3">{cs.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-text-secondary text-xs">Ad Spend</p>
                    <p className="font-bold text-primary">{cs.adSpend}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary text-xs">{cs.roasLabel ?? "ROAS"}</p>
                    <p className="font-bold text-accent">{cs.roas}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 md:py-24" id="audit">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-border p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-2">
              Get a Free Campaign Audit
            </h2>
            <p className="text-text-secondary text-center mb-8">
              Tell me about your business and I&apos;ll analyze your current ad
              performance for free.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
              />
              <select
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                defaultValue=""
              >
                <option value="" disabled>
                  Monthly Ad Budget
                </option>
                <option value="under-50k">Under ₹50,000</option>
                <option value="50k-2l">₹50,000 - ₹2,00,000</option>
                <option value="2l-5l">₹2,00,000 - ₹5,00,000</option>
                <option value="5l-plus">₹5,00,000+</option>
              </select>
              <textarea
                placeholder="What's your biggest marketing challenge?"
                rows={3}
                className="w-full px-4 py-3.5 rounded-xl border border-border bg-white text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Get My Free Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <p className="text-text-secondary text-xs text-center mt-4 flex items-center justify-center gap-1">
              <Shield className="w-3 h-3" />
              Your info is 100% secure. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Join businesses that have grown their leads by 3x with data-driven
            performance marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
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
