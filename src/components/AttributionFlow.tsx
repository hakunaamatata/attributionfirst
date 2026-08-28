"use client";

import { motion, useInView } from "framer-motion";
import { useId, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const pipelineNodes = [
  { id: "ads", label: "Google Ads", y: 11 },
  { id: "landing", label: "Landing Page", y: 29 },
  { id: "lead", label: "Lead", y: 47 },
  { id: "crm", label: "CRM", y: 65 },
  { id: "revenue", label: "Revenue", y: 83 },
];

const metricCards = [
  {
    id: "revenue-metric",
    side: "left" as const,
    y: 7,
    label: "Revenue",
    value: "$124K",
    spark: "M0 14 L9 12 L18 10 L27 8 L36 6 L48 4",
    connectY: 11,
    delay: 1.05,
  },
  {
    id: "roas",
    side: "right" as const,
    y: 30,
    label: "ROAS",
    value: "5.8×",
    spark: "M0 14 L9 11 L18 9 L27 7 L36 5 L48 3",
    connectY: 38,
    delay: 1.2,
  },
  {
    id: "cac",
    side: "left" as const,
    y: 52,
    label: "CAC",
    value: "↓ 24%",
    spark: "M0 4 L9 6 L18 8 L27 10 L36 12 L48 14",
    connectY: 56,
    delay: 1.35,
  },
  {
    id: "sqls",
    side: "right" as const,
    y: 58,
    label: "SQLs",
    value: "+38%",
    spark: "M0 13 L9 11 L18 8 L27 6 L36 5 L48 3",
    connectY: 65,
    delay: 1.5,
  },
];

const junctionYs = [20, 38, 56, 74];

function NodeIcon({ id }: { id: string }) {
  const props = {
    className: "h-4 w-4 text-accent",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "ads":
      return (
        <svg viewBox="0 0 16 16" {...props}>
          <path d="M2 8h1.8l1-2.8 1.8 5.6 1.6-3.6 1.2 2.4H14" />
        </svg>
      );
    case "landing":
      return (
        <svg viewBox="0 0 16 16" {...props}>
          <rect x="3.5" y="2.5" width="9" height="11" rx="1.2" />
          <path d="M5.5 6h5M5.5 8.5h3.2" />
        </svg>
      );
    case "lead":
      return (
        <svg viewBox="0 0 16 16" {...props}>
          <circle cx="8" cy="5.5" r="2.1" />
          <path d="M4.2 13c.7-2 2.2-3 3.8-3s3.1 1 3.8 3" />
        </svg>
      );
    case "crm":
      return (
        <svg viewBox="0 0 16 16" {...props}>
          <ellipse cx="8" cy="4.5" rx="4.2" ry="1.6" />
          <path d="M3.8 4.5v3.8c0 .9 1.9 1.6 4.2 1.6s4.2-.7 4.2-1.6V4.5" />
          <path d="M3.8 8.3v3.2c0 .9 1.9 1.6 4.2 1.6s4.2-.7 4.2-1.6V8.3" />
        </svg>
      );
    case "revenue":
      return (
        <svg viewBox="0 0 16 16" {...props}>
          <path d="M3 12V6.8M6.2 12V4.8M9.4 12V8.2M12.6 12V3.5" />
        </svg>
      );
    default:
      return null;
  }
}

function Sparkline({
  path,
  delay,
  inView,
  gradientId,
}: {
  path: string;
  delay: number;
  inView: boolean;
  gradientId: string;
}) {
  const areaPath = `${path} L48 16 L0 16 Z`;

  return (
    <svg viewBox="0 0 48 16" className="mt-2.5 h-[18px] w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${gradientId}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="var(--lime)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id={`${gradientId}-area`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--lime)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaPath}
        fill={`url(#${gradientId}-area)`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.4, ease }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#${gradientId}-line)`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="drop-shadow(0 0 3px var(--accent-glow))"
        initial={{ pathLength: 0, opacity: 0.35 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0.35 }}
        transition={{ duration: 1.2, delay, ease }}
      />
    </svg>
  );
}

function MetricCard({
  card,
  inView,
}: {
  card: (typeof metricCards)[number];
  inView: boolean;
}) {
  const gradientId = useId().replace(/:/g, "");

  return (
    <motion.div
      className={`attribution-metric-card absolute z-20 w-[100px] sm:w-[112px] md:w-[124px] ${
        card.side === "left" ? "left-[6%] md:left-[7%]" : "right-[6%] md:right-[7%]"
      }`}
      style={{ top: `${card.y}%` }}
      initial={{ opacity: 0, x: card.side === "left" ? -14 : 14, y: 8 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: card.side === "left" ? -14 : 14, y: 8 }}
      transition={{ duration: 0.7, delay: card.delay, ease }}
    >
      <div className="rounded-xl border border-border bg-charcoal-elevated/80 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <p className="text-[9px] font-medium tracking-[0.14em] text-muted-dim uppercase">{card.label}</p>
        <p className="mt-1 text-[15px] font-semibold tracking-tight text-white">{card.value}</p>
        <Sparkline path={card.spark} delay={card.delay + 0.12} inView={inView} gradientId={gradientId} />
      </div>
    </motion.div>
  );
}

