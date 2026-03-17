import type { HTMLAttributes } from 'astro/types';

export interface HeadingProps extends HTMLAttributes<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
