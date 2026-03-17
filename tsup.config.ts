import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/types.ts'],
  format: ['esm'],
  dts: { only: true }, // Solo genera dist/index.d.ts (el JS lo genera scripts/build-barrel.mjs)
  clean: true,
  external: ['astro'],
});
