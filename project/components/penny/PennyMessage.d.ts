import React from 'react';

export interface PennyMessageProps {
  /** Who is speaking. Default 'penny'. */
  from?: 'penny' | 'learner';
  /** Penny's mode — sets the badge and the bubble's rule color. Ignored when from='learner'. */
  mode?: 'coach' | 'coordinator' | 'quest' | 'liaison';
  /** Override the displayed speaker name. Defaults to "Penny". */
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * @startingPoint section="Penny" subtitle="Conversation turn with mode badge" viewport="700x260"
 * One turn in a Penny conversation, on either side of the exchange.
 */
export declare function PennyMessage(props: PennyMessageProps): JSX.Element;
