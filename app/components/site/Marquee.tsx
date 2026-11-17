export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-ink/20 bg-accent py-5 text-ink"
      aria-label={items.join(", ")}
    >
      <div className="marquee-track" aria-hidden>
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-8 pr-8 text-2xl font-bold italic tracking-tight sm:text-4xl"
          >
            {t}
            <span className="h-3 w-3 shrink-0 rotate-45 bg-ink sm:h-4 sm:w-4" />
          </span>
        ))}
      </div>
    </div>
  );
}
