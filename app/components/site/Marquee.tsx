import { HeartMark } from "./Heart";

export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div
      className="marquee relative overflow-hidden border-y border-ink/20 bg-heart py-5 text-ink"
      aria-label={items.join(", ")}
    >
      <div className="marquee-track" aria-hidden>
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display flex items-center gap-8 pr-8 text-2xl font-bold tracking-tight sm:text-4xl"
          >
            {t}
            <HeartMark className="h-6 w-6 shrink-0 sm:h-8 sm:w-8" />
          </span>
        ))}
      </div>
    </div>
  );
}
