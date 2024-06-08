/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#3DCBB1",
				dark: "#1B1B1B",
				orangeBg: "#FFD130",
			},
			margin: {
				side: "120px",
			},
		},
	},
	plugins: [],
};
