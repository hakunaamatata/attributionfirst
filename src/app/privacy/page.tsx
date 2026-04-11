import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Attribution First — how we collect, use, and protect your personal information.",
  alternates: { canonical: `${siteConfig.siteUrl}/privacy` },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-bg border-b border-white/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose-invert">
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-primary mb-3">1. Information We Collect</h2>
              <p>
                When you use our contact form or book a strategy call, we collect the
                information you provide: your name, email address, phone number, and
                message content. We also use Google Analytics (GA4) and Google Tag
                Manager to collect anonymised usage data such as page views, session
                duration, and referral sources.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">2. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Respond to your inquiries and provide marketing consultation services</li>
                <li>Send you information about our services if you have opted in</li>
                <li>Improve our website experience based on anonymised analytics data</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">3. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share data with service providers (email delivery, analytics) who
                process it on our behalf under strict confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">4. Cookies & Tracking</h2>
              <p>
                This website uses Google Tag Manager and Google Analytics 4 to collect
                anonymised browsing data. These tools may set cookies on your browser.
                You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect
                your personal data against unauthorised access, alteration, disclosure,
                or destruction. All data transmission is encrypted via HTTPS.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal data at
                any time. To exercise these rights, please contact us at{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover transition-colors">
                  {siteConfig.email}
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary mb-3">7. Contact</h2>
              <p>
                If you have questions about this privacy policy, please contact:<br />
                <strong className="text-primary">{siteConfig.name}</strong><br />
                Attribution First<br />
                {siteConfig.location}<br />
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:text-accent-hover transition-colors">
                  {siteConfig.email}
                </a><br />
                Phone: {siteConfig.phoneDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
