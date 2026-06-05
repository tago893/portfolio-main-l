// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static site build for GitHub Pages. Nitro prerenders every route into
// plain HTML under .output/public — no server runtime needed.
export default defineConfig({
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ["/", "/projects", "/blog", "/blog/draft-placeholder", "/404.html"],
    },
  },
});
