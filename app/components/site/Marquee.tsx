import { marqueeEmoji } from "@/app/lib/emoji";

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
            className="font-display flex items-center gap-4 pr-10 text-2xl font-bold italic tracking-tight sm:text-4xl"
          >
            <span className="not-italic">{marqueeEmoji[i % items.length]}</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
