/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark-premium palette derived from the new logo (copper + platinum on obsidian).
        // Token names are kept stable so existing utilities resolve correctly:
        //   sand = page canvas · paper = elevated panel · ink = primary text ·
        //   inkSoft = secondary text · line = hairline · terra/terraDeep = copper accents.
        sand: "#15131A",
        ink: "#ECEAEF",
        inkSoft: "#ABA5B2",
        terra: "#E7A98E",
        terraDeep: "#F2C2AE",
        moss: "#87C29B",
        sea: "#8FB7E1",
        line: "#2C2832",
        paper: "#1D1A22",
        obsidian: "#100E14",
        copper: "#E7A98E",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0, 0, 0, 0.35), 0 12px 34px -16px rgba(0, 0, 0, 0.6)",
        glow: "0 0 0 1px rgba(231, 169, 142, 0.25), 0 18px 50px -22px rgba(231, 169, 142, 0.45)",
      },
    },
  },
  plugins: [],
};
