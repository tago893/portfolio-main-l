import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2, Server, Network, Database, Cloud,
  Coffee, Terminal, Table, Zap, Beaker,
  Globe, Boxes, Activity, MessageSquare, MessageCircle,
  Search, GitBranch, Wrench, Box, Hexagon, Clock,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { getAllPosts, formatDate } from "@/lib/posts";
import vulnImg from "@/assets/vuln-analyzer.jpg";
import mcpImg from "@/assets/mcp-agent.jpg";
import ragImg from "@/assets/rag-assistant.jpg";
import resumePdf from "@/assets/resume.pdf.asset.json";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Varun Chikkala — Software Engineer" },
      {
        name: "description",
        content:
          "Junior backend engineer building services, data platforms, and AI-enabled systems. MS CS from Portland State.",
      },
      { property: "og:title", content: "Varun Chikkala — Software Engineer" },
      {
        property: "og:description",
        content:
          "Backend engineer. Data platforms, vector search, and AI systems from a Portland State MS CS grad based in Hayward, CA.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const skillGroups: { label: string; icon: typeof Code2; items: string[] }[] = [
  { label: "Languages", icon: Code2, items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "Bash"] },
  {
    label: "Backend",
    icon: Server,
    items: ["Spring Boot", "Django", "FastAPI", "Flask", "REST APIs", "Microservices"],
  },
  {
    label: "Data & Messaging",
    icon: Network,
    items: ["Apache Kafka", "AWS SQS", "GCP Pub/Sub", "RabbitMQ"],
  },
  {
    label: "Databases & Search",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "Redis", "Elasticsearch", "Milvus", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    icon: Cloud,
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

const skillIconMap: Record<string, LucideIcon> = {
  "Java": Coffee,
  "Python": Code2,
  "SQL": Table,
  "JavaScript": Code2,
  "TypeScript": Code2,
  "Bash": Terminal,
  "Spring Boot": Server,
  "Django": Box,
  "FastAPI": Zap,
  "Flask": Beaker,
  "REST APIs": Globe,
  "Microservices": Boxes,
  "Apache Kafka": Activity,
  "AWS SQS": MessageSquare,
  "GCP Pub/Sub": MessageCircle,
  "RabbitMQ": MessageSquare,
  "Event-driven": Activity,
  "Async": Clock,
  "PostgreSQL": Database,
  "MySQL": Database,
  "Redis": Database,
  "Elasticsearch": Search,
  "Milvus": Search,
  "MongoDB": Database,
  "AWS (EC2 / S3 / RDS / SQS)": Cloud,
  "GCP Cloud Run": Cloud,
  "Docker": Box,
  "Kubernetes": Hexagon,
  "GitHub Actions": GitBranch,
  "Jenkins": Wrench,
};

const experience: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  tech: string[];
}[] = [
  {
    role: "Software Engineer",
    org: "Live Music Project",
    period: "Jan 2026 — Present",
    bullets: [
      "Building backend services for event and campaign operations, hardening analytics reliability and campaign execution pipelines.",
      "Implementing access control for orchestra managers, admins, and internal users across event management and reporting surfaces.",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Redis", "REST APIs"],
  },
  {
    role: "Software Engineer",
    org: "Portland State University",
    period: "Apr 2025 — Present",
    bullets: [
      "Built a RAG pipeline over 2.8M+ ArXiv papers using SPECTER embeddings and Milvus vector search, cutting query latency by 66%.",
      "Developed a flexible LLM service layer supporting Gemini, OpenAI, and Mistral to swap providers and improve response reliability.",
      "Implemented role-based access workflows for admins, researchers, and students for controlled access to research features.",
      "Built a batch ingestion pipeline processing 80K papers per batch, improving large-scale search readiness.",
    ],
    tech: ["Python", "FastAPI", "Milvus", "PostgreSQL", "GCP Pub/Sub"],
  },
  {
    role: "Software Engineer (IT Specialist)",
    org: "The Computer Action Team @ PSU",
    period: "Sep 2023 — Feb 2025",
    bullets: [
      "Supported Linux and Windows systems across the College of Engineering — troubleshooting lab machines, software access, and configuration issues.",
      "Collaborated with IT staff and faculty to resolve tickets, document recurring issues, and improve reliability of technical workflows.",
      "Built hands-on experience with scripting, systems administration, networking, and DevOps practices through CAT's technical training.",
    ],
    tech: ["Linux", "Bash", "Docker"],
  },
  {
    role: "Software Engineer Intern",
    org: "Aham Learning",
    period: "Jan 2023 — Jun 2023",
    bullets: [
      "Built student and tutor dashboards end-to-end with JavaScript, PHP, Laravel, MySQL, and Neo4j.",
      "Modeled 100+ course relationships in Neo4j, enabling prerequisite and learning-path queries.",
      "Owned QA for 5+ dashboard workflows, catching layout and navigation regressions before release.",
    ],
    tech: ["JavaScript", "MySQL", "MongoDB"],
  },
];




function HomePage() {
  const posts = getAllPosts().filter((p) => !p.tags.includes("draft")).slice(0, 3);

  return (
    <div className="bg-background text-zinc-400 font-body antialiased">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <header className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400/90 bg-emerald-500/10 ring-1 ring-emerald-500/20 px-2.5 py-1 rounded-full">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Open to SDE roles · 2026
                </span>
                <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  Varun Chikkala · Hayward, CA
                </span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-zinc-100 leading-tight mb-8 text-balance">
                Backend engineer into search, retrieval, and AI systems.
              </h1>
              <p className="text-lg md:text-xl leading-relaxed max-w-[56ch] text-pretty mb-12">
                MS CS grad from Portland State, building AI and data systems that turn
                large-scale information into secure, searchable, and usable insights.
                Into backend engineering, RAG pipelines, vector databases, and LLM
                orchestration. I like 0-to-1 work — designing, prototyping, and turning
                ideas into working systems.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  to="/projects"
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

        {/* Projects carousel preview */}
        <section id="projects" className="py-24 bg-zinc-950/30 border-y border-zinc-900/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-10">
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <span className="text-accent font-display text-sm font-semibold tracking-widest uppercase mb-3 block">
                  Selected Work
                </span>
                <h2 className="font-display text-4xl font-semibold text-zinc-100 text-balance">
                  Selected work, shipped recently.
                </h2>
              </div>
              <Link
                to="/projects"
                className="text-sm font-medium text-accent hover:underline decoration-2 underline-offset-4"
              >
                Browse all projects →
              </Link>
            </div>
          </div>

          <div
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 px-6 max-w-7xl mx-auto scroll-px-6"
            style={{ scrollbarWidth: "thin" }}
          >
            {[
              {
                title: "Automated Vulnerability & Malware Analyzer",
                img: vulnImg,
                tag: "AI · Security",
                blurb:
                  "Python AST-driven SAST with an LLM malware engine emitting structured JSON reports.",
              },
              {
                title: "MCP DevOps PR Agent",
                img: mcpImg,
                tag: "AI · DevTools",
                blurb:
                  "FastAPI webhook + MCP servers that turn GitHub PRs and CI logs into LLM-actionable tools.",
              },
              {
                title: "AI Conversational Assistant",
                img: ragImg,
                tag: "RAG · Vector Search",
                blurb:
                  "2.8M paper embeddings in Milvus; ingestion cut from 12h to under 4h per batch.",
              },
            ].map((p) => (
              <Link
                key={p.title}
                to="/projects"
                className="snap-start shrink-0 w-[88vw] sm:w-[420px] group"
              >
                <div className="rounded-xl ring-1 ring-zinc-900 overflow-hidden bg-zinc-950 group-hover:ring-accent/40 transition-all">
                  <img
                    src={p.img}
                    alt={`${p.title} preview`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent mb-3">
                      {p.tag}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-zinc-100 mb-2 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-zinc-500 text-pretty">{p.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About: Experience, education, more projects, skills */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <aside className="lg:col-span-4">
                <div className="sticky top-24 space-y-4">
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-6">
                    At a glance
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
                      Hayward, CA · open to remote and on-site SDE roles.
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
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {job.tech.map((t) => {
                            const TIcon = skillIconMap[t] ?? Code2;
                            return (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900 ring-1 ring-zinc-800 rounded text-[11px] text-zinc-400"
                              >
                                <TIcon className="size-3 text-zinc-500" />
                                {t}
                              </span>
                            );
                          })}
                        </div>
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

                {/* Projects CTA */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-4">
                    Projects
                  </h3>
                  <p className="max-w-[56ch] mb-6 text-zinc-400">
                    The full catalog — grouped by AI &amp; developer tools, data &amp; ML, and web
                    &amp; APIs — lives on a dedicated page.
                  </p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 bg-accent text-zinc-100 px-5 py-2.5 rounded-md ring-1 ring-accent text-sm font-medium hover:bg-accent/90 transition-all"
                  >
                    Browse all projects →
                  </Link>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-display text-2xl font-semibold text-zinc-100 mb-8">
                    Skills & Tools
                  </h3>
                  <div className="space-y-6">
                    {skillGroups.map((group) => {
                      const Icon = group.icon;
                      return (
                        <div key={group.label}>
                          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500 mb-3">
                            <Icon className="size-4 text-accent" />
                            {group.label}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((s) => {
                              const SkillIcon = skillIconMap[s] ?? Code2;
                              return (
                                <span
                                  key={s}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/60 ring-1 ring-zinc-900 rounded-md text-sm text-zinc-300"
                                >
                                  <SkillIcon className="size-3.5 text-zinc-500" />
                                  {s}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
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
