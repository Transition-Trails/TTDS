import { CSSProperties } from 'react';

export interface KitMetaProps {
  /** Label/value pairs as `['Time', '45 min']` tuples, `{ label, value }` objects, or a pipe string `"Time::45 min | Level::Beginner"`. */
  items: string | ([string, string] | { label: string; value: string })[];
  style?: CSSProperties;
}

/**
 * Rule-bounded metadata bar: time to complete, level, prerequisites.
 * @startingPoint section="Trail Kit" subtitle="Time · level · prerequisites" viewport="700x120"
 */
export function KitMeta(props: KitMetaProps): JSX.Element;
