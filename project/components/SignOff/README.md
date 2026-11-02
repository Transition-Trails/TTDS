# SignOff

Mentor sign-off and evidence checklist — the credential artifact of a program module.

**SignOff** — the evidence checklist plus mentor signature lines. This is the piece Trail Kits deliberately lack.
```jsx
<SignOff evidence={[
  'Completed verification log with dates',
  'Scope sheet approved by the partner',
]} />
```

## Where it is used

**Program curriculum components** — for official Foundations Trail / Guided Trail / Trail of Mastery material (`templates/program-module/`). Wrap pages in `class="program-trail is-guided"` (or `is-foundations` / `is-mastery`), which sets the cool document surface and the stage color.

This is the **second design branch**, deliberately distinct from Trail Kits: no Clay, no Sun Amber, no QR-to-buy, no redemption code. Program material reads as a credential, not a purchase.

## Props

```ts
export interface SignOffProps {
  /** Checklist of artifacts the learner must submit as evidence (array or pipe-separated string). */
  evidence?: string | string[];
  /** Footnote under the signature lines. Pass "" to hide. */
  note?: string;
  style?: CSSProperties;
}
```
