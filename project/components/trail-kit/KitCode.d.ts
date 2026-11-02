import { CSSProperties } from 'react';

export interface KitCodeProps {
  /** The redemption / discount code, shown monospaced. */
  code: string;
  /** Small tracked-out headline above the code. Default "Your next trail". */
  headline?: string;
  /** What the code unlocks, in brand voice. */
  body?: string;
  /** Amber CTA label — the one amber element permitted in a Trail Kit. */
  cta?: string;
  /** Plain-text URL printed under the CTA. */
  url?: string;
  style?: CSSProperties;
}

/**
 * Redemption-code ticket that closes a kit and invites the next step.
 * @startingPoint section="Trail Kit" subtitle="Next-kit code & conversion CTA" viewport="700x280"
 */
export function KitCode(props: KitCodeProps): JSX.Element;
