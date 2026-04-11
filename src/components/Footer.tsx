import Link from "next/link";
import { Phone, Mail, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { siteConfig, navLinks } from "@/data/siteConfig";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep text-primary overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-accent/20 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12">

          {/* Brand col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo size={40} />
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-base leading-tight text-primary">{siteConfig.name}</span>
                <span className="text-text-secondary text-xs leading-tight">{siteConfig.title}</span>
              </div>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-5">
              {siteConfig.title}. Specialising in Google Ads and Meta Ads
              campaigns focused on ROI and scalable growth.
            </p>

            <div className="flex items-center gap-2">
              <a href={siteConfig.callUrl}
                className="w-10 h-10 rounded-lg bg-white/6 border border-white/10 text-text-tertiary flex items-center justify-center hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-200">
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/6 border border-white/10 text-text-tertiary flex items-center justify-center hover:text-whatsapp hover:border-whatsapp/30 hover:bg-whatsapp/10 transition-all duration-200">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/6 border border-white/10 text-text-tertiary flex items-center justify-center hover:text-violet-400 hover:border-violet-500/25 hover:bg-violet-500/10 transition-all duration-200">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Nouman Khatib credit */}
            <div className="flex items-start gap-3 mt-5 pt-5 border-t border-white/8">
              <div className="w-10 h-10 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0">
                <span className="font-extrabold text-violet-400 text-xs tracking-tight">NK</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <a
                  href="https://nouman-portfolio-ashen.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-base leading-tight text-primary hover:text-accent transition-colors"
                >
                  Nouman Khatib
                </a>
                <span className="text-text-secondary text-xs leading-tight">Senior Full Stack Developer · 8+ Years</span>
                <span className="text-text-secondary text-xs leading-tight">Website Design, SEO & Landing Pages</span>
                <a
                  href="https://nouman-portfolio-ashen.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent/70 hover:text-accent text-xs leading-tight transition-colors mt-0.5"
                >
                  nouman khatib Website ↗
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-tertiary text-xs font-semibold uppercase tracking-widest mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-tertiary text-xs font-semibold uppercase tracking-widest mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={siteConfig.callUrl}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm group">
                  <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Linkedin className="w-3.5 h-3.5" />
                  </span>
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-tertiary text-sm">
                <span className="w-7 h-7 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-text-tertiary text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-text-muted text-xs">
            <span>Performance Marketing Expert · Mumbai, India</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
