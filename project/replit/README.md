# Transition Trails design system — Replit starter

Four files that give a Replit app the Transition Trails design system, and keep
it there. **Targets Tailwind v4** — both TT apps run `@tailwindcss/vite`.

| File | Install as | What it does |
|---|---|---|
| `tt-tokens.css` | same name | Every design token as a CSS custom property, plus a `@theme inline` block that registers the Tailwind v4 utilities. **Generated** — never hand-edit. |
| `replit.md` | same name | The rules the Replit agent reads as persistent context. This is what stops a new app drifting. |
| `tt-check.mjs.txt` | `tt-check.mjs` | Build guard. Fails on raw hex, British spelling, emoji, prohibited terms. |
| `tt-sync.mjs.txt` | `tt-sync.mjs` | Pulls the latest `tt-tokens.css` from the design system repo. |

Two files carry a `.txt` suffix here so this project's compiler does not try to
bundle Node scripts into a browser bundle. **Drop the `.txt` on install.**

## Install

1. Copy the four files to the app root and rename the two `.txt` ones as in the
   table above.

2. **Import both stylesheets, Tailwind first.** There is no config step —
   Tailwind v4 removed `presets`, and `tt-tokens.css` carries its own
   `@theme inline` block, so importing it registers the utilities. Order matters:
   the theme layer must exist before `@theme` extends it.

   ```css
   @import "tailwindcss";
   @import "./tt-tokens.css";
   ```

   That is the whole stylesheet. Do **not** use `@tailwind base/components/utilities`
   — those are v3 directives that v4 removed; a stylesheet using them emits no
   utilities and every brand class silently fails.

3. Wire the scripts into `package.json`:
   ```json
   "scripts": {
     "tt:check": "node tt-check.mjs",
     "tt:sync": "node tt-sync.mjs"
   }
   ```

4. If the app already has its own `replit.md`, **merge rather than overwrite** —
   paste the contents of *this starter's* `replit.md` under a `## Design system`
   heading, keeping the app's existing context above it.

## Using colors

Prefer the semantic names — `bg-surface`, `text-heading`, `border-border`,
`text-action-primary` — over the brand names. Intent survives a palette change; a
literal color name does not.

**Opacity modifiers work.** Tailwind v4 composes alpha with `color-mix()`, so
`bg-trail-green/50` and `hover:bg-charcoal/5` resolve correctly against a
`var()` reference. No channel triplets needed — that was a Tailwind v3 workaround.

In plain CSS outside Tailwind, use the tokens directly (`var(--tt-trail-green)`).
For alpha, use `color-mix()` rather than a raw `rgba()` — the guard rejects raw
channel values:

```css
background: color-mix(in oklab, var(--tt-trail-green) 8%, transparent);
```

**The `@theme` block clears every Tailwind namespace it writes into, or exempts it
with a reason.** Tailwind v4 ships complete default scales; redefining only some
steps leaves the rest at Tailwind values, so a class that *looks* sanctioned
renders off-brand — and often lands numerically between two brand values, so it
looks almost right.

| Namespace | Policy | Why |
|---|---|---|
| `--color-*` | Clear `green`, `amber`, `sky`, `slate` only | A blanket clear would kill `bg-transparent` and `bg-white` |
| `--radius-*` | Clear, define 3 brand steps | No clean brand equivalent for `xl`/`2xl` — better they fail |
| `--shadow-*` | Clear, then remap `sm`/`md`/`lg` onto brand | Brand has real equivalents; common classes stay usable |
| `--text-*` | Clear, then remap `sm`/`base`/`lg` onto brand | Brand body is 17px, Tailwind's `text-base` is 16px |
| `--font-*` | Map `--font-sans` and `--font-serif`, do not clear | `--font-sans` drives Preflight's `html { font-family }` — unmapped, every unstyled element renders `ui-sans-serif` |
| `--leading-*` | Clear, define the 3 brand steps | `leading-tight` would otherwise be Tailwind's 1.25, not the brand 1.2 |
| `--font-weight-*` | Clear, define the 4 loaded weights, remap `normal` | The webfonts load 400/500/600/700 only — `font-light` or `font-black` would render a browser-synthesised faux weight. `font-normal` is remapped because the brand token is spelled `regular` |
| `--spacing-*` | **Never clear** | v4 computes `p-4` from a single `--spacing` base; clearing breaks every numeric spacing utility |

So `bg-green-600` and `rounded-2xl` fail rather than rendering off-brand, while
`shadow-sm`, `text-base`, and `p-4` keep working and are on-brand.

**Every type size carries its line height.** Because `--text-*` is cleared,
Tailwind's companion `--text-{name}--line-height` properties go with it — so the
generator emits a replacement for each size (H1/H2 1.2, H3/H4 1.4, body 1.6,
label and accent 1.4). Without them `text-base` would set font-size and inherit
whatever leading the parent had.

**The generator asserts coverage in four directions.**

