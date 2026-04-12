"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  MousePointerClick,
  Eye,
  IndianRupee,
  RefreshCw,
} from "lucide-react";

interface AdsStats {
  clicks: string;
  impressions: string;
  avgCpc: string;
  cost: string;
  conversions: string;
}

const FALLBACK: AdsStats = {
  clicks: "4.6K",
  impressions: "106K",
  avgCpc: "₹107",
  cost: "₹488K",
  conversions: "1.2K",
};

/** Aligned with MetricsSection: performance funnel from traffic → cost → outcomes. */
const heroStatStyles = [
  {
    gradient: "from-blue-600 to-indigo-600",
    glow: "rgba(37, 99, 235, 0.14)",
    iconRing: "bg-blue-500/10 border-blue-500/25 text-blue-600 dark:text-blue-400",
    value: "text-blue-600 dark:text-blue-400",
    hoverBorder: "hover:border-blue-500/35 dark:hover:border-blue-400/30",
  },
  {
    gradient: "from-cyan-600 to-sky-500",
    glow: "rgba(8, 145, 178, 0.13)",
    iconRing: "bg-cyan-500/10 border-cyan-500/25 text-cyan-600 dark:text-cyan-400",
    value: "text-cyan-600 dark:text-cyan-400",
    hoverBorder: "hover:border-cyan-500/35 dark:hover:border-cyan-400/30",
  },
  {
    gradient: "from-amber-600 to-orange-500",
    glow: "rgba(217, 119, 6, 0.12)",
    iconRing: "bg-amber-500/10 border-amber-500/25 text-amber-600 dark:text-amber-400",
    value: "text-amber-600 dark:text-amber-400",
    hoverBorder: "hover:border-amber-500/35 dark:hover:border-amber-400/30",
  },
  {
    gradient: "from-emerald-600 to-teal-500",
    glow: "rgba(5, 150, 105, 0.13)",
    iconRing: "bg-emerald-500/10 border-emerald-500/25 text-emerald-600 dark:text-emerald-400",
    value: "text-emerald-600 dark:text-emerald-400",
    hoverBorder: "hover:border-emerald-500/35 dark:hover:border-emerald-400/30",
  },
] as const;

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
  styleIndex,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  loading: boolean;
  styleIndex: number;
}) {
  const s = heroStatStyles[styleIndex % heroStatStyles.length];
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm transition-colors duration-200 dark:bg-white/[0.04] dark:shadow-none ${s.hoverBorder}`}
    >
      <div className={`h-0.5 w-full bg-linear-to-r ${s.gradient}`} />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${s.glow} 0%, transparent 72%)`,
        }}
      />
      <div className="relative">
        <div className="flex items-center gap-2 text-text-tertiary">
          <span
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105 ${s.iconRing}`}
          >
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <p className="text-[11px] font-medium uppercase tracking-wider">{label}</p>
        </div>
        {loading ? (
          <div
            className="mt-2 h-7 w-16 animate-pulse rounded-md bg-bg-elevated dark:bg-white/[0.06]"
            aria-label="Loading"
          />
        ) : (
          <p className={`mt-1 font-extrabold text-xl ${s.value}`}>{value}</p>
        )}
      </div>
    </div>
  );
}

export default function HeroDashboard() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<AdsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      try {
        const res = await fetch("/api/ads-stats");
        if (!res.ok) throw new Error("failed");
        const data = await res.json();
        setStats(data);
        setLastUpdated(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
      } catch {
        setStats(FALLBACK);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const s = stats ?? FALLBACK;

  return (
    <div
      className={`relative transition-all duration-700 ease-out ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      role="region"
      aria-label="Campaign performance dashboard"
    >
      <div className="pointer-events-none absolute inset-0 -m-4 rounded-3xl bg-accent/6 blur-2xl" />

      <div className="relative rounded-2xl border border-border bg-bg-card p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:shadow-black/30">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div
                className="absolute -inset-1 rounded-2xl bg-linear-to-br from-blue-500/35 via-cyan-400/20 to-violet-500/30 opacity-90 blur-md dark:from-blue-400/25 dark:via-cyan-400/15 dark:to-violet-400/25"
                aria-hidden="true"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/90 bg-white shadow-lg shadow-blue-900/10 dark:border-white/10 dark:bg-white/[0.08] dark:shadow-black/40">
                <BarChart3
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="min-w-0 pt-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                Live account snapshot
              </p>
              <p className="mt-1 text-lg font-bold tracking-tight text-primary">
                <span className="bg-linear-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-300 dark:via-sky-300 dark:to-cyan-200">
                  Acquisition
                </span>{" "}
                <span className="bg-linear-to-r from-violet-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent dark:from-violet-300 dark:via-indigo-300 dark:to-blue-300">
                  and efficiency
                </span>
              </p>
              <div className="mt-2 flex flex-col gap-1.5" aria-hidden="true">
                <span className="h-2 w-36 max-w-full rounded-md bg-linear-to-r from-blue-700/90 via-blue-600/80 to-blue-500/70 dark:from-blue-400/90 dark:via-sky-400/70 dark:to-cyan-400/60" />
                <span className="h-1.5 w-28 max-w-full rounded-md bg-linear-to-r from-violet-500/55 via-indigo-500/45 to-cyan-500/40 dark:from-violet-400/50 dark:via-indigo-400/40 dark:to-cyan-400/35" />
              </div>
              <p className="mt-2 text-[11px] text-text-muted">
                Same signals we optimize weekly: volume, cost per click, and tracked conversions.
              </p>
            </div>
          </div>
          {lastUpdated && (
            <span className="flex shrink-0 items-center gap-1 self-start text-[11px] text-text-muted sm:pt-1">
              <RefreshCw className="h-2.5 w-2.5" aria-hidden="true" />
              {lastUpdated}
            </span>
          )}
        </div>

        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
            Live &middot; Last 30 days
          </span>
          <span className="inline-flex items-center rounded-lg border border-violet-500/25 bg-violet-500/8 px-3 py-1.5 text-[11px] font-medium text-violet-800 dark:text-violet-300">
            Attribution-ready
          </span>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-3">
          <StatCard
            icon={MousePointerClick}
            label="Clicks"
            value={s.clicks}
            loading={loading}
            styleIndex={0}
          />
          <StatCard
            icon={Eye}
            label="Impressions"
            value={s.impressions}
            loading={loading}
            styleIndex={1}
          />
          <StatCard
            icon={IndianRupee}
            label="Avg. CPC"
            value={s.avgCpc}
            loading={loading}
            styleIndex={2}
          />
          <StatCard
            icon={TrendingUp}
            label="Conversions"
            value={s.conversions}
            loading={loading}
            styleIndex={3}
          />
        </div>

        <div className="rounded-xl border border-border bg-white p-4 dark:bg-accent/6">
          <div className="mb-2 flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-tertiary">
              <IndianRupee className="h-3 w-3 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              Total Spend (30d)
            </p>
            {loading ? (
              <div className="h-6 w-20 animate-pulse rounded-md bg-bg-elevated dark:bg-white/[0.06]" />
            ) : (
              <p className="bg-linear-to-r from-blue-600 to-violet-600 bg-clip-text font-extrabold text-xl text-transparent dark:from-blue-400 dark:to-violet-400">
                {s.cost}
              </p>
            )}
          </div>
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-bg-elevated dark:bg-white/[0.08]"
            role="progressbar"
            aria-valuenow={72}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Ad spend progress"
          >
            <div
              className="h-full rounded-full bg-linear-to-r from-blue-600 via-violet-500 to-cyan-500 transition-all duration-1000"
              style={{ width: loading ? "0%" : "72%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
