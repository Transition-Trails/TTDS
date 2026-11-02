# CompassCTA

Closing CTA panel for nonprofit material; always routes to the Digital Compass page.

**CompassCTA** — the closing panel. Defaults to the Digital Compass URL and renders a QR (needs `window.qrcode`).
```jsx
<CompassCTA body="Tell us what is stuck. We will tell you honestly whether a supervised project fits." />
```

## Where it is used

**Partner (nonprofit) components** — for nonprofit-facing business-case material (`templates/partner-brief/`). Wrap pages in `class="partner-trail"`, which sets the sky-tinted surfaces and Deep Teal lead.

This is the **third design branch**. Its reader is an executive director or ops lead weighing risk against outcome — not learning, not being assessed. Rules: **no Clay** (retail-only), Deep Teal leads, and **exactly one Sun Amber CTA per document, always pointing to the Digital Compass page**. Lead with the constraint they already feel; the offer comes second.

## Props

```ts
export interface CompassCTAProps {
  /** Panel headline. */
  headline?: string;
  /** Supporting copy — what happens when they get in touch. */
  body?: string;
  /** Destination, encoded into the QR. Defaults to the Digital Compass page. */
  url?: string;
  /** Amber button label — the one Amber element allowed in partner material. */
  cta?: string;
  /** Caption under the QR code. */
  aside?: string;
  style?: CSSProperties;
}
```
