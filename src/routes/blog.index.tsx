import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, formatDate } from "@/lib/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Varun Chikkala" },
      {
        name: "description",
        content: "Writing on engineering, machine learning, and clean code by Varun Chikkala.",
      },
      { property: "og:title", content: "Blog | Varun Chikkala" },
      {
        property: "og:description",
        content: "Writing on engineering, machine learning, and clean code.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = getAllPosts();
  return (
    <div className="bg-background text-zinc-400 font-body min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <header className="mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
              The Latent Space
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-zinc-100 leading-tight mb-6">
              Writing
            </h1>
            <p className="text-lg leading-relaxed max-w-[56ch]">
              Long-form notes on the systems I'm building and the things I'm learning along the
              way.
            </p>
          </header>

          <div className="divide-y divide-zinc-900/60">
            {posts.length === 0 && (
              <p className="py-8 text-zinc-500">No posts yet. First one coming soon.</p>
            )}
            {posts.map((post) => (
              <article key={post.slug} className="py-10 group">
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                  <div className="flex items-center gap-4 text-xs text-zinc-600 mb-3 uppercase tracking-widest">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-semibold text-zinc-100 group-hover:text-accent transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-base text-zinc-400 leading-relaxed">{post.excerpt}</p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-zinc-900 ring-1 ring-zinc-800 rounded text-[11px] text-zinc-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
