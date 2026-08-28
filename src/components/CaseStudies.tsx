"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { AnimatedStat, AnimatedProgressBar } from "./CaseStudyStats";
import { caseStudies, homepageCopy, type CaseStudy } from "@/data/siteData";

const ease = [0.16, 1, 0.3, 1] as const;
const AUTO_ADVANCE_MS = 6500;
const MANUAL_PAUSE_MS = 12000;

function CaseStudyPanel({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease }}
      className="case-study-panel relative overflow-hidden rounded-2xl border border-border bg-charcoal-elevated/80"
    >
      <div className="case-study-panel-glow pointer-events-none absolute inset-0" />

      <div className="relative border-b border-border p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] tracking-[0.14em] uppercase">
          <span className="rounded-full border border-border bg-charcoal-light px-2.5 py-1 text-muted-dim">
            Analytics
          </span>
          <span className="text-muted-dim" aria-hidden="true">
            →
          </span>
          <span className="rounded-full border border-border-active bg-charcoal-light px-2.5 py-1 text-accent">
            Pipeline
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.14em] text-muted-dim uppercase">
          <span className="rounded-full border border-border-active bg-charcoal-light px-2.5 py-1 text-accent">
            {study.category}
          </span>
          <span>{study.period}</span>
          <span>·</span>
          <span>{study.spend}</span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl lg:text-[2.75rem]">
          {study.company}
        </h3>

        <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-muted md:text-base">
          {study.summary}
        </p>

        <div className="mt-8 inline-flex flex-col rounded-xl border border-border-active bg-charcoal-light/80 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <AnimatedStat
            key={`${study.company}-highlight`}
            value={study.highlight.value}
            prefix={study.highlight.prefix}
            suffix={study.highlight.suffix}
            decimals={study.highlight.decimals}
            className="font-display text-4xl font-semibold tracking-tight text-accent md:text-5xl"
          />
          <p className="mt-1.5 text-sm text-muted">{study.highlight.label}</p>
        </div>
      </div>

      <div className="relative grid gap-px bg-border md:grid-cols-2">
        {study.stats.map((stat, j) => (
          <div
            key={`${study.company}-${stat.label}`}
            className="case-study-stat-cell bg-charcoal-elevated/90 p-5 md:p-6"
            style={{ animationDelay: `${j * 60}ms` }}
          >
            <p className="font-display text-2xl font-medium text-white md:text-[1.75rem]">
              <AnimatedStat
                key={`${study.company}-${stat.label}-value`}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
                delay={j * 0.08}
              />
            </p>
            <p className="mt-1 text-xs font-medium text-muted">{stat.label}</p>
            <p className="mt-0.5 text-[10px] text-muted-dim">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="relative space-y-5 border-t border-border p-6 md:p-8">
        <p className="text-[10px] font-medium tracking-[0.2em] text-muted-dim uppercase">
          Performance shift
        </p>
        {study.bars.map((bar, j) => (
          <AnimatedProgressBar
            key={`${study.company}-${bar.label}`}
            before={bar.before}
            after={bar.after}
            label={bar.label}
            unit={bar.unit}
            prefix={bar.prefix}
            invert={bar.invert}
            delay={j * 0.1}
          />
        ))}

        {study.pdfUrl && (
          <a
            href={study.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 inline-flex"
          >
            Read full case study
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function CaseStudies() {
  const { spotlight } = homepageCopy;
  const sectionRef = useRef<HTMLElement>(null);
  const manualPauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [manualPaused, setManualPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const isInView = useInView(sectionRef, { amount: 0.25, margin: "-60px" });
  const isPaused = isHovered || manualPaused;
  const activeStudy = caseStudies[activeIndex];

  const goTo = useCallback((index: number, manual = false) => {
    const next = Math.max(0, Math.min(caseStudies.length - 1, index));
    setActiveIndex(next);
    setProgressKey((k) => k + 1);

    if (manual) {
      setManualPaused(true);
      if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
      manualPauseTimeout.current = setTimeout(() => setManualPaused(false), MANUAL_PAUSE_MS);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (manualPauseTimeout.current) clearTimeout(manualPauseTimeout.current);
    };
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % caseStudies.length);
      setProgressKey((k) => k + 1);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [isInView, isPaused, activeIndex]);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="section-padding relative overflow-hidden border-t border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsHovered(true)}
      onBlurCapture={(e) => {
        if (!sectionRef.current?.contains(e.relatedTarget as Node)) {
          setIsHovered(false);
        }
      }}
    >
      <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-60" />
      <div className="pointer-events-none absolute inset-0 case-studies-grid opacity-40" />

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>Case Studies</SectionLabel>
            <FadeIn delay={0.06}>
              <h2 className="headline mt-5 max-w-lg">{spotlight.headline}</h2>
              <p className="mt-4 max-w-md text-sm leading-[1.75] text-muted md:text-base">
                {spotlight.subheading}
              </p>
            </FadeIn>

            <nav className="mt-10 hidden space-y-2 lg:block" aria-label="Case studies">
              {caseStudies.map((study, i) => {
                const isActive = activeIndex === i;

                return (
                  <button
                    key={study.company}
                    type="button"
                    onClick={() => goTo(i, true)}
                    aria-current={isActive ? "true" : undefined}
                    className={`case-study-tab group relative w-full overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-500 md:px-5 md:py-5 ${
                      isActive
                        ? "border-border-hover bg-charcoal-elevated/90 shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                        : "border-border bg-charcoal-light/40 hover:border-border-hover hover:bg-charcoal-elevated/50"
                    }`}
                  >
                    {isActive && (
                      <span className="case-study-tab-accent" aria-hidden="true" />
                    )}
                    {isActive && isInView && !isPaused && (
                      <motion.span
                        key={`progress-${activeIndex}-${progressKey}`}
                        className="case-study-tab-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        aria-hidden="true"
                      />
                    )}

                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <span
                          className={`text-[10px] tracking-[0.16em] uppercase transition-colors ${
                            isActive ? "text-accent" : "text-muted-dim"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")} · {study.category}
                        </span>
                        <p
                          className={`mt-1.5 font-display text-lg font-semibold transition-colors md:text-xl ${
                            isActive ? "text-white" : "text-white/75 group-hover:text-white"
                          }`}
                        >
                          {study.company}
                        </p>
                        <p className="mt-1 text-xs text-muted-dim">{study.period}</p>
                      </div>
                      <span
                        className={`font-display text-sm font-semibold transition-colors ${
                          isActive ? "text-accent" : "text-muted-dim"
                        }`}
                      >
                        {study.highlight.prefix}
                        {study.highlight.value}
                        {study.highlight.suffix}
                      </span>
                    </div>
                  </button>
                );
              })}
            </nav>

            <div className="mt-8 hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1, true)}
                disabled={activeIndex === 0}
                className="how-we-think-nav-btn"
                aria-label="Previous case study"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1, true)}
                disabled={activeIndex === caseStudies.length - 1}
                className="how-we-think-nav-btn"
                aria-label="Next case study"
              >
                →
              </button>
              <span className="text-xs text-muted-dim">
                {activeIndex + 1} / {caseStudies.length}
              </span>
            </div>
          </div>

          <div className="relative min-h-0 lg:min-h-[480px]">
            <div className="mb-6 space-y-2 lg:hidden" aria-label="Case studies">
              {caseStudies.map((study, i) => {
                const isActive = activeIndex === i;

                return (
                  <button
                    key={`mobile-${study.company}`}
                    type="button"
                    onClick={() => goTo(i, true)}
                    aria-current={isActive ? "true" : undefined}
                    className={`case-study-tab group relative w-full overflow-hidden rounded-xl border px-4 py-4 text-left transition-all duration-500 ${
                      isActive
                        ? "border-border-hover bg-charcoal-elevated/90 shadow-[0_16px_40px_rgba(0,0,0,0.3)]"
                        : "border-border bg-charcoal-light/40"
                    }`}
                  >
                    {isActive && (
                      <span className="case-study-tab-accent" aria-hidden="true" />
                    )}
                    {isActive && isInView && !isPaused && (
                      <motion.span
                        key={`mobile-progress-${activeIndex}-${progressKey}`}
                        className="case-study-tab-progress"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                        aria-hidden="true"
                      />
                    )}
                    <div className="relative flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <span
                          className={`text-[10px] tracking-[0.16em] uppercase ${
                            isActive ? "text-accent" : "text-muted-dim"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")} · {study.category}
                        </span>
                        <p
                          className={`mt-1 font-display text-base font-semibold ${
                            isActive ? "text-white" : "text-white/80"
                          }`}
                        >
                          {study.company}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-dim">{study.period}</p>
                      </div>
                      <span
                        className={`shrink-0 font-display text-sm font-semibold ${
                          isActive ? "text-accent" : "text-muted-dim"
                        }`}
                      >
                        {study.highlight.prefix}
                        {study.highlight.value}
                        {study.highlight.suffix}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <CaseStudyPanel key={activeStudy.company} study={activeStudy} />
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1, true)}
                disabled={activeIndex === 0}
                className="how-we-think-nav-btn"
                aria-label="Previous case study"
              >
                ←
              </button>
              <span className="text-xs text-muted-dim">
                {activeIndex + 1} / {caseStudies.length}
              </span>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1, true)}
                disabled={activeIndex === caseStudies.length - 1}
                className="how-we-think-nav-btn"
                aria-label="Next case study"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
