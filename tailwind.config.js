module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				transparent: "transparent",
				black: "#000",
				white: "#F2F2F2",
				primary: "#F32424",
				secondary: {
					light: "#9772FB",
					dark: "#764AF1",
				},
			},
			backgroundImage: {
				banner: "url('../public/images/banner.jpg')",
			},
		},
	},
	plugins: [],
};
