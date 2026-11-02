---
name: transition-trails-design
description: Use this skill to generate well-branded interfaces and assets for Transition Trails, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full design guide: org context, content fundamentals (voice, lexicon, prohibited terms), visual foundations, iconography, manifest, caveats. **Read this first.**
- `styles.css` — global entry point; link this one file to get all tokens + fonts. It `@import`s everything in `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `semantic.css`, `fonts.css`.
- `components/` — React primitives, each with `.jsx` + `.d.ts` + a prompt file:
  - shared web/product: **Button, Input, Card, Pill, Alert, Stepper**
  - `trail-kit/` (retail print): **TabStrip, KitMeta, QRLink, ResourceLink, BuildStep, KitNote, CoachNote, NoteLines, ActionPlan, KitCode**
  - `program/` (curriculum): **ProgramBand, Objectives, Rubric, SignOff**
  - `partner/` (nonprofit business case): **StatBlock, NeedRow, CompassCTA**
- `templates/partner-brief/` — the 2-page nonprofit leave-behind.
- `templates/trail-kit/` — the tabbed Trail Kit notebook (external, sold).
- `templates/trail-kit-nonprofit/` — the Nonprofit edition kit.
- `templates/program-module/` — an official program module (Foundations / Guided / Mastery).
- `ui_kits/website/` and `ui_kits/portal/` — full interactive screen recreations composing the primitives. `portal/` is **Trail OS**, the learner platform (never "the portal" in copy); it includes the learner's Slack and Salesforce dev org access.
- `guidelines/` — small specimen cards for color / type / spacing / brand.

## Three design branches — pick the right one first
TTDS is one brand in three registers. Getting this wrong is the most damaging mistake you can make here.
- **Trail Kit** (`.trail-kit`) — **external, sold on our site and Etsy.** Self-paced, and **the kit itself is the reader's coach** — it may address them directly (`CoachNote`), but never references a *human* mentor they do not have, and never requires a Salesforce certification. Warm paper, **Clay `#B4552D`** accent (kit-only), printed edge tabs, QR codes, marginalia tips, note pages, resources page with visibly-marked affiliate links plus a plain disclosure. No kit may require a paid product to complete.
  - **Two editions** on the same scope: `.is-learner` (individual upskilling or someone at a company — answers "why this makes me employable", closes on programs + registration code) and `.is-nonprofit` (a nonprofit doing it themselves — answers "why our org needs this and what it costs us not to", closes on the **Digital Compass** page). Spines: `Orient→Prepare→Build→Verify→Next Trail` vs `Why→Decide→Build→Verify→Next Step`.
- **Program Curriculum** (`.program-trail` + `.is-foundations` / `.is-guided` / `.is-mastery`) — **official Foundations Trail / Guided Trail / Trail of Mastery content.** Cool document surface, stage-colored module band (Foundations = Deep Teal, Guided = Trail Green, Mastery = Charcoal), competency codes, rubrics, evidence checklists. **Never Clay, never Amber** — there is nothing to sell to someone already enrolled. Ends in a mentor sign-off. Week-by-week / sprint-by-sprint — still in progress.
- **Partner / Nonprofit** (`.partner-trail`) — **asking a nonprofit to HOST one of our learners.** Not a Trail Kit; nothing is sold. Sky-tinted surfaces, Deep Teal lead, **no Clay**, exactly one Amber CTA which always points to the **Digital Compass page**. Sourced stats, recognition-then-answer rows, "what we never ask", the real objection answered. **Recognition first, offer second — never open with the program. No coupons in partner material.**

## Non-negotiables
- **Colors:** Trail Green `#2F6B3F` (primary), Deep Teal `#2F6F7E` (secondary/nav/footer), Sky Blue `#7FAFC6` (surface), Sun Amber `#F5A623` (accent). **At most ONE amber CTA per screen** — it signals commitment, never decoration.
- **Type:** **Fraunces** (H1/H2 on marketing surfaces ONLY — website, landing pages, brochures) · **Poppins** (every other heading, including all of Trail OS and all print artifacts — Trail Kits, program modules) · Open Sans (body/UI) · Caveat (accent only — trail names / short pull quotes, max one per page). Building a kit, a module, or product UI? Poppins throughout; Fraunces does not appear.
- **Trail OS status words:** Implemented · Pilot or gated · Configuration-dependent · Planned. Use them precisely in any artifact describing the platform; never imply something ships when it is gated.
- **Audiences:** learners, coaches, **Trail Crew** (volunteers), staff. Each gets a different Trail OS — a volunteer surface is built around claiming and logging work, not progress through a path.
- **Voice:** calm, credible, encouraging; the learner is the hero. Speak "you" to the learner, "we" as the org. Never use "Trailhead / Trailblazer / Ohana". No emoji. Never rely on color alone — pair status with an icon + text. **Writing under a founder's name** (Angela Landrith, CEO) uses her voice profile in `guidelines/voice-angela-landrith.html`, not org voice — warm, direct, prose over bullets, story before title. Kim Barnes (COO) and Hugh Richardson (CTO) have no profile yet: ask rather than improvise. **Never hardcode prices, tier amounts, cohort dates, or seat counts** — they live in the Trail OS record and the public site, not in design artifacts. Name the tier, not the amount. **Poppins for every heading, on every surface** — no display face, no serif alternate, no exceptions. **US English spelling in every artifact, no exceptions** — organization, authorized, license (noun *and* verb), behavior, practice, analyze, program, enroll, catalog. Never the British form. See `guidelines/us-spelling.html`.
- **Feel:** soft radii (8/14/22/pill), low-contrast shadows, gentle .15s hovers (cards lift, buttons darken), no aggressive gradients.

## Trail Kits are Salesforce products
Trail Kits are `Product2` records in Trail OS, with steps, assets, decisions, and troubleshooting rows as child records. The printed PDF is an output of that record. Before building or editing a kit, read `guidelines/trail-kit-production.md` and `templates/trail-kit/kit-record.json`.

**Identifiers come from the record; prose is written by hand.** Anything appearing more than once — coupon code, URL, page count, a step's verify line — must be read from the record, never retyped. Body copy stays editable text in the document.

## Caveats
- No logo binaries were provided — render the wordmark in Poppins where a mark would go; do not invent a logo.
- Fonts load from Google Fonts CDN (no local files). Icons use Lucide via CDN as a substitution.

## Penny and Trail OS

**Trail OS** is TT's Salesforce-native operating platform for learners, coaches, staff, and volunteers. **Penny is its intelligence layer** — Gemini 2.5 Flash + Agentforce, across mobile PWA, Slack, admin dashboard, and client view. Promise: *"A penny for your thoughts."*

When designing anything Penny says or appears in:

- **Ask before telling.** One sentence, then a question. Never a list of advice.
- **Name the specific thing.** "You identified the correct object relationship" — never "Great job!". No emoji.
- **Augment the coach, never replace.** Penny surfaces; humans act. She never sends unsolicited messages.
- **Never fabricate.** No invented evidence, assignments, or praise.
- **Always show the mode** — Coach, Coordinator, Quest Guide, or Client Liaison. Behavior differs completely.
- **Human gate on anything leaving the system.** Client messages, channel posts, deployments. Non-negotiable.
- **Posture by trail:** Guided warm/structured · Explorer curious · Mastery peer-level · Alumni celebratory.

Components: `PennyMessage`, `PennyModeBadge`, `HumanGate`, `PennyFlag`. Cards under the **Penny** group.
