# Trail Kit production — system-driven from Trail OS

Every Trail Kit is a **Product2 record in Trail OS (Salesforce)** with its content assets as related records. The printed PDF is an *output* of that record, not a hand-built document. Kit 02 should cost a data entry session plus a layout pass — not a rebuild.

`templates/trail-kit/kit-record.json` is a real export of Kit 01 and doubles as the schema example.

---

## Why the record is the source of truth

Every recurring defect in Kit 01 came from the same root cause: **the same fact written in more than one place.** The coupon code lived in a component and again in inline markup. Page numbers were hand-typed on 13 pages. A URL appeared in a QR code and again in a resource row. Fix one, miss the other.

The record removes the duplication at its source. If a value appears in the printed kit more than once, it belongs in the record and gets read from there — not retyped.

**What stays hand-written:** the prose. Explanations, coach notes, the "why this matters" copy. That writing is the product — it needs a person's judgment, it must stay click-editable in the design editor, and it must paint instantly when the page streams. Do **not** convert body copy into template holes.

**What comes from the record:** identifiers, counts, URLs, coupon codes, step titles and their verify lines, resource rows, troubleshooting rows, decision prompts, screenshot slot ids. Anything that must agree with itself across pages, or that changes per kit while the layout stays fixed.

---

## Object model

### `Product2` (standard) — one per kit
The kit itself. Uses standard fields so it prices, sells, and reports like any other product.

| Field | Purpose |
|---|---|
| `Name`, `ProductCode` | `Trail Kit 01 — Einstein Activity Capture`, `TK-01` |
| `Family` | Always `Trail Kit` — separates kits from program enrollments |
| `Trail_Kit_Number__c` | The number printed on every page header |
| `Feature_Area__c` | The Salesforce feature the kit covers |
| `Version__c`, `Published_Date__c` | Print these on the back cover so support knows which edition someone holds |
| `Time_Estimate_Minutes__c`, `Difficulty__c` | The cover's expectation-setting stats |
| `Requires_Credential__c` | `None` for every kit — kits never require a certification |
| `Next_Kit_Code__c` | Drives the "your next trail" cross-sell |
| `Landing_URL__c`, `Etsy_URL__c`, `Compass_URL__c` | Every TT-owned QR target |

### `Trail_Kit_Edition__c` — child, one per audience
Two per kit: **Learner** and **Nonprofit**. Same feature, different reasoning and different framing. Carries the tab labels, page count, and that edition's coupon. `Includes_Affiliate_Links__c` is the switch that keeps affiliate rows out of the nonprofit edition.

### `Trail_Kit_Step__c` — child, the Build tab
One record per step, with `Editions__c` controlling which editions include it (the nonprofit edition runs 5 steps, the learner edition 7). `Verify_Text__c` is required — **no step ships without an observable outcome.** `Screenshot_Slot_Id__c` maps to the `<image-slot id>` in the document, which is how a screenshot survives a re-layout.

### `Trail_Kit_Asset__c` — child, the content inventory
Every video, audio segment, template, and resource link. `Type__c` is `Video | Audio | Template | Resource Link | Screenshot`. `Is_Affiliate__c` drives the affiliate badge **and** the disclosure block — if any included asset is affiliate, the disclosure must print. That relationship should be enforced, not remembered.

### `Trail_Kit_Decision__c` and `Trail_Kit_Issue__c` — children
The Decide tab's prompts, and the troubleshooting table's symptom / likely cause / fix rows. Both ordered by `Sort_Order__c`.

---

## Producing a new kit

1. **Clone the Product2 record** in Trail OS, set number, feature area, and time estimate.
2. **Enter the children** — steps with verify lines, assets, decisions, issues. This is the actual authoring work and it happens in Salesforce, where it is reportable and reviewable.
3. **Export the record graph** to `kit-record.json`.
4. **Copy `templates/trail-kit/`** (or `trail-kit-nonprofit/`) to a new folder and fill the layout from the record.
5. **Write the prose.** The record gives you the skeleton; the voice is still yours.
6. **Run the pre-print checklist** below.
7. **Attach the finished PDF** back to the Product2 record as a ContentVersion, tagged with `Version__c`.

## Bound editions — the sellable PDF

`templates/trail-kit-bound-learner/` and `templates/trail-kit-bound-nonprofit/` are the **assembled deliverables**: the full kit plus all six inserts in one document, one file per audience.

| Edition | Pages | License variant |
|---|---|---|
| Learner | 23 (17 kit + 6 inserts) | Individual |
| Nonprofit | 21 (15 kit + 6 inserts) | Nonprofit organization |

Assembly rewrites each insert's eyebrow line for a bound context — a loose sheet says "Read this before Tab 3", the bound version says "Decide this before Tab 3, page 5" with the real page number. Never bind a sheet with its loose-hand-out copy intact.

