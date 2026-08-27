"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import AttributionFlow from "./AttributionFlow";
import { heroHighlights } from "@/data/siteData";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-20 left-0 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[100px]" />

      <div className="container-wide relative px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div style={{ y: contentY }}>
            <motion.p
              className="section-label mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              B2B Performance Marketing
            </motion.p>

            <TextReveal
              text="Dominate AI Search."
              className="font-display text-[2.75rem] leading-[0.95] font-semibold tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
              highlightWords={["AI", "Search."]}
            />

            <motion.p
              className="mt-7 max-w-lg text-base leading-[1.7] text-muted md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Full-funnel performance marketing and tracking engineered for B2B
              brands spending{" "}
              <span className="text-white/90">$10,000+/month</span>.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <a href="#contact" className="btn-primary">
                Book a Strategy Call
                <span aria-hidden="true">→</span>
              </a>
              <a href="#attribution" className="btn-secondary">
                See How It Works
              </a>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <div className="flex -space-x-2">
                {[
                  { letter: "J", title: "Junaid · Marketing" },
                  { letter: "N", title: "Nouman · Technology" },
                ].map(({ letter, title }) => (
                  <div
                    key={letter}
                    title={title}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-charcoal-elevated text-[10px] font-bold text-muted"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-muted-dim">
                {heroHighlights.join(" · ")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-b from-accent/10 via-transparent to-transparent blur-2xl" />
            <AttributionFlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
