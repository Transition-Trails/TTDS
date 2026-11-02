Inline Lucide icon (pinned CDN build) for breaking up dense print copy — always beside a text label, never alone.

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
  <TrailIcon name="list-checks" size={13} color="var(--tt-deep-teal)" />
  Pre-flight checklist
</div>
```

Notes
- `name` takes kebab-case or PascalCase. Unknown names render an empty box of the right size rather than throwing, so a typo never breaks a page.
- Defaults to `currentColor` — put the color on the label and the icon follows.
- `strokeWidth` defaults to 1.9 (Lucide ships 2 for screen); at 13–14px in print, thinner strokes disappear.
- Loads Lucide once per page and re-renders waiting icons when it arrives. Safe to use many times.
- Kit conventions: `lightbulb` tip · `triangle-alert` watch out · `award` best practice · `compass` coach note · `list-checks` checklist · `key-round` access · `circle-check-big` proof · `circle-slash` what it does not do · `rotate-ccw` rollback · `mail` announcement · `play` video · `graduation-cap` certification.
