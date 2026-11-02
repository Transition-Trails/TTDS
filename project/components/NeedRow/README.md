# NeedRow

Recognition-then-answer row for the nonprofit business case.

**NeedRow** — recognition first, answer second.
```jsx
<NeedRow n={1}
  need="Your CRM was set up by a volunteer who left, and nobody has touched it since."
  answer="A supervised learner documents what exists and rebuilds what broke, with our review on every change."
  outcome="You end up with documentation, not just a fix." />
```

## Where it is used

**Partner (nonprofit) components** — for nonprofit-facing business-case material (`templates/partner-brief/`). Wrap pages in `class="partner-trail"`, which sets the sky-tinted surfaces and Deep Teal lead.

This is the **third design branch**. Its reader is an executive director or ops lead weighing risk against outcome — not learning, not being assessed. Rules: **no Clay** (retail-only), Deep Teal leads, and **exactly one Sun Amber CTA per document, always pointing to the Digital Compass page**. Lead with the constraint they already feel; the offer comes second.

## Props

```ts
export interface NeedRowProps {
  /** The constraint the nonprofit already recognizes in itself. */
  need: ReactNode;
  /** What supervised project capacity does about it. */
  answer: ReactNode;
  /** Optional bolded outcome line under the answer. */
  outcome?: ReactNode;
  /** Row number. */
  n?: number | string;
  style?: CSSProperties;
}
```
