import type { Config } from "tailwindcss";

/**
 * Semantic color tokens are backed by CSS variables (space-separated RGB
 * channels) defined per-theme in globals.css. This lets a single `.dark`
 * class on <html> flip the whole system while still supporting Tailwind's
 * `/opacity` modifiers via `rgb(var(--x) / <alpha-value>)`.
 */
const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: withOpacity("--bg"),
        surface: withOpacity("--surface"),
        card: withOpacity("--card"),
        "card-2": withOpacity("--card-2"),
        ink: withOpacity("--ink"),
        "ink-hi": withOpacity("--ink-hi"),
        "ink-2": withOpacity("--ink-2"),
        muted: withOpacity("--muted"),
        line: withOpacity("--line"),
        // Electric violet accent (constant across themes)
        accent: withOpacity("--accent"),
        "accent-ink": withOpacity("--accent-ink"),
        "accent-deep": withOpacity("--accent-deep"),
        "accent-tint": withOpacity("--accent-tint"),
        // High-contrast accent for text/links/stats (deep violet on light, soft violet on dark)
        "accent-strong": withOpacity("--accent-strong"),
        // Signal gold secondary
        gold: withOpacity("--gold"),
        "gold-ink": withOpacity("--gold-ink"),
        "gold-tint": withOpacity("--gold-tint"),
        "gold-strong": withOpacity("--gold-strong"),
        // Inverse panel (carbon in light mode)
        inverse: withOpacity("--inverse"),
        "inverse-ink": withOpacity("--inverse-ink"),
        "inverse-ink-2": withOpacity("--inverse-ink-2"),
        success: withOpacity("--success"),
        warning: withOpacity("--warning"),
        error: withOpacity("--error"),
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display": ["clamp(2.6rem, 5vw + 0.5rem, 5.25rem)", { lineHeight: "1.14", letterSpacing: "-0.01em", fontWeight: "700" }],
        "hero-lg": ["clamp(2.5rem, 4.4vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.035em", fontWeight: "800" }],
        "hero": ["clamp(2.5rem, 4.5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }],
        "h2": ["clamp(1.9rem, 3.4vw, 3.1rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
        "h3": ["clamp(1.4rem, 2vw, 1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.005em", fontWeight: "700" }],
        "metric": ["clamp(2.5rem, 4vw, 3.5rem)", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "800" }],
      },
      maxWidth: {
        container: "1280px",
        wide: "1440px",
        reading: "720px",
      },
      spacing: {
        gutter: "24px",
        section: "clamp(4rem, 9vw, 8rem)",
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "12px",
        lg: "18px",
        xl: "24px",
        "2xl": "28px",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(13, 13, 13, 0.08)",
        "soft-dark": "0 12px 40px rgba(0, 0, 0, 0.35)",
        lift: "0 20px 60px rgba(13, 13, 13, 0.12)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "rise-in": "rise-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
