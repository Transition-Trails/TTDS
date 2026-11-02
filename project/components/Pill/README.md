# Pill

Small rounded status / category label.

**Pill** — small rounded status or category label (trail types, statuses). Tones: `green`, `teal`, `amber`, `gray`.

```jsx
<Pill tone="green">Guided Trail</Pill>
<Pill tone="teal">Foundations Trail</Pill>
<Pill tone="gray">Coming Soon</Pill>
```

## Props

```ts
export interface PillProps {
  /** Color tone. */
  tone?: 'green' | 'teal' | 'amber' | 'gray';
  children?: ReactNode;
  style?: CSSProperties;
}
```
