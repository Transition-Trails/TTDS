# Migration report — `Transition Trails Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Transition Trails Design System` — a design-system project from the standalone version (authored there, namespace `TransitionTrailsDesignSystem_335df4`), so it becomes a system made from the Design System type rather than a canvas.  
Result: carried file for file (the lines below name what is not), no tokens.json and no tokens.css written; 29 components (2 with a card in the project); 0 starter template(s) kept aside; 424 files in the system’s table (31.2 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 0 file(s) go to its file store with upload_asset; nothing is written to its store).


Build notes:

- `24 extra section(s): docs/components/partner/partner.prompt.md, docs/components/program/program.prompt.md, docs/components/status/status.prompt.md, docs/components/trail-kit/trail-kit.prompt.md, github.md, guidelines/founder-voices.md, guidelines/replit-handoff.md, guidelines/token-divergence.md, guidelines/token-reconciliation.md, guidelines/trail-kit-production.md, replit/README.md, replit/replit.md, templates/trail-kit-02-nonprofit/data/README.md, templates/trail-kit-02/data/README.md, templates/trail-kit-nonprofit/data/README.md, templates/trail-kit/data/README.md, …`
- `3 markdown files past the 24-section / 200 KB limits stayed plain files: uploads/TRAIL OS and ACADEMY/changesets/TOS-DOC-05 - Extend the data classification.md, uploads/TRAIL OS and ACADEMY/changesets/TOS-DOC-06 - Trail OS UX Standards (brand-aligned).md, uploads/TRAIL OS and ACADEMY/github.md`
- `362 files outside the layout, kept as is (listed under Claude’s context, no section of their own): components/actions/Button.jsx, components/actions/Button.prompt.md, components/actions/buttons.card.html, components/content/Card.jsx, components/content/Card.prompt.md, components/content/card.card.html, components/forms/Input.jsx, components/forms/Input.prompt.md, …`

## Mapped

- README.md ← the project’s readme
- every file of the project ← itself, with its bytes unchanged; 5 are carried under another name, each listed in the README with its old name, and the rest are at their own paths under project/. project/migration-map.json lists each file, what it is and where it was. The lines below name the ones carried under another name, the few that are not byte for byte and why, and what was written new (no components/bundle.js and no components/bundle.css by the migration: a page of the project loads the bundle and the stylesheets it links, as in the standalone app)
- no tokens.json and no tokens.css are written: the system’s own files, a tokens.json or tokens.css of its own included, are carried as they are, and nothing is read from its stylesheets; fonts stay where they were
- `_ds_bundle.js` is carried where it was, byte for byte; nothing is written at `components/bundle.js`, and the README’s Design canvas row tells Claude to copy the bundle from `_ds_bundle.js`
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- `components/partner/partner.prompt.md` has a name the Design System page, the platform or the migration keeps for itself (read by the Design System page as `components/partner/README.md`) — carried as `docs/components/partner/partner.prompt.md`
- `components/program/program.prompt.md` has a name the Design System page, the platform or the migration keeps for itself (read by the Design System page as `components/program/README.md`) — carried as `docs/components/program/program.prompt.md`
- `components/status/status.prompt.md` has a name the Design System page, the platform or the migration keeps for itself (read by the Design System page as `components/status/README.md`) — carried as `docs/components/status/status.prompt.md`
- `components/trail-kit/trail-kit.prompt.md` has a name the Design System page, the platform or the migration keeps for itself (read by the Design System page as `components/trail-kit/README.md`) — carried as `docs/components/trail-kit/trail-kit.prompt.md`
- no components/bundle.css is written by the migration: the system’s stylesheets `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/site.css`, `tokens/elevation.css`, `tokens/semantic.css`, `tokens/trail-kit.css`, `tokens/program.css`, `tokens/partner.css` are carried as written, at `project/styles.css`, `project/tokens/fonts.css`, `project/tokens/colors.css`, `project/tokens/typography.css`, `project/tokens/spacing.css`, `project/tokens/site.css`, `project/tokens/elevation.css`, `project/tokens/semantic.css`, `project/tokens/trail-kit.css`, `project/tokens/program.css`, `project/tokens/partner.css`; a page of the project loads the stylesheets it links, as in the standalone app
- 22 template(s) came across as files under their own folders; the Design System page has no place for a template and shows none: `Change Record — insert sheet`, `Dev Org Setup — insert sheet`, `Salesforce Glossary — insert sheet`, `Learner Kit Series — planning document`, `Permitted Use — insert sheet`, `Nonprofit Kit Series — planning document`, `Nonprofit Partner Brief`, `Program Module`, `Readiness vocabulary — deck`, `Report Types — insert sheet`, `Sandboxes — insert sheet`, `Security Model — insert sheet` …

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `Button` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Card` | ✓ | ✓ | a card in the project | ✓ |
| `Input` | ✓ | ✓ | a card in the project | ✓ |
| `CompassCTA` | ✓ | — | — (listed without an example) | ✓ |
| `NeedRow` | ✓ | — | — (listed without an example) | ✓ |
| `StatBlock` | ✓ | — | — (listed without an example) | ✓ |
| `HumanGate` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PennyFlag` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PennyMessage` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PENNY_MODES` | — | — | — (listed without an example) | — |
| `PennyModeBadge` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Objectives` | ✓ | — | — (listed without an example) | ✓ |
| `ProgramBand` | ✓ | — | — (listed without an example) | ✓ |
| `Rubric` | ✓ | — | — (listed without an example) | ✓ |
| `SignOff` | ✓ | — | — (listed without an example) | ✓ |
| `Alert` | ✓ | — | — (listed without an example) | ✓ |
| `Pill` | ✓ | — | — (listed without an example) | ✓ |
| `Stepper` | ✓ | — | — (listed without an example) | ✓ |
| `ActionPlan` | ✓ | — | — (listed without an example) | ✓ |
| `BuildStep` | ✓ | — | — (listed without an example) | ✓ |
| `CoachNote` | ✓ | — | — (listed without an example) | ✓ |
| `KitCode` | ✓ | — | — (listed without an example) | ✓ |
| `KitMeta` | ✓ | — | — (listed without an example) | ✓ |
| `KitNote` | ✓ | — | — (listed without an example) | ✓ |
| `NoteLines` | ✓ | — | — (listed without an example) | ✓ |
| `QRLink` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ResourceLink` | ✓ | — | — (listed without an example) | ✓ |
| `TabStrip` | ✓ | — | — (listed without an example) | ✓ |
| `TrailIcon` | ✓ | ✓ | — (listed without an example) | ✓ |

Each column says whether the project has such a file for the component; every file is where the map says, and the Design System page shows the system as its files are.

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

The project’s files as carried, counted by what each is (421 files; the map lists every one):
- 122 × kit piece
- 50 × document
- 41 × data
- 31 × page
- 30 × component source
- 28 × component types
- 27 × foundations page
- 21 × doc
- 17 × image
- 16 × showcase page
- 11 × global stylesheet
- 9 × component guide
- 9 × stylesheet
- 3 × other
- 2 × component card
- 1 × bundle
- 1 × renamed tool file
- 1 × compiler output
- 1 × media

## Left out: nothing to carry

These files of the project were not carried because they hold nothing to carry (2):
- `guidelines/voice-angela-landrith-print.html`: the standalone version’s PDF-export print copy of `voice-angela-landrith.html`
- `templates/trail-kit-bound-nonprofit/TrailKitBoundNonprofit-print.dc.html`: the standalone version’s PDF-export print copy of `TrailKitBoundNonprofit.dc.html`

## Kept aside

Nothing.

## Dropped

Nothing.
