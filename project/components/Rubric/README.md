# Rubric

Three-level assessment rubric for a program module.

**Rubric** — three-level assessment. A learner is at a level, not simply "done".
```jsx
<Rubric criteria={[
  ['Scoping', 'Enables org-wide', 'Defines a pilot group', 'Documents rationale and sign-off'],
  ['Validation', 'Checks in-scope only', 'Checks both directions', 'Produces a reusable log'],
]} />
```

## Where it is used

**Program curriculum components** — for official Foundations Trail / Guided Trail / Trail of Mastery material (`templates/program-module/`). Wrap pages in `class="program-trail is-guided"` (or `is-foundations` / `is-mastery`), which sets the cool document surface and the stage color.

This is the **second design branch**, deliberately distinct from Trail Kits: no Clay, no Sun Amber, no QR-to-buy, no redemption code. Program material reads as a credential, not a purchase.

## Props

```ts
export interface RubricProps {
  /** Criteria as `[name, emerging, proficient, exemplary]` tuples, `{ name, cells }`, or a pipe string `"Scoping::a::b::c | Validation::a::b::c"`. */
  criteria: string | (string[] | { name: string; cells: string[] })[];
  /** Level column headers (array or comma string). Default Emerging · Proficient · Exemplary. */
  levels?: string | string[];
  style?: CSSProperties;
}
```
