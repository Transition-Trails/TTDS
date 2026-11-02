# Transition Trails Design System (TTDS)

> Version 2.0 · June 2026 · The single source of truth for the Transition Trails brand. **Mission:** *"Empowering individuals and organizations by bridging the experience gap through education, mentorship, and hands-on work."*

TTDS is the visual translation of the Transition Trails mission. It is nature-inspired, reinforcing the metaphor of **trails and guided progress**. This is the binding style reference — do not invent colors, type, spacing, or components not grounded here.

---

## Organization Context

**Transition Trails** is a nonprofit workforce-development organization that solves the *"experience gap"* — the systemic problem where talented people earn professional certifications (primarily **Salesforce**) but cannot land a first role because employers demand verifiable, on-the-job experience. Transition Trails focuses exclusively on **post-certification, experience-based development**: supervised project work with real nonprofit partners, guided by expert mentors, producing trusted proof of applied judgment.

**Three stakeholders:**

- **Learners** — earn experience-validated credentials employers recognize.
- **Nonprofit partners** — receive supervised project capacity at low risk.
- **The organization** — a durable, founder-independent, evidence-driven institution.

**Five strategic pillars:** Evidence Before Scale · Founder-Independent Delivery · Governed Technology & AI · Measurable Nonprofit Impact · Financial Sustainability.

**Founder & CEO:** Angela Landrith. Website: transitiontrails.org

### Products / surfaces represented

- **Marketing website** (`transitiontrails.org`) — orientation & invitation; homepage, program pages, get-involved.
- **Trail OS** (learner platform) — built on **Replit with Salesforce and Gemini behind it**; the learner's dashboard and program tracking, plus access to their cohort **Slack** and their **Salesforce dev org**. Trail OS is also the internal system of record where Trail Kits live as products — one name, two faces: the learner's platform and our back office. TTDS maps directly to Experience Cloud theme settings (see Salesforce mapping in the brand book).

### Sources this system was built from

Provided by the user as read-only inputs:

- `uploads/TT_Brand_Book_Design_System_v2.docx` — the full Brand Book & Design System (v2.0, June 2026). Sections: North Star (strategy), Voice (messaging), Visual Identity (logo/color/type/imagery), Brand in Action (application, Salesforce mapping, governance).
- Mounted codebase `Transition Trails design system/design-system/` — `base.md` (condensed guide), `tokens.css` (design tokens), `components.html` (copy-ready component markup). The tokens here are lifted verbatim from these files.

No design binaries (logo PNGs, photography, illustrations, font files) were included with those sources — see **Caveats** below.

---

## Content Fundamentals

One unified voice: **calm, credible, encouraging.** The persona is a **Strategic Advisor** — knowledgeable and forward-thinking, yet grounded, accessible, and focused on helping others navigate their journey. **We guide; the learner is always the hero.**

- **Person & address:** Speak *to* the learner as "you"; the organization is "we." Never make the org the hero ("we transformed his career" → "he built the experience employers were looking for").
- **Casing:** Sentence case for body and UI. Title Case for proper program/trail names. No ALL-CAPS shouting.
- **Founder voice is separate from org voice.** Org voice covers everything the organization publishes. A founder voice applies only where a named person signs it — LinkedIn, Substack, talks, bylined narratives — and then "I" and specificity are the point. Profiles are in the **Voice** card group; the reasoning and Angela's source discrepancy are in `guidelines/founder-voices.md`. **Never invent a founder's voice** — Kim Barnes and Hugh Richardson are deliberately unwritten placeholders carrying intake questions.
- **No live numbers in the design system.** Never hardcode a price, tier amount, cohort date, seat count, or coupon code into a template, component, or guideline. Those live in the record — the Trail OS Product2 record and the public site — and a design artifact that carries them goes stale silently, then gets printed. Name the tier, describe the shape ("a clear per-kit saving"), and point at the record. Fictional teaching data in kit CSVs is exempt; it is synthetic by design.
- **Two heading faces, split by surface — not by whim.** `--tt-font-display` (**Fraunces**) is for **H1 and H2 on marketing surfaces only**: the public website, landing pages, brochures. `--tt-font-heading` (**Poppins**) is everything else — H3 down, buttons, labels, and *all* headings inside product UI (Trail OS) and print artifacts (Trail Kits, program modules, inserts). Fraunces has a spine Poppins does not at 40px and up; below that they are near identical, so the serif earns nothing and does not appear. The marketing/product seam is deliberate: the brochure has an editorial voice, the application does not. (Ruled 2026-09-22, matching what the public site already ships. This reverses the 2026-08-06 "Poppins everywhere" ruling, which production never followed.)
- **Spelling: US English in every artifact — non-negotiable.** Kits, slides, screens, email, component copy, code comments, file names. (organization, authorized, license, behavior, practice, analyze, program, enroll, catalog.) The audience is US nonprofits and US learners; mixed conventions in one sentence read as careless on something people pay for. See `guidelines/us-spelling.html` for the full never→always list.
  - **"license" is both the noun and the verb** in US English — never "licence". This one has regressed twice; check it explicitly on any page about permitted use.
  - Sweep every new template against this list before shipping: *licence, authorised, summarised, organisation, behaviour, recognise, prioritise, analyse, favour, practise, centre, colour.*
