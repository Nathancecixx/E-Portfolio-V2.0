# nathanceci.com

My portfolio site. React 18 on Create React App.

## Run it

```sh
npm ci
npm start                                          # dev server with live reload
CI=true npm test -- --watchAll=false --runInBand   # tests
npm run build                                      # production build
```

## Editing content

| What | File |
|---|---|
| Home lab diagram | `src/Data/lab.js` |
| Projects | `src/Data/portfolio.js` |
| Intro and rack photo | `src/Pages/Home.js` |
| About, school and work history | `src/Pages/AboutMe.js` |
| Contact details | `src/Pages/Contact.js` |
| Colours and fonts | `src/index.css` |
| Layout | `src/App.css` |

### Updating the home lab

The diagram is drawn from `src/Data/lab.js`. The comment at the top of that file explains each field.

- New VM worth showing: add `{ id, name, runs, note }` to a host's `services`.
- New VM not worth showing: bump the host's `total`. It is counted in "+ N more".
- New machine: add `{ id, name, tag, note }` to `hosts`.
- Change `updated` to the current month.

Do not put IP addresses, hostnames, ports or admin URLs in that file. The site is public.

## Publishing

`master` deploys to nathanceci.com through Vercel. Work on a branch, check it locally, then merge.

The Create React App dependency tree is old and `npm audit` reports known vulnerabilities in it. They affect the dev tooling, so keep the dev server on the LAN. Moving off CRA is a separate job.

`src/Data/Data.js` and the unused components and stylesheets are left over from the previous version of the site.
