/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.html"],
  theme: {
    extend: {
		colors: {
		  transparent: 'transparent',
		  'primary': '#FFF5E1',
		  'secondary': {
			100: '#FFD9D9',
			200: '#FF6969',
		  },
		  'tertiary': '#C80036',
		  'active': '#0C1844',
		},
	},
  },
  plugins: [],
}