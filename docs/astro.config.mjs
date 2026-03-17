import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // Resuelve sub-paths de 'jp-astro-components' al src local durante desarrollo
        'jp-astro-components/Heading': path.resolve(__dirname, '../src/components/typography/Heading.astro'),
        'jp-astro-components/Section': path.resolve(__dirname, '../src/components/layout/Section.astro'),
        'jp-astro-components/Article': path.resolve(__dirname, '../src/components/content/Article.astro'),
      },
    },
  },
});
