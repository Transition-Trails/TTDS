import { CSSProperties } from 'react';

export interface RubricProps {
  /** Criteria as `[name, emerging, proficient, exemplary]` tuples, `{ name, cells }`, or a pipe string `"Scoping::a::b::c | Validation::a::b::c"`. */
  criteria: string | (string[] | { name: string; cells: string[] })[];
  /** Level column headers (array or comma string). Default Emerging · Proficient · Exemplary. */
  levels?: string | string[];
  style?: CSSProperties;
}

/**
 * Three-level assessment rubric for a program module.
 * @startingPoint section="Program" subtitle="Emerging · Proficient · Exemplary" viewport="700x260"
 */
export function Rubric(props: RubricProps): JSX.Element;
