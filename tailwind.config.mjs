import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				background: '#ffffff',
				surface: '#f4f4f5',
				border: '#e4e4e7',
				primary: '#18181b',
				secondary: '#52525b',
				accent: '#2563eb',
			},
			backgroundImage: {
				'grid-pattern': "linear-gradient(to right, #e4e4e7 1px, transparent 1px), linear-gradient(to bottom, #e4e4e7 1px, transparent 1px)",
			}
		},
	},
	plugins: [],
}