1. **Forward** — every declared `--tt-*` token must reach `@theme` or be excused.
2. **Excuses are machine-checked** — an excuse must name a rule that is actually
   present in the emitted file. `--tt-focus-ring` is excused from `@theme`
   because Tailwind has no namespace for a full box-shadow; it ships instead as a
   real `:focus-visible` rule in `@layer base`, and the assertion fails if that
   rule is missing or stops referencing the token.
3. **Reverse** — every Tailwind namespace `@theme` writes into must be cleared or
   exempt with a reason. Exempt: `--spacing-*`, `--font-*`, and `--color-*`
   (cleared per colliding hue instead of wholesale).
4. **Remaps** — every *cleared* namespace must declare a remap table saying which
   common Tailwind names keep working, and each declared remap must be emitted.

Each assertion exists because the previous set let a real defect through. The
forward check alone shipped `--font-weight-*` half-Tailwind. Forward plus reverse
still killed `font-normal`. All three together still shipped `--tt-focus-ring`
inert — excused on the grounds of a base-layer rule nobody had written, which is
why excuses now have to prove themselves. All four throw at generation time.

## Focus ring

`tt-tokens.css` emits a base layer:

```css
@layer base {
  *:focus-visible {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: var(--tt-focus-ring);
  }
}
```

This replaces the framework's 1px default with the brand 3px ring — an
accessibility standard for keyboard navigation on dense interfaces, matching what
Trail OS already ships. Do not remove it; the transparent `outline` keeps the
ring visible in Windows High Contrast mode, where `box-shadow` is dropped.

## Already in your apps — do not rebuild

`TT-Public-Website` has a working token pipeline at `src/styles/`:
`generate-tokens.js` (CSS → JS mirror), `check-tokens-sync.js`,
`check-token-imports.js`, `check-nav-contrast.js`, and a Vite plugin, wired into
`prebuild`. Keep it. `tt-check.mjs` is complementary, not a replacement — it covers
spelling, emoji, and prohibited terms, which those scripts do not.

See `guidelines/token-divergence.md` for where the three surfaces currently
disagree, and what needs a ruling before a shared upstream will hold.

## Why several mechanisms and not one

Each catches a different failure:

- **Tokens** make the right value available.
- **The `@theme` block** makes it the *convenient* one — `bg-trail-green` is less
  typing than `bg-[#2F6B3F]`. It also clears Tailwind's colliding default scales,
  so `bg-green-600` fails rather than quietly rendering an off-brand green.
- **`replit.md`** is what the agent reads before it writes code, so a new app
  starts correct instead of being corrected.
- **`tt-check`** catches what slips through anyway.

Documentation alone does not survive contact with a code generator. The `@theme`
block and the guard are what actually hold the line.

## Repositories

GitHub is the source of truth. The `Transition-Trails` org:

| Repo | What it is |
|---|---|
| `Transition-Trails-Map` | **Trail OS** monorepo — the internal platform. Replit app "TRAIL OS". Subtree `artifacts/program-map`. |
| `TT-Public-Website` | Public marketing site — Vite + React + wouter + Tailwind. Replit app "Transition Trails Public Site". Subtree `artifacts/transition-trails`. Copy is data-driven from `src/content/*.json`. |
| `Penny-POC` | Penny proof of concept (private). Being retired into Trail OS in Phase 2. |
| `TTDS` | **The design system.** Source of truth for tokens; `tt-sync` pulls from here. |
| `TT_Salesforce_Devops` | Salesforce DevOps pipeline. |

## Keeping in sync

```
npm run tt:sync
```

Pulls `tt-tokens.css` fresh from `Transition-Trails/TTDS` and reports which tokens
were added or removed. Override with `TT_DS_REPO`, `TT_DS_BRANCH`, `TT_DS_PATH`.

Expects the file at `replit/tt-tokens.css` on `main`. If the repo is private,
pass a token: `GITHUB_TOKEN=… npm run tt:sync`.

**Never edit `tt-tokens.css` inside an app.** It is generated by concatenating
the live token sources; a local edit is silently overwritten on the next sync,
and until then the app disagrees with the brand.

**A token value change needs no other edit.** The `@theme` block maps utility
names to `var(--tt-*)` references, not literal colors, so the token declarations
stay the single source of truth. Only a *new or renamed* token needs the
`@theme` block extended — which is why `tt-sync` prints the diff.

`replit.md` changes when the *rules* change — new naming, a new Penny mode, a
changed guardrail — not on a token edit.

## What is deliberately not here

- **Print-branch tokens** (`trail-kit`, `program`, `partner` scopes). Those are
  for PDF artifacts and would only add noise to an app.
- **React components.** The design system's components are authored for its own
  runtime. Build app components from the tokens, following the component list at
  the end of `replit.md` — or lift a specific one and ask for it to be ported.
- **Fonts as binaries.** `tt-tokens.css` loads Poppins, Open Sans, and Caveat
  from the Google Fonts CDN; no brand font files were ever supplied.
- **Fraunces is not here on purpose.** The brand's display serif is scoped to
  H1/H2 on marketing surfaces — the public website and landing pages. Anything
  you build on this starter is product UI, which is Poppins throughout, matching
  Trail OS.
