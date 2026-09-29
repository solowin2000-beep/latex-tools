# Latex Fit Lab — latex clothing size, fit and thickness tools

**Live site:** https://latex-tools.pages.dev

Latex clothing has no sizing standard, so makers work from finished measurements rather than size
letters — and customers and makers end up arguing about what a size "L" means. This site publishes
the numbers instead: what a garment should be cut to, how sheeting thickness changes the reduction,
and the nine measurements a maker actually needs.

## The numbers this site publishes
Negative ease (how much smaller than the body a garment is cut), by sheeting thickness:

| Thickness | Reduction |
| --- | --- |
| 0.25 mm | 14–17% |
| 0.40 mm | 12–15% |
| 0.60 mm | 10–13% |
| 0.80 mm | 8–11% |
| 1.00 mm | 6–9% |

Thicker sheeting stretches less, so it takes less reduction, not more.

Per-part trim on top of the base value, in percentage points: thigh +2, upper arm +2, waist +1,
chest 0, hip 0, underbust −1, neck −5. Torso length is treated separately and cut 2–4% shorter. A
snug preference adds 2 points, a relaxed one removes 2.

## Pages
| Path | What it is |
| --- | --- |
| `/` | Overview |
| `/size-calculator/` | Body measurements in, finished garment measurements out |
| `/measure-guide/` | The nine measurements, and the three that go wrong most |
| `/thickness-guide/` | 0.25 mm to 1.00 mm: feel, stretch, durability and reduction |

## Tech
Astro static build, no server and no runtime API calls.

| File | Role |
| --- | --- |
| `src/site.config.mjs` | Single source of truth: domain, contact, per-page titles and descriptions |
| `src/data/fit-model.mjs` | The reduction values. Change this file and the calculator and the thickness guide both update |
| `src/pages/` | One file per page; the file name is the URL |

## Build
```
npm install
npm run dev     # local preview
npm run build   # static output in dist/
```

## Deploy
This repository is connected to the Cloudflare Pages project `latex-tools` at
https://latex-tools.pages.dev/. Pushing to `main` builds and deploys automatically
(build command `npm run build`, output directory `dist`).
The contents of `dist/` can also be uploaded by hand if needed.

## Where the values come from
Workshop experience values, confirmed 2026-09 against made-to-measure orders. They are a starting
point for a size sheet, not a substitute for the maker's own fit test.

## Licence
Site content and design are © Latex Fit Lab.
