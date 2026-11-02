# StatBlock

Large scannable statistic for nonprofit-facing material.

**StatBlock** — the number carries the argument. Always attach `source` for figures that aren't ours.
```jsx
<StatBlock value="42" label="nonprofits have hosted a supervised project with us" />
<StatBlock value="68%" label="of small nonprofits report no in-house Salesforce capacity" source="Nonprofit Tech Report, 2025" />
```

## Where it is used

**Partner (nonprofit) components** — for nonprofit-facing business-case material (`templates/partner-brief/`). Wrap pages in `class="partner-trail"`, which sets the sky-tinted surfaces and Deep Teal lead.

This is the **third design branch**. Its reader is an executive director or ops lead weighing risk against outcome — not learning, not being assessed. Rules: **no Clay** (retail-only), Deep Teal leads, and **exactly one Sun Amber CTA per document, always pointing to the Digital Compass page**. Lead with the constraint they already feel; the offer comes second.

## Props

```ts
export interface StatBlockProps {
  /** The figure itself, e.g. "42" or "91%". */
  value: string;
  /** What the figure means, in one line. */
  label?: string;
  /** Attribution. Required in practice for any figure that is not our own. */
  source?: string;
  tone?: 'teal' | 'green';
  style?: CSSProperties;
}
```
