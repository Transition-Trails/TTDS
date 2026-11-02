**Card** — content container for programs, features, and stories; optional media header (real imagery via `mediaSrc`, otherwise a soft green-tint placeholder), Poppins title, supportive body, optional footer. Lifts on hover.

```jsx
<Card title="Learners Gain Experience"
      footer={<a href="#">Learn more →</a>}>
  Aspiring professionals build portfolios and skills through hands-on work with expert mentorship.
</Card>
```

Props: `title`, `media`/`mediaSrc`, `footer`, `onClick` (makes the whole card clickable).
