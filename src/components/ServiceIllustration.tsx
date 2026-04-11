import {
  Target, BarChart3, Megaphone, Filter, MapPin, Search, Bot,
  TrendingUp, MousePointerClick, DollarSign, Users, Zap,
  Globe, Layers, PieChart, ArrowUpRight, Activity,
} from "lucide-react";

/* ─── Color themes per service ─── */
type ColorTheme = {
  primary: string;
  secondary: string;
  glow: string;
};

const themes: Record<string, ColorTheme> = {
  "performance-marketing": { primary: "#8B5CF6", secondary: "#6366F1", glow: "rgba(139,92,246,0.18)" },
  "google-ads-management": { primary: "#3B82F6", secondary: "#2563EB", glow: "rgba(59,130,246,0.18)" },
  "meta-ads-campaigns": { primary: "#8B5CF6", secondary: "#EC4899", glow: "rgba(139,92,246,0.14)" },
  "lead-generation-funnels": { primary: "#F59E0B", secondary: "#F97316", glow: "rgba(245,158,11,0.18)" },
  "local-search-gmb-ads": { primary: "#06B6D4", secondary: "#0EA5E9", glow: "rgba(6,182,212,0.18)" },
  "seo-optimisation": { primary: "#10B981", secondary: "#14B8A6", glow: "rgba(16,185,129,0.18)" },
  "landing-page-optimization": { primary: "#8B5CF6", secondary: "#6366F1", glow: "rgba(139,92,246,0.14)" },
};

