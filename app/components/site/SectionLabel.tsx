export function SectionLabel({
  text,
  light = false,
  onAccent = false,
}: {
  text: string;
  light?: boolean;
  onAccent?: boolean;
}) {
  return (
    <p className={`label flex items-center gap-4 ${onAccent ? "text-ink" : light ? "text-mist" : "text-graphite"}`}>
      <span className={`h-px w-12 ${onAccent ? "bg-ink/40" : light ? "bg-accent/60" : "bg-ink/30"}`} />
      {text}
    </p>
  );
}
