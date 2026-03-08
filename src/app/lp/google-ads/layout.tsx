import { siteConfig } from "@/data/siteConfig";
import { Phone } from "lucide-react";

export const metadata = {
  title: "Free Google Ads Strategy Session | Junaid Ahmed Kazi",
  description:
    "Stop wasting ad spend. Get a free strategy session with a Google Ads expert who has managed ₹7Cr+ in ad spend and delivered 3x average ROAS.",
  robots: { index: false, follow: false },
};

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Minimal nav for landing page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                JK
              </div>
              <span className="font-bold text-lg text-primary">
                {siteConfig.name}
              </span>
            </div>
            <a
              href={siteConfig.callUrl}
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}