/* ─── Floating stat badge ─── */
function FloatBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute z-20 bg-bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-2.5 shadow-2xl shadow-black/30 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Main mockup card wrapper ─── */
function MockupCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`w-full bg-bg-card/50 backdrop-blur-sm border border-white/8 rounded-3xl shadow-2xl shadow-black/40 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PERFORMANCE MARKETING
═══════════════════════════════════════════════════════ */
function PerformanceMarketingIllustration({ t }: { t: ColorTheme }) {
  return (
    <>
      <MockupCard className="p-6" style={{ transform: "perspective(1000px) rotateY(-4deg) rotateX(2deg)" }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <div className="w-20 h-2 rounded-full bg-white/10" />
          </div>
          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-lg">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            Live
          </div>
        </div>
        {/* Chart bars */}
        <div className="flex items-end gap-2 h-32 mb-4">
          {[30, 50, 38, 65, 45, 80, 58, 88, 70, 95, 78, 92].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md transition-all" style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${t.primary}50, ${t.primary}15)`,
              borderTop: `2px solid ${t.primary}80`,
            }} />
          ))}
        </div>
        {/* Bottom metrics row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Clicks", value: "4.6K", color: "text-blue-400" },
            { label: "Conversions", value: "1.2K", color: "text-emerald-400" },
            { label: "ROAS", value: "4.5x", color: "text-violet-400" },
          ].map((m) => (
            <div key={m.label} className="bg-white/3 rounded-xl p-2.5 border border-white/5 text-center">
              <p className="text-text-muted text-[9px] uppercase tracking-wider">{m.label}</p>
              <p className={`font-bold text-sm ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-400 text-sm font-extrabold leading-none">+247%</p>
            <p className="text-text-muted text-[10px]">Revenue</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-violet-500/15 flex items-center justify-center">
            <PieChart className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">₹7Cr+</p>
            <p className="text-text-muted text-[10px]">Managed</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   GOOGLE ADS
═══════════════════════════════════════════════════════ */
function GoogleAdsIllustration({ t }: { t: ColorTheme }) {
  return (
    <>
      <MockupCard className="p-6" style={{ transform: "perspective(1000px) rotateY(3deg) rotateX(2deg)" }}>
        {/* Search bar */}
        <div className="flex items-center gap-3 bg-white/4 border border-white/10 rounded-xl px-4 py-3 mb-5">
          <Search className="w-4 h-4 text-text-tertiary" />
          <div className="w-40 h-2 rounded-full bg-white/12" />
          <div className="ml-auto w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center">
            <Search className="w-3 h-3 text-blue-400" />
          </div>
        </div>
        {/* Ad results */}
        {[
          { ad: true, title: "w-4/5", desc1: "w-full", desc2: "w-3/4" },
          { ad: true, title: "w-3/4", desc1: "w-full", desc2: "w-2/3" },
          { ad: false, title: "w-2/3", desc1: "w-5/6", desc2: "w-1/2" },
        ].map((r, i) => (
          <div key={i} className={`mb-4 pb-4 ${i < 2 ? "border-b border-white/5" : ""}`}>
            <div className="flex items-center gap-2 mb-1.5">
              {r.ad && <span className="text-[9px] font-bold bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded">Ad</span>}
              <div className={`h-2 rounded-full ${i === 0 ? "bg-blue-400/50" : "bg-white/12"} ${r.title}`} />
            </div>
            <div className={`h-1.5 rounded-full bg-white/6 ${r.desc1} mb-1`} />
            <div className={`h-1.5 rounded-full bg-white/4 ${r.desc2}`} />
          </div>
        ))}
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center">
            <MousePointerClick className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-blue-400 text-sm font-extrabold leading-none">8.2%</p>
            <p className="text-text-muted text-[10px]">CTR</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">₹107</p>
            <p className="text-text-muted text-[10px]">Avg CPC</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   META ADS
═══════════════════════════════════════════════════════ */
function MetaAdsIllustration({ t }: { t: ColorTheme }) {
  return (
    <>
      <MockupCard className="p-6" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
        {/* Post header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-violet-500 to-pink-500 shrink-0" />
          <div className="flex-1">
            <div className="w-24 h-2 rounded-full bg-white/15 mb-1.5" />
            <div className="w-16 h-1.5 rounded-full bg-white/8" />
          </div>
          <span className="text-[9px] text-violet-400 font-bold bg-violet-500/15 px-2 py-1 rounded-lg">Sponsored</span>
        </div>
        {/* Image placeholder */}
        <div className="w-full h-36 rounded-2xl mb-4 overflow-hidden" style={{
          background: `linear-gradient(135deg, ${t.primary}15, ${t.secondary}10)`,
        }}>
          <div className="w-full h-full flex items-center justify-center">
            <Megaphone className="w-12 h-12 text-violet-400/20" />
          </div>
        </div>
        {/* Engagement row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[0, 1, 2].map(j => (
                <div key={j} className="w-6 h-6 rounded-full border-2 border-bg-card bg-linear-to-br from-violet-400/50 to-pink-400/50" />
              ))}
            </div>
            <span className="text-text-tertiary text-xs">2.4K likes</span>
          </div>
          <span className="text-text-muted text-xs">180 comments</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-pink-500/15 flex items-center justify-center">
            <Users className="w-4 h-4 text-pink-400" />
          </div>
          <div>
            <p className="text-pink-400 text-sm font-extrabold leading-none">2.4K</p>
            <p className="text-text-muted text-[10px]">Leads</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-violet-500/15 flex items-center justify-center">
            <Activity className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">₹85</p>
            <p className="text-text-muted text-[10px]">Cost/Lead</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   LEAD GEN FUNNELS
═══════════════════════════════════════════════════════ */
function LeadGenIllustration({ t }: { t: ColorTheme }) {
  const steps = [
    { label: "Visitors", count: "12,400", pct: 100 },
    { label: "Leads", count: "2,100", pct: 75 },
    { label: "Qualified", count: "840", pct: 52 },
    { label: "Customers", count: "210", pct: 32 },
  ];
  return (
    <>
      <MockupCard className="p-6" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
        <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold mb-5">Conversion Funnel</p>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-text-secondary text-xs font-medium">{s.label}</span>
                <span className="text-white text-xs font-bold">{s.count}</span>
              </div>
              <div className="w-full h-5 rounded-lg bg-white/4 overflow-hidden">
                <div className="h-full rounded-lg transition-all" style={{
                  width: `${s.pct}%`,
                  background: `linear-gradient(90deg, ${t.primary}${60 + i * 15}, ${t.secondary}${40 + i * 10})`,
                }} />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom conversion rate */}
        <div className="mt-5 pt-4 border-t border-white/6 flex items-center justify-between">
          <span className="text-text-muted text-xs">Overall CVR</span>
          <span className="text-amber-400 text-lg font-extrabold">17%</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center">
            <Filter className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <p className="text-amber-400 text-sm font-extrabold leading-none">17%</p>
            <p className="text-text-muted text-[10px]">CVR</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center">
            <Zap className="w-4 h-4 text-orange-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">₹42</p>
            <p className="text-text-muted text-[10px]">CPA</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   LOCAL SEARCH
═══════════════════════════════════════════════════════ */
function LocalSearchIllustration({ t }: { t: ColorTheme }) {
  return (
    <>
      <MockupCard className="overflow-hidden" style={{ transform: "perspective(1000px) rotateY(3deg) rotateX(2deg)" }}>
        {/* Map area */}
        <div className="relative h-52">
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "linear-gradient(rgba(6,182,212,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.6) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Roads */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/8" />
          <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-white/8" />
          <div className="absolute top-0 bottom-0 right-1/4 w-0.5 bg-white/6" />
          {/* Pins */}
          {[
            { top: "18%", left: "22%", active: true },
            { top: "55%", left: "55%", active: false },
            { top: "70%", left: "30%", active: false },
            { top: "25%", left: "72%", active: true },
            { top: "45%", left: "85%", active: false },
          ].map((pin, i) => (
            <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
              <MapPin className={`w-7 h-7 drop-shadow-lg ${pin.active ? "text-cyan-400" : "text-white/15"}`} fill={pin.active ? "rgba(6,182,212,0.3)" : "transparent"} />
              {pin.active && <div className="absolute top-0 left-0 w-7 h-7 bg-cyan-400/20 rounded-full animate-ping" />}
            </div>
          ))}
          {/* Radius circle */}
          <div className="absolute top-[12%] left-[16%] w-32 h-32 rounded-full border-2 border-dashed border-cyan-400/15" />
        </div>
        {/* Bottom info bar */}
        <div className="p-4 bg-white/2 border-t border-white/6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span className="text-white text-xs font-semibold">3 locations active</span>
          </div>
          <span className="text-cyan-400 text-xs font-bold">Mumbai</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <p className="text-cyan-400 text-sm font-extrabold leading-none">+25%</p>
            <p className="text-text-muted text-[10px]">Calls</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-14 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-sky-500/15 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-sky-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">#1</p>
            <p className="text-text-muted text-[10px]">Map Pack</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   SEO
═══════════════════════════════════════════════════════ */
function SEOIllustration({ t }: { t: ColorTheme }) {
  const ranks = [
    { rank: 1, pct: 95, label: "attributionfirst.co.in", you: true },
    { rank: 2, pct: 72, label: "competitor-a.com", you: false },
    { rank: 3, pct: 58, label: "competitor-b.com", you: false },
    { rank: 4, pct: 40, label: "competitor-c.com", you: false },
    { rank: 5, pct: 25, label: "competitor-d.com", you: false },
  ];
  return (
    <>
      <MockupCard className="p-6" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
        <p className="text-text-muted text-[10px] uppercase tracking-widest font-semibold mb-5">Search Rankings</p>
        <div className="space-y-3.5">
          {ranks.map((r) => (
            <div key={r.rank} className="flex items-center gap-3">
              <span className={`text-xs font-bold w-5 text-center ${r.you ? "text-emerald-400" : "text-text-muted"}`}>{r.rank}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-medium ${r.you ? "text-white" : "text-text-tertiary"}`}>{r.label}</span>
                  {r.you && <span className="text-[8px] font-bold bg-emerald-500/15 text-emerald-400 px-1.5 py-0.5 rounded">YOU</span>}
                </div>
                <div className="w-full h-3 rounded-full bg-white/4 overflow-hidden">
                  <div className="h-full rounded-full" style={{
                    width: `${r.pct}%`,
                    background: r.you ? `linear-gradient(90deg, ${t.primary}, ${t.secondary})` : "rgba(255,255,255,0.06)",
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-emerald-400 text-sm font-extrabold leading-none">+40%</p>
            <p className="text-text-muted text-[10px]">Traffic</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-teal-500/15 flex items-center justify-center">
            <Globe className="w-4 h-4 text-teal-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">Pass</p>
            <p className="text-text-muted text-[10px]">Core Vitals</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   LANDING PAGE + AI SEO
═══════════════════════════════════════════════════════ */
function LandingPageIllustration({ t }: { t: ColorTheme }) {
  return (
    <>
      <MockupCard className="p-5" style={{ transform: "perspective(1000px) rotateY(3deg) rotateX(2deg)" }}>
        {/* Browser chrome */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="flex-1 h-5 rounded-lg bg-white/4 border border-white/6 flex items-center px-2">
            <div className="w-24 h-1.5 rounded-full bg-white/10" />
          </div>
        </div>
        {/* Page content */}
        <div className="space-y-3">
          {/* Nav */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="w-12 h-2 rounded-full bg-accent/30" />
            <div className="flex gap-3">
              {[0, 1, 2, 3].map(j => <div key={j} className="w-6 h-1.5 rounded-full bg-white/8" />)}
            </div>
          </div>
          {/* Hero */}
          <div className="rounded-xl p-4" style={{ background: `linear-gradient(135deg, ${t.primary}15, ${t.secondary}08)` }}>
            <div className="w-3/4 h-3 rounded-full bg-white/15 mb-2" />
            <div className="w-1/2 h-2 rounded-full bg-white/8 mb-3" />
            <div className="w-24 h-7 rounded-lg bg-accent/40 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">Get Started</span>
            </div>
          </div>
          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map(j => (
              <div key={j} className="h-16 rounded-xl bg-white/3 border border-white/5 flex flex-col items-center justify-center gap-1.5">
                <div className="w-5 h-5 rounded-lg bg-white/6" />
                <div className="w-10 h-1.5 rounded-full bg-white/6" />
              </div>
            ))}
          </div>
          {/* Testimonial */}
          <div className="rounded-xl bg-white/2 border border-white/5 p-3">
            <div className="flex gap-0.5 mb-2">
              {[0, 1, 2, 3, 4].map(j => <div key={j} className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />)}
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/6 mb-1" />
            <div className="w-2/3 h-1.5 rounded-full bg-white/4" />
          </div>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-violet-500/15 flex items-center justify-center">
            <Bot className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <p className="text-violet-400 text-sm font-extrabold leading-none">AI</p>
            <p className="text-text-muted text-[10px]">Optimized</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center">
            <Layers className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <p className="text-white text-sm font-extrabold leading-none">3x</p>
            <p className="text-text-muted text-[10px]">AIO Rank</p>
          </div>
        </div>
      </FloatBadge>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function ServiceIllustration({ slug }: { slug: string; icon: string }) {
  const t = themes[slug] || themes["performance-marketing"];

  return (
    <div className="relative w-full py-8 md:py-12 px-4 md:px-8">
      {/* Background glow — larger, more visible */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[120%] h-[120%] rounded-full blur-[100px] opacity-70"
          style={{ background: `radial-gradient(ellipse, ${t.glow}, transparent 65%)` }} />
      </div>

      {/* Illustration content */}
      <div className="relative max-w-md mx-auto lg:mx-0">
        {slug === "performance-marketing" && <PerformanceMarketingIllustration t={t} />}
        {slug === "google-ads-management" && <GoogleAdsIllustration t={t} />}
        {slug === "meta-ads-campaigns" && <MetaAdsIllustration t={t} />}
        {slug === "lead-generation-funnels" && <LeadGenIllustration t={t} />}
        {slug === "local-search-gmb-ads" && <LocalSearchIllustration t={t} />}
        {slug === "seo-optimisation" && <SEOIllustration t={t} />}
        {slug === "landing-page-optimization" && <LandingPageIllustration t={t} />}
      </div>
    </div>
  );
}
