import { CSSProperties } from 'react';

export interface QRLinkProps {
  /** Destination URL encoded into the QR code (YouTube video, template, resource). */
  url: string;
  /** Bold lead label, e.g. "Watch: Enable the feature". */
  label?: string;
  /** Supporting line under the label. */
  caption?: string;
  /** QR square size in px. Default 96. Keep ≥ 84px for reliable print scanning. */
  size?: number;
  /** Label ink color. */
  tone?: 'clay' | 'teal';
  style?: CSSProperties;
}

/**
 * Scannable QR code linking a printed Trail Kit page to video or web resources.
 * @startingPoint section="Trail Kit" subtitle="Scannable link to video & resources" viewport="700x140"
 */
export function QRLink(props: QRLinkProps): JSX.Element;
