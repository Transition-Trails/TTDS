# Objectives

Competency-coded learning objectives — what makes a module assessable.

**Objectives** — competency-coded objectives; the codes map to the credential framework.
```jsx
<Objectives items={[
  ['EAC-1', 'Scope a capture configuration against a stated business need.'],
  ['EAC-2', 'Validate sync behavior and document the evidence.'],
]} />
```

## Where it is used

**Program curriculum components** — for official Foundations Trail / Guided Trail / Trail of Mastery material (`templates/program-module/`). Wrap pages in `class="program-trail is-guided"` (or `is-foundations` / `is-mastery`), which sets the cool document surface and the stage color.

This is the **second design branch**, deliberately distinct from Trail Kits: no Clay, no Sun Amber, no QR-to-buy, no redemption code. Program material reads as a credential, not a purchase.

## Props

```ts
export interface ObjectivesProps {
  /** Objectives as `['EAC-1', 'Scope a configuration']` tuples, `{ code, text }`, or a pipe string `"EAC-1::text | EAC-2::text"`. */
  items: string | ([string, string] | { code?: string; text: string })[];
  /** Override the block heading. */
  heading?: string;
  style?: CSSProperties;
}
```
