import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				'primary-shade-1': '#100c27',
				'primary-shade-3': '#4839a3',
				primary: '#6c5ae0',
				highlight: '#f2bf4e',
				'highlight-shade-3': '#f5ce7a',
				'gray-100': '#212429',
				'gray-80': '#636e7c',
				'gray-70': '#7e8a98',
				'gray-60': '#97a1ac',
				'gray-30': '#cfd3d8',
				'gray-10': '#f1f3f5',
			},
		},
		fontFamily: {
			body: ['Nunito Sans', 'sans-serif'],
			heading: ['Darker Grotesque', 'sans-serif'],
		},
		fontSize: {
			'heading-lg': ['3.5rem', '100%'],
			'heading-md': ['2.5rem', '100%'],
			'heading-sm': ['2rem', '110%'],
			'heading-xs': ['1.5rem', '110%'],
			'subtitle-sm': ['1.25rem', '140%'],
			'subtitle-xs': ['0.875rem', '120%'],
			'body-lg': ['1.25rem', '150%'],
			'body-md': ['1rem', '150%'],
			'body-sm': ['0.875rem', '150%'],
		},
	},
	plugins: [],
};
export default config;
