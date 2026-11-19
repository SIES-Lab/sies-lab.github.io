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

The website repository belongs to the `SIES-Lab` GitHub organization and must be named `sies-lab.github.io`. The repository should be public for GitHub Free organization hosting.

1. Upload all files and folders inside this project to the repository root (the same level as `index.html`).
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/(root)`**, then select **Save**.
5. GitHub Pages will publish the static site at `https://sies-lab.github.io` after deployment finishes.

For updates, upload the changed files to the same paths in the repository and commit them to `main`.

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

Edit the relevant HTML files to update contact information, biography, research themes, news and page copy. The common colour palette, responsive layout, header lock-up sizing and typography are in `assets/css/styles.css`.

The complete supplied logo lock-up, including the laboratory name and IIT Jodhpur line, is used in the site header and footer as `assets/img/sies-lab-lockup.png`; the original full-resolution source is retained as `assets/img/sies-lab-logo.png`. The homepage uses a labelled smart-grid ecosystem illustration at `assets/img/sies-energy-systems.webp`, and the browser icon is `assets/img/favicon.png`. Replace these assets if the laboratory approves a future revision, keeping the referenced filenames unchanged.

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

## Visual identity update

The header and footer display the complete logo lock-up supplied by the laboratory, including the full laboratory name and the IIT Jodhpur line. The homepage illustration is a newly created, detailed system-level view for the SIES website; labels and legend text are authored in HTML so they remain crisp and readable at different screen sizes.
