repo: Transition-Trails/TTDS
branch: main
path: replit

The design system's own repo. Apps consume it through `replit/tt-tokens.css`,
pulled with `npm run tt:sync` (see `replit/README.md`).

Related repos in the `Transition-Trails` org:

| Repo | What it is |
|---|---|
| `Transition-Trails-Map` | Trail OS monorepo. Replit app "TRAIL OS". Subtree `artifacts/program-map`. Tailwind v4. |
| `TT-Public-Website` | Public marketing site, Vite + React + wouter + Tailwind v4. Replit app "Transition Trails Public Site". Subtree `artifacts/transition-trails`. Copy is data-driven from `src/content/*.json`. |
| `Penny-POC` | Penny proof of concept (private). Being retired into Trail OS in Phase 2. |
| `TT_Salesforce_Devops` | Salesforce DevOps pipeline. |

## Not yet pushed

**The TTDS repo still contains only a README.** Everything below lives in this
project and has never been committed. Until `replit/` is pushed to
`Transition-Trails/TTDS` on `main`, `npm run tt:sync` fails in every app and
the Claude Design System Import returns empty.

To push, copy these to the repo at the same paths:

```
replit/tt-tokens.css        replit/README.md        replit/replit.md
replit/tt-check.mjs.txt     replit/tt-sync.mjs.txt
```

(The two `.txt` suffixes exist only so this project's compiler skips them; drop
the suffix when installing into an app, but the repo copy can keep it — the sync
script fetches `tt-tokens.css` only.)

## Last sync

date: 2026-08-12T00:58:00Z
tree: f2c0fccd4c11 (Transition-Trails-Map) — read-only; no commits made

### Updated in this project

- **Stripped live prices and figures** from the design system. Kit list prices,
  Compass tier amounts and Explorer's Trail tiers now point at the record
  instead of naming numbers. Rule recorded in `readme.md`, `SKILL.md` and
  `replit/replit.md`: never hardcode a price, tier figure, cohort date, seat
  count or coupon code — they live in Trail OS and on the public site.
- **Added a Voice card group** (4 cards): founder voice vs org voice, Angela
  Landrith's profile, and deliberately-empty placeholders for Kim Barnes and
  Hugh Richardson carrying intake questions rather than invented voices.
- **Reconciled Angela's profile with Notion and wrote back.** The
  `my-writing-style` skill carried a funders tone, six core themes and the Oak
  Cliff house metaphor that the Notion page lacked; all three were added to
  Notion, now **v1.1**. Notion remains the source of truth. Detail in
  `guidelines/founder-voices.md`.

### Sync history — 2026-08-06T23:22:00Z

- **Read Trail OS's live token file** and found it fully aligned with this
  system — every shared token matches exactly, including ramps, radii, shadows
  and the focus ring. Only the naming shape differs (`--brand-*` HSL).
- **Adopted the six tokens Trail OS needed and this system lacked**: critical
  100/300/500, slate-mid, shadow-hover, font-mono, plus semantic `danger`,
  `danger-bg`, `danger-border`, `text-muted`.
- Regenerated `replit/tt-tokens.css` (76 tokens) and added a Critical/Danger
  specimen card.
- `guidelines/token-divergence.md` rewritten: what is resolved, what is open.

### Previous sync

- **TTDS repo created and wired up.** `tt-sync.mjs` now defaults to
  `Transition-Trails/TTDS`, reading `replit/tt-tokens.css` from `main`.
- **Nothing pushed yet** — the repo contains only a README. The `replit/` folder
  in this project is the intended contents.
- Read `Transition-Trails-Map` and `TT-Public-Website` to ground the Replit
  starter in the real stack. Both run Tailwind v4 via `@tailwindcss/vite`, which
  removed `presets` — the starter was rewritten around `@theme inline` as a
  result.
- Recorded the three-way token divergence in `guidelines/token-divergence.md`.

## Screen map

| Built here | From these repo files |
|---|---|
| `replit/tt-tokens.css` | Generated from this project's `tokens/*.css`; shape informed by `TT-Public-Website:artifacts/transition-trails/src/styles/tokens.css` and `Transition-Trails-Map:artifacts/program-map/src/index.css` |
| `replit/replit.md` | Repo list and stack facts from both repos' `package.json` |
| `guidelines/token-divergence.md` | `Transition-Trails-Map:artifacts/program-map/src/index.css`, `TT-Public-Website:artifacts/transition-trails/src/styles/{tokens.css,README.md,generate-tokens.js}` |

## Open

- ~~Fraunces~~ **Ruled 2026-08-06: Poppins everywhere, no display face.** The
  public site migrates — but Fraunces is hardcoded as `font-['Fraunces']` in ~90
  places, not driven by the token, so the token change alone is a no-op. Path is
  in `guidelines/token-divergence.md`.
- **Canonical danger red.** Three in use: `#A93F2F` (Trail OS, marked
  "provisional, pending brand book entry"), `#A83A2C` and `#DC2626` (public site).
- **Divergent ramp values.** `green-700`, `amber-100`, `amber-700` differ between
  this system and the public site. Same token names, different hexes.
