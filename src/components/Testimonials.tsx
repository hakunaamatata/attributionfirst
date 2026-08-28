"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import { testimonials } from "@/data/siteData";

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 accent-radial-right" />

      <div className="container-wide">
        <FadeIn>
          <p className="section-label">Testimonials</p>
          <h2 className="headline mt-5 max-w-xl">
            What clients and colleagues say.
          </h2>
        </FadeIn>

        <div className="mt-14 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <motion.blockquote
                className="card-premium min-w-[280px] snap-center p-7 md:min-w-0"
                whileHover={{ y: -4 }}
              >
                <p className="text-sm leading-[1.75] text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <cite className="not-italic">
                    <p className="font-medium text-white">{t.name}</p>
                    <p className="mt-1 text-xs text-muted-dim">
                      {t.role} · {t.company}
                    </p>
                  </cite>
                </footer>
              </motion.blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
