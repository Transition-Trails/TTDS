# ProgramBand

Identifying header band for official program curriculum pages.

**ProgramBand** — the identifying module header. Stage color says which trail at a glance.
```jsx
<ProgramBand stage="guided" module={3} of={8}
  eyebrow="Unit 2 · Activity & Data Integrity"
  title="Configuring and validating Einstein Activity Capture" />
```

## Where it is used

**Program curriculum components** — for official Foundations Trail / Guided Trail / Trail of Mastery material (`templates/program-module/`). Wrap pages in `class="program-trail is-guided"` (or `is-foundations` / `is-mastery`), which sets the cool document surface and the stage color.

This is the **second design branch**, deliberately distinct from Trail Kits: no Clay, no Sun Amber, no QR-to-buy, no redemption code. Program material reads as a credential, not a purchase.

## Props

```ts
export interface ProgramBandProps {
  /** Which trail this module belongs to — sets the stage color and program label. */
  stage?: 'foundations' | 'guided' | 'mastery';
  /** Module number. */
  module?: number | string;
  /** Total modules, for the "Module 3 of 8" spine. */
  of?: number | string;
  /** Module title. */
  title?: string;
  /** Small tracked-out line above the title, e.g. "Unit 2 · Data Modeling". */
  eyebrow?: string;
  style?: CSSProperties;
}
```
