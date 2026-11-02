import { CSSProperties } from 'react';

export interface NoteLinesProps {
  /** Small tracked-out label above the ruled area, e.g. "Your notes". */
  label?: string;
  /** Number of writing lines (or grid rows). Default 6. */
  lines?: number;
  /** Render a dot grid instead of rules — for sketching data models / diagrams. */
  grid?: boolean;
  style?: CSSProperties;
}

/**
 * Ruled or dot-grid writing area — the notebook surface learners write on.
 * @startingPoint section="Trail Kit" subtitle="Ruled notes & dot-grid sketch area" viewport="700x220"
 */
export function NoteLines(props: NoteLinesProps): JSX.Element;
