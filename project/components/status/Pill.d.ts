import { ReactNode, CSSProperties } from 'react';

export interface PillProps {
  /** Color tone. */
  tone?: 'green' | 'teal' | 'amber' | 'gray';
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Small rounded status / category label.
 * @startingPoint section="Status" subtitle="Trail type & status labels" viewport="700x120"
 */
export function Pill(props: PillProps): JSX.Element;
