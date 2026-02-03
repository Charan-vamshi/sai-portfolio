export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center glass">
      {/* Name */}
      <h1 className="glitch text-lg" data-text="Sai Charan M P">
        Sai Charan M P
      </h1>

      {/* Links */}
      <div className="flex gap-8 text-sm text-white/60">
        <a className="hover:text-white" href="/">
          Home
        </a>
        <a className="hover:text-white" href="/about">
          About
        </a>
        <a className="hover:text-white" href="/projects">
          Projects
        </a>
        <a className="hover:text-white" href="/blog">
          Blog
        </a>
        <a className="hover:text-white" href="/contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
