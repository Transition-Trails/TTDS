export type PennyMode = 'coach' | 'coordinator' | 'quest' | 'liaison';

export interface PennyModeBadgeProps {
  /** Which mode Penny is operating in. Default 'coach'. */
  mode?: PennyMode;
  /** Append the one-word posture ("Socratic", "Action-oriented"). Default false. */
  showPosture?: boolean;
  style?: React.CSSProperties;
}

/**
 * Always-visible indicator of Penny's current mode. Penny's behavior differs
 * completely between modes, so never render a Penny surface without one.
 */
export declare function PennyModeBadge(props: PennyModeBadgeProps): JSX.Element;
