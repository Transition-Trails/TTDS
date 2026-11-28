# Trail Kit production — system-driven from Trail OS

Every Trail Kit is a **Product2 record in Trail OS (Salesforce)** with its content assets as related records. The printed PDF is an *output* of that record, not a hand-built document. Kit 02 should cost a data entry session plus a layout pass — not a rebuild.

`templates/trail-kit/kit-record.json` is the Kit 01 v2 record and doubles as the schema example. It is prototyped here until the Trail OS records exist; after that it is exported, not hand-edited.

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
Two per kit: **Learner** and **Nonprofit**. Same feature, different reasoning and different framing. Carries the tab labels, page count, and that edition's coupon (an Etsy coupon for Etsy editions; never printed in the kit). `Includes_Affiliate_Links__c` is the switch that keeps affiliate rows out of the nonprofit edition.

### `Trail_Kit_Step__c` — child, the Build tab
One record per step, with `Editions__c` controlling which editions include it (the nonprofit edition runs 5 steps, the learner edition 7). `Verify_Text__c` is required — **no step ships without an observable outcome.** `Screenshot_Slot_Id__c` maps to the `<image-slot id>` in the document, which is how a screenshot survives a re-layout.

### `Trail_Kit_Asset__c` — child, the content inventory
Every video, audio segment, template, and resource link. `Type__c` is `Video | Audio | Template | Resource Link | Screenshot`. `Is_Affiliate__c` drives the affiliate badge **and** the disclosure block — if any included asset is affiliate, the disclosure must print. That relationship should be enforced, not remembered.

### `Trail_Kit_Decision__c` and `Trail_Kit_Issue__c` — children
The Decide tab's prompts, and the troubleshooting table's symptom / likely cause / fix rows. Both ordered by `Sort_Order__c`.

---

## The production record