- **Tone traits:** Professional & forward-thinking · Supportive & guiding · Clear & action-oriented · Calm & confident. Precise language, actionable next steps, no urgency/hype.
- **Trail-inspired lexicon** (use naturally, never forced): *pathway, milestone, horizon, guide, navigator, compass.*
- **Prohibited terms** (protect identity within the Salesforce ecosystem — TT is independent):
  - "Trailhead" → **Learning Path / Curriculum**
  - "Trailblazer" → **Learner / Navigator**
  - "Ohana" → **Transition Trails Academy/ Community**
  - "Ranger / Expedition" → **Milestone / Stage**
- **Avoid:** overpromising ("guaranteed job!"), corporate buzzwords, talking down, exaggeration.
- **Emoji:** not part of the brand. Do not use in product/marketing copy. Status meaning is carried by icons + text, never color or emoji alone.
- **Content mix (70/20/10):** 70% *The Guide* (tips, how-tos — "Here is a tool for your journey"), 20% *The Navigator* (learner/volunteer/partner stories — "Others are on this path with you"), 10% *The Compass* (donate/volunteer/enroll — "The next step on your trail is here").

**Example copy in-voice:**

- CTA labels: "Find your Trail", "Take the Next Step →", "Support the Mission", "View All Trails →"
- Reassuring microcopy: "We'll only use this to send trail updates."
- Callout accent (Caveat): *start your journey today*

---

## Visual Foundations

**Overall vibe:** nature-inspired, warm, soft, and reassuring — "calm confidence." Generous whitespace, gentle motion, rounded forms. Never hype, neon, or high-tech.

**Color.** Four brand colors, each with clear intent:

- **Trail Green `#2F6B3F`** — primary: action buttons, headings, growth themes.
- **Deep Teal `#2F6F7E`** — secondary: containers, nav header background, footer, depth.
- **Sky Blue `#7FAFC6`** (tint `#EDF5F8`) — surface: backgrounds, cards, "white-space equivalent."
- **Sun Amber `#F5A623`** — accent: **one** "Next Step" CTA per screen, progress markers, highlights.
- Neutrals: Trail Light `#FAFAF7` (main bg), Warm Gray `#E2E4E1` (borders/dividers), Slate `#4A4F4D` (body text), Charcoal `#2A2E2C` (headings/icons).
- Ramps exist for Green & Amber (100/300/500/700). **Max 1–2 background colors per surface.**
- **Sun Amber rule:** never more than one amber CTA per screen; never decorative. Never rely on color alone for meaning (pair with icon + text).

**Type.** Poppins (geometric, modern, confident) for headings H1–H4; Open Sans (Roboto fallback; highly readable, neutral) for body & UI; Caveat (handwritten, warm) for accent only — trail names / short pull quotes, **max one per page, never body or UI.** Scale: H1 36–48 / H2 28–36 / H3 22–28 / H4 18–22 / body 16–18 / small 14–16 / label 14–16. Minimum sizes honor accessibility guidance — never shrink below.

**Spacing & layout.** 8px-based scale (4·8·16·24·32·48·64). Clear vertical flow; content hierarchy drives layout; predictable rhythm reduces cognitive load. Generous margins and padding. Simple content blocks, one primary CTA per view.

**Radius.** Soft & approachable: sm 8px · md 14px (buttons, inputs) · lg 22px (cards) · pill 999px (badges). No sharp corners.

