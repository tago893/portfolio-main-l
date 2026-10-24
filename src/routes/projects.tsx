import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Varun Chikkala" },
      {
        name: "description",
        content: "Projects page is being refreshed. Check back soon.",
      },
      { property: "og:title", content: "Projects | Varun Chikkala" },
      {
        property: "og:description",
        content: "Projects page is being refreshed. Check back soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
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
      <main className="flex-1 px-6 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Projects
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-zinc-100 leading-tight mb-6 text-balance">
            Refreshing this page.
          </h1>
          <p className="text-lg max-w-[56ch] text-pretty">
            I'm reworking what goes here. Check back soon, or browse my GitHub in the meantime.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
