# Azlon AI

Marketing website for Azlon AI — an AI agency that builds custom AI agents and business automations. Built with Next.js (App Router), Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editable content

All copy lives in `src/data/`:

- `site.ts` — brand info, nav links, Calendly URL, tools list, stats
- `services.ts` — services grid + FAQ
- `process.ts` — the 3-step process timeline
- `testimonials.ts` — example use cases (shown until real testimonials are added) + `TESTIMONIALS` / `VIDEO_TESTIMONIALS` for real client quotes
- `team.ts` — founder cards (photos in `public/images/`)

## Theme

Dark mode by default with a light-mode toggle (top right of the navbar). Colors are defined as CSS variables in `src/app/globals.css` (`--gold-1`, `--gold-2`, etc.) so the black-and-gold palette can be retuned from one place.

## Booking

The primary CTA everywhere links to the Calendly URL in `src/data/site.ts` (`CALENDLY_URL`). The Contact page also embeds the Calendly inline widget and a simple contact form (front-end only — wire `ContactForm.tsx`'s `handleSubmit` up to an email/CRM provider).
