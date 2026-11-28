**Trail Kit print components** — for the notebook-style PDF kits (`templates/trail-kit/`). All of these live inside a `class="trail-kit"` scope, which re-points the semantic tokens to paper surfaces and the Clay accent. They are print-first: no shadows, no hover states, 12pt-floor type.

Trail Kits are **self-paced and externally sold** (our site and Etsy). The buyer has no mentor and no cohort — **the kit itself is their coach**, so it may speak to them directly through `CoachNote`. That voice is **Penny, your trail guide**: voice and visual only, one sentence then one question, never interactive (interactive Penny is a program benefit). What it must never do is reference a *human* mentor or coach they do not have, or imply a Salesforce certification is required. Human-mentor language belongs to the program branch only.

**Two editions**, set with a modifier class on the same `.trail-kit` scope:
- `.trail-kit.is-learner` — an individual upskilling, or someone at a company who needs guidance. Answers "why this makes me employable"; closes on the **Explorer's Trail** page: the badge and the one Sun Amber call to action, pointing to the website. Program benefits, discounts and codes live on the website, never in the kit.
- `.trail-kit.is-nonprofit` — a nonprofit enabling the feature themselves. Answers "why our organization needs this and what it costs us not to"; closes on the **Digital Compass** page.

Both editions share the paper, the Clay accent, the tabs, and the 5-beat spine. The edition sets `--tt-kit-why` / `--tt-kit-why-bg` / `--tt-kit-why-rule`, used on the "why this matters" panels: Clay for a learner's career case, Deep Teal for an organizational one.

**TabStrip** — the printed vertical tab strip down the page edge; also anchor navigation inside the PDF.
```jsx
<TabStrip sections={['Orient','Prepare','Build','Verify','Next Trail']} active={2} />
```

**KitMeta** — expectations bar on the orient page.
```jsx
<KitMeta items={[['Time','45 minutes'],['Level','Beginner'],['You need','System Admin access']]} />
```

**QRLink** — real scannable QR to a Build With Me video or resource. Requires the `qrcode-generator` UMD script (`window.qrcode`); keep `size` ≥ 84px for print scanning.
```jsx
<QRLink url="https://youtu.be/XXXXXXXX" label="Watch: Build With Me" caption="9 min walkthrough" />
```

**ResourceLink** — external resource row with QR, provider, and **explicit affiliate disclosure**. Set `affiliate` on any commissioned link (K2 University study guides, Jotform, etc.) and pair the list with one disclosure block on the page. `free` marks no-cost resources.
```jsx
<ResourceLink name="Salesforce Administrator study guides" provider="K2 University"
  kind="Guide" affiliate url="https://k2university.com/salesforce-admin"
  why="Where we send people who want the fundamentals underneath this kit." />
```

**BuildStep** — numbered instruction with a self-check line.
```jsx
<BuildStep n={3} title="Turn on Activity Capture" verify="a green Active badge on the config row">
  From Setup, search Einstein Activity Capture and select Settings.
</BuildStep>
```

**CoachNote** — **the kit speaking as the reader's coach, in Penny's voice.** Label it "Penny, your trail guide". One sentence, then one bolded question. A Trail Kit is bought by someone with no mentor assigned, so the notebook plays that role: it anticipates the wobble and names it before the reader hits it. Two or three per kit, at the points where people actually stall. Never use in program curriculum — enrolled learners have a real human mentor.
```jsx
<CoachNote aside="you are the right person for this">
  If you are thinking "I am not technical enough for this" — these questions are about your
  organization, and nobody knows it better than you.
</CoachNote>
```

**KitNote** — the marginalia callout that elevates instructions into guidance. Kinds: `tip`, `watchout`, `practice`, `remember`. This is information about the *task*; `CoachNote` is direct address to the *person*.
```jsx
<KitNote kind="practice">Start with a small pilot group before enabling org-wide.</KitNote>
<KitNote kind="watchout">Sync is one-way by default — confirm before you migrate history.</KitNote>
```

**NoteLines** — ruled writing area (or `grid` for sketching). This is what makes it a notebook.
```jsx
<NoteLines label="Your notes" lines={7} />
<NoteLines label="Sketch your config" grid lines={9} />
```

**ActionPlan** — the closing commitment table.
```jsx
<ActionPlan prompts={['Enable in sandbox','Brief the sales team']} rows={5} />
```

**KitCode** — the closing ticket and the one permitted Sun Amber CTA per kit. **Etsy editions print no code** (Etsy discounts must be Etsy coupons): close with the Explorer's Trail badge and a plain Sun Amber call to action instead. Use `KitCode` only for an edition sold on our own site.
```jsx
<KitCode code="TRAIL-EAC-25" body="Save 25% on your next Trail Kit." cta="Browse Trail Kits" url="transitiontrails.org/kits" />
```
