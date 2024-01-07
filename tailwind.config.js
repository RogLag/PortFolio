// @ts-check
import { join } from 'path';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {
      screens: {
        '940': '940px',
        '1220': '1220px',
        '3xl': '1738px',
        '1780': '1780px',
      },
      width: {
        '22.75': '5.6875rem',
        '37': '9.25rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '90': '22.5rem',
        '96': '24rem',
        '120': '30rem',
        '200': '50rem',
        '400': '100rem',
      },
      height: {
        '37': '9.25rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '47.5': '11.875rem',
        '54': '13.5rem',
        '67.5': '16.875rem',
        '90': '22.5rem',
        '120': '30rem',
        '125': '31.25rem',
        '140': '35rem',
        '150': '37.5rem',
        '175': '43.75rem',
        '200': '50rem',
        '400': '100rem',
      },
      fontFamily: {
        'sans': ['Archivo', 'sans-serif'],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '50': '12.5rem',
        '90': '22.5rem',
        '100': '25rem',
        '120': '30rem',
        '150': '37.5rem',
      },
      gap : {
        '90': '22.5rem',
        '100': '25rem',
      },
    },
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton
	]
}