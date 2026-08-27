"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { insights } from "@/data/siteData";

export default function Insights() {
  return (
    <section id="insights" className="section-padding bg-charcoal-light">
      <div className="container-wide">
        <SectionLabel>Insights</SectionLabel>
        <FadeIn delay={0.1}>
          <h2 className="headline mt-5 max-w-2xl">
            Thinking beyond the dashboard.
          </h2>
        </FadeIn>

        <div className="mt-14 space-y-0 divide-y divide-border">
          {insights.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.05}>
              <motion.a
                href="#"
                className="group flex items-center justify-between gap-6 py-6"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-display mt-2 text-lg font-semibold text-white transition-colors group-hover:text-accent md:text-xl">
                    {article.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-4">
                  <span className="hidden text-xs text-muted-dim sm:block">
                    {article.readTime}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-all group-hover:border-accent/30 group-hover:text-accent">
                    →
                  </span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <a href="#insights" className="btn-ghost mt-10 inline-flex">
            View All Insights
            <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
