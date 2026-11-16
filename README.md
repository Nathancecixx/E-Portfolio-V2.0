# Nathan Ceci / a working portfolio

React 18 + Create React App 5. An editorial portfolio focused on Nathan's first step into IT, with a conceptual home lab explorer and a filterable archive of software and game projects.

## Local development

Use the existing lockfile. Do not substitute a forced dependency upgrade for a planned CRA migration.

```sh
npm ci
npm start
```

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The site is a static client application. It does not call a lab API, expose administrative interfaces, poll services, or submit a contact form. Contact uses `mailto:` and `tel:` links; sending an email depends on the visitor's configured email app. The address remains selectable as a fallback.

## Where content lives

- `src/Pages/Home.js`: introduction and current focus.
- `src/Components/LabExplorer/LabExplorer.js`: native button-based explorer; selected state uses `aria-pressed`, with a polite detail region.
- `src/Data/lab.js`: lab notes. Keep physical work distinct from simulations and future learning.
- `src/Data/portfolio.js`: all nine original software/game projects, their original screenshots and source/demo links, plus three systems entries. Project descriptions are shortened without inventing outcomes.
- `src/Pages/Projects.js`: four filters, result count and readable project summaries. Open Mind's secondary link is the hackathon website, not a demo.
- `src/Pages/AboutMe.js`: studies and employment. Graduation year is deliberately unspecified.
- `src/Pages/Contact.js`: approved contact details.
- `src/index.css` and `src/App.css`: tokens, layout, responsive rules, focus and reduced-motion styles. Fonts use local fallbacks; no font CDN is needed.
- `public/index.html`, `public/manifest.json`, `public/favicon.svg`: page metadata and identity.

Original `src/Data/Data.js`, images and unused legacy components are retained for reference. The application no longer imports their animations, old theme or inflated expertise copy. Avoid reintroducing those imports.

## Verification

`src/App.test.js` exercises the student introduction, all six explorer selections, all four project filters, restoration of the complete archive, keyboard-first skip navigation, unique IDs, contact destinations and experience context. Each major behavior was introduced with a failing test before its implementation, in sequential red/green cycles.

`src/setupTests.js` bridges RTL 13's old test-utils `act` entry point to React 18.3's real `act`, without suppressing console warnings. User-event state updates are wrapped explicitly.

Manual review before publishing: keyboard focus and Enter/Space on lab buttons; all filters; narrow mobile widths; reduced motion; readable screenshots; email/phone destinations. The diagram is intentionally simplified, not monitoring, and must not contain private addresses, admin URLs, credentials or invented service metrics.

## Preview and publication boundary

Work stays on `feat/it-systems-portfolio`. The existing LAN development service reads the working tree. Builds produce a local `build/` directory; building is not a production release. Do not push, merge or deploy as part of a preview review. The production branch is `master` and is connected to Vercel automatic deployment.

The inherited CRA dependency tree has known vulnerabilities. Keep preview access LAN-only and handle dependency remediation as a separate reviewed change. This rework does not claim to resolve the inherited audit findings.

## Attribution

Nathan's original projects include individual and team work. This portfolio rework used AI-assisted design, copy and code collaboration. Do not imply Nathan personally authored every assisted line or claim professional systems-administration experience from a personal lab.
