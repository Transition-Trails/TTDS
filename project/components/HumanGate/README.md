# HumanGate

Wraps any Penny output bound for a client, a channel, or production. Penny drafts; a human sends. Required by the trust architecture.

Wraps anything Penny drafted that a person must approve before it leaves the system.

```jsx
<HumanGate recipient="#project-dfw-rescue">
  Hi team — quick check on Sprint 2B ahead of Thursday's client call. Where are we?
</HumanGate>
```

Notes
- **Required**, not optional, for: client-facing messages, anything posted to a channel a client can see, deployments, and change requests. "Human in the loop, always" is a fixed architectural decision in Trail OS.
- Amber is deliberate — this is the one place in a Penny surface that should feel like it is waiting on you. Keep to one gate visible at a time, consistent with the one-amber-CTA rule.
- Never render an approved-and-sent message inside a gate; once approved it becomes an ordinary `PennyMessage`.

## Props

```ts
export interface HumanGateProps {
  /** Header text. Default "Penny drafted this — needs your approval". */
  label?: string;
  /** Who the draft goes to once approved, e.g. "#project-dfw-rescue". */
  recipient?: string;
  /** The drafted content awaiting approval. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
```
