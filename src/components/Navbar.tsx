export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        zIndex: 50,
      }}
    >
      {/* Glitch Name */}
      <h1 className="glitch" data-text="Sai Charan M P">
        Sai Charan M P
      </h1>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px", color: "#bbb" }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}
