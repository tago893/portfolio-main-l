import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getPost, formatDate } from "@/lib/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    return {
      meta: [
        { title: `${post.title} | Varun Chikkala` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "article:published_time", content: post.date },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="bg-background text-zinc-400 min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 grid place-items-center px-6">
        <div className="text-center">
          <h1 className="font-display text-3xl text-zinc-100 mb-3">Post not found</h1>
          <p className="mb-6">That post doesn't exist (yet).</p>
          <Link to="/blog" className="text-accent underline underline-offset-4">
            ← Back to all posts
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="bg-background text-zinc-400 min-h-screen grid place-items-center p-6">
      <div className="text-center">
        <h1 className="font-display text-2xl text-zinc-100 mb-3">Something went wrong</h1>
        <p className="text-sm">{error.message}</p>
      </div>
    </div>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="bg-background text-zinc-400 font-body min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 pt-40 pb-24 px-6">
        <article className="max-w-2xl mx-auto">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-accent mb-12 inline-block"
          >
            ← All posts
          </Link>
          <header className="mb-12">
            <div className="flex items-center gap-4 text-xs text-zinc-600 mb-4 uppercase tracking-widest">
              <time>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-zinc-100 leading-tight text-balance">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">{post.excerpt}</p>
            )}
          </header>

          <div className="prose-editorial">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </div>

          {post.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-zinc-900/60 flex flex-wrap gap-2">
              {post.tags.map((t: string) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-zinc-900 ring-1 ring-zinc-800 rounded text-xs text-zinc-400"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
