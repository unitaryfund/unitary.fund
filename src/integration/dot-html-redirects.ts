import type { AstroConfig, AstroIntegration, BuildConfig } from 'astro';
import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const createPlugin = (): AstroIntegration => {
  let _config: AstroConfig;

  return {
    name: 'astro-plugin-dot-html',

    hooks: {
      'astro:config:setup': async ({ config }) => {
        _config = config;
      },

      'astro:config:done': ({ config }) => {
        _config = config;
      },

      'astro:build:done': async ({ dir, routes, pages }) => {
        for (const page of pages) {
          // Ignore '' which is / aka the homepage and 404, no redirect needed here
          if (page.pathname && page.pathname !== '404/') {
            const htmlPath = `${path
              .join(fileURLToPath(_config.outDir), page.pathname)
              .replace(/\/$/, '')}.html`;

            const redirectHtml = `<html><head><meta http-equiv="refresh" content="0; url=/${page.pathname}"></head></html>`;

            await fs.writeFile(htmlPath, redirectHtml);
          }
        }
      },
    },
  };
};

export default createPlugin;
