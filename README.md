# WedgeWerks™ studio site

Marketing / catalog site for WedgeWerks and the Foundary crew.

## Scripts

- `npm run dev` — local Vite + TanStack Start
- `npm run build` — production build (Vercel / Nitro)
- `npm run typecheck` — `tsc --noEmit`

## Environment

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | When set, `/brief` emails submissions via [Resend](https://resend.com). When unset, briefs stay in `localStorage` only (honest “did not email” receipt). |
| `BRIEF_INBOX_TO` | Optional. Defaults to `studio@wedgewerks.win`. |
| `BRIEF_FROM_EMAIL` | Optional. Defaults to Resend onboarding from-address; set a verified domain sender in production. |

Other auth / database variables follow the App Builder defaults in `.env.local` / Vercel.

## Legal & SEO

- `/privacy` and `/terms` — plain-language UK/EU-friendly notices
- `public/robots.txt`, `public/sitemap.xml`
- `vercel.json` — apex → `www` 308, security headers

Canonical host: **https://www.wedgewerks.win**
