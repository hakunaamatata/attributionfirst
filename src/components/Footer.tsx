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
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <span className="font-extrabold text-primary text-sm tracking-tight">JK</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-base leading-tight text-white">{siteConfig.name}</span>
                <span className="text-white/40 text-xs leading-tight">{siteConfig.title}</span>
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

            {/* Nouman Khatib credit */}
            <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/8">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center shrink-0">
                <span className="font-extrabold text-violet-400 text-[10px] tracking-tight">NK</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <a
                  href="https://nouman-portfolio-ashen.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white/70 text-xs leading-tight hover:text-accent transition-colors"
                >
                  Nouman Khatib
                </a>
                <span className="text-white/30 text-[11px] leading-tight">Website Design, SEO &amp; Landing Pages</span>
              </div>
            </div>
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
