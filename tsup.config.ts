import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true, // Genera dist/index.js (vacío, solo tipos) + dist/index.d.ts
  clean: true,
  external: ['astro'],
});