**Backgrounds.** Flat brand colors and light neutral surfaces — **no aggressive gradients.** Card media may use a soft green tint gradient (`--tt-green-100 → --tt-green-300`) as a placeholder for photography. Imagery, when present, is candid documentary **photography** (diverse people, learning in motion, natural/soft light) or **hand-drawn/watercolor illustration** (earthy palette; trails, bridges, maps, compasses). Imagery color vibe: warm, natural, muted greens/blues — never cool tech, neon, or glossy stock.

**Borders.** 1px Warm Gray on cards/dividers; 1.5px Warm Gray on inputs and secondary-button outlines (teal outline for secondary buttons).

**Shadows.** Soft and low-contrast: card `0 12px 28px rgba(42,46,44,.10)`, soft `0 6px 16px rgba(42,46,44,.08)`, amber CTA glow `0 2px 8px rgba(245,166,35,.35)`. No hard drop shadows on the logo, ever.

**Focus.** Green focus ring `0 0 0 3px rgba(47,107,63,.15)` on inputs and interactive fields.

**Animation & interaction.** Purposeful only — "avoid decorative animation without meaning." Scroll fade-ins for orientation; hover states to reinforce interactivity; progress indicators to signal advancement. Cards **lift** on hover (`translateY(-3px)` + card shadow, \~.15s). Buttons transition background/color on hover (primary → green-700; amber → amber-700; secondary → sky-100 fill). Press = darker color (no aggressive shrink). Easing: gentle/standard, short (\~.15s). No bounces.

**Transparency & blur.** Used sparingly — the amber shadow and focus ring use low-opacity brand color; otherwise surfaces are solid. No heavy glass/blur motifs.

---

## Iconography

The brand book does not ship an icon font or SVG icon set, and none were included in the provided sources. TTDS relies on a small set of **semantic status glyphs used inline with text** (never color-alone):

- Success `✓` · Info `ⓘ` · Warning `⚠` — as seen in the copy-ready alerts.
- Directional affordance: a trailing arrow `→` on forward-motion CTAs ("Take the Next Step →").

**Emoji are NOT used** in product or marketing copy. Where richer UI icons are needed (nav, dashboard, feature blocks), substitute a **stroke icon set that matches the calm, rounded, human tone — Lucide** (rounded caps/joins, \~1.75–2px stroke) — pulled from CDN. **This is a substitution, flagged below** — swap for an official TT icon set if one exists. Do not hand-draw brand marks or logos; render the wordmark in Poppins type where a logo would go (no logo files were provided).

**In print (Trail Kits, program modules).** Use the `TrailIcon` component — pinned Lucide `0.462.0`, `strokeWidth` 1.9, 12–14px, `currentColor` so it inherits its label's ink. Every icon sits beside a text label; none carries meaning alone. Icons mark *section labels and callout kinds*, never body sentences or decoration. The stable vocabulary:

| Meaning | Icon | Meaning | Icon |
| --- | --- | --- | --- |
| Pro tip | `lightbulb` | Watch out | `triangle-alert` |
| Best practice | `award` | Remember | `bookmark` |
| From your coach | `compass` | Checklist | `list-checks` |
| Access / permissions | `key-round` | Proof it worked | `circle-check-big` |
| What it does *not* do | `circle-slash` | Rollback | `rotate-ccw` |
| Announcement to send | `mail` | Video | `play` / `video` |
| Audio | `headphones` | Certification | `graduation-cap` |
| Sequence / which first | `route` | Time commitment | `calendar-days` |
| Nonprofit / organization | `building-2` | Individual learner | `user` |

One icon per label, at the same size within a page. If a new meaning needs an icon, add it to this table rather than picking ad hoc.

---

## The Three Design Branches

TTDS carries **one brand in three registers**. All three share the wordmark, Poppins/Open Sans, Trail Green, Deep Teal, the trail metaphor, and the voice rules. They differ deliberately, because their readers are in different relationships with the organization.

### Branch 1 — Trail Kit (`.trail-kit`) · external, sold to clients and the public

A Trail Kit is a **notebook you buy** — from our site or Etsy — a printable, tabbed field guide bundling Build With Me videos, templates, best practices, and audio links so someone can do a specific thing on their own (e.g. *Enabling Einstein Activity Capture*).

