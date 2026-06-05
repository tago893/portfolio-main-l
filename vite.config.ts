// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves this project from /portfolio-main-l/ (project page,
// not user page), so all asset URLs and the router must be prefixed with
// that subpath. If you rename the repo, update BASE_PATH to match.
const BASE_PATH = "/portfolio-main-l/";

export default defineConfig({
  base: BASE_PATH,
  tanstackStart: {
    spa: {
      enabled: true,
    },
  },
  // Skip Nitro/Cloudflare bundling — GitHub Pages serves the static
  // Vite client output directly. Without this, Nitro prerender fails
  // and no index.html is emitted.
  nitro: false,
});
