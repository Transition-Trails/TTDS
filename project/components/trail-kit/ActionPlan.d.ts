import { CSSProperties } from 'react';

export interface ActionPlanProps {
  /** Number of blank rows. Default 5. */
  rows?: number | string;
  /** Optional pre-filled prompts for the first column (array or comma string). */
  prompts?: string | string[];
  /** Override column headers (array or comma string). Default: Action I will take · Who I need · By when. */
  columns?: string | string[];
  style?: CSSProperties;
}

/**
 * Ruled action-plan table that closes a Trail Kit in commitment, not just reading.
 * @startingPoint section="Trail Kit" subtitle="Action · owner · date, ruled to write on" viewport="700x260"
 */
export function ActionPlan(props: ActionPlanProps): JSX.Element;
