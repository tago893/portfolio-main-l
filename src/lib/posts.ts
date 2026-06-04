// Markdown blog loader. Posts live in src/content/posts/*.md with frontmatter.
// Loaded at build time via Vite glob — no server runtime needed.

const modules = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content: string;
};

// Tiny YAML-ish frontmatter parser (avoids node-only deps in the bundle).
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const [, fm, content] = match;
  const data: Record<string, unknown> = {};
  for (const line of fm.split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val: string = m[2].trim();
    // Array form: ["a", "b"]
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    data[key] = val;
  }
  return { data, content };
}

function slugFromPath(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

const allPosts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    return {
      slug: slugFromPath(path),
      title: (data.title as string) ?? "Untitled",
      date: (data.date as string) ?? "",
      excerpt: (data.excerpt as string) ?? "",
      readTime: (data.readTime as string) ?? "",
      tags: (data.tags as string[]) ?? [],
      content: content.trim(),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPost(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" });
}
