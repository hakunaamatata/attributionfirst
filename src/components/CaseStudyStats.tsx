"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  delay?: number;
}

export function AnimatedStat({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
  className = "",
  delay = 0,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = (now - start) / 1000;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(value * eased);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, duration, delay]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}

interface ProgressBarProps {
  before: number;
  after: number;
  label: string;
  unit?: string;
  prefix?: string;
  delay?: number;
  invert?: boolean;
}

export function AnimatedProgressBar({
  before,
  after,
  label,
  unit = "",
  prefix = "",
  delay = 0,
  invert = false,
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const max = Math.max(before, after) * 1.15;
  const beforePct = (before / max) * 100;
  const afterPct = (after / max) * 100;
  const improved = invert ? after < before : after > before;
  const change = invert
    ? Math.round(((before - after) / before) * 100)
    : Math.round(((after - before) / before) * 100);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted">{label}</span>
        <motion.span
          className={`font-medium ${improved ? "text-accent" : "text-white/70"}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.6 }}
        >
          {improved ? "↓" : "↑"} {change}%
        </motion.span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center gap-3">
          <span className="w-10 shrink-0 text-[10px] text-muted-dim">Before</span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-charcoal">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-white/20"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${beforePct}%` } : {}}
              transition={{ duration: 1, delay: delay + 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="w-16 shrink-0 text-right text-[10px] text-muted">
            {prefix}
            {before}
            {unit}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-10 shrink-0 text-[10px] text-accent">After</span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-charcoal">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={isInView ? { width: `${afterPct}%` } : {}}
              transition={{ duration: 1.2, delay: delay + 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <span className="w-16 shrink-0 text-right text-[10px] font-medium text-white">
            {prefix}
            {after}
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
