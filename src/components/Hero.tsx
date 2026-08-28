"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import AttributionFlow from "./AttributionFlow";
import { heroHighlights, homepageCopy, siteConfig } from "@/data/siteData";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const { hero } = homepageCopy;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div className="absolute inset-0 hero-dot-bg" />
      <div className="pointer-events-none absolute inset-0 hero-glow-primary" />
      <div className="pointer-events-none absolute inset-0 hero-glow-secondary" />

      <div className="container-wide relative px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div style={{ y: contentY }} className="max-w-xl">
            <motion.p
              className="section-label mb-5"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              {hero.label}
            </motion.p>

            <TextReveal
              text={hero.headline}
              className="font-display text-[2.35rem] leading-[1.02] font-semibold tracking-[-0.045em] text-white sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.75rem]"
              highlightWords={hero.highlightWords}
            />

            <motion.p
              className="mt-5 text-[17px] leading-snug font-medium text-white/90 md:text-lg md:leading-snug"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38, ease }}
            >
              {hero.subheading}
            </motion.p>

            <motion.div
              className="mt-5 space-y-3.5 border-t border-white/[0.06] pt-5"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46, ease }}
            >
              <p className="text-[15px] leading-[1.65] text-muted">
                {hero.body[0]}
              </p>
              <p className="text-sm leading-[1.65] text-muted-dim">
                {hero.body[1]}
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.54, ease }}
            >
              <a href={siteConfig.contactUrl} className="btn-primary">
                {siteConfig.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a href={hero.secondaryCtaHref} className="btn-secondary">
                {hero.secondaryCta}
              </a>
            </motion.div>

            <motion.p
              className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-[11px] leading-relaxed tracking-wide text-muted-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.62, ease }}
            >
              {heroHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </motion.p>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            className="relative lg:max-h-[min(560px,80vh)]"
          >
            <AttributionFlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
