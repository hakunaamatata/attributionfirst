"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy } from "@/data/siteData";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);
  const { process } = homepageCopy;

  return (
    <section id="process" className="section-padding relative" ref={ref}>
      <div className="container-wide">
        <SectionLabel>Process</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-2xl">{process.headline}</h2>
        </FadeIn>

        <div className="relative mt-20 grid gap-12 md:grid-cols-4 md:gap-8">
          <div className="absolute top-0 bottom-0 left-[23px] hidden w-px bg-border md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-accent via-accent/50 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {process.steps.map((step, i) => (
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

        <FadeIn delay={0.4}>
          <p className="mt-16 max-w-3xl text-base leading-[1.75] text-muted">
            {process.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
