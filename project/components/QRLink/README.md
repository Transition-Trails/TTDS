# QRLink

Scannable QR code linking a printed Trail Kit page to video or web resources.

Scannable QR code paired with a label and a short description — the standard way a printed Trail Kit reaches a video, worksheet, or external resource.

```jsx
<QRLink
  url="https://transitiontrails.org/kits/07/build"
  label="Build With Me"
  caption="16 min walkthrough"
  tone="teal"
  size={88}
/>
```

Notes
- **`caption` describes what is behind the code — never repeat the URL.** The component already prints the href beneath the label, so a caption that restates it shows the reader the same string twice. Use "16 min walkthrough", "Free, no credit card", "Print more, free." Not "example.com/thing".
- The printed line under the label is the **host only** (`transitiontrails.org`), not the full path — it is set `white-space: nowrap` with an ellipsis fallback so it can never break mid-word or strand a character. The QR carries the full URL; the printed host just tells the reader where the code goes. Measured: a full path needs ~132px against the ~115px text column in a 2in rail, so printing one always wrapped.
- `tone="teal"` for instructional links, default for neutral ones. `size` is the QR box in px — 76–92 covers most page positions.
- For anything whose figures change (exam fees, storage limits, pricing), point at the code rather than printing the number, and say so in the caption: "Scan for current exam format and fee."
- Renders a dashed placeholder frame if the QR library has not loaded, so print preview never shows a broken image.

## Where it is used

**Trail Kit print components** — for the notebook-style PDF kits (`templates/trail-kit/`). All of these live inside a `class="trail-kit"` scope, which re-points the semantic tokens to paper surfaces and the Clay accent. They are print-first: no shadows, no hover states, 12pt-floor type.

Trail Kits are **self-paced and externally sold** (our site and Etsy). The buyer has no mentor and no cohort — **the kit itself is their coach**, so it may speak to them directly through `CoachNote`. What it must never do is reference a *human* mentor or coach they do not have, or imply a Salesforce certification is required. Human-mentor language belongs to the program branch only.

**Two editions**, set with a modifier class on the same `.trail-kit` scope:
- `.trail-kit.is-learner` — an individual upskilling, or someone at a company who needs guidance. Answers "why this makes me employable"; closes on the programs placemat + next-kit code.
- `.trail-kit.is-nonprofit` — a nonprofit enabling the feature themselves. Answers "why our organization needs this and what it costs us not to"; closes on the **Digital Compass** page.

Both editions share the paper, the Clay accent, the tabs, and the 5-beat spine. The edition sets `--tt-kit-why` / `--tt-kit-why-bg` / `--tt-kit-why-rule`, used on the "why this matters" panels: Clay for a learner's career case, Deep Teal for an organizational one.

## Props

```ts
export interface QRLinkProps {
  /** Destination URL encoded into the QR code (YouTube video, template, resource). */
  url: string;
  /** Bold lead label, e.g. "Watch: Enable the feature". */
  label?: string;
  /** Supporting line under the label. */
  caption?: string;
  /** QR square size in px. Default 96. Keep ≥ 84px for reliable print scanning. */
  size?: number;
  /** Label ink color. */
  tone?: 'clay' | 'teal';
  style?: CSSProperties;
}
```
