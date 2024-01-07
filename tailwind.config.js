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
      width: {
        '37': '9.25rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '90': '22.5rem',
        '120': '30rem',
        '200': '50rem',
        '400': '100rem',
      },
      height: {
        '37': '9.25rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '90': '22.5rem',
        '120': '30rem',
        '200': '50rem',
        '400': '100rem',
      },
      fontFamily: {
        'sans': ['Archivo', 'sans-serif'],
      },
      spacing: {
        '90': '22.5rem',
        '100': '25rem',
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