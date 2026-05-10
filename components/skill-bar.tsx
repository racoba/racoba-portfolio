export function SkillBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-zinc-200">{label}</span>
        <span className="tabular-nums text-zinc-500">{pct}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-zinc-800/90">
        <div
          className="h-full rounded-full bg-gradient-to-r from-zinc-500 to-zinc-300/90"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
