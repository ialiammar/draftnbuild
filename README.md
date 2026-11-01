# Draft n Build

Founder-led social content studio for ecommerce and retail brands. Built with Next.js, React, Tailwind, and Motion.

## Local development

Run `npm ci`, then `npm run dev`. Open the local URL printed by Next.js.

## Validation

- `npx tsc --noEmit`
- `npm run build`
- Browser checks at desktop and mobile sizes: navigation, work filters, video dialog, FAQs, and enquiry brief copying.

## Editing content

- `lib/data/agency.ts`: offers, service scope, FAQs, and verified contact details.
- `lib/data/portfolio.ts`: actual work and media paths. Use unique IDs. Only playable work is shown on the motion page.
- `components/agency/AgencyExperience.tsx`: homepage layout and interactions.
- `app/globals.css`: existing brand tokens and responsive agency styling.
- `public/images/ali-ammar-portrait-v1.png`: edited founder portrait with transparent background.

## Enquiries

The form opens an email draft in the visitor's email app. It does not send or store submissions on a server. Visitors can also copy their brief or use the direct WhatsApp link. Add a server-backed form only after choosing the service and privacy requirements.

## Brand and content

Uses Grade Black #131313, Light Table #E7E9EA, Grade Warm #FF5A1F, Grade Cool #0FAFA0, Archivo Black, Inter, and JetBrains Mono. Preserve the rounded-square/orange-dot mark. Pricing remains request-a-quote. No invented results, clients, or testimonials.

The watch-store case study can be added when the approved media, exact contribution, and any verified results are provided. The founder portrait is AI-edited from Ali's supplied photo; the original photo and brand-guide PDF are not included in this repository.

## Release

Review work on `codex/agency-redesign` before merging into the production branch. Existing hosting is retained.
