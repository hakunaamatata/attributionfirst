import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden scroll-mt-24 py-24 md:py-32">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0c0520] via-[#140d30] to-[#0a0d2e]" />

      {/* Large accent orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[150px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139,92,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wide mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" aria-hidden="true" />
          Free Strategy Call
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight tracking-tight">
          Let&apos;s Grow Your
          <br />
          <span className="bg-linear-to-r from-accent via-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Business Together
          </span>
        </h2>
        <p className="text-text-secondary text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to generate high-quality leads and maximise your ROAS? Let&apos;s
          discuss your marketing strategy — no commitment, just clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.callUrl}
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-[0_8px_40px_rgba(139,92,246,0.35)] hover:-translate-y-0.5 active:translate-y-0 text-base cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.04] border border-white/10 hover:border-accent/30 hover:bg-accent/5 text-primary font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-base cursor-pointer backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <MessageCircle className="w-5 h-5 text-whatsapp" aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust */}
        <p className="mt-10 text-text-tertiary text-sm">
          Trusted by 10+ businesses across India & UAE &middot; No long-term contracts
        </p>
      </div>
    </section>
  );
}
