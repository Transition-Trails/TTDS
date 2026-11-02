export interface TrailIconProps {
  /** Lucide icon name, kebab-case or PascalCase (e.g. "list-checks" or "ListChecks"). */
  name: string;
  /** Rendered box size in px, or any CSS length. Default 14. */
  size?: number | string;
  /** Stroke weight. Default 1.9 — heavier than Lucide's default so it holds up in print. */
  strokeWidth?: number;
  /** Stroke color. Defaults to currentColor so the icon inherits its label's ink. */
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Inline Lucide icon from the pinned CDN build, sized and weighted for print.
 * Pair with a text label — never let an icon carry meaning on its own.
 */
export declare function TrailIcon(props: TrailIconProps): JSX.Element;
