export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
      {children}
    </div>
  );
}
