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
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  loading: boolean;
  color?: string;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col gap-1">
      <div className="flex items-center gap-1.5 text-white/40">
        <Icon className="w-3 h-3" />
        <p className="text-xs">{label}</p>
      </div>
      {loading ? (
        <div className="h-7 w-16 bg-white/10 rounded-md animate-pulse" />
      ) : (
        <p className={`font-bold text-lg ${color}`}>{value}</p>
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
    >
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-white/40 text-xs uppercase tracking-wider">
              Campaign Dashboard
            </p>
            <p className="text-white font-semibold text-lg">
              Performance Overview
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-teal-400" />
            </div>
            {lastUpdated && (
              <span className="text-white/25 text-[10px] flex items-center gap-1">
                <RefreshCw className="w-2.5 h-2.5" />
                {lastUpdated}
              </span>
            )}
          </div>
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center gap-1.5 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Live · Last 30 days
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <StatCard icon={MousePointerClick} label="Clicks" value={s.clicks} loading={loading} color="text-white" />
          <StatCard icon={Eye} label="Impressions" value={s.impressions} loading={loading} color="text-white" />
          <StatCard icon={IndianRupee} label="Avg. CPC" value={s.avgCpc} loading={loading} color="text-accent" />
          <StatCard icon={TrendingUp} label="Conversions" value={s.conversions} loading={loading} color="text-accent" />
        </div>

        {/* Cost bar */}
        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-white/40 text-xs">Total Ad Spend (30d)</p>
            {loading ? (
              <div className="h-6 w-20 bg-white/10 rounded-md animate-pulse" />
            ) : (
              <p className="text-white font-bold text-lg">{s.cost}</p>
            )}
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-accent to-teal-300 rounded-full transition-all duration-1000"
              style={{ width: loading ? "0%" : "72%" }}
            />
          </div>
          <p className="text-white/25 text-[10px] mt-1.5">of ₹7Cr+ lifetime managed</p>
        </div>

        {/* ROAS */}
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
              <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
              <circle
                cx="32" cy="32" r="28" fill="none" stroke="#00C9A7" strokeWidth="6"
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
