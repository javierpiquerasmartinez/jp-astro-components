// Barrel de tipos puro — usado por tsup para generar dist/index.d.ts
// No importa .astro files, solo .types.ts (TypeScript puro)
export type { NavbarProps, NavItem } from './components/navigation/Navbar.types';
export type { PageTitleProps } from './components/typography/PageTitle.types';
export type { BaseLayoutProps } from './components/layout/BaseLayout.types';
export type { ButtonProps } from './components/ui/Button.types';
export type { CodeBlockProps } from './components/ui/CodeBlock.types';
export type { DemoBlockProps } from './components/ui/DemoBlock.types';
export type { ComponentCardProps } from './components/ui/ComponentCard.types';
