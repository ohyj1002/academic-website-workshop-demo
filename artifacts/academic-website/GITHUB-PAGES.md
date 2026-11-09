# GitHub Pages

Repository: https://github.com/ohyj1002/academic-website-workshop-demo

Expected site URL: https://ohyj1002.github.io/academic-website-workshop-demo/

## Build

Run from the repository root with Node.js 24 and pnpm 10.26.1:

```sh
pnpm install --frozen-lockfile --prod=false
pnpm --filter @workspace/academic-website run build:pages
```

Production output: `artifacts/academic-website/dist/public`.

The Pages build sets `BASE_PATH=/academic-website-workshop-demo/`. Vite prefixes
the JavaScript, CSS, and favicon URLs with this value. The existing asset helper
and Wouter router use the same Vite base for images, PDFs, and internal links.
Normal Replit development still uses its managed workflow's base and port.

After Vite builds, the build script creates `research/index.html`, `cv/index.html`,
and `contact/index.html`, alongside the About entry at `index.html`. These entries
load the same client application. GitHub Pages can therefore serve direct visits
and refreshes, with or without the trailing slash, without a server-side fallback,
hash-based routing, or a custom 404 redirect. Wouter accepts trailing slashes;
navigation highlighting normalizes them. Publication and skip-link anchors remain
normal fragment links.

The build fails if any page entry, bundled JS/CSS, favicon, portrait, original
research figure, study PDF, or CV PDF is missing, or if an HTML asset URL escapes
the configured base path. `.nojekyll` marks the output as already-built static files.

## Enable deployment when ready

No commit, push, or deployment is performed by this preparation step.

After reviewing and pushing the changes yourself, open the repository's
**Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` or manually
from the Actions tab. It builds only this website and deploys its verified static
output through the official Pages actions using the `github-pages` environment.
Any environment protection rules must allow the `main` branch to deploy.
