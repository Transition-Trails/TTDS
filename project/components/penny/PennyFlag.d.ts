import React from 'react';

export interface PennyFlagProps {
  /** Severity. Default 'attention'. */
  level?: 'attention' | 'watch' | 'healthy';
  /** What the signal is, e.g. "Sprint 2B overdue — client waiting". */
  title?: string;
  /** One line of supporting context. */
  detail?: string;
  /** The human action, e.g. "View learner". Omit for read-only flags. */
  action?: string;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Signal raised for a human to act on" viewport="700x170"
 * A signal Penny surfaced on a coach or project surface. Penny raises the flag;
 * the human makes the call.
 */
export declare function PennyFlag(props: PennyFlagProps): JSX.Element;
