# Card

Content card with optional media header; lifts on hover.

**Card** — content container for programs, features, and stories; optional media header (real imagery via `mediaSrc`, otherwise a soft green-tint placeholder), Poppins title, supportive body, optional footer. Lifts on hover.

```jsx
<Card title="Learners Gain Experience"
      footer={<a href="#">Learn more →</a>}>
  Aspiring professionals build portfolios and skills through hands-on work with expert mentorship.
</Card>
```

Props: `title`, `media`/`mediaSrc`, `footer`, `onClick` (makes the whole card clickable).

## Props

```ts
export interface CardProps {
  /** Card title, rendered as Poppins H4. */
  title?: string;
  children?: ReactNode;
  /** Show a media header. Pass any node to overlay on the green-tint placeholder. */
  media?: ReactNode;
  /** Background image URL for the media header (photo / illustration). */
  mediaSrc?: string;
  /** Footer node — typically a link or Button. */
  footer?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
```
