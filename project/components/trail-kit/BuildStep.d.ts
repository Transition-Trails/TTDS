import { ReactNode, CSSProperties } from 'react';

export interface BuildStepProps {
  /** Step number shown in the teal numeral badge. */
  n: number | string;
  /** Step heading. */
  title?: string;
  /** Self-check line — what the learner should see if the step worked. */
  verify?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}

/**
 * Numbered build step with a "you should see" self-check line.
 * @startingPoint section="Trail Kit" subtitle="Numbered step with verification" viewport="700x200"
 */
export function BuildStep(props: BuildStepProps): JSX.Element;
