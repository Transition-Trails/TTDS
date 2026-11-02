# PennyModeBadge

Always-visible indicator of Penny's current mode. Penny's behavior differs completely between modes, so never render a Penny surface without one.

Shows which mode Penny is operating in — required on every Penny surface, because her behavior changes completely between modes.

```jsx
<PennyModeBadge mode="coordinator" showPosture />
```

Notes
- Modes: `coach` (Socratic), `coordinator` (action-oriented), `quest` (coaches, never solves), `liaison` (professional, human-gated).
- Exports `PENNY_MODES` so other components can read a mode's color and icon rather than duplicating the map.
- Coach mode asks; Coordinator mode acts. A learner should never have to guess which one is answering.

## Props

```ts
export type PennyMode = 'coach' | 'coordinator' | 'quest' | 'liaison';
```
