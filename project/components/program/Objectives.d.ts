import { CSSProperties } from 'react';

export interface ObjectivesProps {
  /** Objectives as `['EAC-1', 'Scope a configuration']` tuples, `{ code, text }`, or a pipe string `"EAC-1::text | EAC-2::text"`. */
  items: string | ([string, string] | { code?: string; text: string })[];
  /** Override the block heading. */
  heading?: string;
  style?: CSSProperties;
}

/**
 * Competency-coded learning objectives — what makes a module assessable.
 * @startingPoint section="Program" subtitle="Objectives with competency codes" viewport="700x220"
 */
export function Objectives(props: ObjectivesProps): JSX.Element;