**These are generated, not hand-edited.** They are assembled from `templates/trail-kit*/` and the six insert templates. Edit the source, then regenerate — a fix applied only to a bound file is lost on the next build, and a fix applied only to a source will not appear in the PDF already on sale.

The bound contents page carries two link columns: the kit's tabs and the six inserts. Every row is an internal anchor, so the PDF's table of contents is tappable.

### Exporting

Export to PDF from the bound file. Both stay useful in two places at once:

- **Printed.** Letter, one section per sheet. The fill-in sheets (change record, note pages, verification log) are why people print it.
- **GoodNotes / annotation apps.** Internal anchors and external links survive the PDF, so a reader on an iPad taps a contents row to jump and taps a QR block to open the video. The screenshot slots and ruled areas are where they write.

Because both audiences annotate, never place content where a reader is meant to write, and never rely on a QR alone — every code sits beside a label and a caption that say what it opens.

## QR codes

`QRLink` prints a short line under the label showing **where the code goes** — the host only (`transitiontrails.org`), single-line with an ellipsis fallback. It does not print the full path: a path needs ~132px against the ~115px text column of a 2in rail, so it wrapped and stranded characters mid-word. The QR itself carries the real URL.

That means **the caption has to do the explaining — never repeat the URL in it.** A caption restating the href shows the reader the same string twice.

Good: "16 min walkthrough" · "Free, permanent, no credit card." · "Print more, free." · "Scan for current exam format and fee."
Bad: "transitiontrails.org/kits/license" · "developer.salesforce.com/signup"

For anything whose figures change (exam fees, storage limits, pricing), point at the code rather than printing the number, and say so in the caption.

## Kit numbering

**One sequence, numbered in the order kits ship: 01, 02, 03…** Series membership is an attribute of a kit, not part of its number — a kit can move between series without being renumbered, and a buyer never has to work out what a prefix means.

Product code is `TK-<nn>-<FEATURE>`, plus `-NP` for the nonprofit edition: `TK-01-EAC` and `TK-01-EAC-NP` are the two editions of one kit, not two kits. Both editions share the kit number always.

Every identifier inside a kit carries the number too — `image-slot` ids (`kit01-shot-step1`, `kit01np-cover-front`), coupon codes, and URLs. When cloning a kit, renumber all of them; a stale id is invisible in print but collides with the kit it was copied from, so two kits would share dropped screenshots.

Do not skip numbers to imply a bigger catalog. Kit 01 shipping alone is honest; Kit 07 shipping alone tells a buyer six things are missing.

## Shared inserts

Some pages are not kit-specific. Author them **once** under `templates/` and include the same sheet in every kit that needs it — never copy the markup into a kit and edit it there.

| Insert | Template | Notes |
|---|---|---|
| Permitted Use | `templates/license/` | **Required in every kit.** Set `edition` to `individual` or `organization`. |
| Salesforce Glossary | `templates/glossary/` | Twenty terms the kits use without defining. |
| Navigating Setup | `templates/setup-navigation/` | Every kit that says "type this into Quick Find" — so, all of them. |
| Where to Practice | `templates/where-to-practice/` | Decide before setting anything up; ships with the dev-org sheet. |
| Sandboxes | `templates/sandboxes/` | Any kit whose feature would be built in a real org. Reference, not a build-along — Developer Edition has no sandbox. |
| Security Model | `templates/security-model/` | Any kit touching users, access, or "why can this person not…". |
| Report Types | `templates/report-types/` | Any kit that produces or depends on a report. The adoption lever behind all reporting. |
| Dev Org Setup | `templates/dev-org-setup/` | Every kit that expects a practice org. |
| Change Record | `templates/change-record/` | Fill-in sheet; buyers photocopy it. |

Bind them behind the tabs in this order: **Permitted Use · Glossary · Navigating Setup · Where to Practice · Dev Org Setup · Change Record.** Where to Practice comes *before* Dev Org Setup deliberately — it exists to stop someone setting up a developer org that cannot host the feature, so it cannot sit after the sheet it is meant to gate. Three carry weight beyond their page count:

- **Permitted Use** is the one page a paid product cannot ship without. The learner edition licenses to one person; the nonprofit edition licenses organization-wide *after we verify nonprofit status*. Never ship a kit with the wrong variant.
- **Where to Practice** exists because the dev-org sheet alone is misleading: several features our kits cover are absent from Developer Edition, and a reader who follows only that sheet concludes they did something wrong. The two ship together.
- **Change Record** is the programs' central discipline reduced to one page. It is also the cheapest thing in the kit and the most cited back to us.

When Salesforce changes a limit or renames a menu, these files change once — not once per kit.

## The product companion

