# W3B HEX OFFICIAL website

The official website and blog for the [W3B HEX OFFICIAL](https://www.youtube.com/@w33b_hex) YouTube channel, built with [Astro](https://astro.build).

Live site: https://mohammedaminegoumri.github.io/w3b-hex-official/

## Setup
```bash
npm install
npm run dev      # http://localhost:4321/w3b-hex-official/
npm run build    # writes the static site to dist/
npm run preview
```

## Structure
- `src/pages`: home, videos, about, blog index and blog posts (`blog/[slug].astro`)
- `src/content/blog/*.mdx`: blog posts (Content Collections, schema in `src/content.config.ts`)
- `src/data/videos.ts`: YouTube video IDs (from the channel RSS feed). Add new uploads here.
- `src/components/Logo.astro` and `public/logo.svg`: the pure-SVG Zeus logo, also used as the favicon

## Deploy (GitHub Pages)
1. Push to `main`.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. `.github/workflows/deploy.yml` builds the site with `withastro/action@v2` (Node 20) and deploys it with `actions/deploy-pages`.
