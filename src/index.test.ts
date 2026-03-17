import { describe, it, expect } from 'vitest';

// Los componentes se importan via sub-paths ('jp-astro-components/Heading', etc.)
// Este test verifica que el barrel de tipos se importa sin errores
describe('Library types barrel', () => {
  it('should import without throwing', async () => {
    await expect(import('./index')).resolves.not.toThrow();
  });
});
