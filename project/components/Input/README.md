# Input

Labeled text input with green focus ring and accessible error state.

**Input** — labeled text field for forms and sign-ups; green focus ring, warm-gray border, accessible error state (Amber-700 text + ⚠ glyph, never color alone).

```jsx
<Input label="Email address" type="email" placeholder="you@example.com"
       help="We'll only use this to send trail updates." />
<Input label="Full name" error="Please enter your name." />
```

Props: `label`, `help`, `error` (overrides help), `type`, `placeholder`, `value`/`onChange`, `disabled`.

## Props

```ts
export interface InputProps {
  /** Field label (rendered in Open Sans 600). */
  label?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Helper text below the field. */
  help?: string;
  /** Error message — renders Amber-700 text with a ⚠ glyph, overrides help. */
  error?: string;
  disabled?: boolean;
  style?: CSSProperties;
}
```
