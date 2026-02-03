import GlassCard from "../../components/GlassCard";

const projects = [
  {
    title: "Trilok Mart Field Force Integrity System",
    desc: "Triple-Lock cryptographic visit verification to eliminate ghost visits.",
    slug: "trilok-mart-integrity",
  },
  {
    title: "Nexus AI",
    desc: "Multi-agent real-time research platform with human guidance.",
    slug: "nexus-ai",
  },
  {
    title: "Career Compass AI",
    desc: "Privacy-first résumé scanner suggesting AI-driven career paths.",
    slug: "career-compass-ai",
  },
  {
    title: "CodeLingo",
    desc: "Gamified Duolingo-style micro-learning platform for coding.",
    slug: "codelingo",
  },
];

export default function ProjectsPage() {
  return (
    <section className="px-10 py-20">
      <h1 className="glitch text-4xl" data-text="Projects">
        Projects
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <a key={p.slug} href={`/projects/${p.slug}`}>
            <GlassCard>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-white/60">{p.desc}</p>
            </GlassCard>
          </a>
        ))}
      </div>
    </section>
  );
}
