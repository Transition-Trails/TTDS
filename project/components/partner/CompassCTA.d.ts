import { CSSProperties } from 'react';

export interface CompassCTAProps {
  /** Panel headline. */
  headline?: string;
  /** Supporting copy — what happens when they get in touch. */
  body?: string;
  /** Destination, encoded into the QR. Defaults to the Digital Compass page. */
  url?: string;
  /** Amber button label — the one Amber element allowed in partner material. */
  cta?: string;
  /** Caption under the QR code. */
  aside?: string;
  style?: CSSProperties;
}

/**
 * Closing CTA panel for nonprofit material; always routes to the Digital Compass page.
 * @startingPoint section="Partner" subtitle="Teal panel, amber CTA, Compass QR" viewport="700x260"
 */
export function CompassCTA(props: CompassCTAProps): JSX.Element;
