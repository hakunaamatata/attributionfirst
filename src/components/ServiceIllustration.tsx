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

const brandBlue: ColorTheme = {
  primary: "#1e40af",
  secondary: "#2563eb",
  glow: "rgba(30,64,175,0.16)",
};

const themes: Record<string, ColorTheme> = {
  "performance-marketing": brandBlue,
  "google-ads-management": brandBlue,
  "meta-ads-campaigns": brandBlue,
  "lead-generation-funnels": brandBlue,
  "local-search-gmb-ads": brandBlue,
  "seo-optimisation": brandBlue,
  "landing-page-optimization": brandBlue,
};

/** Skeleton / placeholder lines — visible on light & dark backgrounds */
const sk = {
  line: "bg-slate-400/45 dark:bg-white/14",
  lineMid: "bg-slate-400/35 dark:bg-white/10",
  lineDim: "bg-slate-300/55 dark:bg-white/[0.07]",
  inner: "border-border bg-slate-100/90 dark:bg-white/[0.04]",
  innerMuted: "border-border/80 bg-slate-50 dark:bg-white/[0.03]",
};

/* ─── Floating stat badge ─── */
function FloatBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-border bg-bg-card px-4 py-2.5 text-primary shadow-xl backdrop-blur-xl light:shadow-slate-900/15 dark:border-white/10 dark:shadow-black/40 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Main mockup card wrapper ─── */
function MockupCard({ children, className = "", style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`w-full rounded-3xl border border-border bg-bg-card shadow-xl backdrop-blur-sm light:shadow-slate-900/12 dark:border-white/10 dark:shadow-2xl dark:shadow-black/35 ${className}`}
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
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Paid media — live performance</p>
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <div className={`h-2 w-20 rounded-full ${sk.line}`} />
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent dark:border-accent/20">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </div>
        </div>
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Spend vs. return (12 weeks)</p>
        {/* Chart bars */}
        <div className="mb-4 flex h-32 items-end gap-2">
          {[30, 50, 38, 65, 45, 80, 58, 88, 70, 95, 78, 92].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-md transition-all" style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${t.primary}cc, ${t.primary}33)`,
              borderTop: `2px solid ${t.primary}`,
            }} />
          ))}
        </div>
        {/* Bottom metrics row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Clicks", value: "4.6K", color: "text-blue-600 dark:text-blue-400" },
            { label: "Conversions", value: "1.2K", color: "text-accent" },
            { label: "ROAS", value: "4.5x", color: "text-accent" },
          ].map((m) => (
            <div key={m.label} className={`rounded-xl border p-2.5 text-center ${sk.inner}`}>
              <p className="text-[9px] font-medium uppercase tracking-wider text-text-muted">{m.label}</p>
              <p className={`font-bold text-sm ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">+247%</p>
            <p className="text-text-muted text-[10px]">Revenue</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <PieChart className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-none text-primary">₹7Cr+</p>
            <p className="text-[10px] text-text-muted">Managed</p>
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
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Search results — your ad appears first</p>
        <div className={`mb-5 flex items-center gap-3 rounded-xl border px-4 py-3 ${sk.innerMuted}`}>
          <Search className="h-4 w-4 text-text-tertiary" />
          <div className={`h-2 w-40 rounded-full ${sk.line}`} />
          <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/20 dark:bg-blue-500/25">
            <Search className="h-3 w-3 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        {[
          { ad: true, title: "w-4/5", desc1: "w-full", desc2: "w-3/4" },
          { ad: true, title: "w-3/4", desc1: "w-full", desc2: "w-2/3" },
          { ad: false, title: "w-2/3", desc1: "w-5/6", desc2: "w-1/2" },
        ].map((r, i) => (
          <div key={i} className={`mb-4 pb-4 ${i < 2 ? "border-b border-border" : ""}`}>
            <div className="mb-1.5 flex items-center gap-2">
              {r.ad && <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[9px] font-bold text-blue-600 dark:text-blue-400">Ad</span>}
              <div className={`h-2 rounded-full ${i === 0 ? "bg-blue-500/50 dark:bg-blue-400/50" : sk.line} ${r.title}`} />
            </div>
            <div className={`mb-1 h-1.5 rounded-full ${sk.lineDim} ${r.desc1}`} />
            <div className={`h-1.5 rounded-full ${sk.lineMid} ${r.desc2}`} />
          </div>
        ))}
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center">
            <MousePointerClick className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-none text-blue-600 dark:text-blue-400">8.2%</p>
            <p className="text-text-muted text-[10px]">CTR</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-none text-primary">₹107</p>
            <p className="text-[10px] text-text-muted">Avg CPC</p>
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
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Sponsored post — reach and leads</p>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-linear-to-br from-accent to-accent-hover" />
          <div className="flex-1">
            <div className={`mb-1.5 h-2 w-24 rounded-full ${sk.line}`} />
            <div className={`h-1.5 w-16 rounded-full ${sk.lineMid}`} />
          </div>
          <span className="rounded-lg bg-accent/12 px-2 py-1 text-[9px] font-bold text-accent">Sponsored</span>
        </div>
        <div
          className="mb-4 h-36 w-full overflow-hidden rounded-2xl border border-border/60"
          style={{
            background: `linear-gradient(135deg, ${t.primary}22, ${t.secondary}18)`,
          }}
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-1">
            <Megaphone className="h-12 w-12 text-accent/70 dark:text-accent/50" strokeWidth={1.75} />
            <span className="text-[10px] font-semibold text-text-secondary">Creative / ad creative</span>
          </div>
        </div>
        {/* Engagement row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {[0, 1, 2].map(j => (
                <div key={j} className="w-6 h-6 rounded-full border-2 border-bg-card bg-linear-to-br from-accent/50 to-accent-hover/50" />
              ))}
            </div>
            <span className="text-text-tertiary text-xs">2.4K likes</span>
          </div>
          <span className="text-text-muted text-xs">180 comments</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <Users className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">2.4K</p>
            <p className="text-text-muted text-[10px]">Leads</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <Activity className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-none text-primary">₹85</p>
            <p className="text-[10px] text-text-muted">Cost/Lead</p>
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
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Conversion funnel — volume by stage</p>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-text-secondary text-xs font-medium">{s.label}</span>
                <span className="text-xs font-bold text-primary">{s.count}</span>
              </div>
              <div className={`h-5 w-full overflow-hidden rounded-lg ${sk.innerMuted}`}>
                <div className="h-full rounded-lg transition-all" style={{
                  width: `${s.pct}%`,
                  background: `linear-gradient(90deg, ${t.primary}${60 + i * 15}, ${t.secondary}${40 + i * 10})`,
                }} />
              </div>
            </div>
          ))}
        </div>
        {/* Bottom conversion rate */}
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-text-muted text-xs">Overall CVR</span>
          <span className="text-accent text-lg font-extrabold">17%</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <Filter className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">17%</p>
            <p className="text-text-muted text-[10px]">CVR</p>
          </div>
        </div>
      </FloatBadge>

      <FloatBadge className="bottom-6 -left-3 md:-left-6 animate-float-delayed">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <Zap className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-extrabold leading-none text-primary">₹42</p>
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
        <p className="px-4 pt-4 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Local map — ads and pins</p>
        <div className="relative h-52">
          <div
            className="absolute inset-0 opacity-[0.14] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgb(51 65 85 / 0.45) 1px, transparent 1px), linear-gradient(90deg, rgb(51 65 85 / 0.45) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="absolute inset-0 opacity-[0.06] dark:hidden" style={{ background: "linear-gradient(180deg, rgb(241 245 249), transparent 55%)" }} />
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-slate-400/35 dark:bg-white/12" />
          <div className="absolute bottom-0 left-1/3 top-0 w-0.5 bg-slate-400/30 dark:bg-white/10" />
          <div className="absolute bottom-0 right-1/4 top-0 w-0.5 bg-slate-400/25 dark:bg-white/8" />
          {[
            { top: "18%", left: "22%", active: true },
            { top: "55%", left: "55%", active: false },
            { top: "70%", left: "30%", active: false },
            { top: "25%", left: "72%", active: true },
            { top: "45%", left: "85%", active: false },
          ].map((pin, i) => (
            <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
              <MapPin
                className={`h-7 w-7 drop-shadow-lg ${pin.active ? "text-accent" : "text-slate-400/80 dark:text-white/25"}`}
                fill={pin.active ? "rgba(30,64,175,0.35)" : "rgb(148 163 184 / 0.25)"}
              />
              {pin.active && <div className="absolute left-0 top-0 h-7 w-7 animate-ping rounded-full bg-accent/20" />}
            </div>
          ))}
          <div className="absolute left-[16%] top-[12%] h-32 w-32 rounded-full border-2 border-dashed border-accent/35 dark:border-accent/20" />
        </div>
        <div className={`flex items-center justify-between border-t p-4 ${sk.innerMuted}`}>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span className="text-xs font-semibold text-primary">3 locations active</span>
          </div>
          <span className="text-accent text-xs font-bold">Mumbai</span>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">+25%</p>
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
            <p className="text-sm font-extrabold leading-none text-primary">#1</p>
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
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">SEO — your site vs. competitors (rankings)</p>
        <div className="space-y-3.5">
          {ranks.map((r) => (
            <div key={r.rank} className="flex items-center gap-3">
              <span className={`text-xs font-bold w-5 text-center ${r.you ? "text-accent" : "text-text-muted"}`}>{r.rank}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-medium ${r.you ? "text-primary" : "text-text-tertiary"}`}>{r.label}</span>
                  {r.you && <span className="text-[8px] font-bold bg-accent/12 text-accent px-1.5 py-0.5 rounded">YOU</span>}
                </div>
                <div className={`h-3 w-full overflow-hidden rounded-full ${sk.innerMuted}`}>
                  <div
                    className={`h-full rounded-full ${r.you ? "" : "bg-slate-400/40 dark:bg-white/12"}`}
                    style={{
                      width: `${r.pct}%`,
                      ...(r.you ? { background: `linear-gradient(90deg, ${t.primary}, ${t.secondary})` } : {}),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">+40%</p>
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
            <p className="text-sm font-extrabold leading-none text-primary">Pass</p>
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
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-text-secondary">Landing page wireframe — speed and CRO</p>
        <div className="mb-4 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          </div>
          <div className={`flex h-5 flex-1 items-center rounded-lg border px-2 ${sk.innerMuted}`}>
            <div className={`h-1.5 w-24 rounded-full ${sk.line}`} />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <div className="h-2 w-12 rounded-full bg-accent/35" />
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((j) => (
                <div key={j} className={`h-1.5 w-6 rounded-full ${sk.lineMid}`} />
              ))}
            </div>
          </div>
          <div className="rounded-xl p-4" style={{ background: `linear-gradient(135deg, ${t.primary}18, ${t.secondary}0d)` }}>
            <div className={`mb-2 h-3 w-3/4 rounded-full ${sk.line}`} />
            <div className={`mb-3 h-2 w-1/2 rounded-full ${sk.lineMid}`} />
            <div className="flex h-7 w-24 items-center justify-center rounded-lg bg-accent/45 dark:bg-accent/40">
              <span className="text-[9px] font-bold text-white">Get Started</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((j) => (
              <div key={j} className={`flex h-16 flex-col items-center justify-center gap-1.5 rounded-xl border ${sk.innerMuted}`}>
                <div className={`h-5 w-5 rounded-lg ${sk.lineDim}`} />
                <div className={`h-1.5 w-10 rounded-full ${sk.lineMid}`} />
              </div>
            ))}
          </div>
          <div className={`rounded-xl border p-3 ${sk.innerMuted}`}>
            <div className="mb-2 flex gap-0.5">
              {[0, 1, 2, 3, 4].map((j) => (
                <div key={j} className="h-2.5 w-2.5 rounded-full bg-accent/55" />
              ))}
            </div>
            <div className={`mb-1 h-1.5 w-full rounded-full ${sk.lineDim}`} />
            <div className={`h-1.5 w-2/3 rounded-full ${sk.lineMid}`} />
          </div>
        </div>
      </MockupCard>

      <FloatBadge className="top-4 -right-3 md:-right-6 animate-float">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center">
            <Bot className="w-4 h-4 text-accent" />
          </div>
          <div>
            <p className="text-accent text-sm font-extrabold leading-none">AI</p>
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
            <p className="text-sm font-extrabold leading-none text-primary">3x</p>
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
