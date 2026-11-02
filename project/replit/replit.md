# Transition Trails design system — agent rules

This app uses the Transition Trails design system. Tokens live in `tt-tokens.css`
and register Tailwind v4 utilities through the `@theme inline` block inside that
same file. There is no Tailwind config to extend — v4 removed `presets`.

## Hard rules

1. **Never write a raw hex color, font stack, px radius, or shadow in app code.**
   Use the Tailwind classes registered by `tt-tokens.css` (`bg-trail-green`, `text-heading`,
   `rounded-lg`, `shadow-card`) or the CSS variables (`var(--tt-trail-green)`).
   Prefer the semantic names — `bg-surface`, `text-heading`, `border-border` — over brand
   names. Opacity modifiers work: `bg-trail-green/50`, `hover:bg-charcoal/5`. For
   alpha in plain CSS use `color-mix(in oklab, var(--tt-trail-green) 8%, transparent)`.
   `npm run tt:check` fails the build on raw hex in `src/`.
   **If a Tailwind class errors as unknown — `bg-green-600`, `rounded-2xl` — that is
   deliberate.** Those namespaces are cleared so off-brand steps cannot resolve
   silently. Reach for the brand step (`rounded-lg`), do not add an arbitrary value.
2. **One amber CTA per screen.** Sun Amber means "this is the next step." Two
   ambers means neither is. Everything else is Trail Green or Deep Teal.
3. **Never rely on color alone.** Every status pairs a color with an icon *and* a
   text label.
4. **Warm Gray is a border token, never text.** As text it is ~1.3:1. Body text
   is Slate; headings are Charcoal.
5. **US English spelling, everywhere** — organization, authorized, license (noun
   and verb), behavior, practice, analyze, program, enroll, catalog. Never the
   British form, including in code comments and file names.
6. **No emoji** in UI, copy, or code comments. Icons are Lucide, stroke 1.75–2px,
   rounded caps.
7. **Hover darkens; press shrinks slightly.** Quick fades, no bounce.
8. **Sentence case** for body and UI. Title Case only for proper program names.

## Voice

Calm, credible, encouraging. **The learner is the hero** — "you" to the learner,
"we" as the organization. No hype, no buzzwords, no talking down.
Never use "Trailhead", "Trailblazer", or "Ohana".

## Naming — get these exactly right

- The internal platform is **Trail OS**. Never "the portal."
- Programs: **Foundations Trail**, **Guided Trail**, **Trail of Mastery**.
- Memberships: **Digital Compass** (nonprofit organizations) and
  **Explorer's Trail** (individuals).
- Self-paced products are **Trail Kits**, numbered in ship order.
- **Never hardcode a price, tier figure, cohort date, or seat count.** Read them from the
  record at runtime. A hardcoded number goes stale and nobody notices.
- The AI companion is **Penny**.

## Penny — anything she says or appears in

- **Ask before telling.** One sentence, then a question. Never a list of advice.
- **Name the specific thing** someone did ("You identified the correct object
  relationship"), never "Great job!".
- **Augment the coach, never replace.** Penny surfaces information; humans act on
  it. She never sends unsolicited messages.
- **Never fabricate** evidence, assignments, or praise.
- **Always show which mode she is in** — Coach (Socratic), Coordinator
  (action-oriented), Quest Guide (coaches, never solves), Client Liaison
  (professional, human-gated). Behavior differs completely between them.
- **Human gate on anything leaving the system** — client messages, channel posts,
  deployments. No exceptions; this is a trust architecture, not a limitation.
- Posture by trail: Guided warm and structured · Explorer curious · Mastery
  peer-level · Alumni celebratory.

## Repositories

GitHub is the source of truth, org `Transition-Trails`:
**TTDS** (this design system — tokens come from here; run `npm run tt:sync`) ·
**Transition-Trails-Map** (Trail OS monorepo, subtree `artifacts/program-map`) ·
**TT-Public-Website** (public site, subtree `artifacts/transition-trails`; copy is
data-driven from `src/content/*.json`, so copy fixes land there, not in JSX) ·
**Penny-POC** (private, being retired into Trail OS) · **TT_Salesforce_Devops**.

Run `npm run tt:sync` to pull the latest tokens. Never hand-edit `tt-tokens.css`.

## Components to build from the tokens

Button (primary Trail Green fill · secondary Deep Teal outline · ghost · accent
Sun Amber, one per screen; pill radius) · Card (white, 1px Warm Gray border,
`rounded-lg`, `shadow-card`, lifts gently on hover) · Input (1px Warm Gray
border, `rounded-md`, green focus ring) · Pill/Badge (color + text label always)
· Alert (info Deep Teal · success Trail Green · warning Amber 700) · Stepper
(Amber marks the current step).
