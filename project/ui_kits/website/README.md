# Website UI kit — Transition Trails marketing site

An interactive recreation of the `transitiontrails.org` marketing site, composing TTDS primitives (Button, Card, Pill, Alert, Input, Stepper).

**Screens** (top-nav switches between them):
- **Home** (`Home.jsx`) — hero with one amber CTA, impact stats, "the trail step by step" stepper, program cards, closing CTA band.
- **Programs** (`Programs.jsx`) — trail listing rows, nonprofit info alert, Guided Trail stepper.
- **Get Involved** (`GetInvolved.jsx`) — three ways to participate + a working application form that shows a success alert on submit.

`SiteChrome.jsx` holds the shared teal Header (single amber Donate action) and Charcoal Footer, plus an `Icon` helper (Lucide via CDN — substituted; no TT icon set was provided).

Open `index.html`. Follows the brand rule of **one Sun Amber CTA per screen** and pairs status color with icons/text.
