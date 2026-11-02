# TrailIcon

Inline Lucide icon from the pinned CDN build, sized and weighted for print. Pair with a text label — never let an icon carry meaning on its own.

Inline Lucide icon (pinned CDN build) for breaking up dense print copy — always beside a text label, never alone.

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
  <TrailIcon name="list-checks" size={13} color="var(--tt-deep-teal)" />
  Pre-flight checklist
</div>
```

Notes
- `name` takes kebab-case or PascalCase. Unknown names render an empty box of the right size rather than throwing, so a typo never breaks a page.
- Defaults to `currentColor` — put the color on the label and the icon follows.
- `strokeWidth` defaults to 1.9 (Lucide ships 2 for screen); at 13–14px in print, thinner strokes disappear.
- Loads Lucide once per page and re-renders waiting icons when it arrives. Safe to use many times.
- Kit conventions: `lightbulb` tip · `triangle-alert` watch out · `award` best practice · `compass` coach note · `list-checks` checklist · `key-round` access · `circle-check-big` proof · `circle-slash` what it does not do · `rotate-ccw` rollback · `mail` announcement · `play` video · `graduation-cap` certification.

## Where it is used

**Trail Kit print components** — for the notebook-style PDF kits (`templates/trail-kit/`). All of these live inside a `class="trail-kit"` scope, which re-points the semantic tokens to paper surfaces and the Clay accent. They are print-first: no shadows, no hover states, 12pt-floor type.

Trail Kits are **self-paced and externally sold** (our site and Etsy). The buyer has no mentor and no cohort — **the kit itself is their coach**, so it may speak to them directly through `CoachNote`. What it must never do is reference a *human* mentor or coach they do not have, or imply a Salesforce certification is required. Human-mentor language belongs to the program branch only.

**Two editions**, set with a modifier class on the same `.trail-kit` scope:
- `.trail-kit.is-learner` — an individual upskilling, or someone at a company who needs guidance. Answers "why this makes me employable"; closes on the programs placemat + next-kit code.
- `.trail-kit.is-nonprofit` — a nonprofit enabling the feature themselves. Answers "why our organization needs this and what it costs us not to"; closes on the **Digital Compass** page.

Both editions share the paper, the Clay accent, the tabs, and the 5-beat spine. The edition sets `--tt-kit-why` / `--tt-kit-why-bg` / `--tt-kit-why-rule`, used on the "why this matters" panels: Clay for a learner's career case, Deep Teal for an organizational one.

## Props

```ts
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
```
