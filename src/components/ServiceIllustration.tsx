import {
  Target, BarChart3, Megaphone, Filter, MapPin, Search, Bot,
  TrendingUp, MousePointerClick, DollarSign, Users, Zap,
  Globe, Layers, PieChart, ArrowUpRight, Activity,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, BarChart3, Megaphone, Filter, MapPin, Search, Layout: Globe,
};

/* ─── Color themes per service ─── */
type ColorTheme = {
  primary: string;       // main accent
  secondary: string;     // softer complement
  glow: string;          // radial glow color
  gradient: string;      // card gradient classes
  orb1: string;          // floating orb 1
  orb2: string;          // floating orb 2
};

const themes: Record<string, ColorTheme> = {
  "performance-marketing": {
    primary: "#8B5CF6", secondary: "#6366F1",
    glow: "rgba(139,92,246,0.15)",
    gradient: "from-violet-500/20 to-indigo-500/10",
    orb1: "bg-violet-500/20", orb2: "bg-indigo-500/15",
  },
  "google-ads-management": {
    primary: "#3B82F6", secondary: "#2563EB",
    glow: "rgba(59,130,246,0.15)",
    gradient: "from-blue-500/20 to-cyan-500/10",
    orb1: "bg-blue-500/20", orb2: "bg-cyan-500/15",
  },
  "meta-ads-campaigns": {
    primary: "#8B5CF6", secondary: "#EC4899",
    glow: "rgba(139,92,246,0.12)",
    gradient: "from-violet-500/20 to-pink-500/10",
    orb1: "bg-violet-500/20", orb2: "bg-pink-500/15",
  },
  "lead-generation-funnels": {
    primary: "#F59E0B", secondary: "#F97316",
    glow: "rgba(245,158,11,0.15)",
    gradient: "from-amber-500/20 to-orange-500/10",
    orb1: "bg-amber-500/20", orb2: "bg-orange-500/15",
  },
  "local-search-gmb-ads": {
    primary: "#06B6D4", secondary: "#0EA5E9",
    glow: "rgba(6,182,212,0.15)",
    gradient: "from-cyan-500/20 to-sky-500/10",
    orb1: "bg-cyan-500/20", orb2: "bg-sky-500/15",
  },
  "seo-optimisation": {
    primary: "#10B981", secondary: "#14B8A6",
    glow: "rgba(16,185,129,0.15)",
    gradient: "from-emerald-500/20 to-teal-500/10",
    orb1: "bg-emerald-500/20", orb2: "bg-teal-500/15",
  },
  "landing-page-optimization": {
    primary: "#8B5CF6", secondary: "#6366F1",
    glow: "rgba(139,92,246,0.12)",
    gradient: "from-violet-500/20 to-blue-500/10",
    orb1: "bg-violet-500/20", orb2: "bg-blue-500/15",
  },
};

/* ─── Floating mini cards per service ─── */
function MiniCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute bg-bg-card/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 shadow-xl shadow-black/20 ${className}`}>
      {children}
    </div>
  );
}

/* ─── Per-service 3D illustrations ─── */
function PerformanceMarketingIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Dashboard mockup */}
      <div className="relative w-64 h-44 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl p-4 shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(-5deg) rotateX(3deg)" }}>
        {/* Header bar */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <div className="w-16 h-1.5 rounded-full bg-white/10" />
          <div className="ml-auto w-8 h-1.5 rounded-full bg-accent/30" />
        </div>
        {/* Chart bars */}
        <div className="flex items-end gap-1.5 h-20 px-2">
          {[35, 55, 40, 70, 50, 85, 65, 90, 75, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${theme.primary}40, ${theme.primary}15)`,
            }} />
          ))}
        </div>
        {/* Bottom stats */}
        <div className="flex gap-3 mt-2">
          <div className="flex-1 h-2 rounded-full bg-white/6" />
          <div className="flex-1 h-2 rounded-full bg-white/6" />
        </div>
      </div>

      {/* Floating metric cards */}
      <MiniCard className="top-2 -right-4 animate-float">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 text-xs font-bold">+247%</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-2 -left-4 animate-float-delayed">
        <div className="flex items-center gap-2">
          <PieChart className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-white text-[11px] font-semibold">ROAS 4.5x</span>
        </div>
      </MiniCard>
    </>
  );
}

function GoogleAdsIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Search results mockup */}
      <div className="relative w-64 h-48 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl p-4 shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(4deg) rotateX(2deg)" }}>
        {/* Search bar */}
        <div className="flex items-center gap-2 bg-white/6 border border-white/10 rounded-lg px-3 py-2 mb-3">
          <Search className="w-3.5 h-3.5 text-text-tertiary" />
          <div className="w-28 h-1.5 rounded-full bg-white/15" />
        </div>
        {/* Ad results */}
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="flex items-start gap-2 mb-2.5">
            <div className={`shrink-0 px-1.5 py-0.5 rounded text-[8px] font-bold ${i === 0 ? "bg-blue-500/20 text-blue-400" : "bg-white/6 text-text-muted"}`}>
              {i === 0 ? "Ad" : ""}
            </div>
            <div className="flex-1 space-y-1">
              <div className={`h-1.5 rounded-full ${i === 0 ? "bg-blue-400/40 w-3/4" : "bg-white/10 w-2/3"}`} />
              <div className="h-1 rounded-full bg-white/6 w-full" />
              <div className="h-1 rounded-full bg-white/6 w-1/2" />
            </div>
          </div>
        ))}
      </div>

      <MiniCard className="-top-1 -right-6 animate-float">
        <div className="flex items-center gap-2">
          <MousePointerClick className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-blue-400 text-xs font-bold">CTR 8.2%</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-3 -left-3 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-white text-[11px] font-semibold">CPC ₹107</span>
        </div>
      </MiniCard>
    </>
  );
}

function MetaAdsIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Social feed mockup */}
      <div className="relative w-56 h-52 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl p-4 shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(-4deg) rotateX(2deg)" }}>
        {/* Post header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <div className="space-y-1">
            <div className="w-16 h-1.5 rounded-full bg-white/15" />
            <div className="w-10 h-1 rounded-full bg-white/8" />
          </div>
          <div className="ml-auto text-[8px] text-violet-400 font-bold bg-violet-500/15 px-1.5 py-0.5 rounded">Sponsored</div>
        </div>
        {/* Image placeholder */}
        <div className="w-full h-20 rounded-xl mb-2 overflow-hidden" style={{
          background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}15)`,
        }}>
          <div className="w-full h-full flex items-center justify-center">
            <Megaphone className="w-8 h-8 text-violet-400/30" />
          </div>
        </div>
        {/* Engagement row */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-1">
            {[0,1,2].map(j => (
              <div key={j} className="w-4 h-4 rounded-full border border-bg-card bg-gradient-to-br from-violet-400/40 to-pink-400/40" />
            ))}
          </div>
          <div className="h-1 flex-1 rounded-full bg-white/6" />
        </div>
      </div>

      <MiniCard className="top-4 -right-8 animate-float">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-pink-400" />
          <span className="text-pink-400 text-xs font-bold">2.4K Leads</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-2 -left-6 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-white text-[11px] font-semibold">CPL ₹85</span>
        </div>
      </MiniCard>
    </>
  );
}

function LeadGenIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Funnel visualization */}
      <div className="relative w-56 h-48 flex flex-col items-center justify-center gap-1">
        {[
          { w: "w-48", label: "Visitors", count: "12,400", color: `${theme.primary}25` },
          { w: "w-40", label: "Leads", count: "2,100", color: `${theme.primary}35` },
          { w: "w-32", label: "Qualified", count: "840", color: `${theme.primary}50` },
          { w: "w-24", label: "Customers", count: "210", color: `${theme.primary}70` },
        ].map((step, i) => (
          <div key={i} className={`${step.w} h-9 rounded-xl flex items-center justify-between px-3 border border-white/8 backdrop-blur-sm shadow-lg shadow-black/10`}
            style={{ background: step.color, transform: `perspective(600px) rotateX(${5 - i * 2}deg)` }}>
            <span className="text-white/70 text-[10px] font-medium">{step.label}</span>
            <span className="text-white text-[10px] font-bold">{step.count}</span>
          </div>
        ))}
      </div>

      <MiniCard className="top-0 -right-6 animate-float">
        <div className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-amber-400 text-xs font-bold">17% CVR</span>
        </div>
      </MiniCard>

      <MiniCard className="bottom-2 -left-4 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-white text-[11px] font-semibold">₹42 CPA</span>
        </div>
      </MiniCard>
    </>
  );
}

function LocalSearchIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Map mockup */}
      <div className="relative w-60 h-44 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(3deg) rotateX(3deg)" }}>
        {/* Map grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        {/* Map pins */}
        <div className="relative w-full h-full p-4">
          {[
            { top: "20%", left: "25%", active: true },
            { top: "45%", left: "60%", active: false },
            { top: "65%", left: "35%", active: false },
            { top: "30%", left: "75%", active: true },
          ].map((pin, i) => (
            <div key={i} className="absolute" style={{ top: pin.top, left: pin.left }}>
              <MapPin className={`w-5 h-5 ${pin.active ? "text-cyan-400" : "text-white/20"}`} fill={pin.active ? "rgba(6,182,212,0.3)" : "transparent"} />
              {pin.active && <div className="absolute inset-0 w-5 h-5 bg-cyan-400/20 rounded-full animate-ping" />}
            </div>
          ))}
          {/* Radius circle */}
          <div className="absolute top-[15%] left-[20%] w-24 h-24 rounded-full border-2 border-dashed border-cyan-400/20" />
        </div>
      </div>

      <MiniCard className="-top-2 -right-4 animate-float">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-cyan-400 text-xs font-bold">+25% Calls</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-3 -left-2 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-white text-[11px] font-semibold">Map Pack #1</span>
        </div>
      </MiniCard>
    </>
  );
}

function SEOIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* SERP ranking mockup */}
      <div className="relative w-60 h-48 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl p-4 shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(-3deg) rotateX(2deg)" }}>
        <div className="text-[9px] text-text-muted uppercase tracking-widest mb-3 font-semibold">Search Rankings</div>
        {[
          { rank: 1, w: "95%", label: "attributionfirst.co.in", color: theme.primary },
          { rank: 2, w: "80%", label: "competitor-a.com", color: "rgba(255,255,255,0.1)" },
          { rank: 3, w: "65%", label: "competitor-b.com", color: "rgba(255,255,255,0.1)" },
          { rank: 4, w: "50%", label: "competitor-c.com", color: "rgba(255,255,255,0.06)" },
          { rank: 5, w: "35%", label: "competitor-d.com", color: "rgba(255,255,255,0.06)" },
        ].map((item) => (
          <div key={item.rank} className="flex items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold w-4 text-center ${item.rank === 1 ? "text-emerald-400" : "text-text-muted"}`}>
              {item.rank}
            </span>
            <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full rounded-full" style={{ width: item.w, background: item.rank === 1 ? `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})` : item.color }} />
            </div>
          </div>
        ))}
      </div>

      <MiniCard className="top-0 -right-6 animate-float">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 text-xs font-bold">+40% Traffic</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-2 -left-4 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-teal-400" />
          <span className="text-white text-[11px] font-semibold">CWV Pass</span>
        </div>
      </MiniCard>
    </>
  );
}

