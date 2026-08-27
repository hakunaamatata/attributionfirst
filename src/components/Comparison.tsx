"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { comparisonSteps, homepageCopy } from "@/data/siteData";

function FlowColumn({
  title,
  steps,
  dominant = false,
}: {
  title: string;
  steps: string[];
  dominant?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-8 md:p-10 ${
        dominant
          ? "border-accent/25 bg-accent/[0.03]"
          : "border-border bg-charcoal-elevated/50"
      }`}
    >
      {dominant && (
        <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />
      )}
      <h3
        className={`relative font-display text-lg font-semibold md:text-xl ${
          dominant ? "text-accent" : "text-muted"
        }`}
      >
        {title}
      </h3>
      <div className="relative mt-10 flex flex-col items-center gap-1">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <motion.div
              className={`rounded-full border px-6 py-2.5 text-sm font-medium ${
                dominant
                  ? step === "Revenue"
                    ? "border-accent/50 bg-accent-muted text-accent"
                    : "border-border bg-charcoal text-white"
                  : "border-border/40 bg-charcoal/50 text-muted"
              }`}
              initial={{ opacity: 0, x: dominant ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <span
                className={`my-1.5 text-sm ${
                  dominant ? "text-accent/40" : "text-border"
                }`}
              >
                ↓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Comparison() {
  const { simpleQuestions } = homepageCopy;

  return (
    <section className="section-padding bg-charcoal-light">
      <div className="container-wide">
        <SectionLabel>Clarity</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{simpleQuestions.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {simpleQuestions.subheading} {simpleQuestions.closing}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn delay={0.15}>
            <FlowColumn
              title="Volume-focused reporting"
              steps={comparisonSteps.traditional}
            />
          </FadeIn>
          <FadeIn delay={0.25}>
            <FlowColumn
              title="What we measure"
              steps={comparisonSteps.attribution}
              dominant
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
