import rss from '@astrojs/rss';
import { CollectionEntry, getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

interface SiteContext {
  site: string;
}

const parser = new MarkdownIt();

function getDateFromPost(post: CollectionEntry<"blog">): Date {
  return new Date(`${post.data.year}-${post.data.month}-${post.data.day}`);
}

export async function get(context: SiteContext) {
  const posts = await getCollection('blog');
  // Sort the posts by date in descending order
  const sortedPosts = posts.sort((a, b) => {
    return getDateFromPost(b).getTime() - getDateFromPost(a).getTime();
  });
  return rss({
    title: 'Unitary Foundation blog',
    description: 'Unitary Foundation blog',
    site: context.site,
    items: sortedPosts
      .map((post) => ({
        title: post.data.title,
        link: `/posts/${post.slug}/`,
        pubDate: getDateFromPost(post),
        content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
