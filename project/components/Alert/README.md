# Alert

Inline callout that always pairs an icon with the message.

**Alert** — inline callout; always pairs a glyph with the message (never color alone). Tones: `success` (✓), `info` (ⓘ), `warning` (⚠), `neutral`.

```jsx
<Alert tone="success" title="Success">Your application has been received. Welcome to the trail!</Alert>
<Alert tone="warning" title="Heads up">Enrollment closes in 3 days.</Alert>
```

## Props

```ts
export interface AlertProps {
  /** Semantic tone; sets background, border, and leading glyph. */
  tone?: 'success' | 'info' | 'warning' | 'neutral';
  /** Bold lead-in (rendered in Poppins). */
  title?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
```
