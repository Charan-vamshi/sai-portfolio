import GlassCard from "../components/GlassCard";

export default function Home() {
  return (
    <main className="px-10 pt-32 max-w-6xl mx-auto">
      {/* HERO + PHOTO */}
      <section className="grid md:grid-cols-2 items-center gap-12">
        {/* LEFT TEXT */}
        <div>
          <h1 className="glitch text-6xl md:text-7xl" data-text="AI Engineer">
            AI Engineer
          </h1>

          <p className="mt-6 text-white/60 text-lg max-w-xl">
            I build secure AI systems, enterprise integrity platforms, and
            futuristic full-stack applications.
          </p>

          <div className="mt-10 flex gap-6">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT PHOTO PANEL */}
        <div className="relative block mt-10 md:mt-0">
          <div className="glass p-2 rounded-3xl overflow-hidden">
            <img
              src="/images/hero.png"
              alt="Sai Charan Portrait"
              className="rounded-3xl object-cover object-top w-full h-[320px] md:h-[520px]"
            />
          </div>

          {/* Fade overlay */}
          <div className="absolute inset-y-0 left-0 w-1/3 rounded-l-3xl bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold mb-6">Flagship Project</h2>

        <GlassCard>
          <h3 className="text-xl font-bold">
            Trilok Mart Field Force Integrity System
          </h3>
          <p className="mt-3 text-white/60">
            Triple-Lock cryptographic verification system to eliminate ghost
            visits, GPS spoofing, and falsified field reports.
          </p>

          <a
            href="/projects/trilok-mart-integrity"
            className="inline-block mt-4 text-white underline"
          >
            Read Case Study →
          </a>
        </GlassCard>
      </section>

      {/* SKILLS */}
      <section className="mt-24">
        <h2 className="text-3xl font-semibold mb-6">Core Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "AI Engineering",
            "Full Stack Development",
            "Cryptographic Integrity Systems",
            "Geospatial Tracking",
            "NLP + Resume AI",
            "Enterprise Dashboards",
          ].map((skill) => (
            <GlassCard key={skill}>
              <p className="text-white/80">{skill}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="mt-28 text-center pb-20">
        <p className="text-white/50">
          Ready for internships and impactful AI projects.
        </p>
      </section>
    </main>
  );
}
