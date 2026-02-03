import GlassCard from "../../../components/GlassCard";

const projectData: Record<
  string,
  { title: string; overview: string; features: string[] }
> = {
  "trilok-mart-integrity": {
    title: "Trilok Mart Field Force Integrity System",
    overview:
      "A B2B enterprise platform eliminating ghost visits using Triple-Lock cryptographic verification.",
    features: [
      "QR Scan + GPS Geofence + Server-Time Lock",
      "Hierarchical dashboards for Admin, Managers, Salesmen",
      "Offline-first syncing architecture",
      "Incident detection for GPS spoofing",
      "Audit logging and role-based authentication",
    ],
  },
  "nexus-ai": {
    title: "Nexus AI",
    overview:
      "Multi-agent real-time research platform with human-guided AI collaboration.",
    features: [
      "Specialized AI agents",
      "WebSocket live updates",
      "Transparent workflows",
    ],
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projectData[slug];

  if (!project) {
    return (
      <section className="px-10 py-20">
        <h1 className="text-3xl">Project Not Found</h1>
      </section>
    );
  }

  return (
    <section className="px-10 py-20 max-w-4xl mx-auto">
      <h1 className="glitch text-5xl" data-text={project.title}>
        {project.title}
      </h1>

      <p className="mt-6 text-white/60 text-lg">{project.overview}</p>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>

        <div className="grid gap-4">
          {project.features.map((f) => (
            <GlassCard key={f}>
              <p className="text-white/80">{f}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      <p className="mt-16 text-white/40">
        Full detailed writeup will be added soon.
      </p>
    </section>
  );
}
