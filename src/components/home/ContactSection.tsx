import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight tracking-tight mb-4">
            Let&apos;s Discuss Your Growth Strategy
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to generate more leads and maximize your ROAS? Get in touch
            and let&apos;s create a plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold text-primary mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-6">
              Direct Contact
            </h3>
            <div className="space-y-6">
              <a
                href={siteConfig.callUrl}
                className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors group"
              >
                <div className="w-12 h-12 bg-teal-500/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
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
                className="flex items-start gap-4 p-4 rounded-xl bg-surface border border-border hover:border-teal-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-teal-500/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
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
                <div className="w-12 h-12 bg-teal-500/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
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
                <div className="w-12 h-12 bg-teal-500/10 text-accent rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
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
                <div className="w-12 h-12 bg-teal-500/10 text-accent rounded-xl flex items-center justify-center shrink-0">
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
  );
}
