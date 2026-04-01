import type { Metadata } from "next";
import { Target, BarChart3, Megaphone, Filter, Layout, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Performance marketing services including Google Ads management, Meta Ads campaigns, lead generation funnels, and landing page optimization.",
  alternates: { canonical: `${siteConfig.siteUrl}/services` },
  openGraph: { url: `${siteConfig.siteUrl}/services` },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  BarChart3,
  Megaphone,
  Filter,
  Layout,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services That Drive Measurable Growth
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
            Data-driven marketing solutions tailored to your business goals.
            Every campaign is built to deliver ROI.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Target;
              const isReversed = i % 2 !== 0;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl mb-6">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      {service.longDescription}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-text-secondary"
                        >
                          <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={siteConfig.callUrl}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Get Started
                    </a>
                  </div>

                  <div className={isReversed ? "lg:order-1" : ""}>
                    <div className="bg-surface rounded-2xl border border-border p-8 md:p-12">
                      <div className="w-full aspect-square max-w-xs mx-auto flex items-center justify-center">
                        <Icon className="w-32 h-32 text-accent/20" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-primary-mid">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s discuss which services are right for your business and
            create a custom strategy.
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
