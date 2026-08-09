# adityagollapalli.in — Resume Website

Astro 7 + Tailwind CSS 4 + React islands. Static build, deploys to Cloudflare Workers.

## First-time Mac setup

```bash
# Install Node 22+ via Homebrew
brew install node@22
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
node -v   # should print v22.x

# Install dependencies (run inside this folder)
cd ~/Downloads/Resume_Website
npm install
```

## Daily use

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build locally
```

## Editing content

All resume content lives in one file: `src/data/resume.ts`.
Layout/styling: `src/pages/index.astro`, `src/styles/global.css`, `src/layouts/Base.astro`.

## Deploying (when Cloudflare zone is Active)

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → import the repo.
   - Build command: `npx astro build`
   - Output directory: `dist`
   - `.node-version` (22) is already in the repo root.
3. Attach the custom domain `adityagollapalli.in` (and `www`) from the Workers project settings — do NOT hand-add A/CNAME records for apex or www.
4. Zoho Mail records (MX, SPF, DKIM, verification TXT) must stay DNS-only — don't touch them.

### Outstanding domain checks
- `dig DS adityagollapalli.in +short` → empty output means DNSSEC is fine.
- Send a test email to the Zoho address from an outside account once the zone is Active.
- Consider adding a `_dmarc` TXT record, e.g. `v=DMARC1; p=quarantine; rua=mailto:adityagollapalli@zohomail.in`.
