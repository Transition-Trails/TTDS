**Program curriculum components** — for official Foundations Trail / Guided Trail / Trail of Mastery material (`templates/program-module/`). Wrap pages in `class="program-trail is-guided"` (or `is-foundations` / `is-mastery`), which sets the cool document surface and the stage color.

This is the **second design branch**, deliberately distinct from Trail Kits: no Clay, no Sun Amber, no QR-to-buy, no redemption code. Program material reads as a credential, not a purchase.

**ProgramBand** — the identifying module header. Stage color says which trail at a glance.
```jsx
<ProgramBand stage="guided" module={3} of={8}
  eyebrow="Unit 2 · Activity & Data Integrity"
  title="Configuring and validating Einstein Activity Capture" />
```

**Objectives** — competency-coded objectives; the codes map to the credential framework.
```jsx
<Objectives items={[
  ['EAC-1', 'Scope a capture configuration against a stated business need.'],
  ['EAC-2', 'Validate sync behavior and document the evidence.'],
]} />
```

**Rubric** — three-level assessment. A learner is at a level, not simply "done".
```jsx
<Rubric criteria={[
  ['Scoping', 'Enables org-wide', 'Defines a pilot group', 'Documents rationale and sign-off'],
  ['Validation', 'Checks in-scope only', 'Checks both directions', 'Produces a reusable log'],
]} />
```

**SignOff** — the evidence checklist plus mentor signature lines. This is the piece Trail Kits deliberately lack.
```jsx
<SignOff evidence={[
  'Completed verification log with dates',
  'Scope sheet approved by the partner',
]} />
```
