# ResourceLink

External resource row with QR code and explicit affiliate disclosure.

**ResourceLink** — external resource row with QR, provider, and **explicit affiliate disclosure**. Set `affiliate` on any commissioned link (K2 University study guides, Jotform, etc.) and pair the list with one disclosure block on the page. `free` marks no-cost resources.
```jsx
<ResourceLink name="Salesforce Administrator study guides" provider="K2 University"
  kind="Guide" affiliate url="https://k2university.com/salesforce-admin"
  why="Where we send people who want the fundamentals underneath this kit." />
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
export interface ResourceLinkProps {
  /** Resource name, e.g. "Salesforce Admin Study Guide". */
  name: string;
  /** Who publishes it, e.g. "K2 University". */
  provider?: string;
  /** Destination URL, encoded into the QR code. */
  url: string;
  /** One line on why it is worth the learner's time. */
  why?: string;
  /** Type marker, e.g. Guide · Video · Tool · Community · Docs. Default "Guide". */
  kind?: string;
  /** True when the link earns Transition Trails a commission — renders a visible "Affiliate link" marker. */
  affiliate?: boolean;
  /** True for free resources — renders a "Free" marker. */
  free?: boolean;
  style?: CSSProperties;
}
```
