# CoachNote

The Trail Kit speaking as the reader's coach — direct address at the points people stall.

**CoachNote** — **the kit speaking as the reader's coach.** A Trail Kit is bought by someone with no mentor assigned, so the notebook plays that role: it anticipates the wobble and names it before the reader hits it. Two or three per kit, at the points where people actually stall. Never use in program curriculum — enrolled learners have a real human mentor.
```jsx
<CoachNote aside="you are the right person for this">
  If you are thinking "I am not technical enough for this" — these questions are about your
  organization, and nobody knows it better than you.
</CoachNote>
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
export interface CoachNoteProps {
  /** Label above the note. Default "From your coach". */
  title?: string;
  children?: ReactNode;
  /** Optional handwritten-style closing line (Caveat) — an encouragement, not information. */
  aside?: ReactNode;
  /** Rail-safe layout: drops the 30px avatar for a small dot beside the label and tightens
   *  padding, returning ~140px of text column. Use inside the 2.05in marginalia rail. */
  compact?: boolean | string;
  style?: CSSProperties;
}
```