- **Self-paced, and the kit IS the coach.** The buyer has no mentor and no cohort. The notebook plays that role and may address them directly (`CoachNote`) — it walks them through as if they were in a program. What it must never do is reference a *human* mentor or coach they do not have, or imply a Salesforce certification is required; human-mentor language belongs to the program branch.
- **Every kit ships with test data. This is not a convenience — it is the coaching.** A buyer with no records cannot practise anything, and "go and find some data" is exactly the friction that stops people before they start. Supplying designed CSVs removes the whole first hurdle, which is the part a coach would otherwise have to do for them. Treat it as a required companion asset, never an optional extra.
- **Design the data so the lesson is demonstrable.** Tidy sample data teaches nothing. Build in the edge cases the kit teaches — records with no children so an inner join visibly drops rows, a near-duplicate so a total is quietly wrong, blank fields so filters behave unexpectedly. If the kit makes a claim, the data must let the reader watch it happen.

#### Two editions — same product line, two audiences

Set with a modifier class on the same scope. Both share the paper, Clay accent, tabs, and 5-beat spine; what differs is the *why* the kit must answer and where it points at the end.

|  | `.trail-kit.is-learner` | `.trail-kit.is-nonprofit` |
| --- | --- | --- |
| **Reader** | An individual learning Salesforce on their own, upskilling, or working at a company and needing guidance | A nonprofit team enabling the feature themselves, with no admin on staff |
| **The "why"** | Why this makes me employable — career case | Why our organization needs this and what it costs us not to — organizational case |
| **Tab 1** | Orient | **Why** (the case they can take to their ED or board) |
| **Closes on** | Programs placemat + registration code, then next-kit code | **The Digital Compass page** |
| **`--tt-kit-why`** | Clay | Deep Teal |

- **Surface:** warm paper `#FBF7F0`, hairline rules, visible page furniture, printed edge tabs.
- **Accent:** **Clay `#B4552D`** — appears *only* in Trail Kits, so a kit is recognizable across a desk. Deep Teal leads.
- **Register:** field guide. QR codes to video/resources, marginalia tips and watch-outs in a side rail, ruled note pages, dot-grid sketch areas, and the kit's own coaching voice.
- **Structure — the 5-beat spine** (this is what makes a second kit feel familiar): learner edition `Orient → Prepare → Build → Verify → Next Trail`; nonprofit edition `Why → Decide → Build → Verify → Next Step`. One printed tab each.
- **Resources & affiliate links.** Every kit carries a resources page: curated external tools and guides as `ResourceLink` rows with QR codes. Commissioned links (K2 University study guides, Jotform, etc.) carry a visible **Affiliate link** marker, and the page closes with a plain-language disclosure. Two rules: disclosure is always visible, never a footnote; and **no kit can require a paid product to complete.**
- **Covers:** front and back cover images, series number, and a kit code (`TK-01-EAC`, `TK-01-EAC-NP`), so it reads as a substantial object rather than a handout.
- **Reader:** working alone, unsupervised, by choice.

### Branch 2 — Program Curriculum (`.program-trail`) · official Foundations / Guided / Mastery content

Official program material for enrolled learners and their mentors. This must read as a **credential**, not a purchase.

- **Surface:** cool document `#FDFDFC`, cool-gray rules, a stage-colored module band.
- **Stage colors** — one per trail, so a learner knows which trail a page belongs to: Foundations Trail = **Deep Teal**, Guided Trail = **Trail Green**, Trail of Mastery = **Charcoal**. Set with `.program-trail.is-foundations` / `.is-guided` / `.is-mastery`.
- **No Clay and no Sun Amber, ever.** There is nothing to sell to someone already enrolled — this is the single clearest signal separating the branches.
- **Register:** competency codes, learning objectives, three-level rubrics (Emerging / Proficient / Exemplary), evidence checklists.
- **Ends in:** a **mentor sign-off** — an outside party attesting to observed work. This is the artifact Trail Kits deliberately do not have, and it is what "experience-validated" means.
- **Reader:** enrolled, supervised, being assessed.

**Cross-references between branches are allowed in one direction only:** a program module may cite a Trail Kit as optional reference ("covers the mechanics; not a substitute for the supervised work"). A Trail Kit invites the reader toward a program on its closing spread. A Trail Kit never claims to *be* program content, and program content never carries a discount code.

### Branch 3 — Partner Recruitment (`.partner-trail`) · asking a nonprofit to HOST a project

**Do not confuse this with the Nonprofit edition Trail Kit.** They both address nonprofits and they are different jobs:

