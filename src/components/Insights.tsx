"use client";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy, insights } from "@/data/siteData";

const ease = [0.16, 1, 0.3, 1] as const;
const bars = [42, 58, 36, 64, 48];
const sparkPath = "M 24 118 C 48 108, 72 96, 96 82 S 144 52, 168 28 S 210 8, 236 14";

const scrollPhases = [
  {
    label: "01 · The limit",
    line: "Most teams stop at clicks, CTR and CPC — metrics that look good in a dashboard.",
  },
  {
    label: "02 · The connection",
    line: "We map search activity through to pipeline, revenue and what actually drives growth.",
  },
  {
    label: "03 · The shift",
    line: "Practical thinking on measurement and intent — not another list of vanity metrics.",
  },
];

function AnimatedBar({ progress, max }: { progress: MotionValue<number>; max: number }) {
  const height = useTransform(progress, [0, 1], ["0%", `${max}%`]);
  return (
    <motion.div
      className="rounded-sm border border-border bg-charcoal-light"
      style={{ height }}
    />
  );
}

function DashboardBeyondViz({ progress }: { progress: MotionValue<number> }) {
  const barProgress = useTransform(progress, [0.12, 0.48], [0, 1]);
  const lineProgress = useTransform(progress, [0.38, 0.78], [0, 1]);
  const inDashOpacity = useTransform(progress, [0.2, 0.38], [0, 1]);
  const beyondOpacity = useTransform(progress, [0.62, 0.82], [0, 1]);
  const beyondY = useTransform(progress, [0.62, 0.82], [14, 0]);
  const glowOpacity = useTransform(progress, [0.5, 0.85], [0.15, 0.55]);
  const dotDistance = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="insights-dashboard-viz relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="attribution-window relative overflow-hidden rounded-2xl border border-border p-4 md:p-5">
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/20 blur-3xl"
          style={{ opacity: glowOpacity }}
        />
        <div className="attribution-surface-glow absolute inset-0" />
        <div className="attribution-noise absolute inset-0 opacity-[0.25]" />

        <div className="relative z-[1] flex items-center justify-between border-b border-border pb-3">
          <span className="text-[9px] tracking-[0.18em] text-muted-dim uppercase">
            Platform dashboard
          </span>
          <span className="text-[9px] text-muted-dim">Last 30 days</span>
        </div>

        <div className="relative z-[1] mt-5 grid h-24 grid-cols-5 items-end gap-2">
          {bars.map((h, i) => (
            <AnimatedBar key={i} progress={barProgress} max={h} />
          ))}
        </div>

        <svg
          className="pointer-events-none absolute inset-0 z-[2] h-full w-full"
          viewBox="0 0 260 140"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="insightsSpark" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="var(--lime-light)" stopOpacity="1" />
            </linearGradient>
            <filter id="insightsGlow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <motion.path
            d={sparkPath}
            fill="none"
            stroke="url(#insightsSpark)"
            strokeWidth="2.2"
            strokeLinecap="round"
            filter="url(#insightsGlow)"
            style={{ pathLength: lineProgress, opacity: lineProgress }}
          />

          <motion.circle
            r="4"
            fill="var(--lime-bright)"
            filter="url(#insightsGlow)"
            style={{
              offsetPath: `path("${sparkPath}")`,
              offsetDistance: dotDistance,
              offsetRotate: "0deg",
              opacity: lineProgress,
            }}
          />
        </svg>

        <motion.div
          className="absolute top-3 right-3 z-[3] rounded-lg border border-border-active bg-charcoal-elevated/95 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
          style={{ opacity: beyondOpacity, y: beyondY }}
        >
          <p className="text-[8px] tracking-[0.14em] text-accent uppercase">Beyond</p>
          <p className="mt-0.5 text-sm font-semibold text-white">+$124K revenue</p>
        </motion.div>

        <motion.div
          className="absolute bottom-3 left-3 z-[3] rounded-lg border border-border bg-charcoal-elevated/90 px-3 py-2"
          style={{ opacity: inDashOpacity }}
        >
          <p className="text-[8px] tracking-[0.12em] text-muted-dim uppercase">In dashboard</p>
          <p className="mt-0.5 text-xs font-medium text-muted">Clicks · CTR · CPC</p>
        </motion.div>
      </div>
    </div>
  );
}

function ScrollPhaseCopy({ activePhase }: { activePhase: number }) {
  return (
    <div className="relative mt-6 min-h-[5.5rem] md:min-h-[4.5rem]">
      {scrollPhases.map((phase, i) => (
        <motion.p
          key={phase.label}
          className="absolute inset-0 max-w-md text-sm leading-[1.75] text-muted md:text-base"
          animate={{
            opacity: activePhase === i ? 1 : 0,
            y: activePhase === i ? 0 : activePhase < i ? 16 : -16,
          }}
          transition={{ duration: 0.55, ease }}
        >
          <span className="mb-2 block text-[10px] tracking-[0.16em] text-accent uppercase">
            {phase.label}
          </span>
          {phase.line}
        </motion.p>
      ))}
    </div>
  );
}

