import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Must match `base` in vite.config.ts. GitHub Pages serves the project
// from /portfolio-main-l/, so the router needs the same basepath or all
// <Link> navigations will 404.
const BASE_PATH = "/portfolio-main-l";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    basepath: BASE_PATH,
  });

  return router;
};
