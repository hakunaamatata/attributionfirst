import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import { contactPageCopy, siteConfig } from "@/data/siteData";
import {
  absoluteUrl,
  buildContactPageSchema,
  buildPageMetadata,
  pageSeo,
} from "@/lib/seo";

export const metadata = buildPageMetadata(pageSeo.contact);

const contactMethods = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.callUrl,
    detail: siteConfig.phone,
  },
  {
    label: "WhatsApp",
    value: "Chat directly on WhatsApp",
    href: siteConfig.whatsappUrl,
    detail: "Open WhatsApp",
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    detail: siteConfig.email,
  },
  {
    label: "LinkedIn",
    value: "Connect with Junaid",
    href: siteConfig.linkedin,
    detail: "View profile",
    external: true,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: undefined,
    detail: siteConfig.location,
  },
];

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: absoluteUrl(pageSeo.contact.path) },
    ],
  };

  const structuredData = [breadcrumbSchema, buildContactPageSchema()];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="section-padding relative overflow-hidden border-b border-border pt-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-60" />
        <div className="container-wide relative text-center">
          <FadeIn>
            <SectionLabel>{contactPageCopy.label}</SectionLabel>
            <h1 className="headline mx-auto mt-5 max-w-3xl">{contactPageCopy.headline}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-[1.8] text-muted md:text-base">
              {contactPageCopy.subheading}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-padding border-b border-border">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-3">
            {contactPageCopy.pathways.map((pathway, i) => (
              <FadeIn key={pathway.sub} delay={0.08 + i * 0.06}>
              <div
                className="flex h-full flex-col rounded-2xl border border-border bg-charcoal-elevated/60 p-6"
              >
                <p className="text-[10px] font-medium tracking-[0.16em] text-muted-dim uppercase">
                  {pathway.heading}
                </p>
                <h2 className="mt-2 font-display text-lg font-semibold text-accent">{pathway.sub}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pathway.description}</p>
                <a
                  href={pathway.cta.href}
                  target={pathway.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={pathway.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
                >
                  {pathway.cta.label}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-light">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                {contactPageCopy.formHeading}
              </h2>
              <div className="mt-6 rounded-2xl border border-border bg-charcoal-elevated/80 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                {contactPageCopy.directHeading}
              </h2>
              <div className="mt-6 space-y-3">
                {contactMethods.map((method) => {
                  const inner = (
                    <>
                      <p className="text-[10px] font-medium tracking-[0.14em] text-muted-dim uppercase">
                        {method.label}
                      </p>
                      <p className="mt-1 text-sm text-muted">{method.detail}</p>
                    </>
                  );

                  if (!method.href) {
                    return (
                      <div
                        key={method.label}
                        className="rounded-xl border border-border bg-charcoal-elevated/60 p-4"
                      >
                        {inner}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noopener noreferrer" : undefined}
                      className="block rounded-xl border border-border bg-charcoal-elevated/60 p-4 transition-colors hover:border-border-hover hover:bg-charcoal-elevated"
                    >
                      {inner}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
