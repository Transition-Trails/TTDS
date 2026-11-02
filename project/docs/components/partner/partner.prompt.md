**Partner (nonprofit) components** — for nonprofit-facing business-case material (`templates/partner-brief/`). Wrap pages in `class="partner-trail"`, which sets the sky-tinted surfaces and Deep Teal lead.

This is the **third design branch**. Its reader is an executive director or ops lead weighing risk against outcome — not learning, not being assessed. Rules: **no Clay** (retail-only), Deep Teal leads, and **exactly one Sun Amber CTA per document, always pointing to the Digital Compass page**. Lead with the constraint they already feel; the offer comes second.

**StatBlock** — the number carries the argument. Always attach `source` for figures that aren't ours.
```jsx
<StatBlock value="42" label="nonprofits have hosted a supervised project with us" />
<StatBlock value="68%" label="of small nonprofits report no in-house Salesforce capacity" source="Nonprofit Tech Report, 2025" />
```

**NeedRow** — recognition first, answer second.
```jsx
<NeedRow n={1}
  need="Your CRM was set up by a volunteer who left, and nobody has touched it since."
  answer="A supervised learner documents what exists and rebuilds what broke, with our review on every change."
  outcome="You end up with documentation, not just a fix." />
```

**CompassCTA** — the closing panel. Defaults to the Digital Compass URL and renders a QR (needs `window.qrcode`).
```jsx
<CompassCTA body="Tell us what is stuck. We will tell you honestly whether a supervised project fits." />
```
