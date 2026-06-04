import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, formatDate } from "@/lib/posts";
import vulnImg from "@/assets/vuln-analyzer.jpg";
import mcpImg from "@/assets/mcp-agent.jpg";
import ragImg from "@/assets/rag-assistant.jpg";
import resumePdf from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varun Chikkala — Software Engineer" },
      {
        name: "description",
        content:
          "Software engineer with 1+ year of experience building scalable backend services, data platforms, and AI-enabled applications.",
      },
      { property: "og:title", content: "Varun Chikkala — Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend, data platforms, and AI projects from a Portland State MS CS grad based in Seattle.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const skillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "Bash"] },
  {
    label: "Backend",
    items: ["Spring Boot", "Django", "FastAPI", "Flask", "REST APIs", "Microservices"],
  },
  {
    label: "Data & Messaging",
    items: ["Apache Kafka", "AWS SQS", "GCP Pub/Sub", "RabbitMQ", "Event-driven", "Async"],
  },
  {
    label: "Databases & Search",
    items: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Milvus", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2 / S3 / RDS / SQS)",
      "GCP Cloud Run",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Jenkins",
    ],
  },
];

const experience = [
  {
    role: "Software Engineer",
    org: "Live Music Project",
    period: "Apr 2025 — Present",
    bullets: [
      "Designed a Redis-backed data layer that stabilized KPI reporting and eliminated 70% of redundant aggregation queries.",
      "Architected an automated ETL pipeline for regional email campaigns with SendGrid + SPF/DKIM, lifting deliverability to 85%.",
      "Implemented Django RBAC across 3 user tiers, securing event management, campaign operations, and analytics access.",
    ],
  },
  {
    role: "Graduate Student Researcher",
    org: "Portland State University",
    period: "Apr 2025 — Aug 2025",
    bullets: [
      "Built an ETL transit pipeline processing 350K+ daily GPS and stop-event records from Portland's public transit system.",
      "Transformed raw bus location data into query-ready datasets by fixing route IDs and computing vehicle speeds.",
      "Designed an NL-to-SQL interface with prompt sanitization so researchers could query transit data in plain English.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "Aham Learning",
    period: "Jan 2023 — Jun 2023",
    bullets: [
      "Built responsive dashboards for students and tutors using JavaScript, PHP, Laravel, MySQL, and Neo4j.",
      "Prototyped Neo4j graph models for 100+ course relationships, mapping prerequisites and learning paths.",
      "Performed functional and UI testing across 5+ dashboard workflows, surfacing layout and navigation regressions.",
    ],
  },
];

const sideProjects = [
  {
    title: "MCP DevOps PR Agent",
    image: mcpImg,
    description:
      "An AI-assisted developer productivity tool that analyzes GitHub PR events, failed CI runs, and security findings through a FastAPI webhook service. Custom MCP servers expose Git diffs, file updates, and Actions logs as structured tools for LLM-driven automation.",
    tech: ["Python", "FastAPI", "MCP", "GitHub Actions", "Gemini", "Bandit"],
    href: "https://github.com/varunchikkala",
  },
  {
    title: "AI Conversational Assistant",
    image: ragImg,
    description:
      "Researcher-facing RAG platform indexing 2.8M+ paper embeddings in Milvus. A chunked ingestion pipeline cut corpus indexing from 12 hours to under 4, with an LLM abstraction layer across Gemini, OpenAI, and Hugging Face.",
    tech: ["Python", "Milvus", "Azure AI Search", "Gemini", "OpenAI"],
    href: "https://github.com/varunchikkala",
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
                Varun Chikkala · Seattle, WA
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-zinc-100 leading-tight mb-8 text-balance">
                Building scalable backends, data platforms, and AI-enabled products.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[56ch] text-pretty mb-12">
                Software engineer with 1+ year of experience shipping production systems in Java
                and Python. MS in Computer Science from Portland State University. Strong in REST
                APIs, microservices, SQL/NoSQL, and cloud-native development.
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
                <a
                  href={resumePdf.url}
                  target="_blank"
                  rel="noreferrer"
                  download="Varun-Chikkala-Resume.pdf"
                  className="bg-zinc-900 text-zinc-300 py-2.5 pr-5 pl-4 rounded-md ring-1 ring-zinc-800 flex items-center gap-2 text-sm font-medium hover:text-zinc-100 transition-all"
                >
                  <span className="size-4 shrink-0">↓</span>
                  Download Resume
                </a>
                <Link
                  to="/blog"
                  className="text-zinc-300 py-2.5 px-2 text-sm font-medium hover:text-zinc-100 transition-all"
                >
                  Read Writing →
                </Link>
              </div>
            </header>
          </div>
        </section>

        {/* Featured Project: Vulnerability Analyzer */}
        <section id="projects" className="py-24 bg-zinc-950/30 border-y border-zinc-900/60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <img
                  src={vulnImg}
                  alt="Automated Vulnerability & Malware Analyzer — visualization"
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
                  Automated Vulnerability & Malware Analyzer
                </h2>
                <p className="text-base leading-relaxed text-pretty max-w-[48ch] mb-6">
                  A static application security testing tool that parses Python ASTs to detect
                  command injection, path traversal, hardcoded credentials, and insecure
                  deserialization — paired with an LLM-based malware engine that scores source code
                  for obfuscation, unauthorized network calls, and data leakage risks.
                </p>
                <p className="text-sm leading-relaxed text-zinc-500 max-w-[48ch] mb-8">
                  <span className="text-zinc-300">Output —</span> machine-readable JSON reports
                  with vulnerability types, severity, vulnerable snippets, and remediation steps.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Python", "LangChain", "AST", "Gemini", "JSON"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-zinc-900 ring-1 ring-zinc-800 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/varunchikkala"
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

        {/* About: Experience, education, more projects, skills */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-6">
                    The Trajectory
                  </h3>
                  <div className="p-5 bg-zinc-900/40 rounded-lg ring-1 ring-zinc-900">
                    <p className="text-sm font-medium text-zinc-100">Focus Areas</p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-500">
                      <li>Backend services & REST APIs</li>
                      <li>Data pipelines & ETL</li>
                      <li>LLM-powered tooling</li>
                      <li>Cloud-native deployments</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-zinc-900/40 rounded-lg ring-1 ring-zinc-900">
                    <p className="text-sm font-medium text-zinc-100">Based in</p>
                    <p className="mt-3 text-sm text-zinc-500">
                      Seattle, WA · open to remote and on-site SDE roles.
                    </p>
                  </div>
                  <a
                    href={resumePdf.url}
                    target="_blank"
                    rel="noreferrer"
                    download="Varun-Chikkala-Resume.pdf"
                    className="block p-5 bg-accent/10 rounded-lg ring-1 ring-accent/30 hover:bg-accent/20 transition-colors"
                  >
                    <p className="text-sm font-medium text-zinc-100">Resume (PDF)</p>
                    <p className="mt-2 text-xs text-zinc-400">
                      Full work history, projects, and skills — one page.
                    </p>
                  </a>
                </div>
              </aside>

              <div className="lg:col-span-8 space-y-20">
                {/* Experience */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-8">
                    Experience
                  </h3>
                  <div className="space-y-10">
                    {experience.map((job, i) => (
                      <div
                        key={job.role + job.org}
                        className="relative pl-8 border-l border-zinc-900/80"
                      >
                        <div
                          className={`absolute -left-[5px] top-1 size-2.5 rounded-full ring-4 ring-background ${
                            i === 0 ? "bg-accent" : "bg-zinc-700"
                          }`}
                        />
                        <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">
                          {job.period}
                        </p>
                        <h4 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                          {job.role}
                        </h4>
                        <p className="text-zinc-500 mb-4">{job.org}</p>
                        <ul className="space-y-2 max-w-[60ch]">
                          {job.bullets.map((b) => (
                            <li
                              key={b}
                              className="text-sm leading-relaxed text-pretty text-zinc-400 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-zinc-700"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-8">
                    Education
                  </h3>
                  <div className="space-y-10">
                    <div className="relative pl-8 border-l border-zinc-900/80">
                      <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-accent ring-4 ring-background" />
                      <h4 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                        MS in Computer Science
                      </h4>
                      <p className="text-zinc-500 mb-3">
                        Portland State University · 2023 — 2025 · GPA 3.88
                      </p>
                      <p className="max-w-[60ch] text-pretty leading-relaxed text-sm text-zinc-400">
                        Coursework: Data Engineering, Large Language Models, Software Engineering,
                        Database Management Systems, Cloud Engineering, Generative Security,
                        Computer Networks, Advanced Data Structures and Algorithms.
                      </p>
                    </div>
                    <div className="relative pl-8 border-l border-zinc-900/80">
                      <div className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-zinc-700 ring-4 ring-background" />
                      <h4 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                        B.Tech in Computer Science (Bioinformatics)
                      </h4>
                      <p className="text-zinc-500 mb-3">VIT, Vellore · 2019 — 2023</p>
                      <p className="max-w-[60ch] text-pretty leading-relaxed text-sm text-zinc-400">
                        Foundation in algorithms, systems, and computational biology — where the
                        pull toward data-heavy software first started.
                      </p>
                    </div>
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
                  <div className="space-y-6">
                    {skillGroups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 mb-3">
                          {group.label}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1.5 bg-zinc-900/60 ring-1 ring-zinc-900 rounded-md text-sm text-zinc-300"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
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
