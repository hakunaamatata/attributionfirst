"use client";

import { Moon, Sun } from "lucide-react";
import { useAppTheme } from "./ThemeProvider";

/**
 * Single control: shows sun in dark mode (switch to light) and moon in light mode (switch to dark).
 * 44×44px minimum touch target per UI/UX guidelines.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolved, toggleTheme } = useAppTheme();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-border bg-bg-card/90 text-accent shadow-sm backdrop-blur-md transition-all duration-200 hover:border-accent/35 hover:bg-accent/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-amber-400" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" aria-hidden="true" />
      )}
    </button>
  );
}
