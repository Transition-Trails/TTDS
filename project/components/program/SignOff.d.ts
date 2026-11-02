import { CSSProperties } from 'react';

export interface SignOffProps {
  /** Checklist of artifacts the learner must submit as evidence (array or pipe-separated string). */
  evidence?: string | string[];
  /** Footnote under the signature lines. Pass "" to hide. */
  note?: string;
  style?: CSSProperties;
}

/**
 * Mentor sign-off and evidence checklist — the credential artifact of a program module.
 * @startingPoint section="Program" subtitle="Evidence checklist & mentor signature" viewport="700x300"
 */
export function SignOff(props: SignOffProps): JSX.Element;
