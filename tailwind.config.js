/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "media",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: { min: "576px", max: "767px" },
			md: { min: "768px", max: "1023px" },
			lg: { min: "1024px", max: "1279px" },
			xl: { min: "1280px", max: "1535px" },
			"2xl": { min: "1536px" },
		},
		fontFamily: {
			cascode: ["Cascadia Code", "sans-serif"],
		},
		fontSize: {
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
		},
	},
	plugins: [],
};
