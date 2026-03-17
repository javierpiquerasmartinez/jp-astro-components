import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: { only: true }, // Solo genera .d.ts, no JS (los .astro se exponen como source)
  clean: true,
  external: ['astro'],
});
