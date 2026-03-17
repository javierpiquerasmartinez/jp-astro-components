/**
 * Genera dist/index.js y dist/index.d.ts con re-exports de los componentes .astro.
 * tsup no puede procesar .astro files, así que este script construye el barrel
 * manualmente con rutas relativas correctas.
 */
import { writeFileSync, mkdirSync } from 'fs';

mkdirSync('dist', { recursive: true });

writeFileSync(
  'dist/index.js',
  `// Auto-generated — do not edit. Run "npm run build:lib" to regenerate.
export { default as Navbar } from '../src/components/navigation/Navbar.astro';
export { default as PageTitle } from '../src/components/typography/PageTitle.astro';
export { default as BaseLayout } from '../src/components/layout/BaseLayout.astro';
export { default as Button } from '../src/components/ui/Button.astro';
export { default as CodeBlock } from '../src/components/ui/CodeBlock.astro';
export { default as DemoBlock } from '../src/components/ui/DemoBlock.astro';
export { default as ComponentCard } from '../src/components/ui/ComponentCard.astro';
export { default as PropsTable } from '../src/components/ui/PropsTable.astro';
export { default as Sidebar } from '../src/components/ui/Sidebar.astro';
`
);

writeFileSync(
  'dist/index.d.ts',
  `// Auto-generated — do not edit. Run "npm run build:lib" to regenerate.
export type { NavbarProps, NavItem, PageTitleProps, BaseLayoutProps, ButtonProps, CodeBlockProps, DemoBlockProps, ComponentCardProps, PropsTableProps, PropRow } from './types.js';
`
);

console.log('✓ dist/index.js + dist/index.d.ts generated');
