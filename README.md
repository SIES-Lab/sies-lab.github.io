# Sustainable & Intelligent Energy Systems (SIES) Laboratory — IIT Jodhpur

A responsive, multi-page GitHub Pages website for the **Sustainable & Intelligent Energy Systems (SIES) Laboratory**, Indian Institute of Technology Jodhpur.

## Site structure

The homepage follows the broad editorial information architecture of the Sustainability Lab reference website: a clear lab introduction, research themes, join-and-learn pathways, lab-life area, selected work, recent updates, useful resources and a contact-oriented footer. The SIES site uses its own name, logo, research content, writing and navy/blue + beige visual identity; it does not copy the reference lab's assets or text.

- `index.html` — homepage with research, join & learn, life in the lab, selected work, latest updates and useful links
- `research.html` — research themes and methods
- `people.html` — principal investigator profile and team section
- `publications.html` — searchable and filterable publication list
- `news.html` — publication milestones and laboratory updates
- `join.html` — student enquiries and collaboration guidance
- `404.html` — custom not-found page

The Lab Life area is intentionally a starter section. Actual lab photographs, student stories and testimonials should be added only when approved material is available. The website does not invent open positions, student testimonials, awards, sponsors or group activities.

## Publish at `https://sies-lab.github.io`

To use the short laboratory URL, GitHub must have an **organization named `sies-lab`** and that organization must contain a repository named **`sies-lab.github.io`**. If the organization name is available, you can create it while logged in to your existing GitHub account; you do not need a second personal account.

1. Create or use a GitHub organization named `sies-lab` (subject to GitHub username availability).
2. Inside that organization, create a **public** repository named exactly `sies-lab.github.io`.
3. Upload **all files and folders inside this project** to the repository root. Keep the `.github/workflows/pages.yml` file; it deploys the site when code is pushed to `main`.
4. Ensure the default branch is `main`.
5. Open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
6. Open the **Actions** tab. The workflow **Deploy SIES Laboratory website to GitHub Pages** should run automatically. After it succeeds, the site should be available at `https://sies-lab.github.io` (GitHub may take a few minutes to publish the first deployment).

If `sies-lab` is unavailable, choose a distinctive organization name such as `sies-lab-iitj`; the corresponding repository must use the same name plus `.github.io` (for example, `sies-lab-iitj.github.io`) and the public URL will use that organization name.

## Updating the publications

Edit `assets/js/publications.js`. Each publication is one JavaScript object with these fields:

- `year`
- `type` (`Journal article` or `Conference paper`)
- `area` (for example, `EV charging` or `Energy policy`; add another label and matching filter option in `publications.html` if needed)
- `title`
- `authors`
- `venue`
- `doi` (a complete URL beginning with `https://doi.org/`)

The publication list is generated from this file and supports text search and filters.

## Updating laboratory details

Edit the relevant HTML files to update contact information, biography, research themes, news and page copy. The common colour palette and responsive layout are in `assets/css/styles.css`.

The supplied full logo is stored at `assets/img/sies-lab-logo.png`. The compact artwork used in the header and footer is `assets/img/sies-mark.png`; the browser icon is `assets/img/favicon.png`. Replace these assets if the laboratory approves a future logo revision, keeping the filenames unchanged.

## Before announcing the website

Please verify these items with the laboratory lead:

1. Confirm the formal display name **Sustainable & Intelligent Energy Systems Laboratory** and short name **SIES Lab**.
2. Add the Google Scholar profile link (the Scholar URL was not included in the source links directly verifiable for this build).
3. Review the curated publications against the complete Google Scholar/CV list and add any missing works.
4. Replace the initials portrait on `people.html` with an approved headshot, and add real student/team profiles only with their permission.
5. Add approved laboratory photographs, student stories, social links, project links and any confirmed positions or funding information.
6. Confirm that the official contact email and phone number should be displayed publicly.

## Credits and source notes

The overall homepage section flow is inspired by the publicly available Sustainability Lab website at IIT Gandhinagar. The SIES implementation is independently authored and adapted for the laboratory's research focus. Research description and PI biography are based on the public IIT Jodhpur profile for Dr. Payal Vyankat Dahiwale. Publication links are provided as DOI links where available. See `SOURCES.md` for the source notes and remaining verification items.
