export default function Home() {
  return (
    <section
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 className="glitch" data-text="AI Engineer">
        AI Engineer
      </h1>

      <p style={{ marginTop: "20px", color: "#aaa", maxWidth: "600px" }}>
        Building secure AI systems, futuristic web apps, and field-force
        integrity platforms.
      </p>
    </section>
  );
}
