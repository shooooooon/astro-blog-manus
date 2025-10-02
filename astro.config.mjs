// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || 'https://shooon.com',
	integrations: [sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true
		}
	}
});

