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
    <section style={{ padding: "80px 40px" }}>
      <h1 className="glitch" data-text="Projects">
        Projects
      </h1>

      <div style={{ marginTop: "40px", display: "grid", gap: "20px" }}>
        {projects.map((p) => (
          <a
            key={p.slug}
            href={`/projects/${p.slug}`}
            style={{
              padding: "25px",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2>{p.title}</h2>
            <p style={{ marginTop: "10px", color: "#aaa" }}>{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
