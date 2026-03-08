"use client";

import { useEffect, useState } from "react";

const chartData = [
  { day: "Mon", value: 12 },
  { day: "Tue", value: 18 },
  { day: "Wed", value: 15 },
  { day: "Thu", value: 22 },
  { day: "Fri", value: 30 },
  { day: "Sat", value: 27 },
  { day: "Sun", value: 19 },
];
const maxValue = Math.max(...chartData.map((d) => d.value));

export default function HeroDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`relative transition-all duration-700 ease-out ${
        mounted
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider">
              Campaign Dashboard
            </p>
            <p className="text-white font-semibold text-lg">
              Performance Overview
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-teal-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Impressions", value: "45.2K", change: "+12%" },
            { label: "Conversions", value: "1,240", change: "+28%" },
            { label: "Cost/Lead", value: "₹142", change: "-15%" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="bg-white/5 rounded-xl p-3 border border-white/5"
            >
              <p className="text-white/40 text-xs mb-1">{metric.label}</p>
              <p className="text-white font-bold text-lg">{metric.value}</p>
              <span className="text-xs font-medium text-accent">
                {metric.change}
              </span>
            </div>
          ))}
        </div>

        {/* Weekly Conversions – animated bars */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <p className="text-white/40 text-xs mb-4">Weekly Conversions</p>
          <div className="flex items-end gap-2 h-32">
            {chartData.map((d, i) => (
              <div
                key={d.day}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-accent to-accent/60 origin-bottom"
                  style={{
                    height: `${(d.value / maxValue) * 100}%`,
                    transformOrigin: "bottom",
                    animation: mounted
                      ? `bar-grow 0.6s ease-out ${i * 0.08}s forwards`
                      : "none",
                  }}
                />
                <span className="text-white/30 text-[10px]">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between bg-accent/10 rounded-xl p-3 border border-accent/20">
          <div>
            <p className="text-white/40 text-xs">Current ROAS</p>
            <p className="text-accent font-bold text-xl">4.5x</p>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-xs">Target</p>
            <p className="text-white/60 font-semibold">3.0x</p>
          </div>
          <div className="w-16 h-16">
            <svg viewBox="0 0 64 64" className="transform -rotate-90">
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="6"
              />
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="#00C9A7"
                strokeWidth="6"
                strokeDasharray={`${(4.5 / 5) * 176} 176`}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
