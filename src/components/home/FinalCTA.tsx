import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden scroll-mt-24 py-20 md:py-28 bg-primary">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Free Strategy Call
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Let&apos;s Grow Your{" "}
          <span className="text-accent">Business</span>
        </h2>
        <p className="text-white/55 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to generate high-quality leads and maximise your ROAS? Let&apos;s
          discuss your marketing strategy — no commitment, just clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.callUrl}
            className="group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,201,167,0.35)] text-base"
          >
            <Phone className="w-5 h-5" />
            Call Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 hover:bg-white/12 hover:border-white/25 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base"
          >
            <MessageCircle className="w-5 h-5 text-whatsapp" />
            Chat on WhatsApp
          </a>
        </div>

        {/* trust line */}
        <p className="mt-8 text-white/25 text-xs">
          Trusted by 10+ businesses across India &amp; UAE · No long-term contracts
        </p>
      </div>
    </section>
  );
}