- A **Nonprofit edition Trail Kit** is *bought* by a nonprofit that wants to do the work **themselves**. It is a Trail Kit — paper, Clay, tabs.
- **Partner Recruitment** material asks a nonprofit to **host one of our learners** on a supervised project. Nothing is sold; they are being asked for two hours a week.

The reader here is an executive director, ops lead, or board member who has **not yet decided** that supervised project capacity is worth their time. They are not learning and not being assessed — they are weighing risk against outcome.

- **Surface:** sky-tinted `#F4F9FB` ground, white panels, `#EDF5F8` stat bands — brighter and cooler than either other branch.
- **Lead color:** Deep Teal (calm competence, not the green of learner growth). **No Clay** — that is retail-only. Exactly **one Sun Amber CTA per document**, and it always points to the **Digital Compass page**.
- **Register:** business case. Scannable sourced statistics, recognition-then-answer rows, a four-step process, an explicit "what we never ask" list, and the objection everyone actually raises, answered plainly.
- **Argument order is fixed: recognition first, offer second.** Name the constraint they already feel in their own organization before describing what we do about it. Never open with the program.
- **Ends in:** the Digital Compass page — the single destination for partner interest. No coupon, no discount code; nonprofits are not being sold a product.
- **Reader:** deciding whether to spend two hours a week on a maybe.

**Cross-branch rules.** A program module may cite a Trail Kit as optional reference. A Trail Kit invites the reader toward a program on its closing placemat. A Trail Kit never claims to *be* program content; program content never carries a discount code; and partner material never carries a coupon at all.

---

## Index / Manifest

**Root**

- `styles.css` — global entry point (imports only). Consumers link this.
- `readme.md` — this file.
- `SKILL.md` — Agent Skill wrapper for downloadable use.
- `thumbnail.html` — homepage tile.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `elevation.css` · `semantic.css` · `trail-kit.css` (retail branch scope) · `program.css` (program branch scope) · `partner.css` (nonprofit branch scope)

**`templates/`** — starting folders consuming projects copy:

- `trail-kit/TrailKit.dc.html` — the 12-page **Learner edition** kit (covers, 5 tabs, QR codes, resources & affiliate links, note pages, action plan, programs placemat with registration code, next-kit code), worked example: *Enabling Einstein Activity Capture*.
- `trail-kit-nonprofit/TrailKitNonprofit.dc.html` — the 8-page **Nonprofit edition** kit (Why / Decide / Build / Verify / Next Step, closing on the Digital Compass), same worked feature framed for a nonprofit team. Einstein Activity Capture\*.
- `program-module/ProgramModule.dc.html` — a 3-page official program module (objectives, week-by-week schedule, rubric, mentor sign-off), worked example: Guided Trail Module 3. **Program content is week-by-week / sprint-by-sprint — still in progress; the Trail Kit branch is the finished one.**
- `partner-brief/PartnerBrief.dc.html` — a 2-page leave-behind asking a nonprofit to **host** a supervised project (partner recruitment, not a Trail Kit), routing to the Digital Compass page.

**`guidelines/`** — foundation specimen cards (Design System tab): color, type, spacing, brand voice.

**`replit/`** — drop-in starter that gives a Replit app this design system and keeps it there.

| File | Role |
| --- | --- |
| `tt-tokens.css` | All 66 tokens as custom properties **plus a generated Tailwind v4 `@theme inline` block**. Both TT apps run v4, which removed `presets` — so there is no config step. **Generated** — never hand-edit. |

| `replit.md` | Agent context — rules, voice, naming, Penny guardrails, repos. What stops a *new* app drifting. |
| `tt-check.mjs.txt` | Build guard: raw hex, raw rgb, raw font stacks, British spelling, emoji, prohibited terms. |
| `tt-sync.mjs.txt` | `npm run tt:sync` — pulls the latest tokens from the design system repo. |

Two files are parked as `.txt` so this project's compiler does not bundle Node code into the browser bundle; drop the suffix on install.

See `guidelines/token-divergence.md` — the design system, Trail OS, and the public site currently run three token conventions with three divergent values, and two tokens the apps need (a display font, a canonical danger red) are undefined here.

**Repo:** `Transition-Trails/TTDS`. Apps pull tokens with `npm run tt:sync`, which reads `replit/tt-tokens.css` from `main`. See `github.md`.

