# HansShidori: Roblox Animator Portfolio

Next.js (App Router) + React + TypeScript + Tailwind CSS + Lucide.

## 1. Install
```bash
npm install
```
## 2. Run locally
```bash
npm run dev    # http://localhost:3000
npm run build  # production check
```
## 3. Edit your data
Everything lives in `lib/config.ts`: `site` (name, Discord username and server link, site URL, hero video), `works`, `services` (add `price: "From $XX"` when ready) and `about`.

## 4. Add videos and thumbnails
1. Put files in `public/videos/` and `public/thumbs/`.
2. Add one line to `works` in `lib/config.ts`:
```ts
{ id: "sword-combo", title: "Sword combo", category: "Combat Animation",
  description: "Optional text", video: "/videos/sword-combo.mp4", thumbnail: "/thumbs/sword-combo.jpg" }
```
`video` also accepts a YouTube link (best for big files; Vercel limits static file sizes). Empty `video`/`thumbnail` show a placeholder. Set `heroVideo` the same way.

## 5. Upload to GitHub
```bash
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```
## 6. Deploy on Vercel
1. Go to vercel.com, then **Add New → Project** and import your repo.
2. Keep the detected Next.js settings and click **Deploy** (no environment variables needed).
3. Copy your final URL into `site.url` in `lib/config.ts` and push again (used for SEO and Open Graph).

Optional: add `public/opengraph-image.png` (1200x630) for a link preview image.
