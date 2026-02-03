export default function Footer() {
  return (
    <footer className="mt-24 py-10 text-center text-white/40 text-sm border-t border-white/10">
      <p>© {new Date().getFullYear()} Sai Charan M P — AI Engineer</p>

      <div className="flex justify-center gap-6 mt-4 text-white/60">
        <a href="https://github.com/Charan-vamshi" target="_blank">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank">
          LinkedIn
        </a>
        <a href="mailto:saicharanreddy344@gmail.com">Email</a>
      </div>
    </footer>
  );
}