**`components/`** — reusable primitives (each dir has `<Name>.jsx` + `.d.ts` + a prompt file + a card).

*Web & product (shared):*

- `actions/` → **Button**
- `forms/` → **Input**
- `content/` → **Card**
- `status/` → **Pill**, **Alert**, **Stepper**

*Trail Kit branch — print (`components/trail-kit/`):*

- **TabStrip** — printed edge tabs, doubling as in-PDF navigation
- **KitMeta** — time / level / prerequisites bar
- **QRLink** — real scannable QR to video, templates, audio
- **ResourceLink** — external resource row with QR and explicit affiliate disclosure
- **BuildStep** — numbered step with a "you should see" self-check
- **KitNote** — marginalia tip / watch-out / best practice / remember
- **NoteLines** — ruled writing area or dot grid
- **CoachNote** — the kit speaking as the reader's coach
- **TrailIcon** — inline Lucide icon (pinned CDN), sized and weighted for print

**Bound editions** — the assembled, sellable PDFs. Generated from the kit + insert sources; regenerate rather than hand-editing.

| Template | Deliverable |
| --- | --- |
| `templates/trail-kit-bound-learner/` | Learner kit, 23 pages, individual license |
| `templates/trail-kit-bound-nonprofit/` | Nonprofit kit, 21 pages, organization license |

**Shared inserts** — reusable one-pagers authored once and bound into many kits, never copied per kit:

| Template | Sheet |
| --- | --- |
| `templates/license/` | Permitted Use — license terms, individual or organization variant |
| `templates/glossary/` | Salesforce Glossary — 20 terms in plain English |
| `templates/setup-navigation/` | Navigating Setup — Quick Find, Object Manager, Lightning vs Classic |
| `templates/dev-org-setup/` | Dev Org Setup — free developer org and its real limits |
| `templates/where-to-practice/` | Where to Practice — developer org vs sandbox vs production |
| `templates/change-record/` | Change Record — fill-in sheet, one per change |

- **ActionPlan** — closing commitment table
- **KitCode** — next-kit redemption code and the one permitted Amber CTA

*Program branch — curriculum (`components/program/`):*

- **ProgramBand** — stage-colored module header
- **Objectives** — competency-coded learning objectives
- **Rubric** — three-level assessment table
- **SignOff** — evidence checklist and mentor signature lines

*Penny — the AI layer (`components/penny/`):*

- **PennyMessage** — one turn in a Penny conversation, learner or Penny side
- **PennyModeBadge** — which mode Penny is in (also exports `PENNY_MODES`)
- **HumanGate** — draft awaiting human approval; required on anything leaving the system
- **PennyFlag** — a signal Penny surfaced for a human to act on

*Partner branch — nonprofit business case (`components/partner/`):*

- **StatBlock** — large sourced statistic
- **NeedRow** — their constraint, then what changes
- **CompassCTA** — closing panel routing to the Digital Compass page

**`ui_kits/`**

- `website/` → marketing site recreation (Homepage, Programs, Get Involved).
- `portal/` → Trail OS, the Experience Cloud learner platform (Dashboard, Program Detail, Slack + dev org access).

**`assets/`** — see Caveats; no brand binaries were provided.

### Intentional additions

- **Stepper** — the brand book explicitly describes progress steppers (Amber = current step); built as a primitive.
- **Lucide icons (CDN)** — substituted for UI iconography since no icon set was provided (flagged).
- **The Trail Kit and Program Curriculum branches** — the brand book covers general guidelines only and says nothing about either product line yet. Both scopes, their components, and their templates are new work built on the book's foundations; they are candidates for folding back into Brand Book v3.

---

## Penny and Trail OS

**Trail OS** is Transition Trails' proprietary operating platform — Salesforce-native, hosted on Replit — serving learners, coaches, internal staff, and the **Trail Crew** (volunteers). It is simultaneously an internal operating system, a teaching laboratory, a client services platform, and coaching infrastructure. *TT runs on Trail OS; the founders are learners too.*

**Surfaces** (current as of the Trail Crew handbook, Oct 2026): **Program Map**, the staff app where the organization is run · **Homebase**, the people surfaces for learner, coach, volunteer, team and DevOps, each on audience-specific routes · an **Expo native mobile app** and a **browser extension**, both built but gated on release validation · the **Slack @penny bot**. Design for the surface you are in — a volunteer Homebase is not a learner Homebase with fields removed.

