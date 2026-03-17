import type { HTMLAttributes } from 'astro/types';

export interface SectionProps extends HTMLAttributes<'section'> {
  /** Optional label for aria-label */
  label?: string;
}
