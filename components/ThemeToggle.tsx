"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full border border-line font-mono text-[13px] transition-colors hover:border-accent"
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
