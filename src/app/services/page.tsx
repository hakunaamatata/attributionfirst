import type { Metadata } from "next";
import { Target, BarChart3, Megaphone, Filter, Layout, MapPin, CheckCircle, Phone, MessageCircle, TrendingUp } from "lucide-react";
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
  MapPin,
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Performance Marketing Services",
    url: `${siteConfig.siteUrl}/services`,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": `${siteConfig.siteUrl}/#organization` },
        url: `${siteConfig.siteUrl}/services#${s.slug}`,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Services" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} suppressHydrationWarning />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} suppressHydrationWarning />
      {/* Page Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Services That Drive Measurable Growth
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
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
                    {service.tags && service.tags.length > 0 && (
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest mb-2">Optimization Disciplines</p>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag.label}
                              title={tag.tooltip}
                              className="group relative inline-flex flex-col cursor-help"
                            >
                              <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white/6 text-white text-xs font-bold tracking-wide border border-white/10">
                                {tag.label}
                              </span>
                              <span className="absolute bottom-full left-0 mb-2 w-56 bg-bg-card text-white text-[11px] leading-snug rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg border border-white/10">
                                {tag.tooltip}
                              </span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {service.metric && (
                      <div className="mb-6 flex items-start gap-2 bg-accent/8 border border-accent/20 rounded-xl px-4 py-3">
                        <TrendingUp className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <p className="text-accent text-sm font-medium leading-snug">{service.metric}</p>
                      </div>
                    )}
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
      <section className="py-16 md:py-24 bg-bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
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
              className="inline-flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
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
