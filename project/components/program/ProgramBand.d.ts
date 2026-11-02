import { CSSProperties } from 'react';

export interface ProgramBandProps {
  /** Which trail this module belongs to — sets the stage color and program label. */
  stage?: 'foundations' | 'guided' | 'mastery';
  /** Module number. */
  module?: number | string;
  /** Total modules, for the "Module 3 of 8" spine. */
  of?: number | string;
  /** Module title. */
  title?: string;
  /** Small tracked-out line above the title, e.g. "Unit 2 · Data Modeling". */
  eyebrow?: string;
  style?: CSSProperties;
}

/**
 * Identifying header band for official program curriculum pages.
 * @startingPoint section="Program" subtitle="Stage-colored module header" viewport="700x160"
 */
export function ProgramBand(props: ProgramBandProps): JSX.Element;