**Penny is the intelligence layer for the whole platform** — not a feature inside it. Every surface goes through **one server entry point**, and that single door is what keeps her voice, permissions and policy identical everywhere. **Model routing is by audience:** internal staff traffic goes to **Claude**; learner, coach, client and public traffic goes to **Gemini**. If a provider is down the request **fails visibly** — it never quietly switches. Brand promise: *"A penny for your thoughts."*

**Say the status honestly.** Four words, used precisely, everywhere: **Implemented** (code, authorization, persistence and workflow all work) · **Pilot or gated** (exists, but limited by scope, release or validation) · **Configuration-dependent** (needs credentials, scopes, metadata or a healthy connector) · **Planned** (contract or policy not complete). Never call something live because the code exists — and that applies to design artifacts too. A mock that implies something ships is the same lie as a status that does.

**The change chain.** All demand enters as a **Case**, becomes a **Change Request** if it warrants a platform change, is broken into **TT Stories**, committed to a **Sprint**, and deployed in a **Release**. Over it sit **Epic** (why), **Feature** (what), **Story** (what changes this sprint). Work only moves forward; going back is an explicit return to the previous state, never an edit in place.

### Designing anything Penny touches

Five principles, from the Customer Journey doc. These are constraints, not aspirations:

1. **Ask before telling.** One good question, not ten pieces of advice.
2. **Earn the right to the next moment.** A failed first quest or first career review does not recover.
3. **Augment the coach, never replace.** Penny flags it; the coach calls. Penny delivers the badge; the coach writes the note.
4. **Real experience, real recognition.** Never fabricate evidence or give empty praise.
5. **Every learner has a trail; every trail has a Penny.** Posture shifts by trail: Guided is warm and structured, Explorer curious, Mastery peer-level, Alumni celebratory.

**Voice:** one sentence, then a question — never more than one question at a time. Name the *specific* thing someone did ("You identified the correct object relationship"), never "Great job!". No emoji, consistent with the rest of the brand.

**Modes** — behavior changes completely between them, so a Penny surface always shows which one is active: **Coach** (Socratic) · **Coordinator** (action-oriented) · **Quest Guide** (coaches, never solves) · **Client Liaison** (professional, human-gated).

**Guardrails — human in the loop, always.** This is a trust architecture, not a limitation. Penny never auto-posts to a channel a client can see, never sends an unsolicited message, never names an individual in a client-facing flag, and never advances a deployment alone. Anything leaving the system is wrapped in `HumanGate`. Scope, budget, and operational questions route to the Trail Guide.

Cards live under the **Penny** group in the Design System tab; components under `components/penny/`. Sources: `uploads/TrailOS_Product_Vision_v1.0 (1).docx`, `Penny_Six_Pager_v2.1 (1).docx`, `Penny_Customer_Journey_v1.1 (1).docx`, `Penny AI Trail Companion_ Strategic Systems and Operations Briefing.docx`.

---

## Trail Kits are Salesforce products

Trail Kits are **Product2 records in Trail OS**, with steps, assets, decisions, and troubleshooting rows as related child records. The printed PDF is an output of that record — not a hand-built document. Producing kit 08 is a data entry session plus a layout pass.

- **Object model, field map, and the production runbook:** `guidelines/trail-kit-production.md`
- **A real record export, which doubles as the schema:** `templates/trail-kit/kit-record.json`

The dividing line matters: **identifiers come from the record, prose is written by hand.** Anything that appears in the kit more than once — a coupon code, a URL, a page count, a step's verify line — lives in the record and is read from there. Body copy stays as editable text in the document, because that writing is the product and it must stay click-editable.

---

## Caveats & substitutions

- **No logo files.** The brand book references `TT_Badge_1024px_transparent.png`, `TT_Stacked_White_*`, `TT_Circle_*`, `TT_AppIcon_1024px.png`, but none were supplied. The wordmark is rendered in **Poppins type** everywhere a mark would appear. *Please provide the logo PNGs to complete the identity.*
- **No local font files.** Poppins, Open Sans, and Caveat are loaded from the **Google Fonts CDN** (all three are available there). No `.ttf`/`.woff` binaries were provided.
- **No photography or illustration** assets were provided; card media and hero images use soft green-tint placeholders. *Please provide brand photography/illustration.*
- **Icons substituted** with Lucide (CDN) per above.
