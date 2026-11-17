# KEIYO CULTURAL FEST 2026

Static website for **KEIYO CULTURAL FEST 2026** (`keiyoculturalfest.co.ke`), built with Next.js (App Router), TypeScript, and Tailwind CSS, configured for static export (`output: 'export'`).

## Local Development

```bash
npm install
npm run dev
```

## Static Build

```bash
npm run build
```

This generates the static site in the `out/` directory (no server or runtime dependencies required).

## Editing Content

All editable content is centralised under `/data`:
- `data/site.ts` — site metadata, navigation, contact details & social link placeholders, centralised image paths
- `data/home.ts` — home page sections
- `data/about.ts` — story, Vision, Mission, 7 Objectives
- `data/experiences.ts` — 6 festival experiences
- `data/tourism.ts` — Rimoi National Reserve & excursions
- `data/event.ts` — event date, venue, dress code, map links
- `data/tickets.ts` — ticket categories, prices (leave `""` for *"Prices coming soon"*), booking platform link, payment instructions
- `data/partners.ts` — partner/sponsor categories & logo slots
- `data/gallery.ts` — gallery categories, photos, YouTube video IDs
- `data/news.ts` — news & updates posts
- `data/faq.ts` — 7 frequently asked questions

## Form Submissions

Set the optional environment variable `NEXT_PUBLIC_FORM_ENDPOINT` (e.g. a Formspree endpoint `https://formspree.io/f/xxxxxxx`) in Cloudflare Pages or `.env.local`. When unset, forms gracefully fall back to opening a prefilled WhatsApp or `mailto:` link (once configured in `data/site.ts`).

## Cloudflare Pages Deployment

1. Push this repository to GitHub or GitLab.
2. In the **Cloudflare Dashboard**, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Configure the build settings:
   - **Framework preset:** `Next.js (Static HTML Export)` (or `None`)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:**
     - `NODE_VERSION` = `20` (or `22` / `24`)
     - `NEXT_PUBLIC_FORM_ENDPOINT` = *(your Formspree endpoint URL, optional)*
4. Deploy the site.

### Attaching Custom Domain (`keiyoculturalfest.co.ke`)

1. Open your Pages project in Cloudflare Dashboard → **Custom domains** → **Set up a custom domain**.
2. Enter `keiyoculturalfest.co.ke` (and optionally `www.keiyoculturalfest.co.ke`).
3. If your domain's DNS is managed on Cloudflare, Cloudflare will automatically add the `CNAME` record pointing to `<project>.pages.dev` and provision an SSL/TLS certificate.
4. If your domain is registered elsewhere (e.g. a `.co.ke` registrar), update your nameservers to Cloudflare or add the `CNAME` records shown in the Cloudflare Pages custom domain wizard.
