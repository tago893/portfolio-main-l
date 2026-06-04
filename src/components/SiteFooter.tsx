import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getUTCFullYear();
  return (
    <footer className="py-16 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-display font-semibold text-zinc-100">Varun Chikkala</span>
          <p className="text-sm text-zinc-500">Software Engineer · Backend · Data · AI</p>
        </div>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a
            href="https://github.com/varunchikkala"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/varun-chikkala/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href="mailto:chvarun245@gmail.com"
            aria-label="Email"
            className="inline-flex items-center gap-2 hover:text-zinc-100 transition-colors"
          >
            <Mail className="size-4" /> Email
          </a>
        </div>
        <div className="text-xs text-zinc-600">© {year} · Hayward, CA</div>
      </div>
    </footer>
  );
}
