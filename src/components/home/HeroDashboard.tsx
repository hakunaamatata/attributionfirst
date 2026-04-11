"use client";

import { useEffect, useState } from "react";
import { TrendingUp, MousePointerClick, Eye, IndianRupee, RefreshCw } from "lucide-react";

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

function StatCard({
  icon: Icon,
  label,
  value,
  loading,
  color = "text-accent",
  iconColor = "text-text-tertiary",
  bg = "bg-white/[0.04]",
  border = "border-white/[0.06]",
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  loading: boolean;
  color?: string;
  iconColor?: string;
  bg?: string;
  border?: string;
}) {
  return (
    <div className={`${bg} rounded-xl p-4 border ${border} flex flex-col gap-2 transition-colors duration-200 hover:border-white/[0.1]`}>
      <div className={`flex items-center gap-1.5 ${iconColor}`}>
        <Icon className="w-3.5 h-3.5" aria-hidden="true" />
        <p className="text-[11px] font-medium uppercase tracking-wider">{label}</p>
      </div>
      {loading ? (
        <div className="h-7 w-16 bg-white/[0.06] rounded-md animate-pulse" aria-label="Loading" />
      ) : (
        <p className={`font-extrabold text-xl ${color}`}>{value}</p>
      )}
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
      {/* Glow behind card */}
      <div className="absolute inset-0 -m-4 rounded-3xl bg-accent/[0.06] blur-2xl pointer-events-none" />

      <div className="relative bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl rounded-2xl p-6 shadow-2xl shadow-black/30">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold">
              Campaign Dashboard
            </p>
            <p className="text-primary font-bold text-lg mt-0.5">
              Performance Overview
            </p>
          </div>
          {lastUpdated && (
            <span className="text-text-muted text-[11px] flex items-center gap-1">
              <RefreshCw className="w-2.5 h-2.5" aria-hidden="true" />
              {lastUpdated}
            </span>
          )}
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-2 mb-5">
          <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold px-3 py-1.5 rounded-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Live &middot; Last 30 days
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <StatCard icon={MousePointerClick} label="Clicks" value={s.clicks} loading={loading}
            color="text-blue-400" iconColor="text-blue-400/60" bg="bg-blue-500/[0.06]" border="border-blue-500/[0.1]" />
          <StatCard icon={Eye} label="Impressions" value={s.impressions} loading={loading}
            color="text-cyan-400" iconColor="text-cyan-400/60" bg="bg-cyan-500/[0.06]" border="border-cyan-500/[0.1]" />
          <StatCard icon={IndianRupee} label="Avg. CPC" value={s.avgCpc} loading={loading}
            color="text-amber-400" iconColor="text-amber-400/60" bg="bg-amber-500/[0.06]" border="border-amber-500/[0.1]" />
          <StatCard icon={TrendingUp} label="Conversions" value={s.conversions} loading={loading}
            color="text-emerald-400" iconColor="text-emerald-400/60" bg="bg-emerald-500/[0.06]" border="border-emerald-500/[0.1]" />
        </div>

        {/* Cost bar */}
        <div className="bg-violet-500/[0.06] rounded-xl p-4 border border-violet-500/[0.1]">
          <div className="flex items-center justify-between mb-2">
            <p className="text-violet-300/60 text-[11px] font-semibold flex items-center gap-1.5 uppercase tracking-wider">
              <IndianRupee className="w-3 h-3" aria-hidden="true" />
              Total Spend (30d)
            </p>
            {loading ? (
              <div className="h-6 w-20 bg-white/[0.06] rounded-md animate-pulse" />
            ) : (
              <p className="text-violet-300 font-extrabold text-xl">{s.cost}</p>
            )}
          </div>
          <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden" role="progressbar" aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} aria-label="Ad spend progress">
            <div
              className="h-full bg-linear-to-r from-violet-500 to-violet-400 rounded-full transition-all duration-1000"
              style={{ width: loading ? "0%" : "72%" }}
            />
          </div>
          <p className="text-text-muted text-[11px] mt-2">of ₹7Cr+ lifetime managed</p>
        </div>

        {/* ROAS */}
        <div className="mt-4 flex items-center justify-between bg-emerald-500/[0.06] rounded-xl p-4 border border-emerald-500/[0.1]">
          <div>
            <p className="text-emerald-300/60 text-[11px] font-semibold uppercase tracking-wider">Current ROAS</p>
            <p className="text-emerald-400 font-extrabold text-2xl mt-0.5">4.5x</p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-[11px] font-semibold uppercase tracking-wider">Target</p>
            <p className="text-text-secondary font-bold text-lg mt-0.5">3.0x</p>
          </div>
          <div className="w-16 h-16" aria-hidden="true">
            <svg viewBox="0 0 64 64" className="transform -rotate-90">
              <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
              <circle
                cx="32" cy="32" r="28" fill="none" stroke="#34d399" strokeWidth="6"
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
