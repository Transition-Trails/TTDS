import { ReactNode, CSSProperties } from 'react';

export interface AlertProps {
  /** Semantic tone; sets background, border, and leading glyph. */
  tone?: 'success' | 'info' | 'warning' | 'neutral';
  /** Bold lead-in (rendered in Poppins). */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Inline callout that always pairs an icon with the message.
 * @startingPoint section="Status" subtitle="Success / info / warning callouts" viewport="700x200"
 */
export function Alert(props: AlertProps): JSX.Element;
