# TabStrip

Printed vertical tab strip down the page edge — makes the PDF feel like a tabbed notebook.

**TabStrip** — the printed vertical tab strip down the page edge; also anchor navigation inside the PDF.
```jsx
<TabStrip sections={['Orient','Prepare','Build','Verify','Next Trail']} active={2} />
```

## Where it is used

**Trail Kit print components** — for the notebook-style PDF kits (`templates/trail-kit/`). All of these live inside a `class="trail-kit"` scope, which re-points the semantic tokens to paper surfaces and the Clay accent. They are print-first: no shadows, no hover states, 12pt-floor type.

Trail Kits are **self-paced and externally sold** (our site and Etsy). The buyer has no mentor and no cohort — **the kit itself is their coach**, so it may speak to them directly through `CoachNote`. What it must never do is reference a *human* mentor or coach they do not have, or imply a Salesforce certification is required. Human-mentor language belongs to the program branch only.

**Two editions**, set with a modifier class on the same `.trail-kit` scope:
- `.trail-kit.is-learner` — an individual upskilling, or someone at a company who needs guidance. Answers "why this makes me employable"; closes on the programs placemat + next-kit code.
- `.trail-kit.is-nonprofit` — a nonprofit enabling the feature themselves. Answers "why our organization needs this and what it costs us not to"; closes on the **Digital Compass** page.

Both editions share the paper, the Clay accent, the tabs, and the 5-beat spine. The edition sets `--tt-kit-why` / `--tt-kit-why-bg` / `--tt-kit-why-rule`, used on the "why this matters" panels: Clay for a learner's career case, Deep Teal for an organizational one.

## Props

```ts
export interface TabStripProps {
  /** Section labels in order — an array, `{ label, href }` objects, or a plain comma-separated string. */
  sections: string | (string | { label: string; href?: string })[];
  /** 0-based index of the section this page belongs to (filled tab). */
  active?: number | string;
  style?: CSSProperties;
}
```
