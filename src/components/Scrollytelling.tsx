"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const chapters = [
  {
    title: "Looking beyond the click",
    body: "Most attribution stops at the conversion. We follow the journey further — connecting every touchpoint to commercial outcomes.",
    nodes: ["Click", "Lead", "Opportunity", "Revenue"],
  },
  {
    title: "Connecting the signals",
    body: "Marketing activity, website behaviour, CRM data and revenue outcomes become one connected system — not four disconnected reports.",
    nodes: ["Google Ads", "Website", "CRM", "Revenue"],
  },
  {
    title: "Understanding what drives revenue",
    body: "Identify which channels, campaigns and actions actually create commercial growth. Invest where it counts.",
    nodes: ["Channel", "Campaign", "Pipeline", "Growth"],
  },
];

function ScrollViz({ activeIndex }: { activeIndex: number }) {
  const chapter = chapters[activeIndex];

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal-light md:h-[420px]">
      <div className="absolute inset-0 atmosphere-glow" />
      <div className="absolute top-0 right-0 left-0 flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
        <span className="text-[10px] tracking-[0.18em] text-muted-dim uppercase">
          Attribution model
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-live" />
          <span className="text-[10px] text-accent">Live</span>
        </div>
      </div>

      <div className="flex h-full items-center justify-center px-8 pt-10">
        <div className="flex flex-col items-center gap-2">
          {chapter.nodes.map((node, i) => (
            <motion.div
              key={`${activeIndex}-${node}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <div
                className={`rounded-lg border px-5 py-2.5 text-sm font-medium ${
                  i === chapter.nodes.length - 1
                    ? "border-accent/40 bg-accent-muted text-accent shadow-[0_0_20px_rgba(103,216,245,0.12)]"
                    : "border-white/[0.08] bg-charcoal-elevated text-white"
                }`}
              >
                {node}
              </div>
              {i < chapter.nodes.length - 1 && (
                <div className="my-1 h-5 w-px bg-gradient-to-b from-accent/40 to-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute right-5 bottom-4 left-5 flex justify-between text-[10px] text-muted-dim">
        <span>{chapter.nodes.length} touchpoints connected</span>
        <span>Step {activeIndex + 1} of 3</span>
      </div>
    </div>
  );
}

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const chapterProgress = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 1, 2]);

  useMotionValueEvent(chapterProgress, "change", (v) => {
    setActiveIndex(Math.min(2, Math.max(0, Math.round(v))));
  });

  return (
    <section
      id="approach-scroll"
      ref={containerRef}
      className="relative border-t border-white/[0.06]"
      style={{ height: "280vh" }}
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="container-wide w-full px-5 md:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[260px] md:min-h-[300px]">
              {chapters.map((chapter, i) => (
                <motion.div
                  key={chapter.title}
                  className="absolute inset-0 flex flex-col justify-center"
                  animate={{
                    opacity: activeIndex === i ? 1 : 0,
                    y: activeIndex === i ? 0 : 24,
                  }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  style={{ pointerEvents: activeIndex === i ? "auto" : "none" }}
                >
                  <p className="section-label">How we think</p>
                  <h2 className="headline mt-5 max-w-lg">{chapter.title}</h2>
                  <p className="mt-5 max-w-md text-base leading-[1.75] text-muted">
                    {chapter.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ScrollViz activeIndex={activeIndex} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
