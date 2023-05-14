const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { spacing } = require("tailwindcss/defaultTheme");

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
      mono: ['var(--font-mono, "")', ...defaultTheme.fontFamily.mono],
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
      colors: {
        accent: {
          DEFAULT: "#f3f3f3",
          50: "#f3f3f3",
          100: "#f3f3f3",
          200: "#f3f3f3",
          300: "#f3f3f3",
          400: "#f3f3f3",
          500: "#f3f3f3",
          600: "#f3f3f3",
          700: "#f3f3f3",
          800: "#f3f3f3",
          900: "#f3f3f3",
        },

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
  plugins: [require("@tailwindcss/typography")],
};

/* typography: (theme) => ({
        default: {
          css: {
            color: theme("colors.charcoal"),
            code: {
              padding: "3px 5px",
              borderRadius: 5,
              background: theme("colors.gray.100"),
            },
            h1: {
              fontSize: theme("fontSize.3xl"),
              lineHeight: theme("lineHeight.tight"),
              fontWeight: theme("fontWeight.bold"),
            },
            h2: {
              fontSize: theme("fontSize.xl"),
              lineHeight: theme("lineHeight.snug"),
              fontWeight: theme("fontWeight.bold"),
            },
            h3: {
              fontSize: theme("fontSize.lg"),
              lineHeight: theme("lineHeight.normal"),
              fontWeight: theme("fontWeight.extrabold"),
            },
            "h2,h3,h4": {
              "scroll-margin-top": spacing[32],
            },
            mark: {
              background: theme("colors.pink.100"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.100"),
            },
            h1: {
              color: theme("colors.white"),
            },
            "h2,h3,h4": {
              color: theme("colors.white"),
              "scroll-margin-top": spacing[32],
            },
            code: {
              padding: "3px 5px",
              borderRadius: 5,
              color: theme("colors.white"),
              background: theme("colors.gray.800"),
            },
            "pre > code": {
              background: "none",
              padding: 0,
            },
            hr: { borderColor: theme("colors.gray.700") },
            strong: { color: theme("colors.white") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            mark: {
              background: theme("colors.yellow.100"),
            },
          },
        },
      }),
 */
