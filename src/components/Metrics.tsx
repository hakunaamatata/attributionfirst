"use client";

import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import { metrics } from "@/data/siteData";

export default function Metrics() {
  return (
    <section className="section-padding relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(62,232,255,0.04)_0%,transparent_60%)]" />

      <div className="container-wide relative">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                {metric.animate ? (
                  <AnimatedCounter
                    value={metric.value}
                    className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
                  />
                ) : (
                  <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {metric.value}
                  </p>
                )}
                <p className="mt-3 text-sm text-muted">{metric.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
