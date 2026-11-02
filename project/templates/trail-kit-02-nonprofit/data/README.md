# Trail Kit 02 test data — Nonprofit edition

Three CSV files for loading into a **practice org**. Never load these into a production org.

## Load order

1. `kit02np-accounts.csv` — Accounts. Load first; everything else links to these by name.
2. `kit02np-contacts.csv` — Contacts. Uses **AccountName** to match; map it to the Account lookup in the import wizard.
3. `kit02np-opportunities.csv` — Opportunities. Same, uses **AccountName**.

Use the Data Import Wizard (Setup → Data Import Wizard), choose *Add new records*, and match on Name.

## What is deliberately in this data

The kit's teaching points only work if the data lets them. This set is built for that, not for looking tidy:

- **Three accounts have no opportunities at all** (Elmwood Community Garden, Goldenrod Arts Access, Clearwater Watershed). This is what makes the *with or without* join real — a standard "Accounts with Opportunities" report hides them entirely, and the question *"who have we never approached?"* cannot be answered without it.
- **A near-duplicate pair** (Riverbend Animal Rescue / Riverbend Animal Rescue Inc). Same organization, different legal suffix, no shared phone. Reports total them separately and nobody notices until someone asks why the count is one too high.
- **Blank fields scattered through** — revenue, employee count, phone. Filters treat blanks differently from zero, and this is where people first meet that.
- **Records spread across all twelve months and four owners**, so grouping and summarizing produce something worth reading rather than one bar.

## Cleaning up

Everything uses `.example.com` / `.example.org` addresses, which cannot receive mail. To remove it later, filter on those domains.
