// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://your-domain.pages.dev', // Cloudflare PagesのURLに変更
	integrations: [sitemap()], // MDXは削除（microCMSで管理）
});
