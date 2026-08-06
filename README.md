# Subalakshmi V — Portfolio

Next.js 15 / React 19 / TypeScript / Tailwind / Framer Motion. Dark mode only, no toggle.

## Run it

```bash
npm install
npm run dev
```

Build was verified locally (`npm run build`) — compiles clean, all pages statically prerender. In this sandbox, Google Fonts couldn't be fetched (network whitelist), so the font-loading step was stubbed out to confirm everything *else* compiles, then reverted. On your machine, with normal internet access, `next/font/google` will just work.

## What's different from the original brief, and why

**Cut entirely:**
- **AI Playground chatbot** — dropped per your call. If you revisit it, it needs a backend proxy for the API key and rate-limiting before it can safely sit on a public page.
- **Certifications section** — no certification data existed anywhere in the source material. An empty/placeholder section would look worse than no section.
- **Resume preview embed** — kept the download button (real file, in `/public/resume.pdf`), dropped the embedded PDF viewer. It pulls in a heavy PDF.js dependency for something a direct download already solves.
- **Custom cursor, particle background, card tilt/glow** — cut per your motion-budget call. They were also in direct conflict with the brief's own "accessibility friendly" and "fast loading" requirements.
- **Per-skill progress bars** — the resume gives no proficiency metric for any skill. A fake "92%" on a skill chip is fabricated precision — replaced with grouped skill chips instead.

**Reframed, not cut:**
- **"MLM Financial System" → "Fintech Wallet & Referral Platform."** Same real project (GatesCloud), described by its architecture instead of leading with a term that reads as a red flag to some screeners. Full bullet detail is still in `lib/data.ts` if you want to adjust further.
- **Achievement stats** — replaced generic placeholders ("Thousands of Users Served") with five numbers that trace directly to a resume bullet: 10,000+ async jobs/day, 500+ vehicles managed, 50,000+ transactions, 99.9% uptime, 4.5+ years.
- **Contact form** — submits via `mailto:`, which opens the visitor's own mail client. No backend, no email API key, and the copy says exactly what it does. A "real" server-side form (Resend, Formspree, etc.) is a legitimate upgrade later, but needed its own decision, same as the chatbot did.
- **Hero signature element** — swapped generic particles/blobs for a small animated request-pipeline (Client → API → Queue → Worker → DB), because that's literally what you build, not decoration.

**Needs your input before this goes live:**
1. `SITE_URL` in `app/layout.tsx` is a placeholder (`https://subalakshmi.dev`) — replace with your real domain once deployed, it feeds Open Graph/SEO metadata.
2. The downloadable resume (`/public/resume.pdf`) is the "DataScience" version you uploaded, which lists `subalakshmi.vairaj@gmail.com` — but the public contact section on the site uses `subalakshmi2601@gmail.com` (per your GitHub). Worth fixing that mismatch in the PDF itself before anyone downloads it.
3. No physical location was given, so the Contact section doesn't claim one. Add it in `lib/data.ts` (`profile`) if you want it shown.
4. Only 4 real projects are used, not 5 — I didn't fabricate a "Machine Learning Project" card. If you get a real ML project shipped later, `lib/data.ts` → `projects` is the only file that needs a new entry.

## File map
- `lib/data.ts` — all real content (profile, skills, experience, projects, achievements). Edit this, not the components, to update copy.
- `components/` — one file per section, plus `ui/button.tsx` and `ui/badge.tsx` as the two shadcn-style primitives actually needed here (didn't pull the full shadcn CLI for a two-component surface area).
- `components/reveal.tsx` — the single scroll-animation pattern reused everywhere, on purpose, instead of a different effect per section.
