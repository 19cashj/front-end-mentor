/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm':'0px'
			},
			boxShadow: {
				'inner-circle': 'inset 0px 0px 2px 1px hsl(26, 100%, 55%)',
				'inner-bar': 'inset 0 -5px 1px -1px hsl(26, 100%, 55%)'
			}
		},
		colors: {
			transparent: 'transparent',
      		current: 'currentColor',
			'white': 'hsl(0, 0%, 100%)',
			'black': 'hsl(0, 0%, 0%)',
			'orange': 'hsl(26, 100%, 55%)',
			'pale-orange': 'hsl(25, 100%, 94%)',
			'dark-blue': 'hsl(220, 13%, 13%)',
			'dark-gray-blue': 'hsl(219, 9%, 45%)',
			'gray-blue': 'hsl(220, 14%, 75%)',
			'light-gray-blue': 'hsl(223, 64%, 98%)'
		},
		fontFamily: {
			'sans': ['"Kumbh Sans"', 'sans-serif']
		},
	},
	plugins: [],
}
