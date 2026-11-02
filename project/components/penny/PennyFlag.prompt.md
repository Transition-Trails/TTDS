A signal Penny raised for a human to act on — coach dashboards, project cards, "Needs Attention" lists.

```jsx
<PennyFlag title="Sprint 2B overdue — client waiting" detail="Jordan · no Penny activity in 4 days" action="View learner" />
<PennyFlag level="healthy" title="No flags on this project" detail="Last checked 10 minutes ago" />
```

Notes
- Three levels: `attention` (clay), `watch` (amber), `healthy` (green). Each pairs an icon with a word, so meaning never rests on color alone.
- **The `action` label must describe a person doing something** ("View learner", "Draft agenda"), never Penny acting on her own. Penny surfaces; humans act.
- On client-facing surfaces, never name an individual learner in a flag — Liaison Mode forbids individual blame. Use the team or the deliverable instead.
