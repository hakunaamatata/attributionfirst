import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const ctaBtnBase =
  "inline-flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden scroll-mt-24 pt-24 pb-16 md:pt-28 md:pb-24 bg-primary"
    >
      {/* Sharp concave wave at top — clean edge between white contact and dark CTA */}
      <div
        className="absolute left-0 right-0 top-0 h-20 w-full pointer-events-none"
        aria-hidden
      >
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 L0,0 C360,80 1080,80 1440,0 L1440,80 Z"
            fill="var(--color-primary)"
          />
        </svg>
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Grow Your Business
        </h2>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to generate high-quality leads and maximize your ROAS? Let&apos;s
          discuss your marketing strategy with a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.callUrl}
            className={`${ctaBtnBase} bg-accent hover:bg-accent-hover hover:shadow-lg hover:shadow-teal-500/30`}
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBtnBase} bg-teal-500 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/25`}
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
