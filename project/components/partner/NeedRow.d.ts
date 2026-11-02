import { ReactNode, CSSProperties } from 'react';

export interface NeedRowProps {
  /** The constraint the nonprofit already recognizes in itself. */
  need: ReactNode;
  /** What supervised project capacity does about it. */
  answer: ReactNode;
  /** Optional bolded outcome line under the answer. */
  outcome?: ReactNode;
  /** Row number. */
  n?: number | string;
  style?: CSSProperties;
}

/**
 * Recognition-then-answer row for the nonprofit business case.
 * @startingPoint section="Partner" subtitle="Their constraint, then what changes" viewport="700x180"
 */
export function NeedRow(props: NeedRowProps): JSX.Element;
