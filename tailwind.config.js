/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        "-5": "-5",

      },
      fontFamily: {
        handjet: ["Handjet", "sans-serif"],
        "noto-sans-jp": ["Noto Sans JP", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        indigo: "0 0 10px 3px rgba(149, 87, 248, 0.66)",
        red: " 0 0 10px 3px rgba(248, 87, 87, 0.66)",
        blue: "  0 0 10px 3px rgba(87, 135, 248, 0.66)",
        gray: " 0 0 10px 3px rgba(163, 163, 163, 0.66)",
        purple:"0 0 10px 3px rgba(199, 165, 254, 0.66)"
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.7xl") },
        h2: { fontSize: theme("fontSize.6xl") },
        h3: { fontSize: theme("fontSize.5xl") },
        h4: { fontSize: theme("fontSize.4xl") },
        h5: { fontSize: theme("fontSize.3xl") },
        h6: { fontSize: theme("fontSize.2xl") },

      });
    }),
  ],
};
