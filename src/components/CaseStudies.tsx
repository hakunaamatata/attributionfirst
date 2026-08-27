"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { AnimatedStat, AnimatedProgressBar } from "./CaseStudyStats";
import { caseStudies, homepageCopy } from "@/data/siteData";

export default function CaseStudies() {
  const { spotlight } = homepageCopy;

  return (
    <section id="case-studies" className="section-padding relative border-t border-white/[0.06]">
      <div className="container-wide">
        <FadeIn>
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="headline mt-6 max-w-3xl">{spotlight.headline}</h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-muted">
            {spotlight.subheading}
          </p>
        </FadeIn>

        <div className="mt-24 space-y-32 md:space-y-40">
          {caseStudies.map((study, i) => {
            const reversed = i % 2 === 1;

            return (
              <FadeIn key={study.company} delay={0.05}>
                <article
                  className={`grid items-start gap-12 lg:grid-cols-12 lg:gap-16 ${
                    reversed ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className={`lg:col-span-5 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] text-muted-dim uppercase">
                      <span className="text-accent">{study.category}</span>
                      <span>·</span>
                      <span>{study.period}</span>
                    </div>

                    <h3 className="mt-6 font-display text-4xl font-medium tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                      {study.company}
                    </h3>

                    <p className="mt-6 text-base leading-[1.8] text-muted">{study.summary}</p>

                    <div className="mt-10 border-l-2 border-accent/40 pl-6">
                      <AnimatedStat
                        value={study.highlight.value}
                        prefix={study.highlight.prefix}
                        suffix={study.highlight.suffix}
                        decimals={study.highlight.decimals}
                        className="font-display text-5xl font-medium tracking-tight text-accent md:text-6xl"
                      />
                      <p className="mt-2 text-sm text-muted">{study.highlight.label}</p>
                    </div>

                    {study.pdfUrl && (
                      <a
                        href={study.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost mt-8 inline-flex"
                      >
                        Read full case study
                        <span aria-hidden="true">→</span>
                      </a>
                    )}
                  </div>

                  <div className={`lg:col-span-7 ${reversed ? "lg:[direction:ltr]" : ""}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {study.stats.map((stat, j) => (
                        <motion.div
                          key={stat.label}
                          className="rounded-xl border border-white/[0.08] bg-charcoal-elevated p-5 md:p-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-60px" }}
                          transition={{
                            duration: 0.6,
                            delay: j * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          <p className="font-display text-2xl font-medium text-white md:text-3xl">
                            <AnimatedStat
                              value={stat.value}
                              prefix={stat.prefix}
                              suffix={stat.suffix}
                              decimals={stat.decimals ?? 0}
                              delay={j * 0.1}
                            />
                          </p>
                          <p className="mt-1 text-xs font-medium text-muted">{stat.label}</p>
                          <p className="mt-0.5 text-[10px] text-muted-dim">{stat.sub}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 space-y-5 rounded-xl border border-white/[0.06] bg-charcoal-light p-6 md:p-8">
                      <p className="text-[10px] font-medium tracking-[0.2em] text-muted-dim uppercase">
                        Performance shift
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
                          delay={j * 0.12}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
