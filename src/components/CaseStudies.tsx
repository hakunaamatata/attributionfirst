"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { AnimatedStat, AnimatedProgressBar } from "./CaseStudyStats";
import { caseStudies, homepageCopy, type CaseStudyStat } from "@/data/siteData";

function StatTile({
  stat,
  index,
}: {
  stat: CaseStudyStat;
  index: number;
}) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-charcoal/80 p-4 md:p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="font-display text-2xl font-bold text-white md:text-3xl">
        <AnimatedStat
          value={stat.value}
          prefix={stat.prefix}
          suffix={stat.suffix}
          decimals={stat.decimals ?? 0}
          delay={index * 0.1}
        />
      </p>
      <p className="mt-1 text-xs font-medium text-white/80">{stat.label}</p>
      <p className="mt-0.5 text-[10px] text-muted-dim">{stat.sub}</p>
    </motion.div>
  );
}

export default function CaseStudies() {
  const { spotlight } = homepageCopy;

  return (
    <section id="case-studies" className="section-padding relative overflow-hidden bg-charcoal-light">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-accent/3 blur-[120px]" />

      <div className="container-wide relative">
        <SectionLabel>Case Studies</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">
            {spotlight.headline}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {spotlight.subheading} {spotlight.story}
          </p>
        </FadeIn>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.company} delay={i * 0.1}>
              <motion.article
                className="group relative overflow-hidden rounded-2xl border border-border bg-charcoal-elevated"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/4 via-transparent to-indigo-500/4" />

                <div className="relative grid lg:grid-cols-[1fr_1.4fr]">
                  <div className="border-b border-border p-8 lg:border-r lg:border-b-0 md:p-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-accent/20 bg-accent-muted px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-accent uppercase">
                        {study.category}
                      </span>
                      <span className="text-[10px] text-muted-dim">
                        {study.period}
                      </span>
                    </div>

                    <h3 className="font-display mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                      {study.company}
                    </h3>
                    <p className="mt-2 text-xs text-muted-dim">{study.spend}</p>
                    <p className="mt-4 text-sm leading-[1.7] text-muted">
                      {study.summary}
                    </p>

                    <div className="mt-8 rounded-xl border border-accent/20 bg-accent-muted p-6">
                      <AnimatedStat
                        value={study.highlight.value}
                        prefix={study.highlight.prefix}
                        suffix={study.highlight.suffix}
                        decimals={study.highlight.decimals}
                        className="font-display text-5xl font-bold text-accent md:text-6xl"
                      />
                      <p className="mt-2 text-sm font-medium text-white/80">
                        {study.highlight.label}
                      </p>
                      <motion.div
                        className="mt-4 h-1 overflow-hidden rounded-full bg-charcoal"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-full rounded-full bg-accent"
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            delay: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </motion.div>
                    </div>

                    {study.pdfUrl && (
                      <a
                        href={study.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost mt-6 inline-flex text-xs"
                      >
                        Download case study PDF
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>

                  <div className="p-8 md:p-10">
                    <p className="mb-4 text-[10px] font-medium tracking-[0.2em] text-muted-dim uppercase">
                      Key metrics
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {study.stats.map((stat, j) => (
                        <StatTile key={stat.label} stat={stat} index={j} />
                      ))}
                    </div>

                    <div className="mt-8 space-y-5 border-t border-border pt-8">
                      <p className="text-[10px] font-medium tracking-[0.2em] text-muted-dim uppercase">
                        Before vs after
                      </p>
                      {study.bars.map((bar, j) => (
                        <AnimatedProgressBar
                          key={bar.label}
                          before={bar.before}
                          after={bar.after}
                          label={bar.label}
                          unit={bar.unit}
                          prefix={bar.prefix}
                          invert={bar.invert}
                          delay={j * 0.15}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <a href="#contact" className="btn-ghost mt-12 inline-flex">
            View Case Studies
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
