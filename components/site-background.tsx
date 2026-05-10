export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-violet-600/22 blur-[120px]" />
      <div className="absolute -left-40 bottom-32 h-[480px] w-[480px] rounded-full bg-blue-600/18 blur-[110px]" />
      <div className="absolute left-[-10%] top-[85vh] h-[380px] w-[380px] rounded-full bg-rose-600/12 blur-[100px]" />
      <div className="absolute right-[-5%] top-[130vh] h-[420px] w-[420px] rounded-full bg-emerald-500/12 blur-[105px]" />
      <div className="absolute right-0 top-[210vh] h-[380px] w-[380px] rounded-full bg-teal-400/10 blur-[95px]" />
      <div className="absolute -left-24 bottom-[10vh] h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[95px]" />
      <div className="absolute left-1/2 top-[55%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[130px]" />
    </div>
  );
}
