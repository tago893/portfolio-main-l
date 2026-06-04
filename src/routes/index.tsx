import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, formatDate } from "@/lib/posts";
import apiverseImg from "@/assets/apiverse.jpg";
import trimetImg from "@/assets/trimet.jpg";
import codedocImg from "@/assets/codedoc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varun Chikkala — Engineer & Builder" },
      {
        name: "description",
        content:
          "MS in Computer Science from Portland State. Building full-stack web systems and machine learning pipelines.",
      },
      { property: "og:title", content: "Varun Chikkala — Engineer & Builder" },
      {
        property: "og:description",
        content:
          "Selected projects, experience, and writing on engineering and machine learning.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const skills = [
  "Python",
  "C / C++",
  "Java",
  "SQL / PostgreSQL / NoSQL",
  "Flask",
  "Docker / Kubernetes",
  "Google Cloud / Azure",
  "Machine Learning",
  "Web Development (HTML, CSS, JS)",
];

const sideProjects = [
  {
    title: "TriMet GPS Insights",
    image: trimetImg,
    description:
      "Real-time GPS analytics pipeline processing 1.5M+ location signals for TriMet. Reduced query latency by optimizing the PostgreSQL schema and batching writes; visualized transit insights with MapboxGL clustering and route heatmaps.",
    tech: ["Python", "PostgreSQL", "Google Cloud", "MapboxGL"],
    href: "https://github.com/AashrithaKondaveetii/DE_Project_Pipeline_Pioneers",
  },
  {
    title: "Code Documenter",
    image: codedocImg,
    description:
      "Leveraging LLMs to generate semantic documentation for legacy Python and TypeScript repositories. Cuts onboarding time for new contributors and surfaces undocumented edge cases automatically.",
    tech: ["Python", "LLMs", "AST parsing"],
    href: "https://github.com/sriramnurani1995",
  },
];

