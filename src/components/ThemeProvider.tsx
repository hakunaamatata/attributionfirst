"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/** User-chosen appearance: only light or dark (no system — use single toggle). */
export type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  resolved: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyDom(mode: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(mode);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("theme");
      if (raw === "light" || raw === "dark") {
        setModeState(raw);
      } else if (raw === "system" || raw === null) {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setModeState(prefersDark ? "dark" : "light");
      } else {
        setModeState("dark");
      }
    } catch {
      setModeState("dark");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyDom(mode);
    try {
      localStorage.setItem("theme", mode);
    } catch {
      /* ignore */
    }
  }, [mode, ready]);

  const setTheme = useCallback((t: ThemeMode) => setModeState(t), []);

  const toggleTheme = useCallback(() => {
    setModeState((m) => (m === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      mode,
      resolved: mode,
      setTheme,
      toggleTheme,
    }),
    [mode, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useAppTheme must be used within ThemeProvider");
  }
  return ctx;
}
