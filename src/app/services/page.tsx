import type { Metadata } from "next";
import { Target, BarChart3, Megaphone, Filter, Layout, MapPin, CheckCircle, Phone, MessageCircle, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import { serviceBlockThemes } from "@/data/sectionThemes";
import { siteConfig } from "@/data/siteConfig";
import ServiceIllustration from "@/components/ServiceIllustration";

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
      {/* Page Hero — multi-color wash + comfortable height */}
      <section className="relative flex min-h-[min(52vh,560px)] flex-col justify-center overflow-hidden border-b border-white/8 bg-bg pt-40 pb-20 md:min-h-[min(48vh,620px)] md:pt-48 md:pb-28">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/18 via-bg to-violet-600/12 dark:from-accent/22 dark:via-bg dark:to-indigo-950/50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(59,130,246,0.22),transparent_55%)] dark:bg-[radial-gradient(ellipse_90%_55%_at_50%_-25%,rgba(99,102,241,0.28),transparent_50%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-accent to-emerald-500 opacity-90" aria-hidden />
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Services That Drive Measurable Growth
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
            Data-driven marketing solutions tailored to your business goals.
            Every campaign is built to deliver ROI.
          </p>
        </div>
      </section>

      {/* Services Detail — alternating color blocks, tall sections */}
      <section className="bg-bg">
        <div>
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Target;
            const isReversed = i % 2 !== 0;
            const theme = serviceBlockThemes[i % serviceBlockThemes.length];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className="relative scroll-mt-28 overflow-hidden border-b border-white/6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-[3px] bg-linear-to-r ${theme.topBar} opacity-[0.92]`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${theme.wash}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute -right-20 top-1/2 h-[min(85vw,380px)] w-[min(85vw,380px)] -translate-y-1/2 rounded-full blur-3xl opacity-[0.45] ${theme.glow} md:-right-12`}
                  aria-hidden
                />
                <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[min(85vh,820px)] md:py-24 lg:px-8">
                  <div
                    className={`grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                      isReversed ? "lg:direction-rtl" : ""
                    }`}
                  >
                  <div className={isReversed ? "lg:order-2" : ""}>
                    <div
                      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${theme.icon}`}
                    >
                      <Icon className="h-8 w-8" />
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
                          <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${theme.check}`} />
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
                      <div
                        className={`mb-6 flex items-start gap-2 rounded-xl border px-4 py-3 text-sm font-medium leading-snug ${theme.metric}`}
                      >
                        <TrendingUp className={`h-4 w-4 shrink-0 mt-0.5 ${theme.check}`} />
                        <p>{service.metric}</p>
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
                    <ServiceIllustration slug={service.slug} icon={service.icon} />
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/8 bg-bg-card py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-600/10 via-bg-card to-violet-600/14 dark:from-emerald-500/8 dark:to-violet-950/40"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_100%,rgba(139,92,246,0.15),transparent)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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
