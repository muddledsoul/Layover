# Changelog

Layover follows [Semantic Versioning](https://semver.org): MAJOR.MINOR.PATCH.
- **PATCH** (1.0.x): bug fixes and small tweaks that don't add features.
- **MINOR** (1.x.0): new features or content that keep saved data compatible.
- **MAJOR** (x.0.0): changes that break saved data or how the app is used.

## 1.1.0 - 2026-11-06
- Clear warning on Setup and Progress that deleting the home-screen app or clearing Safari data erases progress.
- Back up straight to Files or iCloud Drive through the share sheet, optionally including your API keys for a one-tap restore.
- Reminder on the home screen when there's progress and no backup in the last week (Later snoozes it for 3 days).
- Asks iOS to keep the app's storage persistent so it isn't cleared to free space.

## 1.0.48 - 2026-11-06
- Switched to semantic version numbers (continuing from release 47).
- The update check compares versions numerically and never "updates" to an older copy.

## Before 1.0.48
Releases were numbered 1-47. Highlights:
- 47: automatic update check that bypasses the GitHub Pages cache; Check for updates button.
- 46: import/export backup on the Setup page.
- 45: full backup of every language; Layover naming in setup guides.
- 43-44: renamed to Layover with the postage-stamp icon.
- 40-42: demo mode on the phone's free voice, with a toggle in Settings.
- 37-39: audio downloaded ahead of time within Azure's free limits; cards wait for the word to finish.
- 36: travel-journal design with a dusk theme per language.
- 35: French and German, per-language progress, new home menu.
