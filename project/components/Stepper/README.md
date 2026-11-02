# Stepper

Horizontal progress stepper for a learner's journey along a trail.

**Stepper** — horizontal progress along a trail; completed = Trail Green (✓), current = Sun Amber, upcoming = outline.

```jsx
<Stepper steps={['Apply', 'Onboard', 'Project Work', 'Validation', 'Graduate']} current={2} />
```

## Props

```ts
export interface StepperProps {
  /** Step labels (strings) or { label } objects, in order. */
  steps: (string | { label: string })[];
  /** 0-based index of the current step (marked in Sun Amber). */
  current?: number;
  style?: CSSProperties;
}
```
