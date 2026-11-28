# Trail Kit 01 test data — Learner edition (v2)

One CSV for loading into a **practice org**: `trail-kit-01-test-contacts.csv`, six contacts. Never load it into a production org.

## Load it

1. Open the file. In every address, change `trailkit01` to a word only you would use, like `trailkit01-yourname`. Keep `@mailinator.com`.
2. In Setup, type **Data Import Wizard** in Quick Find and open it. Click **Launch Wizard!**
3. Choose **Standard objects** › **Accounts and Contacts** › **Add new and update existing records**, add the file and follow the steps to **Start import**.
4. Open one contact and check its email address matches your file exactly.

## Why Mailinator

Activity Capture only saves an email when the address matches a Contact or Lead, so the test addresses must be able to receive mail. Mailinator inboxes are free, need no sign-up and are **public**: anyone who types the name can read them. Pick a word nobody would guess and send test text only.

## What is deliberately in this data

| Record | What it teaches |
| --- | --- |
| Riley and Morgan Summit share one address | Which record an email attaches to when two could match (When it goes wrong, issue 4) |
| Sam Switchback has no email | What a record that can never match looks like |
| Casey Outpost has no account | An address to list in Addresses to leave out (test 6). Check whether the wizard imports a contact with no account. |
| An address not in the file | Test 5: send to `trailkit01-yourname-nobody@mailinator.com`; nothing should be saved |

## Cleaning up

Every test address ends in `@mailinator.com`. Filter on that to find and remove the data later.

## Retired files

`kit01-accounts.csv`, `kit01-contacts.csv` and `kit01-leads.csv` are the v1 data set (`.example.com` placeholders). Kit 01 v2 does not use them. They stay only until they are moved aside.
