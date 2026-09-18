# Digital Business Card

A shareable, one-page digital business card built with Next.js. It centralizes your
social links, company details, and a products & services mini-page — and lets clients
open, save, or scan your card in a single tap.

Inspired by link-in-bio / vCard style cards (e.g. deltacrd.me).

## Features

- **Profile header** — avatar (or auto initials), name, title, tagline
- **Social links** — grid of tappable icons (Instagram, LinkedIn, X, YouTube, WhatsApp, GitHub, and more)
- **Company section** — name, description, website, email, phone, location, and a "Visit Website" button
- **Products & Services** — mini-page grid with badge, price, description, and optional link per item
- **One-click sharing**:
  - **Share** — native share sheet (Web Share API) on mobile, with copy-link fallback
  - **Copy** — copies the card URL to the clipboard
  - **QR** — shows a scannable QR code (generated server-side)
  - **Save** — downloads a `.vcf` vCard so clients can save you as a contact instantly
- **SEO ready** — Open Graph + Twitter card metadata, dynamic theme color

## Edit your info

Everything lives in **one file**:

```
src/config/card.ts
```

Update `profile`, `company`, `socials`, and `products`, then set `siteUrl` to your
final domain. That's it — the whole card updates from this single source of truth.

To use a photo, drop an image in `public/` (e.g. `public/avatar.jpg`) and set
`profile.avatar` to `"/avatar.jpg"`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy

Deploy anywhere that supports Next.js. The easiest is Vercel:

1. Push this repo to GitHub.
2. Import it in Vercel.
3. After deploy, set `siteUrl` in `src/config/card.ts` to your live domain (used by the QR code and share links) and redeploy.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- `qrcode` for server-side QR generation
- Web Share API + vCard (`.vcf`) for one-click sharing/saving
```
