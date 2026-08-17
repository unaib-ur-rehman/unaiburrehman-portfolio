import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        ink: "var(--ink)",
        paper: "var(--paper)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        sans: ["var(--font-instrument)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(52px, 11vw, 148px)",
        "fluid-footer": "clamp(44px, 8vw, 108px)",
        "fluid-lead": "clamp(22px, 2.6vw, 34px)",
        "fluid-modal": "clamp(26px, 4vw, 42px)",
      },
      maxWidth: {
        content: "1200px",
        modal: "860px",
      },
      borderRadius: {
        card: "18px",
        dialog: "22px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
