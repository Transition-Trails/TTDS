Scannable QR code paired with a label and a short description — the standard way a printed Trail Kit reaches a video, worksheet, or external resource.

```jsx
<QRLink
  url="https://transitiontrails.org/kits/07/build"
  label="Build With Me"
  caption="16 min walkthrough"
  tone="teal"
  size={88}
/>
```

Notes
- **`caption` describes what is behind the code — never repeat the URL.** The component already prints the href beneath the label, so a caption that restates it shows the reader the same string twice. Use "16 min walkthrough", "Free, no credit card", "Print more, free." Not "example.com/thing".
- The printed line under the label is the **host only** (`transitiontrails.org`), not the full path — it is set `white-space: nowrap` with an ellipsis fallback so it can never break mid-word or strand a character. The QR carries the full URL; the printed host just tells the reader where the code goes. Measured: a full path needs ~132px against the ~115px text column in a 2in rail, so printing one always wrapped.
- `tone="teal"` for instructional links, default for neutral ones. `size` is the QR box in px — 76–92 covers most page positions.
- For anything whose figures change (exam fees, storage limits, pricing), point at the code rather than printing the number, and say so in the caption: "Scan for current exam format and fee."
- Renders a dashed placeholder frame if the QR library has not loaded, so print preview never shows a broken image.
