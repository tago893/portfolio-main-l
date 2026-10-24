// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site from a subdirectory (e.g. /portfolio-main-l/).
// The CI workflow sets VITE_BASE_PATH; local and Lovable builds stay at "/".
// Only the Pages build enables static SPA output (one client shell + assets,
// no server at request time) — Lovable's publish keeps server rendering.
const basePath = process.env.VITE_BASE_PATH || "/";
const isPagesBuild = Boolean(process.env.VITE_BASE_PATH);

export default defineConfig({
  vite: { base: basePath },
  ...(isPagesBuild
    ? {
        // The plugin derives the router basepath from the Vite base automatically.
        tanstackStart: { spa: { enabled: true } },
      }
    : {}),
});
