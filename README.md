# Malcom Johnson — Sales Portfolio

A one-page SaaS-style sales portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # serve the production build locally
npm run lint    # run ESLint
```

## Deploying to Vercel

1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
3. Vercel auto-detects Next.js — no build configuration is needed.
4. (Optional but recommended) In the Vercel project's **Settings → Environment Variables**, add:
   - `NEXT_PUBLIC_SITE_URL` = the production URL Vercel gives you (e.g. `https://malcom-johnson.vercel.app` or a custom domain). This is used for SEO metadata, Open Graph tags, the sitemap, and robots.txt. Without it, the site falls back to a placeholder URL defined in `src/lib/site.ts`.
5. Deploy. Every push to the connected branch will redeploy automatically.

## Connecting this local repo to GitHub

This repo is initialized locally but has **no remote configured**. Once you've created an empty repository on GitHub (don't initialize it with a README/license — this repo already has commits), run:

```bash
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Replace the URL with your actual repository URL (SSH or HTTPS).

## Updating the LinkedIn URL

Open [src/data/personal.ts](src/data/personal.ts) and update the `linkedinUrl` field:

```ts
linkedinUrl: "https://www.linkedin.com/in/REPLACE-WITH-MALCOM-LINKEDIN",
```

Replace it with Malcom's real LinkedIn profile URL. This single field powers every LinkedIn link on the site (hero, contact section, footer).

## Adding or replacing the headshot

The hero currently uses an abstract network graphic ([src/components/AbstractGraphic.tsx](src/components/AbstractGraphic.tsx)) in place of a headshot, per the "no stock photography, no headshot provided" direction. To swap in a real photo:

1. Add the image file to `public/` (e.g. `public/headshot.jpg`).
2. Open [src/components/Hero.tsx](src/components/Hero.tsx) and replace the `<AbstractGraphic />` usage with a Next.js `<Image>` component pointing at `/headshot.jpg`.
3. You may want to keep the rounded-corner, shadowed container styling already in place around it.

## Replacing the downloadable resume

The site expects the resume PDF at:

```
public/Malcom_Johnson_SDR_Resume_Okta_Tailored.pdf
```

Simply drop the real PDF into the `public/` folder with that exact filename and every "Download Resume" / "Resume" link on the site (nav, hero, mobile menu, contact, footer) will work immediately — no code changes needed. If you want a different filename, update `resumeHref` in [src/data/personal.ts](src/data/personal.ts) to match.

## Editing content

All copy lives in typed data files under `src/data/`, kept separate from components so nothing is duplicated:

| File | Controls |
| --- | --- |
| `src/data/personal.ts` | Name, contact info, headlines, about copy, education, LinkedIn URL, resume path |
| `src/data/experience.ts` | Career timeline entries (company, title, dates, bullets) |
| `src/data/skills.ts` | Skill categories and the "How I Sell" principles |
| `src/data/results.ts` | The four performance-snapshot stat cards |
| `src/data/industries.ts` | Target industry chips |
| `src/data/nav.ts` | Sticky nav links |

To add, remove, or reorder an experience entry, edit the `experience` array in `src/data/experience.ts` — the timeline UI re-renders automatically. The same pattern applies to skills, results, and target industries.

## Tech stack

- Next.js (App Router, TypeScript, static generation)
- Tailwind CSS v4
- Framer Motion (subtle scroll-reveal animations, respects `prefers-reduced-motion`)
- Lucide React icons
- No database, no auth, no paid third-party services

## Project structure

```
src/
  app/            Routes, layout, metadata, sitemap, robots, generated icon/OG image
  components/      UI sections (Hero, ExperienceTimeline, Contact, etc.)
  data/            Typed content — the single source of truth for all copy
  lib/             Small shared utilities (site URL)
```
