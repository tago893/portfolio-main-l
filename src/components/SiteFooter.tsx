export function SiteFooter() {
  return (
    <footer className="py-16 px-6 border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-display font-semibold text-zinc-100">Varun Chikkala</span>
          <p className="text-sm text-zinc-500">Engineer · Researcher · Builder</p>
        </div>
        <div className="flex gap-8 text-sm text-zinc-400">
          <a
            href="https://github.com/sriramnurani1995"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-100 transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:hello@example.com" className="hover:text-zinc-100 transition-colors">
            Email
          </a>
        </div>
        <div className="text-xs text-zinc-600">© {new Date().getFullYear()} · Portland, OR</div>
      </div>
    </footer>
  );
}
