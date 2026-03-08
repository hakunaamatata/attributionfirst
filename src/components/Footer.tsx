import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center text-white font-bold text-sm">
                JK
              </div>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {siteConfig.title}. Specializing in Google Ads and Meta Ads
              campaigns focused on ROI and scalable growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.callUrl}
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
