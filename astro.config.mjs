import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import dotHtmlRedirects from './src/integration/dot-html-redirects';
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkOembed from 'remark-oembed';
import {
  imageDirective,
  gistDirective,
  socialDirective,
} from './src/remark/directives';
import remarkOnlyStrong from './src/remark/only-strong';
import svgr from 'vite-plugin-svgr';

// https://astro.build/config
export default defineConfig({
  site: 'https://unitaryfund.tghp.co.uk',
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
      imageDirective,
      gistDirective,
      socialDirective,
    ],
  },
  vite: {
    plugins: [svgr()],
  },
});