function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="bg-background text-zinc-400 font-body antialiased">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-4xl">
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
                Varun Chikkala · Portland, OR
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-zinc-100 leading-tight mb-8 text-balance">
                Building robust systems at the intersection of web and intelligence.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[56ch] text-pretty mb-12">
                MS in Computer Science from Portland State University. Focused on architecting
                scalable full-stack applications and deploying machine learning models that solve
                practical problems.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  to="/"
                  hash="projects"
                  className="bg-accent text-zinc-100 py-2.5 pr-5 pl-4 rounded-md ring-1 ring-accent flex items-center gap-2 text-sm font-medium hover:bg-accent/90 transition-all"
                >
                  <span className="size-4 shrink-0">→</span>
                  View Projects
                </Link>
                <Link
                  to="/blog"
                  className="bg-zinc-900 text-zinc-300 py-2.5 pr-5 pl-4 rounded-md ring-1 ring-zinc-800 flex items-center gap-2 text-sm font-medium hover:text-zinc-100 transition-all"
                >
                  <span className="size-4 shrink-0">○</span>
                  Read Writing
                </Link>
              </div>
            </header>
          </div>
        </section>

        {/* Featured Project: APIVerse */}
        <section id="projects" className="py-24 bg-zinc-950/30 border-y border-zinc-900/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <img
                  src={apiverseImg}
                  alt="APIVerse — API exploration platform interface"
                  width={1280}
                  height={960}
                  className="w-full aspect-[4/3] object-cover rounded-xl ring-1 ring-zinc-900"
                />
              </div>
              <div className="lg:col-span-5">
                <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Featured Case Study
                </span>
                <h2 className="font-display text-4xl font-semibold text-zinc-100 mb-6 text-balance">
                  APIVerse
                </h2>
                <p className="text-base leading-relaxed text-pretty max-w-[48ch] mb-6">
                  A secure API exploration platform for Portland State students to learn real-world
                  API workflows. Integrated Gemini LLM endpoints via Vertex AI and automated API
                  key lifecycle management.
                </p>
                <p className="text-sm leading-relaxed text-zinc-500 max-w-[48ch] mb-8">
                  <span className="text-zinc-300">Impact —</span> improved scalability and
                  iteration speed by 25% through faster redeploys on Cloud Run.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Python", "Flask", "FastAPI", "Google Cloud", "Docker", "OAuth"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-900 ring-1 ring-zinc-800 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/sriramnurani1995/APIverse/tree/main"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-100 font-medium hover:text-accent transition-colors group"
                >
                  View on GitHub
                  <span className="size-4 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About: Education, more projects, skills */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-6">
                    The Trajectory
                  </h3>
                  <div className="p-5 bg-zinc-900/40 rounded-lg ring-1 ring-zinc-900">
                    <p className="text-sm font-medium text-zinc-100">Core Competencies</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
                      <li>Full-Stack Development</li>
                      <li>Machine Learning Pipelines</li>
                      <li>Distributed Systems</li>
                      <li>Cloud Infrastructure (GCP, Azure)</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-zinc-900/40 rounded-lg ring-1 ring-zinc-900">
                    <p className="text-sm font-medium text-zinc-100">Hobbies</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
                      <li>Long-form reading</li>
                      <li>Cricket & football</li>
                      <li>Photography</li>
                      <li>Exploring the PNW</li>
                    </ul>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-8 space-y-20">
                {/* Education entries */}
                <div className="space-y-12">
                  <div className="relative pl-8 border-l border-zinc-900/80">
                    <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                    <span className="text-sm font-medium text-accent mb-2 block uppercase tracking-wider">
                      Education
                    </span>
                    <h4 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                      MS in Computer Science
                    </h4>
                    <p className="text-zinc-500 mb-3">Portland State University · 2023 — 2025</p>
                    <p className="max-w-[56ch] text-pretty leading-relaxed">
                      Graduated June 2025, GPA 3.88/4.0. Coursework spanning intelligent systems,
                      backend architectures, and large-scale data engineering.
                    </p>
                  </div>
                  <div className="relative pl-8 border-l border-zinc-900/80">
                    <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-zinc-700 ring-4 ring-background" />
                    <h4 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                      B.Tech in Computer Science (Bioinformatics)
                    </h4>
                    <p className="text-zinc-500 mb-3">VIT, Vellore · 2019 — 2023</p>
                    <p className="max-w-[56ch] text-pretty leading-relaxed">
                      Foundation in algorithms, systems, and computational biology — where I first
                      got hooked on data-heavy software.
                    </p>
                  </div>
                </div>

                {/* Other projects */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-8">
                    More Work
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    {sideProjects.map((p) => (
                      <a
                        key={p.title}
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group block"
                      >
                        <img
                          src={p.image}
                          alt={`${p.title} preview`}
                          width={1280}
                          height={800}
                          loading="lazy"
                          className="w-full aspect-video object-cover rounded-xl ring-1 ring-zinc-900 mb-6 group-hover:ring-accent/40 transition-all"
                        />
                        <h5 className="text-zinc-100 font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                          {p.title}
                        </h5>
                        <p className="text-sm leading-relaxed text-pretty text-zinc-500 mb-4">
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 bg-zinc-900 ring-1 ring-zinc-800 rounded text-[11px] text-zinc-400"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-8">
                    Skills & Tools
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 bg-zinc-900/60 ring-1 ring-zinc-900 rounded-md text-sm text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog preview */}
        <section id="blog" className="py-32 px-6 bg-zinc-950/40 border-t border-zinc-900/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
              <div>
                <h2 className="font-display text-4xl font-semibold text-zinc-100 mb-4">
                  The Latent Space
                </h2>
                <p className="max-w-[40ch] text-pretty">
                  Notes on engineering, machine learning, and the pursuit of clean code.
                </p>
              </div>
              <Link
                to="/blog"
                className="text-sm font-medium text-accent hover:underline decoration-2 underline-offset-4"
              >
                View all posts →
              </Link>
            </div>

            <div className="divide-y divide-zinc-900/60">
              {posts.length === 0 && (
                <p className="py-8 text-zinc-500">No posts yet. Check back soon.</p>
              )}
              {posts.map((post) => (
                <article key={post.slug} className="py-8 group">
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="grid md:grid-cols-12 gap-8 items-center"
                  >
                    <time className="md:col-span-2 text-sm text-zinc-600">
                      {formatDate(post.date)}
                    </time>
                    <div className="md:col-span-8">
                      <h3 className="text-xl font-display font-semibold text-zinc-200 group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 line-clamp-1">{post.excerpt}</p>
                    </div>
                    <div className="md:col-span-2 md:text-right">
                      <span className="text-xs uppercase tracking-widest text-zinc-700">
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
