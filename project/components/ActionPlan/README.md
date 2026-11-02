# ActionPlan

Ruled action-plan table that closes a Trail Kit in commitment, not just reading.

**ActionPlan** — the closing commitment table.
```jsx
<ActionPlan prompts={['Enable in sandbox','Brief the sales team']} rows={5} />
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
export interface ActionPlanProps {
  /** Number of blank rows. Default 5. */
  rows?: number | string;
  /** Optional pre-filled prompts for the first column (array or comma string). */
  prompts?: string | string[];
  /** Override column headers (array or comma string). Default: Action I will take · Who I need · By when. */
  columns?: string | string[];
  style?: CSSProperties;
}
```
