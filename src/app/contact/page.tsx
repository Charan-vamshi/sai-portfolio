export default function ContactPage() {
  return (
    <section style={{ padding: "80px 40px", maxWidth: "700px" }}>
      <h1 className="glitch" data-text="Contact">
        Contact
      </h1>

      <p style={{ marginTop: "15px", color: "#aaa" }}>
        Send me a message directly.
      </p>

      <form
        action="https://formspree.io/f/mrelrbgv"
        method="POST"
        style={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          name="name"
          placeholder="Your Name"
          required
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
          }}
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px",
            borderRadius: "12px",
            background: "white",
            color: "black",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
