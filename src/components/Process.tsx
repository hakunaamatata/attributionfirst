"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Connect ad platforms, analytics, website and CRM.",
  },
  {
    number: "02",
    title: "Track",
    description: "Build reliable conversion and revenue tracking.",
  },
  {
    number: "03",
    title: "Attribute",
    description:
      "Understand which channels, campaigns and touchpoints influence revenue.",
  },
  {
    number: "04",
    title: "Optimise",
    description: "Move budget toward what actually drives business growth.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="container-wide">
        <SectionLabel>How It Works</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-2xl">
            A better way to measure marketing.
          </h2>
        </FadeIn>

        <div className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="absolute top-0 bottom-0 left-[23px] hidden w-px bg-border md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <div className="relative md:pt-2">
                <div className="mb-6 flex items-center gap-4 md:flex-col md:items-start md:gap-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-charcoal font-display text-sm font-bold text-accent">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
