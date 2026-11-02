# Button

Primary action button for Transition Trails.

**Button** — forward-action button; `primary` for most actions, `amber` for the single "Next Step" commitment CTA per screen, `secondary` (teal outline) for alternatives, `ghost` for inline text links.

```jsx
<Button variant="primary">Find your Trail</Button>
<Button variant="amber" size="lg">Take the Next Step →</Button>
<Button variant="secondary">Support the Mission</Button>
<Button variant="ghost">View All Trails →</Button>
<Button disabled>Unavailable</Button>
```

Variants: `primary` (Trail Green), `secondary` (teal outline on white), `amber` (Sun Amber, dark text, glow — max one per screen), `ghost` (green text). Sizes: `sm` / `md` / `lg`. Add a trailing `→` in the label for forward-motion CTAs.

## Props

```ts
export interface ButtonProps {
  /** Visual role. `amber` is the single "Next Step" CTA — use at most one per screen. */
  variant?: 'primary' | 'secondary' | 'amber' | 'ghost';
  /** Size preset. */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children?: ReactNode;
  style?: CSSProperties;
}
```
