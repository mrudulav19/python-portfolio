# Mrudula V, Developer Portfolio

React + Vite + Tailwind CSS (v3). All content comes from the resume and lives in one file.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```
Requires Node.js 18+.

## Structure
```
public/            favicon, robots.txt, Mrudula_V_Resume.pdf (the download button serves this)
src/data/content.js  ALL text content: profile, skills, experience, projects, credentials
src/components/    Header, Hero, ApiPanel, About, Skills, Experience, Projects,
                   ProjectCard, Education, Credentials, Contact, Footer, Section, Icon
src/index.css      design tokens (light/dark), button and chip styles, hero animation
index.html         SEO metadata, Open Graph, JSON-LD (Person), <noscript> fallback
```

## Things to fill in (nothing was invented)
- Per-project GitHub links: the profile link is set (`profile.github`), but individual repo links are not on the resume.
- Project links: set `github` and/or `demo` on each project. Cards show buttons only when a value exists.
- Project years: the resume lists none. Add `year: "2025"` etc. to show it on the card.

## Update the resume
Replace `public/Mrudula_V_Resume.pdf` (keep the file name) and edit `src/data/content.js`.

## Deploy
Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Build command `npm run build`, output `dist`.
For GitHub Pages under a sub-path, set `base` in `vite.config.js`. After deploying, add your live URL to `index.html`
as `<link rel="canonical">` and an `og:url` tag.
