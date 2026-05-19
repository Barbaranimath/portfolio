import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container-page flex h-14 items-center justify-between">
        <Link to="/" className="font-mono text-xs font-semibold uppercase tracking-widest text-foreground">
          B. Saroukou
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-widest text-muted-foreground md:flex">
          <a href="/#about" className="hover:text-foreground transition-colors">À propos</a>
          <a href="/#work" className="hover:text-foreground transition-colors">Projets</a>
          <a href="/#expertise" className="hover:text-foreground transition-colors">Expertise</a>
        </nav>
        <a
          href="/#contact"
          className="inline-flex h-8 items-center justify-center rounded-full border border-border bg-background px-4 text-xs font-medium text-foreground transition-colors hover:bg-muted"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-4 py-10 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <span className="font-mono font-semibold uppercase tracking-widest text-foreground">
            Barbara Saroukou
          </span>
          <span className="hidden text-border md:inline">|</span>
          <span className="hidden md:inline">Data Scientist · Développeuse Web</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Barbaranimath"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nimath-barbara-saroukou?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nimatoulaisaroukou@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            nimatoulaisaroukou@gmail.com
          </a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
