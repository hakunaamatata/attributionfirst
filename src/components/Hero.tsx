"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import { homepageCopy, siteConfig } from "@/data/siteData";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const { hero } = homepageCopy;

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="container-wide relative px-5 md:px-8 lg:px-12">
        <motion.div style={{ y: contentY }} className="mx-auto max-w-4xl">
          <motion.p
            className="section-label mb-6"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.label}
          </motion.p>

          <TextReveal
            text={hero.headline}
            className="font-display text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            highlightWords={["looking", "you."]}
          />

          <motion.p
            className="mt-6 text-xl font-medium leading-snug text-white/90 md:text-2xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.subheading}
          </motion.p>

          <div className="mt-8 max-w-2xl space-y-4">
            {hero.body.map((paragraph, i) => (
              <motion.p
                key={i}
                className="text-base leading-[1.75] text-muted md:text-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.45 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#contact" className="btn-primary">
              {siteConfig.primaryCta}
              <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
