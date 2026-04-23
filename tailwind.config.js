/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#FBF6EE",
        ink: "#3B2A1E",
        inkSoft: "#5A4436",
        terra: "#C66B4A",
        terraDeep: "#A74E30",
        moss: "#4F7A5A",
        sea: "#2E5E8C",
        line: "#E7DCCB",
        paper: "#FFFDF8",
      },
      fontFamily: {
        serif: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1120px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(59, 42, 30, 0.04), 0 4px 16px rgba(59, 42, 30, 0.06)",
      },
    },
  },
  plugins: [],
};
