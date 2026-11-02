import { CSSProperties } from 'react';

export interface StepperProps {
  /** Step labels (strings) or { label } objects, in order. */
  steps: (string | { label: string })[];
  /** 0-based index of the current step (marked in Sun Amber). */
  current?: number;
  style?: CSSProperties;
}

/**
 * Horizontal progress stepper for a learner's journey along a trail.
 * @startingPoint section="Status" subtitle="Trail progress — amber = current step" viewport="700x140"
 */
export function Stepper(props: StepperProps): JSX.Element;
