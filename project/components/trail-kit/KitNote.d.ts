import { ReactNode, CSSProperties } from 'react';

export interface KitNoteProps {
  /** Note kind — sets label, glyph, and color. */
  kind?: 'tip' | 'watchout' | 'practice' | 'remember';
  /** Override the default label text. */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Side-rail callout that elevates instructions into guidance.
 * @startingPoint section="Trail Kit" subtitle="Pro tip · watch out · best practice" viewport="700x220"
 */
export function KitNote(props: KitNoteProps): JSX.Element;
