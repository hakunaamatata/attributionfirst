import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* Brand col */}
          <div>
            {/* Logo — matches navbar */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(145deg, #23205a 0%, #130f35 55%, #0a0720 100%)",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.4)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <svg viewBox="0 0 26 26" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="19.5" width="17" height="2.8" rx="1.2" fill="url(#ft-base)" />
                  <defs>
                    <linearGradient id="ft-base" x1="2" y1="20" x2="20" y2="23" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8b5cf6" /><stop offset="1" stopColor="#5b21b6" />
                    </linearGradient>
                  </defs>
                  <rect x="1.8"  y="15"   width="2.6" height="4.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
                  <rect x="5.0"  y="11.5" width="2.6" height="8"   rx="0.6" fill="#60a5fa" fillOpacity="0.9" />
                  <rect x="8.2"  y="13"   width="2.6" height="6.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
                  <rect x="11.4" y="9"    width="2.6" height="10.5" rx="0.6" fill="#60a5fa" fillOpacity="0.9" />
                  <rect x="14.6" y="11"   width="2.6" height="8.5" rx="0.6" fill="#93c5fd" fillOpacity="0.7" />
                  <rect x="17.8" y="6"    width="2.6" height="13.5" rx="0.6" fill="#3b82f6" />
                  <path d="M2.8 15.8 6.2 12.2 9.3 14 13 9.5 19.5 2.5" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.8 2.2 19.5 2.5 19.8 6.2" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="19.6" cy="2.6" r="0.7" fill="#fef08a" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-black text-sm leading-none tracking-tight text-white">ATTRIBUTION</span>
                <span className="font-bold text-[9px] leading-none tracking-[0.25em] text-yellow-400">FIRST</span>
              </div>
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-5">
              {siteConfig.title}. Specialising in Google Ads and Meta Ads
              campaigns focused on ROI and scalable growth.
            </p>

            {/* Social quick links */}
            <div className="flex items-center gap-2">
              <a href={siteConfig.callUrl}
                className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-200">
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-whatsapp hover:border-whatsapp/30 hover:bg-whatsapp/10 transition-all duration-200">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/10 transition-all duration-200">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Credit */}
            <p className="text-white/20 text-xs mt-5">
              Website Design, SEO &amp; Landing Pages by{" "}
              <a href="https://nouman-portfolio-ashen.vercel.app" target="_blank" rel="noopener noreferrer"
                className="text-white/40 hover:text-accent transition-colors underline underline-offset-2">
                Nouman Khatib
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-white/50 hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.callUrl}
                  className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            Performance Marketing Expert · Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
