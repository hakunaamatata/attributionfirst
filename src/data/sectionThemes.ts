/** Visual themes for full-width “hero” sections — multi-color gradients + accent classes */
export const serviceBlockThemes = [
  {
    wash: "from-violet-600/[0.14] via-bg to-bg dark:from-violet-500/[0.18]",
    glow: "bg-violet-500/25 dark:bg-violet-400/15",
    topBar: "from-violet-500 via-fuchsia-500 to-cyan-500",
    icon: "bg-violet-500/15 text-violet-600 dark:text-violet-400 ring-1 ring-violet-500/25",
    check: "text-violet-600 dark:text-violet-400",
    metric: "bg-violet-500/8 border-violet-500/25 text-violet-700 dark:text-violet-300",
  },
  {
    wash: "from-blue-600/[0.12] via-bg to-bg dark:from-blue-500/[0.16]",
    glow: "bg-blue-500/20 dark:bg-blue-400/12",
    topBar: "from-blue-500 via-cyan-500 to-emerald-500",
    icon: "bg-blue-500/15 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/25",
    check: "text-blue-600 dark:text-blue-400",
    metric: "bg-blue-500/8 border-blue-500/25 text-blue-700 dark:text-blue-300",
  },
  {
    wash: "from-emerald-600/[0.12] via-bg to-bg dark:from-emerald-500/[0.15]",
    glow: "bg-emerald-500/20 dark:bg-emerald-400/12",
    topBar: "from-emerald-500 via-teal-500 to-cyan-500",
    icon: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/25",
    check: "text-emerald-600 dark:text-emerald-400",
    metric: "bg-emerald-500/8 border-emerald-500/25 text-emerald-700 dark:text-emerald-300",
  },
  {
    wash: "from-amber-600/[0.11] via-bg to-bg dark:from-amber-500/[0.14]",
    glow: "bg-amber-500/20 dark:bg-amber-400/12",
    topBar: "from-amber-500 via-orange-500 to-rose-500",
    icon: "bg-amber-500/15 text-amber-600 dark:text-amber-400 ring-1 ring-amber-500/25",
    check: "text-amber-600 dark:text-amber-400",
    metric: "bg-amber-500/8 border-amber-500/25 text-amber-800 dark:text-amber-300",
  },
  {
    wash: "from-cyan-600/[0.11] via-bg to-bg dark:from-cyan-500/[0.14]",
    glow: "bg-cyan-500/18 dark:bg-cyan-400/10",
    topBar: "from-cyan-500 via-blue-500 to-violet-500",
    icon: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 ring-1 ring-cyan-500/25",
    check: "text-cyan-600 dark:text-cyan-400",
    metric: "bg-cyan-500/8 border-cyan-500/25 text-cyan-800 dark:text-cyan-300",
  },
  {
    wash: "from-rose-600/[0.11] via-bg to-bg dark:from-rose-500/[0.14]",
    glow: "bg-rose-500/18 dark:bg-rose-400/10",
    topBar: "from-rose-500 via-pink-500 to-violet-500",
    icon: "bg-rose-500/15 text-rose-600 dark:text-rose-400 ring-1 ring-rose-500/25",
    check: "text-rose-600 dark:text-rose-400",
    metric: "bg-rose-500/8 border-rose-500/25 text-rose-800 dark:text-rose-300",
  },
  {
    wash: "from-indigo-600/[0.12] via-bg to-bg dark:from-indigo-500/[0.16]",
    glow: "bg-indigo-500/20 dark:bg-indigo-400/12",
    topBar: "from-indigo-500 via-violet-500 to-blue-500",
    icon: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 ring-1 ring-indigo-500/25",
    check: "text-indigo-600 dark:text-indigo-400",
    metric: "bg-indigo-500/8 border-indigo-500/25 text-indigo-800 dark:text-indigo-300",
  },
] as const;

export const caseStudyCardThemes = [
  {
    card: "border-t-4 border-t-emerald-500 shadow-emerald-500/15",
    glow: "from-emerald-500/25 to-transparent",
    badge: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  },
  {
    card: "border-t-4 border-t-violet-500 shadow-violet-500/15",
    glow: "from-violet-500/25 to-transparent",
    badge: "bg-violet-500/15 text-violet-700 dark:text-violet-400 border-violet-500/30",
  },
  {
    card: "border-t-4 border-t-amber-500 shadow-amber-500/15",
    glow: "from-amber-500/25 to-transparent",
    badge: "bg-amber-500/15 text-amber-800 dark:text-amber-400 border-amber-500/30",
  },
] as const;
