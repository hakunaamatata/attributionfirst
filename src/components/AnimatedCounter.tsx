"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] };
}

export default function AnimatedCounter({
  value,
  duration = 2,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(number * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, number, duration]);

  const formatted =
    number % 1 === 0
      ? Math.round(display).toString()
      : display.toFixed(1);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {prefix}
      {formatted}
      {suffix}
    </motion.span>
  );
}
