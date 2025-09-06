// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || 'http://localhost:4322', // 環境変数から取得
	integrations: [sitemap()], // MDXは削除（microCMSで管理）
});
