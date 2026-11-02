import { CSSProperties } from 'react';

export interface ResourceLinkProps {
  /** Resource name, e.g. "Salesforce Admin Study Guide". */
  name: string;
  /** Who publishes it, e.g. "K2 University". */
  provider?: string;
  /** Destination URL, encoded into the QR code. */
  url: string;
  /** One line on why it is worth the learner's time. */
  why?: string;
  /** Type marker, e.g. Guide · Video · Tool · Community · Docs. Default "Guide". */
  kind?: string;
  /** True when the link earns Transition Trails a commission — renders a visible "Affiliate link" marker. */
  affiliate?: boolean;
  /** True for free resources — renders a "Free" marker. */
  free?: boolean;
  style?: CSSProperties;
}

/**
 * External resource row with QR code and explicit affiliate disclosure.
 * @startingPoint section="Trail Kit" subtitle="Resource & affiliate link with QR" viewport="700x220"
 */
export function ResourceLink(props: ResourceLinkProps): JSX.Element;
