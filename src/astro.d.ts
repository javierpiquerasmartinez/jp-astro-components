// Declara módulos .astro para que TypeScript los acepte
declare module '*.astro' {
  import type { HTMLAttributes } from 'astro/types';
  const component: (props: HTMLAttributes<'div'>) => unknown;
  export default component;
}