function LandingPageIllustration({ theme }: { theme: ColorTheme }) {
  return (
    <>
      {/* Landing page builder mockup */}
      <div className="relative w-52 h-52 bg-bg-card/60 backdrop-blur-sm border border-white/8 rounded-2xl p-3 shadow-2xl shadow-black/30"
        style={{ transform: "perspective(800px) rotateY(4deg) rotateX(3deg)" }}>
        {/* Nav bar */}
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-6 h-1.5 rounded-full bg-accent/40" />
          <div className="ml-auto flex gap-1">
            {[0,1,2].map(j => <div key={j} className="w-4 h-1 rounded-full bg-white/10" />)}
          </div>
        </div>
        {/* Hero block */}
        <div className="rounded-lg p-2 mb-2" style={{ background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}10)` }}>
          <div className="w-20 h-1.5 rounded-full bg-white/20 mb-1.5" />
          <div className="w-16 h-1 rounded-full bg-white/10 mb-2" />
          <div className="w-14 h-4 rounded-md bg-accent/40 flex items-center justify-center">
            <span className="text-white text-[7px] font-bold">CTA</span>
          </div>
        </div>
        {/* Content blocks */}
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[0,1,2].map(j => (
            <div key={j} className="h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
              <div className="w-4 h-4 rounded bg-white/8" />
            </div>
          ))}
        </div>
        {/* Testimonial block */}
        <div className="rounded-lg bg-white/4 border border-white/5 p-1.5">
          <div className="flex gap-0.5 mb-1">
            {[0,1,2,3,4].map(j => <div key={j} className="w-1.5 h-1.5 rounded-full bg-amber-400/60" />)}
          </div>
          <div className="w-full h-1 rounded-full bg-white/8" />
        </div>
      </div>

      <MiniCard className="-top-1 -right-8 animate-float">
        <div className="flex items-center gap-1.5">
          <Bot className="w-3.5 h-3.5 text-violet-400" />
          <span className="text-violet-400 text-xs font-bold">AI Ready</span>
        </div>
      </MiniCard>

      <MiniCard className="-bottom-2 -left-6 animate-float-delayed">
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-white text-[11px] font-semibold">3x AIO</span>
        </div>
      </MiniCard>
    </>
  );
}

/* ─── Main export ─── */
export default function ServiceIllustration({ slug, icon }: { slug: string; icon: string }) {
  const theme = themes[slug] || themes["performance-marketing"];

  return (
    <div className="relative flex items-center justify-center min-h-[280px] md:min-h-[320px]">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full blur-[80px] opacity-60"
          style={{ background: `radial-gradient(circle, ${theme.glow}, transparent 70%)` }} />
      </div>

      {/* Illustration */}
      <div className="relative">
        {slug === "performance-marketing" && <PerformanceMarketingIllustration theme={theme} />}
        {slug === "google-ads-management" && <GoogleAdsIllustration theme={theme} />}
        {slug === "meta-ads-campaigns" && <MetaAdsIllustration theme={theme} />}
        {slug === "lead-generation-funnels" && <LeadGenIllustration theme={theme} />}
        {slug === "local-search-gmb-ads" && <LocalSearchIllustration theme={theme} />}
        {slug === "seo-optimisation" && <SEOIllustration theme={theme} />}
        {slug === "landing-page-optimization" && <LandingPageIllustration theme={theme} />}
      </div>
    </div>
  );
}
