import { CSSProperties } from 'react';

export interface StatBlockProps {
  /** The figure itself, e.g. "42" or "91%". */
  value: string;
  /** What the figure means, in one line. */
  label?: string;
  /** Attribution. Required in practice for any figure that is not our own. */
  source?: string;
  tone?: 'teal' | 'green';
  style?: CSSProperties;
}

/**
 * Large scannable statistic for nonprofit-facing material.
 * @startingPoint section="Partner" subtitle="Sourced statistic for the business case" viewport="700x160"
 */
export function StatBlock(props: StatBlockProps): JSX.Element;
