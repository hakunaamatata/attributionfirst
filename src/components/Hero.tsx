"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AttributionFlow from "./AttributionFlow";
import { homepageCopy, siteConfig } from "@/data/siteData";

const headlineLines = ["Your next", "customers are", "already", "searching."];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 48]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const { hero } = homepageCopy;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="atmosphere-glow absolute inset-0" />

      <div className="container-wide relative px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <motion.div style={{ y: contentY }}>
            <div className="hero-headline text-white">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={line}
                  className="block overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.01, delay: 0.15 + i * 0.08 }}
                >
                  <motion.span
                    className={`block ${
                      line === "searching."
                        ? "gradient-text-accent"
                        : ""
                    }`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.85, delay: 0.2 + i * 0.1, ease }}
                  >
                    {line}
                  </motion.span>
                </motion.span>
              ))}
            </div>

            <motion.p
              className="mt-8 max-w-md text-lg font-medium leading-snug text-muted md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease }}
            >
              {hero.subheading}
            </motion.p>

            <motion.p
              className="mt-5 max-w-md text-sm leading-[1.75] text-muted-dim md:text-[15px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease }}
            >
              {hero.body.join(" ")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.88, ease }}
            >
              <a href="#contact" className="btn-primary">
                {siteConfig.primaryCta}
                <span aria-hidden="true">→</span>
              </a>
              <a href="#approach-scroll" className="btn-secondary">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[8px]">
                  ▶
                </span>
                See how it works
              </a>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: visualY }} className="relative lg:pl-4">
            <AttributionFlow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
