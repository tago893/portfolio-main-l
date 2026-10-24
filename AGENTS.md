# Project rules

- Deployment: GitHub Pages via `.github/workflows/deploy-pages.yml` (push to main). The workflow builds with `VITE_BASE_PATH=/portfolio-main-l/`; if the repo name changes, update `BASE_PATH` in the workflow to match. The static SPA build (`tanstackStart.spa`) must only be enabled when `VITE_BASE_PATH` is set — Lovable's publish keeps server rendering.
- Site copy: no em dashes; small informal imperfections are intentional (user preference, not typos).
- Blog posts live in `src/content/posts/*.md` (build-time Vite glob, no server runtime). Draft-tagged posts are hidden from the homepage preview but still reachable at their URL.
