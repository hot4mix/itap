const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	theme: {
		extend: {
			colors: {
				brand: {
					default: '#00bce4'
				},
			},
			fontFamily: {
				display: ['Tajawal', 'sans-serif'],
			},
			boxShadow: {
				full: '0 5px 18px 0 rgba(0,0,0,.35)',
				...defaultTheme.boxShadow,
			}
		},
	},
	variants: {},
	plugins: [],
};
