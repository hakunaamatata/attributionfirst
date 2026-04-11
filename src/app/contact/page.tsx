import type { Metadata } from "next";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Junaid Ahmed Kazi for performance marketing services, Google Ads management, and lead generation campaigns.",
  alternates: { canonical: `${siteConfig.siteUrl}/contact` },
  openGraph: { url: `${siteConfig.siteUrl}/contact` },
};

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Contact" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} suppressHydrationWarning />
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let&apos;s Discuss Your Growth Strategy
          </h1>
          <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            Ready to generate more leads and maximize your ROAS? Get in touch
            and let&apos;s create a plan.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Direct Contact
              </h2>
              <div className="space-y-6">
                <a
                  href={siteConfig.callUrl}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <p className="text-text-secondary text-sm">
                      {siteConfig.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-whatsapp transition-colors group"
                >
                  <div className="w-12 h-12 bg-whatsapp/10 text-whatsapp rounded-xl flex items-center justify-center shrink-0 group-hover:bg-whatsapp group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">WhatsApp</p>
                    <p className="text-text-secondary text-sm">
                      Chat directly on WhatsApp
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-text-secondary text-sm">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors group"
                >
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">LinkedIn</p>
                    <p className="text-text-secondary text-sm">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Location</p>
                    <p className="text-text-secondary text-sm">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
