import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/data/projects";
import portrait from "@/assets/portrait.jpeg";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="container-page pt-16 pb-20 md:pt-28 md:pb-32">
        <div className="grid gap-10 md:grid-cols-[1fr_240px] md:items-start md:gap-16">

          {/* Left */}
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Finissante en Informatique
            </p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight leading-[1.08] md:text-7xl">
              Barbara<br />Saroukou
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              Finissante en informatique spécialisée en science des données, avec expérience en automatisation Python, SQL, développement web, tableaux de bord et analytics. Intéressée par les rôles d'analyste de données, BI, data operations et développement d'outils orientés données.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
              >
                Voir les projets →
              </a>
              <a
                href="/CV_Barbara_Saroukou.pdf"
                download
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                ↓ Télécharger le CV
              </a>
            </div>

            {/* Domaines */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-8 text-xs text-muted-foreground">
              {[
                "Machine Learning",
                "NLP & Transformers",
                "Développement Web",
                "Analyse de données",
                "Feature Engineering",
              ].map((d) => (
                <span key={d} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="mx-auto w-48 md:mx-0 md:w-full">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src={portrait}
                alt="Barbara Saroukou, Data Scientist"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 flex justify-center gap-5 text-xs text-muted-foreground md:justify-start">
              <a
                href="https://github.com/Barbaranimath"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/nimath-barbara-saroukou?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:nimatoulaisaroukou@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                Email ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                À propos
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
                Diplômée en informatique, sciences des données à l'UQTR,
                avec une expérience concrète en data science, développement web
                et analyse de données acquise à travers plusieurs stages en
                entreprise. Je travaille aussi bien sur des pipelines de machine
                learning que sur des applications web complètes.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Mon approche combine rigueur analytique et sens du produit :
                chaque modèle ou application doit répondre à un vrai besoin,
                être compréhensible par les équipes métier et livrer des
                résultats mesurables. Ouverte aux opportunités en data science,
                développement web, ou des rôles combinant les deux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="container-page py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-4xl">
              Projets
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
            Six études de cas end-to-end en data science et machine learning.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_12px_40px_rgba(15,23,42,0.09)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-surface-2">
                <img
                  src={p.cover}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted-foreground">{p.number}</span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    {p.category}
                  </span>
                </div>
                <h3 className="text-base font-semibold leading-snug tracking-tight">{p.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.tagline}</p>
                <div className="flex flex-wrap gap-1.5 border-t border-border pt-3">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-foreground/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="border-t border-border bg-surface">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Expertise
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  title: "Frontend Web",
                  items: [
                    "React 18, TypeScript",
                    "Vite, Tailwind CSS",
                    "Framer Motion",
                    "React Router v6",
                    "React Query",
                    "SPA modernes",
                  ],
                },
                {
                  title: "Mobile & Cross-Platform",
                  items: [
                    "Flutter",
                    "Flutter Neumorphic",
                    "Mobile-first design",
                    "Responsive avancé",
                    "Composants réutilisables",
                  ],
                },
                {
                  title: "Backend & Bases de données",
                  items: [
                    "Node.js, Python",
                    "Supabase (auth, DB, Edge Functions)",
                    "MongoDB, PostgreSQL, MySQL",
                    "Laravel, PHP",
                    "REST API, formulaires dynamiques",
                  ],
                },
                {
                  title: "Data Science & Analytics",
                  items: [
                    "Python, Pandas, NumPy",
                    "Scikit-learn, XGBoost",
                    "SMOTE, SHAP, ROC-AUC",
                    "Power BI, Tableau",
                    "Google Analytics, SQL",
                  ],
                },
                {
                  title: "Architecture & Performance",
                  items: [
                    "Architecture modulaire",
                    "Design system cohérent",
                    "Optimisation performances",
                    "Debugging avancé",
                    "Refactorisation sans régression",
                  ],
                },
                {
                  title: "DevOps & Déploiement",
                  items: [
                    "Docker, Vite, esbuild",
                    "Hébergement web (HOSTINGER, WHC)",
                    "SFTP, DNS, configuration",
                    "WordPress, mise en production",
                    "Maintenance informatique",
                  ],
                },
                {
                  title: "UI/UX Design",
                  items: [
                    "Figma",
                    "Mobile-first design",
                    "Micro-interactions",
                    "Animations modernes",
                    "Ergonomie avancée",
                  ],
                },
                {
                  title: "Intégrations & Outils",
                  items: [
                    "API IA & Chatbot",
                    "Notifications email (OTP)",
                    "Persistance des données",
                    "Git, npm",
                    "Fusion de codebases",
                  ],
                },
              ].map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-border bg-background p-6"
                >
                  <h3 className="text-sm font-semibold text-foreground">{g.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container-page py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Contact
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Prenons contact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Disponible pour des opportunités full-time, des missions freelance
                et des collaborations. N'hésitez pas à m'écrire pour discuter
                de vos projets.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:nimatoulaisaroukou@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground/20 hover:bg-muted"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">nimatoulaisaroukou@gmail.com</p>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nimath-barbara-saroukou?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground/20 hover:bg-muted"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">nimath-barbara-saroukou</p>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://github.com/Barbaranimath"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-foreground/20 hover:bg-muted"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">GitHub</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">github.com/Barbaranimath</p>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
