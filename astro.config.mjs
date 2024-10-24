import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import dotHtmlRedirects from './src/integration/dot-html-redirects';
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkOembed from 'remark-oembed';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
  imageDirective,
  gistDirective,
  socialDirective,
} from './src/remark/directives';
import remarkOnlyStrong from './src/remark/only-strong';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  site: 'https://unitary.fund',
  redirects: {
    '/faq': '/faqs',
    '/faq.html': '/faqs',
    '/research': '/research/publications',
    '/research.html': '/research/publications',
    '/mitiq': '/research/mitiq',
    '/mitiq.html': '/research/mitiq',
    '/talks': '/community/events',
    '/talks.html': '/community/events',
    '/meetup': '/community/events',
    '/meetup.html': '/community/events',
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    react(),
    dotHtmlRedirects(),
  ],
  markdown: {
    remarkPlugins: [
      remarkOnlyStrong,
      remarkGfm,
      [
        remarkOembed,
        {
          syncWidget: true,
        },
      ],
      remarkDirective,
      remarkMath,
      imageDirective,
      gistDirective,
      socialDirective,
    ],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [svgr()],
  },
});
