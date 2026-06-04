## Portfolio + Blog Build Plan

Build a personal portfolio for Varun Chikkala in the "Editorial long-scroll" direction, plus a markdown-based blog section.

### Design tokens (copied verbatim from chosen direction)
- Base `#0a0a1a`, accent `#4f46e5`, zinc neutrals
- Fonts: Space Grotesk (display) + DM Sans (body), loaded via Google Fonts in `__root.tsx`
- Tokens written into `src/styles.css` as oklch equivalents + accent indigo

### Routes
- `/` — Home (hero, featured project APIVerse, education timeline, projects grid, skills/experience, hobbies, blog preview, footer)
- `/blog` — Blog index listing all markdown posts (date, title, excerpt, read time)
- `/blog/$slug` — Individual post page rendering markdown

Shared nav + footer in `__root.tsx` so they appear on every page.

### Real content (from CV)
- Hero: name, "MS Computer Science from Portland State…web dev + ML"
- Education: Portland State (MS CS, 2023–25), VIT Vellore (B.Tech CS Bioinformatics, 2019–23)
- Skills: Python, C/C++, Java, SQL/PostgreSQL/NoSQL, Flask, Docker/Kubernetes, GCP/Azure, ML, Web Dev
- Projects: APIVerse (featured), TriMet GPS Insights, Code Documenter — with real tech, impact bullets, GitHub links
- Hobbies, Contact, LinkedIn + GitHub links in footer

### Blog implementation (markdown files in repo)
- Posts live in `src/content/posts/*.md` with frontmatter: `title`, `date`, `excerpt`, `readTime`, `tags`
- Use Vite's `import.meta.glob` to load all posts at build time (no server runtime needed)
- Parse frontmatter with `gray-matter`, render markdown with `react-markdown` + `remark-gfm`
- Typography styled via Tailwind prose-like custom styles matching the dark editorial theme
- Ship 2 sample starter posts (one welcome, one technical) so the section isn't empty
- Adding a new post = drop a `.md` file in `src/content/posts/` and it appears automatically

### Files to create/modify
- `src/styles.css` — replace tokens with the chosen direction's palette
- `src/routes/__root.tsx` — add Google Fonts, shared Nav + Footer
- `src/routes/index.tsx` — full portfolio page
- `src/routes/blog.index.tsx` — blog list
- `src/routes/blog.$slug.tsx` — post detail with `head()` SEO from frontmatter
- `src/lib/posts.ts` — glob + frontmatter loader, `getAllPosts()`, `getPost(slug)`
- `src/content/posts/welcome.md`, `src/content/posts/scaling-apis.md` — starter posts
- `src/components/Nav.tsx`, `src/components/Footer.tsx`, `src/components/ProjectCard.tsx`
- Hero/project images: generate via image tool (APIVerse hero, TriMet heatmap, Code Documenter) and save under `src/assets/`
- Each route gets its own `head()` meta (title, description, og:*)

### Dependencies
- `bun add gray-matter react-markdown remark-gfm`

### What stays out of scope (can add later)
- No CMS / auth (per your pick: markdown files)
- No contact form backend — footer shows email + social links only
- No resume PDF (will reuse "Resume" button as a link placeholder you can wire up)

After build, I'll verify the home page, blog index, and one post render correctly in the preview.
