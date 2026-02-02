export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section style={{ padding: "80px 40px" }}>
      <h1 className="glitch" data-text={params.slug}>
        {params.slug}
      </h1>

      <p style={{ marginTop: "20px", color: "#aaa" }}>
        Full case study content will be added here.
      </p>
    </section>
  );
}
