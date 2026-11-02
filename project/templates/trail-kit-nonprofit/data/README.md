# Trail Kit 01 test data — Nonprofit edition

Three CSV files for loading into a **practice org**. Never load these into a production org.

## Load order

1. `kit01np-accounts.csv` — load first; contacts link to these by name.
2. `kit01np-contacts.csv` — uses **AccountName**; map it to the Account lookup.
3. `kit01np-leads.csv` — standalone, load any time.

Use the Data Import Wizard (Setup → Data Import Wizard), choose *Add new records*, match on Name.

## Do this before you start Tab 3

**Five contacts and one lead have `REPLACE-WITH-YOUR-ADDRESS-n@example.org` in the Email field.** Open the CSV and change those to addresses you can actually send from or receive at, *before* you import.

This is not us being lazy. Activity Capture matches on the email address, so no sample data can arrive pre-matched — the addresses have to be yours. If you skip this step you will complete every build step correctly and still see nothing on any record, which is the single most common way people conclude the feature is broken.

A good approach: use plus-addressing on your own mailbox — `you+alice@yourdomain.com`, `you+ben@yourdomain.com` — so all the test mail lands in one inbox you already read.

## What is deliberately in this data

- **Two contacts with no email address at all.** They can never be matched. This is what an unmatchable record looks like, and it is worth seeing on purpose rather than discovering at the wrong moment.
- **Two contacts sharing one address at different accounts.** Watch which record the activity attaches to. This is the "email appeared on the wrong record" problem from Tab 4, reproduced deliberately.
- **One contact on a personal domain** rather than their organization's. Common in real data, and it breaks any assumption that the domain tells you the account.
- **Missing phone numbers scattered through**, so filters and list views have blanks to deal with.

## Cleaning up

Everything else uses `.example.org` addresses, which cannot receive mail. Filter on that domain to find and remove the data later.
