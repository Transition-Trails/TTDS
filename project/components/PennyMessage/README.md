# PennyMessage

One turn in a Penny conversation, on either side of the exchange.

A single turn in a Penny conversation — use for any transcript, mock, or chat surface.

```jsx
<PennyMessage from="learner">I don't know how to explain my CLYLP project.</PennyMessage>
<PennyMessage mode="coach">What did the nonprofit do with the org that they couldn't do before?</PennyMessage>
```

Notes
- Penny's side shows the "P" avatar, her name, and the `PennyModeBadge`; the learner's side is a plain right-aligned bubble.
- Write Penny's copy to the voice rules: **one sentence, then a question.** If a mocked Penny message gives advice instead of asking, the mock is wrong even if it looks right.
- Never mock Penny sending an unsolicited message — she surfaces information, humans act on it.

## Props

```ts
export interface PennyMessageProps {
  /** Who is speaking. Default 'penny'. */
  from?: 'penny' | 'learner';
  /** Penny's mode — sets the badge and the bubble's rule color. Ignored when from='learner'. */
  mode?: 'coach' | 'coordinator' | 'quest' | 'liaison';
  /** Override the displayed speaker name. Defaults to "Penny". */
  name?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
```