Every kit has one **production record**: a Claude Doc named `Trail Kit nn Production Record: <Feature>`, copied from the previous kit's record. It holds the Product2 fields, editions, steps with verify lines and slot ids, decisions, issues, assets, QR destinations, the Etsy listing, the screenshot log, the practice-org change log, open differences from this guideline, and the pre-print checklist. Open items are checkboxes so whoever builds them (ChatGPT for images and creative work, Claude for pages and org work) can pick them up from the Notion build queue. Kit 01's record is the worked example: [Trail Kit 01 Production Record](https://claude.ai/artifact/JQc8h5qf3HFjac376LcvDT).

The record is filled first and entered into Trail OS from there. When the record and the pages disagree, the record wins and the page is fixed.

## Producing a new kit

0. **Copy the production record** and fill what you know before any page is drafted.
1. **Clone the Product2 record** in Trail OS, set number, feature area, and time estimate.
2. **Enter the children** — steps with verify lines, assets, decisions, issues. This is the actual authoring work and it happens in Salesforce, where it is reportable and reviewable.
3. **Export the record graph** to `kit-record.json`.
4. **Copy the `TK01-*` pages in `templates/trail-kit/`** (the v2 template; see its README) to a new folder, renumber every identifier, and fill the layout from the record. The nonprofit edition still starts from `trail-kit-nonprofit/` until it is rebuilt to v2.
5. **Click through every step in a practice org first.** No menu path, button label or "you should see" line is written from memory or from documentation alone. Capture a screenshot of each screen, number it in the kit's `Build screenshots` folder, and log it in the production record.
6. **Write the prose.** The record gives you the skeleton; the voice is still yours.
7. **Run the pre-print checklist** below.
8. **Attach the finished PDF** back to the Product2 record as a ContentVersion, tagged with `Version__c`.

## Bound editions — the sellable PDF

`templates/trail-kit-bound-learner/` and `templates/trail-kit-bound-nonprofit/` are the **assembled deliverables**: the full kit plus all six inserts in one document, one file per audience.

| Edition | Pages | License variant |
|---|---|---|
| Learner | Kit 01 v2: 20 kit pages + inserts | Individual |
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
| **Test data CSVs** | Required on every kit. Delivered on the kit page, behind the access code. |
| Start Here PDF | The only file Etsy delivers: access code, kit page link and QR, what to do first, where to get help. Template: `Trail-Kit-Start-Here-Template.docx`. |
| Penny's "Explain it in 90 seconds" video | Penny models the 90-second portfolio story; QR on the Prove it page. |
| Landing page | Every QR destination resolves from a field on the kit’s Product2 record — see below. |
| Shared inserts | Referenced from `templates/`, never copied into the kit. |
| Referral link | On the back cover of every kit, and the reason the permitted-use sheet can say "share your link, not the file". No printed codes. |

### QR destinations come from the product record

**No QR URL is typed into a template.** Each one resolves from a custom URL field on the standard **Product2** record for that kit — `Build_Video_URL__c`, `Test_Data_URL__c`, `Kit_Landing_URL__c`, `Programs_URL__c`, `Compass_URL__c`, `Certification_URL__c`, `Audio_URL__c`, `Penny_Video_URL__c`.

Every kit-owned code points to the **code-gated kit page** (`transitiontrails.org/kits/tk-nn`), never straight to a file, so a link can be fixed without reprinting and a buyer without the code sees the sales page.

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

**Addresses.** If the kit's feature sends, receives or captures email (Kit 01, Einstein Activity Capture), the test data must use addresses that can really receive mail: public **Mailinator** inboxes (`trailkit01avery@mailinator.com`), with a step telling the buyer to swap `trailkit01` for a word only they would use, because Mailinator inboxes are public. Every other kit uses `.example.com` / `.example.org` so nothing can receive mail. Either way, say in the README how to filter the data back out (by `@mailinator.com` or `.example.com`).

**Names.** Test records never use a prohibited term (Trailhead, Trailblazer, Ohana, Ranger, Expedition). Kit 01's "Avery Trailhead" was renamed Avery Ridge for this reason.

## Required pages

Every kit, both editions, ships with these. An edition may add pages but must not drop one:

**Front cover · Before you start (with contents and video index) · Tab 2 Prepare · Test data · Tab 3 Build · Tab 4 Verify: test script · When it doesn't work · How to turn this off · Prove it · Go-live checklist · Reflection · Resources · Tab 5 Next: Explorer's Trail · Back cover (About Transition Trails)**

A Certifications page is optional: add it only when the kit's feature maps to a certification exam objective. Kits never require a certification.

Three of these are the reason a kit is worth paying for rather than reading free documentation:

- **When it doesn't work** — the failure modes, with cause and fix. Free docs describe the happy path; this is what people actually pay for.
- **How to turn this off** — a rollback page. Nobody else includes one, and it is what makes a nervous buyer willing to try something on a live org.
- **Video index** — chaptered, with runtimes. The videos are a large part of the price; without an index the buyer cannot see what they bought.

The learner edition additionally carries a career page ("why this makes you employable"), note lines on every page, and closes on Explorer's Trail. Affiliate links are optional per kit, only where one truly fits; Kit 01 has none. The nonprofit edition never carries affiliate links and closes on Digital Compass.

## Pre-print checklist

- [ ] Every identifier in the document matches the record — kit number, product code, every URL.
- [ ] Page numbers in footers match the contents page. Re-check after *any* page insert.
- [ ] Every step has a verify line and a screenshot slot with a unique id.
- [ ] Affiliate rows present ⇒ disclosure block present. Nonprofit edition ⇒ neither.
- [ ] Every TT-owned URL resolves. A QR to a 404 is worse than no QR.
- [ ] No page overflows its print box; no content collides with a footer.
- [ ] All thirteen required pages present.
- [ ] Contents page numbers match the footers. Footers are derived from document order — never hand-typed.
- [ ] US English throughout — sweep for *licence, authorised, summarised, organisation, behaviour, recognise, analyse, practise, centre, colour*. "license" is both noun and verb; this has regressed twice.
- [ ] Mono/code strings carry `white-space: nowrap` so they cannot break across lines.
- [ ] Every menu path and "you should see" line was clicked through in a practice org and has a screenshot in the record's log.
- [ ] Salesforce Help titles copied from the Help table of contents, not from memory.
- [ ] No live prices and no coupon codes printed in the kit.
- [ ] Prohibited terms swept, test data included: Trailhead (except naming Trailhead Playground), Trailblazer (except Trailblazer Community), Ohana, Ranger, Expedition.
- [ ] Penny: one sentence, then one question; labeled "Penny, your trail guide"; never interactive; no program benefits in the kit.
- [ ] Sun Amber used once per kit, on the closing call to action.
- [ ] Content Item records created for the kit and its Etsy listing.

## Listing and media standard

Every kit's Etsy listing has a title of at most 140 characters, a description, and 13 tags of at most 20 characters each. Set the price in Etsy, never in the description, so the founding price can change without an edit. End the description with "Transition Trails is not affiliated with or endorsed by Salesforce."

**Five listing images**, in this order: cover · what's inside · plan, test, prove · who it's for · mission. Each is **2667 x 2000 pixels, 4:3 landscape, JPG**, painterly with visible brushstrokes, golden-hour light, a diverse cast, no text and no logos. Kit 01's set is the reference look. Every image prompt states its size and aspect ratio inside the prompt text.

**Penny visuals** are shared by every kit. Each one is a Content Item under the Salesforce Content Topic **Penny** (CT059), with its Drive link and a note on when to reuse it; the files live in the Penny assets folder, subfolder **Trail Kits** (https://drive.google.com/drive/folders/1QM8kid2yAdIHMM_PT5nAfVJWcjnoWumE). Check the topic first, then the folder, and make only what's missing. New Penny images are generated from `Penny_Welcoming_Portrait_1024.png` as the reference, and each new one gets its own Content Item under CT059.

**The standard Penny set.** Every kit uses the same Penny images in the same places, so a new kit needs no new Penny art:

| Kit page | Penny asset | How it's placed |
|---|---|---|
| Start here | CI0245 Pointing right (1024, transparent PNG) | 150 px, beside a one-line Penny welcome |
| Before you start | CI0287 Scene 01 Meet me on the trail | Banner at the foot of the main column |
| Prepare: what success looks like | CI0289 Scene 02 Choose the next step | Banner |
| Build 1 | CI0291 Scene 03 Try it together | Banner |
| Verify: test script | CI0296 Scene 05 Compare the evidence, revealed | Banner |
| When it goes wrong | CI0237 Scene 06 Pause and try again | Banner |
| Prove it | CI0293 Scene 04 Teach it back | Banner between the 90-second script and Penny's note |
| Go-live checklist | CI0241 Scene 08 Mark the milestone | Banner |
| Reflection | Scene 09 Look back on the trail (to make) | Banner or sidebar |
| Next trail | CI0244 Celebrating with a trail map (1024, transparent PNG) | 150 px, beside the closing checklist |
| Kit page and video | CI0243 90-second thumbnail (cream JPG); CI0298 transparent version for layering | Not printed |

Banners are the 1920 x 1080 scene stills, exported at 1200 px wide JPG, set full column width, 118 to 136 px tall, `object-fit: cover` with the crop set so both faces show, 10 px radius, pushed to the bottom of the main column. In every scene the learner does the work and Penny watches; she never touches the keyboard. **Penny beats for video and audio.** Seven reusable beats, each a still, a silent motion clip and one approved Penny voice line (voice TJz0pp7opUc4JvMXMXob, eleven_v4). The lines name no feature, so they're recorded once and reused in every kit; never re-record them per kit.

| Beat | Still / motion | Voice | Penny line |
|---|---|---|---|
| 1 Welcome | CI0287 / CI0288 | CI0301 | "Hi, I'm Penny, your trail guide, and today you're building something you can show an employer. Ready to start?" |
| 2 Plan | CI0289 / CI0290 | CI0302 | "Before you click anything, decide what this should do and who it's for. Who will notice first if it works?" |
| 3 Build | CI0291 / CI0292 | CI0303 | "Now you build it one step at a time, and check each one before you move on. What do you expect to see next?" |
| 4 Test | CI0296 / CI0297 | CI0304 | "A test that's meant to fail tells you as much as one that's meant to pass. Which result would surprise you?" |
| 5 When it breaks | CI0237 / CI0238 | CI0305 | "Something didn't work, and that's part of the trail. What changed since the last time it worked?" |
| 6 Prove it | CI0293 / CI0294 | CI0306 | "The part people remember is the decision you made, not the button you clicked. Which decision are you proudest of?" |
| 7 Milestone | CI0241 / CI0242 | CI0307 | "You planned it, built it and proved it on your own. Who will be the first person to see you do it on real work?" |

Build With Me: beats 1 and 3, the kit's screen recording, then beats 4, 6 and 7. The 90-second video opens on beat 6. The audio companion opens on beat 1 and closes on beat 7. Only the screen recording and the kit-specific narration change per kit.

**Thumbnail series.** All kit media covers share one layout: cream #FBF7F0, the deep teal #2F6F7E trail line, Penny on the right, open space for a title added in Canva per kit. 90-second video: CI0243 (1920 x 1080 JPG). Build With Me: Penny with a laptop, 1920 x 1080 JPG. Audio companion: Penny with headphones, 3000 x 3000 JPG. The art never changes between kits; only the title text does. The older studio stills (08 to 14 and A-series, marked "Cataloged still; check") are not used in kits until they're reviewed against the current Penny.

## Delivery and support

Etsy delivers only the Start Here PDF. Everything else (full kit PDF, test data, videos, audio, updates) lives on the kit page behind an access code, separate from the product code. Order or download problems go to Etsy Messages. A problem in the kit goes to the kit page's Report an issue form, which reaches support@transitiontrails.org and opens a Problem case. The kit never promises one-on-one help.

---

## Reporting this unlocks

Because kits are Product2 records with real children, Trail OS can answer questions the PDFs never could: which kit sells best per channel; which affiliate partners earn; whether kit buyers convert into program learners and at what rate; which feature areas have no kit yet. The `Next_Kit_Code__c` chain and each edition's own Etsy coupon are what make that attribution possible — which is the real reason each edition gets its own coupon rather than sharing one.
