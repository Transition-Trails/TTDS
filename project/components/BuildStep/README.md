# BuildStep

Numbered build step with a "you should see" self-check line.

**BuildStep** — numbered instruction with a self-check line.
```jsx
<BuildStep n={3} title="Turn on Activity Capture" verify="a green Active badge on the config row">
  From Setup, search Einstein Activity Capture and select Settings.
</BuildStep>
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
export interface BuildStepProps {
  /** Step number shown in the teal numeral badge. */
  n: number | string;
  /** Step heading. */
  title?: string;
  /** Self-check line — what the learner should see if the step worked. */
  verify?: ReactNode;
  children?: ReactNode;
  style?: CSSProperties;
}
```
