"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import TiltCard from "./TiltCard";

const cards = [
  {
    num: "01",
    title: "Platform Metrics",
    description:
      "Google and Meta tell you which campaigns received conversions.",
    span: "lg:col-span-1",
  },
  {
    num: "02",
    title: "Real Business Data",
    description:
      "Your CRM tells you which leads actually became customers.",
    span: "lg:col-span-1",
  },
  {
    num: "03",
    title: "The Missing Layer",
    description:
      "Attribution connects marketing activity to actual revenue.",
    span: "lg:col-span-1",
    accent: true,
  },
];

const flowSteps = [
  "Ad Click",
  "Lead",
  "Opportunity",
  "Customer",
  "Revenue",
];

export default function ProblemSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-charcoal-light">
      <div className="absolute top-0 right-0 h-px w-1/2 bg-gradient-to-l from-accent/20 to-transparent" />

      <div className="container-wide">
        <SectionLabel>The Problem</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">
            Your ad platforms don&apos;t tell the whole story.
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <TiltCard
                className={`h-full p-8 ${card.accent ? "border-accent/20" : ""}`}
              >
                <span className="font-display text-4xl font-bold text-white/[0.05]">
                  {card.num}
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted">
                  {card.description}
                </p>
              </TiltCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-border bg-charcoal p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(62,232,255,0.04)_0%,transparent_70%)]" />
            <p className="relative mb-8 text-center text-[11px] tracking-[0.2em] text-muted-dim uppercase">
              The complete journey
            </p>
            <div className="relative flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-0">
              {flowSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium ${
                      step === "Revenue"
                        ? "border-accent/40 bg-accent-muted text-accent"
                        : "border-border bg-charcoal-elevated text-white"
                    }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {step}
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <>
                      <motion.div
                        className="mx-3 hidden h-px w-10 bg-gradient-to-r from-border via-accent/30 to-border md:block lg:w-16"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 + 0.1, duration: 0.6 }}
                      />
                      <span className="text-accent/50 md:hidden">↓</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
