"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme-preference";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

type ThemeContextValue = {
  /** The theme actually on screen (always "light" while forcedLight is set). */
  theme: Theme;
  isDark: boolean;
  /** True on pages that must stay light (landing, guest views). */
  forcedLight: boolean;
  setForcedLight: (forced: boolean) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // The user's saved preference. Never changed by forcedLight, so it is
  // still intact when they navigate back to a themed page.
  const [preference, setPreference] = useState<Theme>("light");
  const [forcedLight, setForcedLight] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setPreference(getInitialTheme());
    setReady(true);
  }, []);

  const theme: Theme = forcedLight ? "light" : preference;

  // Wait for the stored preference to load, otherwise the default "light"
  // would strip the class the inline script set and flash the page.
  // Layout effect so a forcedLight change updates <html> before paint.
  useLayoutEffect(() => {
    if (!ready) return;
    applyTheme(theme);
  }, [ready, theme]);

  const toggleTheme = () => {
    if (forcedLight) return;
    const next = preference === "light" ? "dark" : "light";
    setPreference(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, isDark: theme === "dark", forcedLight, setForcedLight, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
