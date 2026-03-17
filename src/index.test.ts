import { describe, it, expect } from 'vitest';

// Verifica que el barrel de tipos (src/types.ts) se importa sin errores
// Los componentes .astro no se testean aquí (Vitest no los parsea)
describe('Library types barrel', () => {
  it('should import without throwing', async () => {
    await expect(import('./types')).resolves.toBeDefined();
  });
});
