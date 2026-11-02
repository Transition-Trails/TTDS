# Token reconciliation — design system · public website · Trail OS

Three codebases now carry Transition Trails tokens. This records where they
agree, where they drift, and which source wins.

| | Source | Naming |
|---|---|---|
| **Design system** (here) | `tokens/*.css` | `--tt-*`, hex |
| **Public website** | `Transition-Trails/TT-Public-Website` → `artifacts/transition-trails/src/styles/tokens.css` | `--tt-*`, hex |
| **Trail OS** | `Transition-Trails/Transition-Trails-Map` → `artifacts/program-map/src/index.css` | `--brand-*`, HSL triplets + shadcn semantic layer |

Read 2026-09-22. Website @ `b6e6faff961e`, Trail OS @ `d545b41fbe0d`.

## What already agrees — the whole core

All three carry identical values for the four brand colors (Trail Green
`#2F6B3F`, Deep Teal `#2F6F7E`, Sky Blue `#7FAFC6`, Sun Amber `#F5A623`), the
neutrals (`#FAFAF7` `#E2E4E1` `#4A4F4D` `#2A2E2C`), the sky tint `#EDF5F8`, the
radius scale (8 / 14 / 22 / pill), the spacing scale (4 · 8 · 16 · 24 · 32 · 48
· 64), and both card shadows. That is the bulk of the system and it did not
drift. The alignment work already done holds up.

## Conflicts — five values, and the website is the outlier on all five

In every case the design system and Trail OS agree and the website differs.

| Token | DS + Trail OS | Website | Delta |
|---|---|---|---|
| Green 700 | `#245531` | `#1E4A2A` | noticeably darker, colder |
| Amber 100 | `#FFF3E0` | `#FEF3DB` | fractionally cooler |
| Amber 700 | `#CC8400` | `#D4890A` | lighter, more orange |
| Critical / danger | `#A93F2F` | `#A83A2C` | ~imperceptible |
| Muted text | `#686E6C` | `#8C8882` | **materially lighter and warmer** |

**Recommendation: the website adopts the design-system values on four of
five.** Two of three codebases already agree, the deltas are small, and the
system is meant to be the reference.

**The fifth is not cosmetic.** `--tt-muted-text: #8C8882` on the website fails
4.5:1 against Trail Light. Our `#686E6C` was chosen precisely because it is the
lightest neutral that still clears it. This one should change on contrast
grounds regardless of which source is deemed authoritative.

## Typography — the real divergence, and it is a decision not a bug

| | H1 / H2 | H3–H4, buttons, labels | Body | Accent |
|---|---|---|---|---|
| Design system | Poppins | Poppins | Open Sans | Caveat |
| **Public website** | **Fraunces** | Poppins | Open Sans | Caveat |
| Trail OS | Poppins | Poppins | Open Sans | — (not loaded) |

**Decided 2026-09-22: adopt the split.** The live public site ships
`--tt-font-display: 'Fraunces', Georgia, serif` scoped to **H1 and H2 only**,
with Poppins from H3 down — and it looks better that way, which is the whole
argument. The design system now carries `--tt-font-display` and loads Fraunces
with optical sizing; `readme.md` and `SKILL.md` record the surface split.

This reverses the 2026-08-06 "Poppins everywhere" ruling. No migration falls out
of it: the site keeps what it has, Trail OS stays pure Poppins, and print
artifacts stay Poppins. Full reasoning in `guidelines/token-divergence.md`.

## Gaps — things the live site has that the system could not describe

Now added to `tokens/`, since a design system that cannot express the real site
is not much of a reference:

- **Teal ramp** — `--tt-teal-100/300/500/700`. We had only the sky tint.
- **Green 400 / green-mid** `#4A8A6E` — gradient mid-point.
- **Dark-section palette** — `--tt-dark-surface`, `-text-primary/muted/faint`,
  `-rule`, `-fill`, `-accent-green` `#6BBF85`, `-accent-amber`. Used on About,
  Board, Coaches, Consulting, Guided Trail and Blog. Substantial and entirely
  absent from our system.
- **Expedition darks** — `--tt-near-black` `#111111`, `--tt-off-black` `#1A1A1A`.
- **Bright error** — `--tt-error` `#DC2626` / tint, distinct from our brick
  `--tt-critical-500`. The site uses both for different jobs.
- **Seven approved gradients**, all 135°.
- **Neutrals** `--tt-cool-gray` `#6B7280`, `--tt-muted-fill` `#F3F2EF`.

## Naming drift — same values, three vocabularies

- **Spacing**: ours `--tt-space-xs…3xl`; website `--tt-space-1…16`. Identical
  values. Aliases added here so either name resolves.
- **Sky tint**: ours `--tt-sky-100`; website `--tt-sky-tint`. Aliased.
- **Trail OS** uses `--brand-*` HSL triplets feeding a shadcn semantic layer.
  This is appropriate for the app and should not be flattened to match — but
  `--app-font-serif` is set to **Poppins**, which will mislead anyone who reads
  the name expecting a serif. Worth renaming to `--app-font-heading`.

## Interaction — one genuine conflict

| | Focus ring |
|---|---|
| Design system | `0 0 0 3px rgba(47,107,63,.15)` box-shadow |
| Trail OS | `3px solid rgba(47,107,63,.15)`, offset 2px |
| **Website** | **`2px solid` Trail Green, offset 2px** |

The website's ring is solid green at full opacity; ours and Trail OS are a
15%-opacity wash. The website's is more visible and more accessible. Worth
standardising on it — a focus ring at 15% opacity is easy to miss, which
defeats the purpose.

Card hover is consistent where specified: `translateY(-3px)` over 167ms
`cubic-bezier(.4,0,.2,1)`, pressing back to `-1px`. No bounce, no shrink.

## Open decisions

1. ~~**Fraunces**~~ — decided: adopt the H1/H2 marketing split. ✔
2. **Four colour values** — confirm the website aligns to the system.
3. **`--tt-muted-text`** — fix on the website regardless; it fails contrast.
4. **Focus ring** — standardise on the website's solid 2px.
5. **`--app-font-serif`** in Trail OS — rename; it holds Poppins.
