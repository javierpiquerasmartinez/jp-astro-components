import type { HTMLAttributes } from 'astro/types';

export interface ArticleProps extends HTMLAttributes<'article'> {
  /** Optional label for aria-label */
  label?: string;
}
