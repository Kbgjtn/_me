/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: false,
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			cascode: ["Cascadia Code", "sans-serif"],
		},
		fontSize: {
			sm: ["14px", "20px"],
			base: ["16px", "24px"],
			lg: ["20px", "28px"],
			xl: ["24px", "32px"],
			mdXL: ["96px", "102px"],
			bigXL: ["264px", "290px"],
		},
	},
	plugins: [],
};
