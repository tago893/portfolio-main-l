import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Varun Chikkala" },
      {
        name: "description",
        content: "Project showcase is being refreshed. New work coming soon.",
      },
      { property: "og:title", content: "Projects | Varun Chikkala" },
      {
        property: "og:description",
        content: "Project showcase is being refreshed. New work coming soon.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="bg-background text-zinc-400 font-body antialiased min-h-screen flex flex-col">
      <SiteNav />

      <main className="flex-1 flex items-center justify-center px-6 pt-40 pb-24">
        <div className="max-w-xl text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
            Projects
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-zinc-100 leading-tight mb-6 text-balance">
            Refreshing this page.
          </h1>
          <p className="text-lg leading-relaxed text-pretty mb-10">
            I'm reworking what I want to put here. New projects coming soon. In the meantime,
            reach out and I'll happily walk you through what I'm building.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/blog"
              className="bg-accent text-zinc-100 px-5 py-2.5 rounded-md ring-1 ring-accent text-sm font-medium hover:bg-accent/90 transition-all"
            >
              Read the blog
            </Link>
            <Link
              to="/"
              className="bg-zinc-900 text-zinc-300 px-5 py-2.5 rounded-md ring-1 ring-zinc-800 text-sm font-medium hover:text-zinc-100 transition-all"
            >
              Back home
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
