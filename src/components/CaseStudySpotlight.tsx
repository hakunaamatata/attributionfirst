"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { AnimatedStat } from "./CaseStudyStats";
import {
  homepageCopy,
  serverFactoryStats,
  serverFactoryHighlights,
} from "@/data/siteData";

export default function CaseStudySpotlight() {
  const { spotlight } = homepageCopy;

  return (
    <section id="results" className="section-padding relative overflow-hidden bg-charcoal-light">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />
      <div className="container-wide relative">
        <SectionLabel>Results</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{spotlight.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 max-w-xl text-lg font-medium text-white/90">
            {spotlight.subheading}
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 max-w-3xl text-base leading-[1.75] text-muted">
            {spotlight.story}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serverFactoryStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-xl border border-border bg-charcoal/80 p-5 md:p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-3xl font-bold text-white md:text-4xl">
                <AnimatedStat
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                  delay={i * 0.1}
                />
              </p>
              <p className="mt-1 text-sm font-medium text-white/80">{stat.label}</p>
              <p className="mt-0.5 text-xs text-muted-dim">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {serverFactoryHighlights.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border p-6 ${
                  item.highlight
                    ? "border-accent/25 bg-accent/[0.04]"
                    : "border-border bg-charcoal-elevated/50"
                }`}
              >
                <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                  <AnimatedStat
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-muted-dim">
            {spotlight.disclaimer}
          </p>
          {spotlight.pdfUrl && (
            <a
              href={spotlight.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-6 inline-flex"
            >
              {spotlight.ctaLabel}
              <span aria-hidden="true">→</span>
            </a>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
