import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        // Resuelve 'jp-astro-components' al src local durante desarrollo
        'jp-astro-components': path.resolve(__dirname, '../src/index.ts'),
      },
    },
  },
});
