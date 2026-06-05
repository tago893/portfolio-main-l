// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// SPA build for GitHub Pages. TanStack Start emits a single index.html +
// client bundle that can be served by any static host. Routing happens
// entirely in the browser; the workflow copies index.html -> 404.html so
// GitHub Pages serves the SPA shell for deep links.
export default defineConfig({
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
