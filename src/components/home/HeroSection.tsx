import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import HeroDashboard from "./HeroDashboard";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-light to-primary-mid overflow-hidden scroll-mt-0">
      {/* Noise overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            {/* Badge – higher contrast, pulsing green dot */}
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent/40">
              <span
                className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse-dot flex-shrink-0"
                style={{ boxShadow: "0 0 0 0 rgba(0, 201, 167, 0.5)" }}
              />
              Available for new projects
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Performance Marketing That Drives{" "}
              <span className="text-accent">Real Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Specializing in Google Ads & Meta Ads. 5+ years of ROI-focused
              campaigns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 text-base"
              >
                Get a Free Audit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 text-base"
              >
                See Case Studies
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm">
                Trusted by 10+ businesses across India & UAE
              </p>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-300 hidden lg:block">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}
