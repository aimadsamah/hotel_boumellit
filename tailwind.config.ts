import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#D4AF37",
          dark: "#B8942E",
          muted: "#C9A84C66",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          light: "#2D2D2D",
          lighter: "#3D3D3D",
          dark: "#111111",
        },
        taupe: "#8B7355",
        "off-white": "#F5F0E8",
        cream: "#FAF8F5",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.1em",
        wide: "0.05em",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #B8942E 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #1A1A1A 0%, #111111 100%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(26,26,26,0.4) 0%, rgba(17,17,17,0.9) 100%)",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};

export default config;
