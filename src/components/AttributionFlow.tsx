"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "ads", label: "Google Ads", x: 50, y: 12 },
  { id: "landing", label: "Landing Page", x: 50, y: 32 },
  { id: "lead", label: "Lead", x: 50, y: 52 },
  { id: "crm", label: "CRM", x: 50, y: 72 },
  { id: "revenue", label: "Revenue", x: 50, y: 92 },
];

const dataCards = [
  { label: "$124K Revenue", x: 4, y: 18, delay: 0 },
  { label: "ROAS 5.8×", x: 70, y: 28, delay: 0.4 },
  { label: "CAC ↓ 24%", x: 2, y: 62, delay: 0.8 },
  { label: "SQLs +38%", x: 66, y: 72, delay: 1.2 },
];

export default function AttributionFlow({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative w-full ${compact ? "h-[320px] md:h-[400px]" : "h-[440px] md:h-[520px] lg:h-[560px]"}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-charcoal-light/60 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(62,232,255,0.08)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="absolute top-0 right-0 left-0 flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <span className="text-[10px] tracking-wider text-muted-dim uppercase">
            Revenue Attribution
          </span>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-blink" />
            <span className="text-[10px] text-accent">Live</span>
          </div>
        </div>

        <div className="absolute top-12 right-0 bottom-10 left-0">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {nodes.slice(0, -1).map((node, i) => {
              const next = nodes[i + 1];
              return (
                <g key={`line-${node.id}`}>
                  <line
                    x1={node.x}
                    y1={node.y + 3}
                    x2={next.x}
                    y2={next.y - 3}
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="0.4"
                  />
                  <motion.line
                    x1={node.x}
                    y1={node.y + 3}
                    x2={next.x}
                    y2={next.y - 3}
                    stroke="url(#flowGradient)"
                    strokeWidth="0.5"
                    strokeDasharray="3 3"
                    className="animate-flow-dash"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  />
                </g>
              );
            })}
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3ee8ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3ee8ff" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`relative flex items-center justify-center rounded-lg border bg-charcoal-elevated px-3.5 py-2 text-center shadow-xl ${
                  node.id === "revenue"
                    ? "border-accent/50 shadow-accent/10"
                    : "border-border"
                } ${compact ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}
              >
                {node.id === "revenue" && (
                  <span className="absolute -inset-1 rounded-lg border border-accent/20" />
                )}
                <span className="relative font-medium whitespace-nowrap text-white">
                  {node.label}
                </span>
              </div>
            </motion.div>
          ))}

          {dataCards.map((card) => (
            <motion.div
              key={card.label}
              className="absolute glass animate-float rounded-lg px-3 py-2 shadow-lg backdrop-blur-md"
              style={{
                left: `${card.x}%`,
                top: `${card.y}%`,
                animationDelay: `${card.delay}s`,
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + card.delay }}
            >
              <span
                className={`font-semibold text-accent ${compact ? "text-[10px] md:text-xs" : "text-xs md:text-sm"}`}
              >
                {card.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute top-12 right-0 left-0 h-px animate-scan bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between text-[10px] text-muted-dim">
          <span>Last synced · 2s ago</span>
          <span>7 touchpoints tracked</span>
        </div>
      </div>
    </div>
  );
}
