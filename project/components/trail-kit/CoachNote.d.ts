import { ReactNode, CSSProperties } from 'react';

export interface CoachNoteProps {
  /** Label above the note. Default "From your coach". */
  title?: string;
  children?: ReactNode;
  /** Optional handwritten-style closing line (Caveat) — an encouragement, not information. */
  aside?: ReactNode;
  /** Rail-safe layout: drops the 30px avatar for a small dot beside the label and tightens
   *  padding, returning ~140px of text column. Use inside the 2.05in marginalia rail. */
  compact?: boolean | string;
  style?: CSSProperties;
}

/**
 * The Trail Kit speaking as the reader's coach — direct address at the points people stall.
 * @startingPoint section="Trail Kit" subtitle="The kit acting as the reader's coach" viewport="700x200"
 */
export function CoachNote(props: CoachNoteProps): JSX.Element;
