"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const nodes = [
  { id: "ads", label: "Google Ads", icon: "G" },
  { id: "landing", label: "Landing Page", icon: "▦" },
  { id: "lead", label: "Lead", icon: "◎" },
  { id: "crm", label: "CRM", icon: "⬡" },
  { id: "revenue", label: "Revenue", icon: "↗" },
];

const metrics = [
  { label: "Revenue", value: 124, prefix: "$", suffix: "K", x: "4%", y: "16%", spark: "M0 20 L8 14 L16 18 L24 8 L32 12" },
  { label: "ROAS", value: 5.8, prefix: "", suffix: "x", x: "68%", y: "22%", spark: "M0 16 L10 12 L20 14 L30 6" },
  { label: "CAC", value: 24, prefix: "↓ ", suffix: "%", x: "2%", y: "58%", spark: "M0 8 L12 14 L24 10 L32 18" },
  { label: "SQLs", value: 38, prefix: "+", suffix: "%", x: "66%", y: "64%", spark: "M0 18 L10 10 L20 14 L30 4" },
];

function Sparkline({ d }: { d: string }) {
  return (
    <svg width="36" height="20" viewBox="0 0 36 20" className="mt-2 opacity-60">
      <path d={d} fill="none" stroke="#67D8F5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MetricCard({
  label,
  value,
  prefix,
  suffix,
  x,
  y,
  spark,
  delay,
}: (typeof metrics)[0] & { delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const start = performance.now();
      const duration = 1800;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        setDisplay(value * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <motion.div
      ref={ref}
      className="absolute z-10 rounded-xl border border-white/[0.08] bg-charcoal-elevated/95 px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.8 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-[10px] tracking-wide text-muted-dim uppercase">{label}</p>
      <p className="font-display text-sm font-semibold text-accent">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <Sparkline d={spark} />
    </motion.div>
  );
}

export default function AttributionFlow() {
  return (
    <div className="relative h-[480px] w-full md:h-[540px] lg:h-[580px]">
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-2xl border border-white/[0.08] bg-charcoal-light shadow-[0_40px_100px_rgba(0,0,0,0.55)]"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 atmosphere-glow" />
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="absolute top-0 right-0 left-0 flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]/80" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]/80" />
          </div>
          <span className="text-[10px] font-medium tracking-[0.18em] text-muted-dim uppercase">
            Revenue Attribution
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-live" />
            <span className="text-[10px] font-medium text-accent">Live</span>
          </div>
        </div>

        <div className="relative mx-auto mt-8 h-[calc(100%-88px)] max-w-[280px] px-4">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#67D8F5" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#67D8F5" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            {[12, 30, 48, 66].map((y, i) => (
              <g key={y}>
                <line x1="50" y1={y + 5} x2="50" y2={y + 22} stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                <motion.line
                  x1="50"
                  y1={y + 5}
                  x2="50"
                  y2={y + 22}
                  stroke="url(#lineGrad)"
                  strokeWidth="0.6"
                  strokeDasharray="2 3"
                  className="animate-flow-dash"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                />
                {[0, 1, 2].map((p) => (
                  <motion.circle
                    key={p}
                    r="0.8"
                    fill="#67D8F5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0], cy: [y + 6, y + 20] }}
                    transition={{
                      duration: 2.5,
                      delay: 1 + i * 0.4 + p * 0.7,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "linear",
                    }}
                    cx="50"
                  />
                ))}
              </g>
            ))}
          </svg>

          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${10 + i * 19}%` }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`flex min-w-[148px] items-center gap-2.5 rounded-lg border px-3.5 py-2.5 ${
                  node.id === "revenue"
                    ? "border-accent/40 bg-charcoal-elevated shadow-[0_0_24px_rgba(103,216,245,0.15)]"
                    : "border-white/[0.08] bg-charcoal-elevated/90"
                }`}
              >
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                    node.id === "ads"
                      ? "bg-white/10 text-white"
                      : "bg-white/[0.04] text-muted"
                  }`}
                >
                  {node.id === "ads" ? (
                    <span className="text-[9px]">G</span>
                  ) : (
                    node.icon
                  )}
                </span>
                <span className="text-xs font-medium text-white">{node.label}</span>
              </div>
            </motion.div>
          ))}

          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} delay={i * 0.12} />
          ))}
        </div>

        <div className="absolute right-5 bottom-3.5 left-5 flex items-center justify-between text-[10px] text-muted-dim">
          <span>Last synced · 2s ago</span>
          <span>7 touchpoints tracked</span>
        </div>
      </motion.div>
    </div>
  );
}
