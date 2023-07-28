module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./slices/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '5%',
				sm: '32px'
			}
		},
		extend: {
			colors: {
				lightgreen: '#B4D42A',
				darkgreen: '#60701B',
				dark: {
					DEFAULT: '#0D0D0D'
				}
			},
			boxShadow: {
				'glow-lightgreen': '0 0 20px #B4D42A'
			},
			fontFamily: {
				main: ['Poppins, sans-serif'],
				montserrat: 'Montserrat, sans-serif'
			},
			screens: {
				'-2xl': { raw: '(max-width: 1535px)' },
				'-xl': { raw: '(max-width: 1279px)' },
				'-lg': { raw: '(max-width: 1023px)' },
				'-md': { raw: '(max-width: 767px)' },
				'-sm': { raw: '(max-width: 639px)' }
			}
		}
	},
	plugins: []
};
