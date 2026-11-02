import { CSSProperties } from 'react';

export interface TabStripProps {
  /** Section labels in order — an array, `{ label, href }` objects, or a plain comma-separated string. */
  sections: string | (string | { label: string; href?: string })[];
  /** 0-based index of the section this page belongs to (filled tab). */
  active?: number | string;
  style?: CSSProperties;
}

/**
 * Printed vertical tab strip down the page edge — makes the PDF feel like a tabbed notebook.
 * @startingPoint section="Trail Kit" subtitle="Notebook edge tabs, doubling as PDF nav" viewport="700x300"
 */
export function TabStrip(props: TabStripProps): JSX.Element;
