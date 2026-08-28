"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { homepageCopy } from "@/data/siteData";

export default function SimpleQuestions() {
  const { simpleQuestions } = homepageCopy;

  return (
    <section className="section-padding relative overflow-hidden bg-charcoal-light">
      <div className="absolute inset-0 accent-radial-center" />
      <div className="container-wide relative">
        <SectionLabel>Clarity</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-3xl">{simpleQuestions.headline}</h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-4 max-w-xl text-base text-muted">
            {simpleQuestions.subheading}
          </p>
        </FadeIn>

        <ul className="mt-12 space-y-4">
          {simpleQuestions.questions.map((question, i) => (
            <FadeIn key={question} delay={0.18 + i * 0.06}>
              <motion.li
                className="flex items-start gap-4 rounded-xl border border-border bg-charcoal-elevated/50 px-6 py-5"
                whileHover={{ borderColor: "rgba(62, 232, 255, 0.2)" }}
              >
                <span className="mt-0.5 font-display text-lg font-bold text-accent">
                  ?
                </span>
                <span className="text-base font-medium text-white md:text-lg">
                  {question}
                </span>
              </motion.li>
            </FadeIn>
          ))}
        </ul>

        <FadeIn delay={0.45}>
          <p className="mt-10 max-w-2xl text-base leading-[1.75] text-muted">
            {simpleQuestions.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
