import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { client, getBlogs } from '../lib/microcms';

export async function GET(context) {
  if (!client) {
    return new Response('RSS feed is not available', { status: 500 });
  }

  try {
    const response = await getBlogs();
    const posts = response.contents;

    return rss({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      site: context.site,
      items: posts.map((post) => ({
        title: post.title,
        pubDate: new Date(post.publishedAt),
        description: post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        link: `/blog/${post.id}/`,
      })),
    });
  } catch (error) {
    console.error('RSS feed generation failed:', error);
    return new Response('RSS feed is not available', { status: 500 });
  }
}
