import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  /** Card title, rendered as Poppins H4. */
  title?: string;
  children?: ReactNode;
  /** Show a media header. Pass any node to overlay on the green-tint placeholder. */
  media?: ReactNode;
  /** Background image URL for the media header (photo / illustration). */
  mediaSrc?: string;
  /** Footer node — typically a link or Button. */
  footer?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}

/**
 * Content card with optional media header; lifts on hover.
 * @startingPoint section="Content" subtitle="Media header, title, body, footer" viewport="700x260"
 */
export function Card(props: CardProps): JSX.Element;
