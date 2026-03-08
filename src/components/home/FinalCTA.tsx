import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-mid relative overflow-hidden scroll-mt-24">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let&apos;s Grow Your Business
        </h2>
        <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Ready to generate high-quality leads and maximize your ROAS? Let&apos;s
          discuss your marketing strategy with a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={siteConfig.callUrl}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
