"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { homepageCopy, siteConfig } from "@/data/siteData";

export default function CTA() {
  const { cta } = homepageCopy;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(62,232,255,0.06)_0%,transparent_55%)]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          aria-hidden="true"
        >
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${10 + i * 12}%`}
              y1="0"
              x2="50%"
              y2="100%"
              stroke="#3ee8ff"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: i * 0.15 }}
            />
          ))}
        </svg>
      </div>

      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-charcoal-elevated/50 p-10 text-center backdrop-blur-sm md:p-16">
          <FadeIn>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
              {cta.headline}
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-base leading-[1.7] text-muted md:text-lg">
              {cta.subheading}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-4 text-sm leading-[1.7] text-muted md:text-base">
              {cta.body.join(" ")}
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-dim">
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.email}
              </a>
              <span className="hidden sm:inline">·</span>
              <a
                href={siteConfig.phoneTel}
                className="transition-colors hover:text-accent"
              >
                {siteConfig.phone}
              </a>
              <span className="hidden sm:inline">·</span>
              <span>{siteConfig.location}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={siteConfig.whatsapp}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                Email us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
