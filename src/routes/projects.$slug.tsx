import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProject, projects, type Project } from "@/data/projects";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const currentIdx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIdx + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <article className="container-page py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Tous les projets
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
            <span className="font-mono">{project.number}</span>
            <span className="h-px w-8 bg-border" />
            <span>{project.category}</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">{project.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground md:text-xl">{project.headline}</p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full bg-muted px-2.5 py-1 text-xs text-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <span aria-hidden>⌥</span> Voir le repo GitHub
              </a>
            ) : (
              <span className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-dashed border-border bg-background/50 px-4 text-sm font-medium text-muted-foreground">
                Repo GitHub — bientôt disponible
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Visiter le site →
              </a>
            )}
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-4 border-y border-border py-8 md:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="font-mono text-3xl font-semibold md:text-4xl">{m.value}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[180px_1fr] md:gap-16">
          {[
            { label: "Contexte", body: project.context },
            { label: "Approche", body: project.approach },
            { label: "Résultats", body: project.results },
            { label: "Impact", body: project.impact },
          ].map((section) => (
            <SectionBlock key={section.label} label={section.label} body={section.body} />
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Visualisations & résultats
          </p>
          <div className="mt-6 grid gap-8">
            {project.images.map((img, i) => (
              <figure key={i} className="overflow-hidden rounded-lg border border-border bg-surface-2">
                <img src={img.src} alt={img.caption} className="w-full" loading="lazy" />
                <figcaption className="border-t border-border bg-background px-4 py-3 text-xs text-muted-foreground md:text-sm">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8">
          <Link to="/projects/$slug" params={{ slug: next.slug }} className="group flex flex-col gap-1">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Projet suivant
            </span>
            <span className="text-xl font-semibold transition-colors group-hover:text-accent md:text-2xl">
              {next.title} →
            </span>
          </Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}

function SectionBlock({ label, body }: { label: string; body: string }) {
  return (
    <>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground md:sticky md:top-20 md:self-start">
        {label}
      </h2>
      <p className="-mt-10 text-base leading-relaxed text-foreground/80 md:mt-0 md:text-lg md:leading-[1.75]">
        {body}
      </p>
    </>
  );
}
