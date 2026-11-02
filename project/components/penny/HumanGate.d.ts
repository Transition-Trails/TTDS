import React from 'react';

export interface HumanGateProps {
  /** Header text. Default "Penny drafted this — needs your approval". */
  label?: string;
  /** Who the draft goes to once approved, e.g. "#project-dfw-rescue". */
  recipient?: string;
  /** The drafted content awaiting approval. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Draft awaiting human approval" viewport="700x230"
 * Wraps any Penny output bound for a client, a channel, or production.
 * Penny drafts; a human sends. Required by the trust architecture.
 */
export declare function HumanGate(props: HumanGateProps): JSX.Element;
