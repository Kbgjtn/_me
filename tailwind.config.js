const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "576px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px" },
    },
    fontFamily: {
      sans: ['var(--font-space, "")', ...defaultTheme.fontFamily.sans],
      sans: ['var(--font-space, "")', ...defaultTheme.fontFamily.mono],
    },
    fontSize: {
      mn: ".55rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8.25rem",
      "12xl": "12.25rem",
      "14xl": "14.25rem",
      "16xl": "15.25rem",
    },
    extend: {
      screens: {
        "3xl": "1600px",
      },
      extend: {
        gridTemplateColumns: {
          fluid: "repeat(auto-fill, minmax(300px, 1fr))",
        },
        gridTemplateRows: {
          fluid: "minmax(100px, auto)",
        },
      },
      colors: {
        charcoal: {
          DEFAULT: "#111111",
          50: "#D0BCFF",
          100: "#48464C",
          200: "#575360",
          300: "#655F73",
          400: "#756D88",
          500: "#847A9B",
          600: "#9387AF",
          700: "#A395C3",
          800: "#B1A1D7",
          900: "#8B8B8B",
        },
      },
    },
  },
  plugins: [],
};