function FlowDiagram({ inView }: { inView: boolean }) {
  const centerX = 50;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[4] h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="pipeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.15" />
          <stop offset="45%" stopColor="var(--lime)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--lime)" stopOpacity="1" />
        </linearGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="0.35" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <line
        x1={centerX}
        y1={pipelineNodes[0].y}
        x2={centerX}
        y2={pipelineNodes[pipelineNodes.length - 1].y}
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.35"
      />

      <motion.line
        x1={centerX}
        y1={pipelineNodes[0].y}
        x2={centerX}
        y2={pipelineNodes[pipelineNodes.length - 1].y}
        stroke="url(#pipeGlow)"
        strokeWidth="0.55"
        filter="url(#lineGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease }}
      />

      {junctionYs.map((y, i) => (
        <motion.circle
          key={y}
          cx={centerX}
          cy={y}
          r="0.85"
          fill="var(--lime)"
          filter="url(#lineGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            inView
              ? { opacity: [0.5, 1, 0.5], scale: [0.85, 1.15, 0.85] }
              : { opacity: 0, scale: 0 }
          }
          transition={{
            opacity: { duration: 2.4, repeat: Infinity, delay: 0.6 + i * 0.2 },
            scale: { duration: 2.4, repeat: Infinity, delay: 0.6 + i * 0.2 },
          }}
        />
      ))}

      {metricCards.map((card, i) => {
        const endX = card.side === "left" ? 24 : 76;
        return (
          <g key={card.id}>
            <line
              x1={centerX}
              y1={card.connectY}
              x2={endX}
              y2={card.y + 5}
              stroke="var(--accent-glow-soft)"
              strokeWidth="0.3"
            />
            <motion.line
              x1={centerX}
              y1={card.connectY}
              x2={endX}
              y2={card.y + 5}
              stroke="var(--accent-glow)"
              strokeWidth="0.4"
              strokeDasharray="1.5 2.5"
              filter="url(#lineGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.85 + i * 0.1, ease }}
            />
          </g>
        );
      })}
    </svg>
  );
}

function FlowParticle({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute left-1/2 z-[6] h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-accent attribution-particle-glow"
      animate={{
        top: ["11%", "83%"],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 4.2,
        repeat: Infinity,
        delay,
        ease: "linear",
        times: [0, 0.06, 0.94, 1],
      }}
    />
  );
}

function PipelineNode({
  node,
  index,
  inView,
}: {
  node: (typeof pipelineNodes)[number];
  index: number;
  inView: boolean;
}) {
  const isRevenue = node.id === "revenue";

  return (
    <motion.div
      className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${node.y}%` }}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.55, delay: 0.3 + index * 0.09, ease }}
    >
      <div
        className={`relative flex min-w-[132px] items-center gap-2 rounded-xl border px-3 py-2.5 sm:min-w-[148px] sm:gap-2.5 md:min-w-[158px] md:gap-3 md:px-4 ${
          isRevenue
            ? "attribution-revenue-node border-accent/60 bg-charcoal-elevated"
            : "attribution-node-surface border backdrop-blur-sm"
        }`}
      >
        {isRevenue && <span className="attribution-revenue-halo" aria-hidden />}
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-charcoal-light">
          <NodeIcon id={node.id} />
        </span>
        <span className="text-[13px] font-medium whitespace-nowrap text-white">{node.label}</span>
      </div>
    </motion.div>
  );
}

export default function AttributionFlow({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className={`relative w-full ${compact ? "h-[360px] md:h-[440px]" : "h-[480px] md:h-[560px] lg:h-[600px]"}`}
    >
      <div className="attribution-window absolute inset-0 overflow-hidden rounded-2xl border border-border shadow-[0_40px_100px_rgba(0,0,0,0.75)]">
        <div className="attribution-surface-glow absolute inset-0" />
        <div className="attribution-noise absolute inset-0 opacity-[0.35]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" />

        <header className="relative z-30 flex items-center justify-between border-b border-white/[0.08] px-4 py-3.5 md:px-5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/85" />
          </div>
          <span className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium tracking-[0.22em] text-muted-dim uppercase">
            Revenue Attribution
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent attribution-live-dot" />
            <span className="text-[10px] font-medium text-accent">Live</span>
          </div>
        </header>

        <div className="relative h-[calc(100%-90px)]">
          <FlowDiagram inView={inView} />

          {metricCards.map((card) => (
            <MetricCard key={card.id} card={card} inView={inView} />
          ))}

          <div className="relative h-full">
            {[0, 1.4].map((delay) => (
              <FlowParticle key={delay} delay={delay} />
            ))}

            {pipelineNodes.map((node, i) => (
              <PipelineNode key={node.id} node={node} index={i} inView={inView} />
            ))}
          </div>
        </div>

        <footer className="absolute right-4 bottom-3.5 left-4 flex items-center justify-between text-[10px] text-muted-dim/90 md:right-5 md:left-5">
          <span>Last synced · 2s ago</span>
          <span>7 touchpoints tracked</span>
        </footer>
      </div>
    </div>
  );
}
