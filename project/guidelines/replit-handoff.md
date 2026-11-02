# Transition Trails — Replit design system handoff

> **Prefer `replit/` for a real app.** That folder ships generated tokens, a Tailwind
> preset, an agent-rules file, and a build guard — mechanisms that hold, where a pasted
> document drifts. Use this file only for a quick paste into Replit's Design Systems
> settings or an agent prompt.

Every value here is copied from the live design system, not approximated.

---

## Colors

**Core brand**

| Role | Hex | Use |
|---|---|---|
| Trail Green | `#2F6B3F` | Primary — actions, headings, growth |
| Deep Teal | `#2F6F7E` | Secondary — containers, footer, depth |
| Sky Blue | `#7FAFC6` | Surface — backgrounds, cards |
| Sun Amber | `#F5A623` | Accent — **one** "next step" CTA per screen, never more |

**Neutrals**

| Role | Hex | Use |
|---|---|---|
| Trail Light | `#FAFAF7` | Page background |
| Warm Gray | `#E2E4E1` | Dividers and borders **only — never text** |
| Slate | `#4A4F4D` | Body text |
| Charcoal | `#2A2E2C` | Headings, icons |
| White | `#FFFFFF` | Card surfaces |

**Ramps**

- Green: `#E6F0EA` · `#9FC3AE` · `#2F6B3F` · `#245531`
- Amber: `#FFF3E0` · `#FFD08A` · `#F5A623` · `#CC8400`
- Sky tint: `#EDF5F8`

**Semantic roles** — build these as named styles so intent survives:

```
background      #FAFAF7      surface        #FFFFFF
surface-alt     #EDF5F8      border         #E2E4E1
text            #4A4F4D      heading        #2A2E2C
link            #2F6B3F      link-hover     #245531
action-primary  #2F6B3F      hover          #245531
action-accent   #F5A623      hover          #CC8400
success #2F6B3F   info #2F6F7E   warning #CC8400
```

---

## Typography

- **Headings:** Poppins (600–700)
- **Body / UI:** Open Sans, Roboto fallback (400–500)
- **Accent:** Caveat — sparingly, for a human aside; never for UI labels

| Style | Size | Font & weight | Line height |
|---|---|---|---|
| H1 | 44px | Poppins 600–700 | 1.2 |
| H2 | 32px | Poppins 600 | 1.2 |
| H3 | 25px | Poppins 500–600 | 1.4 |
| H4 | 20px | Poppins 500 | 1.4 |
| Body | 17px | Open Sans 400 | 1.6 |
| Body small | 14px | Open Sans 400–500 | 1.6 |
| Label | 14px | Open Sans 500 | 1.4 |
| Accent | 30px | Caveat 400–600 | 1.4 |

Eyebrow labels: 10–12px, Poppins 600, uppercase, letter-spacing `.1em`, in Deep Teal.

---

## Spacing, radius, elevation

**Spacing (8px base):** 4 · 8 · 16 · 24 · 32 · 48 · 64

**Radius:** small 8px · medium 14px · large 22px · pill 999px. Generous radii — the brand reads soft and approachable, not sharp.

**Shadows** — soft and low-contrast, never harsh:

```
card    0 12px 28px rgba(42,46,44,.10)
soft    0 6px 16px rgba(42,46,44,.08)
amber   0 2px 8px rgba(245,166,35,.35)
focus   0 0 0 3px rgba(47,107,63,.15)
```

---

## Components

Build these; they cover what our surfaces actually use.

- **Button** — primary (Trail Green fill), secondary (Deep Teal outline), ghost, and accent (Sun Amber, one per screen). Radius pill. Hover darkens, never lightens.
- **Card** — white surface, 1px Warm Gray border, radius 22px, card shadow. Lifts gently on hover.
- **Input** — 1px Warm Gray border, radius 14px, green focus ring.
- **Pill / Badge** — status chips. Always pair color with a text label.
- **Alert** — info (Deep Teal), success (Trail Green), warning (Amber 700).
- **Stepper** — numbered progress through a trail or task.
- **Nav sidebar** — Trail Green active item, Slate inactive.

---

## Rules that matter more than the tokens

1. **Never rely on color alone.** Every status pairs a color with an icon and a text label.
2. **One amber CTA per screen.** Amber means "this is the next step." Two ambers means neither is.
3. **Warm Gray is a border token.** Using it as text gives ~1.3:1 contrast. Body text is Slate (8.3:1 on white).
4. **No emoji** in product or marketing copy. Icons are Lucide, stroke ~1.75–2px, rounded caps.
5. **US English spelling** — organization, authorized, license, behavior, practice, analyze.
6. **Voice:** calm, credible, encouraging. The learner is the hero. "You" to the learner, "we" as the organization. Never "Trailhead," "Trailblazer," or "Ohana."
7. **Sentence case** for body and UI. Title Case only for proper program names.
8. **Hover darkens; press shrinks slightly.** Transitions are quick fades, no bounce.

---

## Naming

The learner platform is **Trail OS** — never "the portal." Programs are **Foundations Trail**, **Guided Trail**, **Trail of Mastery**. Memberships are **Digital Compass** (nonprofit organizations) and **Explorer's Trail** (individuals). Self-paced products are **Trail Kits**, numbered in ship order. The AI companion is **Penny**.

**Never hardcode a price, tier figure, cohort date, or seat count.** Those live in the record — Trail OS and the public site — and a stale number in a design artifact is worse than no number. Name the tier, not the amount.
