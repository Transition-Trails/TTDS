# Token reconciliation across the three surfaces

Read from GitHub on 2026-08-06 — `Transition-Trails-Map@f2c0fccd` and
`TT-Public-Website@12dbe9c2`.

| | Design system (this project) | Trail OS | Public site |
|---|---|---|---|
| File | `tokens/*.css` | `artifacts/program-map/src/index.css` | `artifacts/transition-trails/src/styles/tokens.css` |
| Naming | `--tt-*` | `--brand-*` | `--tt-*` |
| Format | hex | HSL component triples | hex |
| Tailwind | v4 `@theme inline` (generated) | v4 `@theme inline` | v4 `@theme` + generated `tokens.js` |

## Trail OS is fully aligned

Every token the two systems share holds the same value. Not just the core
palette — the ramps, radii, shadows, and the focus ring all match exactly:

| | Design system | Trail OS |
|---|---|---|
| Green ramp | `#E6F0EA` `#9FC3AE` `#2F6B3F` `#245531` | `green-light` `green-medium` `green` `green-dark` — identical |
| Amber ramp | `#FFF3E0` `#FFD08A` `#F5A623` `#CC8400` | `amber-light` `amber-medium` `amber` `amber-dark` — identical |
| Sky tint | `#EDF5F8` | `sky-tint` — identical |
| Radius | 8 / 14 / 22px | `0.5rem` / `0.875rem` / `1.375rem` — identical |
| Card shadow | `0 12px 28px rgba(42,46,44,.10)` | `brand-shadow-card` — identical |
| Soft shadow | `0 6px 16px rgba(42,46,44,.08)` | `brand-shadow-sm` — identical |
| Focus ring | 3px `rgba(47,107,63,.15)` | identical, as `outline` |
| Fonts | Poppins / Open Sans | identical |

**The `--brand-*` HSL convention is a different shape, not a different value.**
Converting it is mechanical whenever it is worth doing; there is no decision
waiting on it and no visual difference today.

## Resolved — adopted into this system

Both apps invented tokens because this system had no answer. That was our
omission. Adopted at Trail OS's values, since Trail OS already agreed with us
everywhere else:

| Token | Value | Was |
|---|---|---|
| `--tt-critical-500` | `#A93F2F` | `--brand-critical`, marked *"provisional, pending brand book entry"* |
| `--tt-critical-300` | `#E8B9B4` | `--brand-critical-mid` |
| `--tt-critical-100` | `#FBEAE6` | `--brand-critical-light` |
| `--tt-slate-mid` | `#686E6C` | `--brand-slate-mid` (HSL only, no hex) |
| `--tt-shadow-hover` | `0 15px 32px rgba(42,46,44,.13)` | `--brand-shadow-hover` |
| `--tt-font-mono` | `Menlo, 'Courier New', monospace` | `--app-font-mono` |

Semantic aliases added: `--tt-danger`, `--tt-danger-bg`, `--tt-danger-border`,
`--tt-text-muted`.

Both new colors clear WCAG AA on Trail Light — `#A93F2F` at 5.8:1, `#686E6C` at
4.9:1. `--tt-slate-mid` is the lowest-contrast neutral that still passes; nothing
below Slate should be introduced without checking.

## Resolved — the heading split

**Ruled 2026-09-22: two heading faces, split by surface.**

- `--tt-font-display` (**Fraunces**) — H1 and H2 on **marketing surfaces only**:
  the public website, landing pages, brochures.
- `--tt-font-heading` (**Poppins**) — everything else. H3 down, buttons, labels,
  and every heading inside product UI (Trail OS) and print artifacts (Trail
  Kits, program modules, inserts).

This **reverses the 2026-08-06 "Poppins everywhere" ruling**, which the public
site never implemented. Rather than migrating production to match a rule nobody
followed, the rule now matches production — which is also, on the evidence, the
better design.

### Why the split, and why it stops where it does

Set side by side at real sizes (`guidelines/headline-typeface-comparison.html`),
Fraunces has a spine Poppins does not at 40px and up. The optical sizing tightens
the joins and the serif reads as editorial authority — which is what a marketing
hero is for. At the 20px card heading and below, the two are near
interchangeable, so the serif earns nothing and does not appear.

The marketing/product seam is deliberate, not an oversight: **the brochure has an
editorial voice, the application does not.** Trail OS stays pure Poppins because
a dense interface wants a neutral face, and a learner signing in is past the
point of being sold to.

### What this means in practice

- **Public site** — no migration. The ~90 `font-['Fraunces']` usages stay,
  though they should still be converted to the `font-display` utility so
  `check-token-imports.js` can see them. Cosmetic debt, not a brand problem.
- **Design system** — `--tt-font-display` added to `tokens/typography.css`;
  Fraunces added to the Google Fonts import with optical sizing (`9..144`).
- **Trail OS** — unchanged. Its `--app-font-serif` holds Poppins and should be
  renamed `--app-font-heading`; the name now actively misleads, since a real
  serif token exists elsewhere in the brand.
- **Kits, modules, inserts** — unchanged. Print artifacts are Poppins. Do not
  reach for Fraunces because a page feels like a cover.

## Still open

**1 — Two reds in Trail OS.** `--brand-critical` `#A93F2F` is the brand red, but
`--destructive` is still shadcn's default `#DC2626`, so every shadcn destructive
button renders off-brand. One line in `index.css`:
`--destructive: var(--brand-critical);`

**2 — Three divergent values on the public site.** Same token names, different
hexes — the dangerous kind, because a shared stylesheet changes them silently:

| Token | This system + Trail OS | Public site |
|---|---|---|
| `green-700` | `#245531` | `#1E4A2A` |
| `amber-100` | `#FFF3E0` | `#FEF3DB` |
| `amber-700` | `#CC8400` | `#D4890A` |

Two of three surfaces agree, so the public site is the outlier. Cheapest to fix
now, before more components depend on the current values.

**3 — Naming collisions.** Sky tint is `--tt-sky-100` / `--brand-sky-tint` /
`--tt-sky-tint`. Pill radius `999px` vs `9999px`. Amber shadow
`--tt-shadow-amber` vs `--tt-shadow-amber-glow`. Spacing is
`xs…3xl` here, `1 2 4 6 8 12 16` on the site.

**4 — Public-site tokens still unadopted.** `--tt-cool-gray`, `--tt-muted-fill`,
the dark-section palette (About, Board, Coaches, Consulting, Guided Trail, Blog)
and the approved gradients. These are marketing-surface concerns with no Trail OS
counterpart, so they need a decision about whether the design system covers the
public site's section styling or the site owns it.

## Do not rebuild what exists

`TT-Public-Website` already runs a token pipeline at `src/styles/` —
`generate-tokens.js` (CSS → JS mirror), `check-tokens-sync.js`,
`check-token-imports.js`, `check-nav-contrast.js`, and a Vite plugin, wired into
`prebuild`. It enforces `--tt-*` naming and bans raw hex in components. Keep it.
`replit/tt-check.mjs` is complementary — spelling, emoji, prohibited terms.

## Order

1. Fix `--destructive` in Trail OS (one line, removes a live off-brand button).
2. Rule on Fraunces.
3. Align the three public-site values.
4. Naming collisions, then decide on the public-site section palette.
