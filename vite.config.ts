// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site build for GitHub Pages. TanStack Start prerenders every route
// to HTML and Nitro's `static` preset emits a plain `.output/public` tree —
// no server runtime needed.
export default defineConfig({
  nitro: {
    preset: "static",
  },
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [
      { path: "/" },
      { path: "/projects" },
      { path: "/blog" },
      { path: "/blog/draft-placeholder" },
    ],
  },
});
