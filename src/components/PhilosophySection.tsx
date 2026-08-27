"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

const journeyStages = [
  "Impression",
  "Click",
  "Session",
  "Lead",
  "Qualified Lead",
  "Opportunity",
  "Customer",
  "Revenue",
];

export default function PhilosophySection() {
  return (
    <section id="attribution" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(62,232,255,0.05)_0%,transparent_55%)]" />

      <div className="container-wide relative">
        <SectionLabel>Attribution Philosophy</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-4xl">
            From clicks to customers.
            <br />
            <span className="text-muted">From customers to revenue.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-xl text-base leading-[1.7] text-muted">
            We connect your advertising platforms, analytics, website and CRM
            so you can see the complete customer journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative mt-16">
            <div className="absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 bg-border md:block" />
            <div className="flex gap-3 overflow-x-auto pb-4 md:justify-between md:overflow-visible">
              {journeyStages.map((stage, i) => (
                <motion.div
                  key={stage}
                  className="relative flex shrink-0 flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    className={`relative z-10 rounded-full border px-4 py-2 text-xs font-medium whitespace-nowrap md:px-5 md:text-sm ${
                      stage === "Revenue"
                        ? "border-accent/50 bg-accent-muted text-accent"
                        : "border-border bg-charcoal-elevated text-white"
                    }`}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(62, 232, 255, 0)",
                        "0 0 20px 2px rgba(62, 232, 255, 0.08)",
                        "0 0 0 0 rgba(62, 232, 255, 0)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {stage}
                  </motion.div>
                  <span className="mt-2 font-display text-[10px] text-muted-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a href="#services" className="btn-ghost mt-10 inline-flex">
            Explore Attribution
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