function InsightsArticleFeed() {
  const feedRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { insightsList } = homepageCopy;

  const { scrollYProgress } = useScroll({
    target: feedRef,
    offset: ["start end", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"]);
  const progressWidth = useTransform(scrollYProgress, [0.08, 0.92], ["0%", "100%"]);

  return (
    <div ref={feedRef} className="section-padding relative border-t border-border bg-charcoal">
      <div className="pointer-events-none absolute inset-0 accent-radial-center opacity-50" />

      <div className="container-wide relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>{insightsList.label}</SectionLabel>
            <h3 className="headline mt-5 max-w-md">{insightsList.headline}</h3>
            <p className="mt-4 max-w-sm text-sm leading-[1.75] text-muted md:text-base">
              {insightsList.description}
            </p>
            <p className="mt-8 text-[11px] tracking-[0.14em] text-muted-dim uppercase">
              {insights.length} articles · scroll to explore
            </p>
            <div className="mt-4 hidden h-px w-24 overflow-hidden rounded-full bg-border lg:block">
              <motion.div className="h-full bg-accent" style={{ width: progressWidth }} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-2 bottom-2 left-[11px] w-px bg-border md:left-[13px]">
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-accent via-accent/70 to-accent/30"
                style={{ height: lineHeight }}
              />
            </div>

            <div className="space-y-4 md:space-y-5">
              {insights.map((article, i) => (
                <InsightArticleCard
                  key={article.title}
                  article={article}
                  index={i}
                  isActive={activeIndex === i}
                  onActive={() => setActiveIndex(i)}
                />
              ))}
            </div>

            <FadeIn delay={0.15}>
              <motion.a
                href="#insights"
                className="btn-ghost mt-10 inline-flex"
                whileHover={{ gap: "0.85rem" }}
              >
                View All Insights
                <motion.span aria-hidden whileHover={{ x: 4 }} transition={{ duration: 0.25 }}>
                  →
                </motion.span>
              </motion.a>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightArticleCard({
  article,
  index,
  isActive,
  onActive,
}: {
  article: (typeof insights)[number];
  index: number;
  isActive: boolean;
  onActive: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px -35% 0px" });

  useEffect(() => {
    if (inView) onActive();
  }, [inView, onActive]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.04, ease }}
    >
      <motion.a
        href="#"
        className={`insights-article-card group relative ml-8 block rounded-2xl border p-5 transition-colors duration-500 md:ml-10 md:p-6 ${
          isActive
            ? "border-border-hover bg-charcoal-elevated/90 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            : "border-border bg-charcoal-light/50 hover:border-border-hover hover:bg-charcoal-elevated/60"
        }`}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.35, ease }}
      >
        <span
          className={`absolute top-6 -left-[2.05rem] z-[1] flex h-6 w-6 items-center justify-center rounded-full border text-[9px] font-semibold transition-all duration-500 md:-left-[2.35rem] md:h-7 md:w-7 md:text-[10px] ${
            isActive
              ? "border-border-active bg-accent text-charcoal shadow-[0_0_16px_var(--accent-glow-soft)]"
              : "border-border bg-charcoal-elevated text-muted-dim group-hover:border-border-hover"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 flex-1">
            <span className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
              {article.category}
            </span>
            <h4 className="font-display mt-2 text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-accent md:text-xl">
              {article.title}
            </h4>
          </div>

          <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-3">
            <span className="text-xs text-muted-dim">{article.readTime}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all duration-300 group-hover:border-border-hover group-hover:bg-charcoal-elevated group-hover:text-accent">
              →
            </span>
          </div>
        </div>
      </motion.a>
    </motion.article>
  );
}

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const phase = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
    setActivePhase(phase);
  });

  return (
    <section id="insights" className="relative border-t border-border bg-charcoal-light">
      <div ref={scrollRef} className="relative h-[200vh] md:h-[220vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 accent-radial-right-soft opacity-60" />

          <div className="absolute top-28 right-6 hidden h-[calc(100vh-7rem)] w-px bg-border md:block lg:right-10">
            <motion.div
              className="w-full origin-top bg-accent"
              style={{ height: progressHeight }}
            />
          </div>

          <div className="container-wide relative w-full px-5 md:px-8 lg:px-12">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              <motion.div style={{ y: headlineY }}>
                <SectionLabel>Insights</SectionLabel>
                <h2 className="headline mt-5 max-w-xl">
                  Thinking beyond the{" "}
                  <span className="gradient-text-accent">dashboard.</span>
                </h2>
                <ScrollPhaseCopy activePhase={activePhase} />
              </motion.div>

              <DashboardBeyondViz progress={scrollYProgress} />
            </div>

            <motion.div
              className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 md:bottom-10"
              style={{ opacity: scrollHintOpacity }}
            >
              <span className="text-[10px] tracking-[0.2em] text-muted-dim uppercase">Scroll</span>
              <motion.span
                className="text-accent"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              >
                ↓
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>

      <InsightsArticleFeed />
    </section>
  );
}
