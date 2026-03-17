/**
 * Genera dist/index.js y dist/index.d.ts con re-exports de los componentes .astro.
 * tsup no puede procesar .astro files, así que este script construye el barrel
 * manualmente con rutas relativas correctas.
 *
 * dist/index.js importa de ../src/components/... porque tanto dist/ como src/
 * van incluidos en el paquete npm. Astro (en el proyecto consumer) procesa
 * los .astro files automáticamente a través de su plugin de Vite.
 */
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('dist', { recursive: true });

// JS barrel — apunta a los .astro files via ruta relativa
writeFileSync(
  'dist/index.js',
  `// Auto-generated — do not edit. Run "npm run build:lib" to regenerate.
export { default as Navbar } from '../src/components/navigation/Navbar.astro';
`
);

// DTS barrel — re-exporta los tipos generados por tsup en dist/types.d.ts
writeFileSync(
  'dist/index.d.ts',
  `// Auto-generated — do not edit. Run "npm run build:lib" to regenerate.
export type { NavbarProps, NavItem } from './types.js';
`
);

console.log('✓ dist/index.js + dist/index.d.ts generated');
