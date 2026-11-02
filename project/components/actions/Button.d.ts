import { ReactNode, CSSProperties } from 'react';

export interface ButtonProps {
  /** Visual role. `amber` is the single "Next Step" CTA — use at most one per screen. */
  variant?: 'primary' | 'secondary' | 'amber' | 'ghost';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Primary action button for Transition Trails.
 * @startingPoint section="Actions" subtitle="Trail Green / teal / amber CTAs" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