A Trail Kit is a **Product2 record with a companion set of content**, not a PDF with extras. The kit is not shippable until all of these exist and are linked to the product:

| Companion asset | Note |
|---|---|
| Kit PDF | Generated from the template. Never hand-edited. |
| Build With Me video | Chaptered to match the numbered build steps exactly. |
| **Test data CSVs** | Required on every kit. Delivered in the kit’s Google Drive folder on purchase. |
| Landing page | Every QR destination resolves from a field on the kit’s Product2 record — see below. |
| Shared inserts | Referenced from `templates/`, never copied into the kit. |
| Referral link and code | On the back cover of every kit, and the reason the permitted-use sheet can say "share your link, not the file". |

### QR destinations come from the product record

**No QR URL is typed into a template.** Each one resolves from a custom URL field on the standard **Product2** record for that kit — `Build_Video_URL__c`, `Test_Data_URL__c`, `Kit_Landing_URL__c`, `Programs_URL__c`, `Compass_URL__c`, `Certification_URL__c`, `Audio_URL__c`.

Two consequences worth stating plainly:

- **Assembly fails rather than ships when a required field is blank.** A dead QR in a printed notebook is worse than no QR at all — the reader cannot tell whether the link is broken or they scanned it wrong, and there is no way to fix a printed page.
- **A URL change is a record edit, not a reprint of the source.** Move the video, change the Drive folder, rename a landing page, and the next generated PDF picks it up. This is the whole reason kits live in Salesforce rather than as loose files.

Destinations we do not own — Salesforce help articles, credential pages — stay literal in the template, since there is no record field that should govern them.

### Test data is required on every kit

**No kit ships without CSVs.** This is a product principle, not a checklist item: we remove the difficulty of getting started so the buyer spends their time building the skill rather than inventing records. A kit that assumes the reader already has usable data has quietly handed back the hardest part of learning alone — and that part is precisely what our coaching exists to absorb.

The practical test: could someone with an empty practice org complete every exercise using only what came in the download? If not, the data set is incomplete.

### Test data is designed, not dumped

Build the CSVs so the kit's own teaching points are demonstrable. Tidy data teaches nothing. Kit 02's set deliberately contains:

- **Accounts with no related records** — without these, the *with or without* join is an abstraction and the reader never sees rows disappear.
- **A near-duplicate pair** — the reason a total is quietly one too high.
- **Scattered blank fields** — where people first learn that a filter treats blank differently from zero.
- **Spread across months and owners** — so grouping and summarizing produce something worth reading.

Use `.example.com` / `.example.org` addresses throughout so nothing can receive mail, and say in the README how to filter the data back out.

## Required pages

Every kit, both editions, ships with these. An edition may add pages but must not drop one:

**Front cover · How to use / contents · Tab 1 · Tab 2 · Tab 3 Build · Tab 4 Verify · When it doesn't work · How to turn this off · Video index · Certifications · Tab 5 Next · About Transition Trails · Back cover**

Three of these are the reason a kit is worth paying for rather than reading free documentation:

- **When it doesn't work** — the failure modes, with cause and fix. Free docs describe the happy path; this is what people actually pay for.
- **How to turn this off** — a rollback page. Nobody else includes one, and it is what makes a nervous buyer willing to try something on a live org.
- **Video index** — chaptered, with runtimes. The videos are a large part of the price; without an index the buyer cannot see what they bought.

The learner edition additionally carries an action plan, note pages, and the programs placemat. The nonprofit edition carries neither affiliate links nor the placemat.

## Pre-print checklist

- [ ] Every identifier in the document matches the record — kit number, product code, coupon, every URL.
- [ ] Page numbers in footers match the contents page. Re-check after *any* page insert.
- [ ] Every step has a verify line and a screenshot slot with a unique id.
- [ ] Affiliate rows present ⇒ disclosure block present. Nonprofit edition ⇒ neither.
- [ ] Every TT-owned URL resolves. A QR to a 404 is worse than no QR.
- [ ] No page overflows its print box; no content collides with a footer.
- [ ] All thirteen required pages present.
- [ ] Contents page numbers match the footers. Footers are derived from document order — never hand-typed.
- [ ] US English throughout — sweep for *licence, authorised, summarised, organisation, behaviour, recognise, analyse, practise, centre, colour*. "license" is both noun and verb; this has regressed twice.
- [ ] Mono/code strings carry `white-space: nowrap` so they cannot break across lines.

---

## Reporting this unlocks

Because kits are Product2 records with real children, Trail OS can answer questions the PDFs never could: which kit sells best per channel; which affiliate partners earn; whether kit buyers convert into program learners and at what rate; which feature areas have no kit yet. The `Next_Kit_Code__c` chain and the coupon codes are what make that attribution possible — which is the real reason each edition gets its own code rather than sharing one.
