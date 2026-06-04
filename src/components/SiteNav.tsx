import { Link } from "@tanstack/react-router";
import resumePdf from "@/assets/resume.pdf.asset.json";

export function SiteNav() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-zinc-900/60 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-semibold text-zinc-100 tracking-tight">
          Varun Chikkala
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link to="/projects" activeProps={{ className: "text-zinc-100" }} className="hover:text-zinc-100 transition-colors">
            Projects
          </Link>
          <Link
            to="/blog"
            activeProps={{ className: "text-zinc-100" }}
            className="hover:text-zinc-100 transition-colors"
          >
            Blog
          </Link>
          <Link to="/" hash="about" className="hover:text-zinc-100 transition-colors">
            About
          </Link>
          <a
            href={resumePdf.url}
            target="_blank"
            rel="noreferrer"
            download="Varun-Chikkala-Resume.pdf"
            className="bg-accent text-zinc-100 px-4 py-2 rounded-md ring-1 ring-accent hover:bg-accent/90 transition-transform active:scale-95"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
