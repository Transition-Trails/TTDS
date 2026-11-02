# Trail OS UI kit — Salesforce Experience Cloud

An interactive recreation of **Trail OS**, the Transition Trails learner platform, built on the **Salesforce Experience Cloud** theme mapping in the brand book (Deep Teal header, Trail Green active states, Sun Amber action color, Poppins headings / Open Sans body).

**Screens:**
- **Dashboard** (`Dashboard.jsx`) — welcome, trail-progress stepper, next-milestone task list, mentor note, logged-hours stat.
- **My Trail** (`Program.jsx`) — active project detail with module checklist (done / current-amber / upcoming), mentor card, progress alert.

`PortalChrome.jsx` holds the teal `TopBar`, the left `Sidebar` (Trail Green active item), and the Lucide `PIcon` helper (icon set substituted — flagged in root readme).

**Trail OS also carries the learner's two working environments** — their cohort **Slack** and their **Salesforce dev org**. These are not portal screens; they leave the app. They sit in a separate `Workspace` sidebar group and a dashboard card, both marked with an external-link glyph, so it is always clear when a click leaves Trail OS.

Open `index.html`. Sidebar "My Trail" and dashboard CTAs switch screens.
