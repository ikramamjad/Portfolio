import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "Inter", "sans-serif"],
        display: ["var(--font-display)", '"Instrument Serif"', "serif"],
        sans: ["var(--font-body)", "Inter", "sans-serif"],
      },
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "text-primary": "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        accent: "hsl(var(--accent))",
        brand: {
          gold: "#B4A06E",
          surface: "#0B0F19",
          dark: "#030712",
          cyan: "#38BDF8",
          emerald: "#10B981",
          violet: "#8B5CF6",
          indigo: "#6366F1",
        }
      },
      keyframes: {
        "scroll-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
        "role-fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "scroll-down": "scroll-down 1.5s ease-in-out infinite",
        "role-fade-in": "role-fade-in 0.4s ease-out forwards",
        "gradient-shift": "gradient-shift 6s ease infinite",
      },
      boxShadow: {
        'glow-accent': '0 0 20px -3px rgba(137, 170, 204, 0.4)',
      }
    }
  },
  plugins: [tailwindcssAnimate],
}

