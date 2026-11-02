**Pill** — small rounded status or category label (trail types, statuses). Tones: `green`, `teal`, `amber`, `gray`.

```jsx
<Pill tone="green">Guided Trail</Pill>
<Pill tone="teal">Foundations Trail</Pill>
<Pill tone="gray">Coming Soon</Pill>
```

**Alert** — inline callout; always pairs a glyph with the message (never color alone). Tones: `success` (✓), `info` (ⓘ), `warning` (⚠), `neutral`.

```jsx
<Alert tone="success" title="Success">Your application has been received. Welcome to the trail!</Alert>
<Alert tone="warning" title="Heads up">Enrollment closes in 3 days.</Alert>
```

**Stepper** — horizontal progress along a trail; completed = Trail Green (✓), current = Sun Amber, upcoming = outline.

```jsx
<Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
```
