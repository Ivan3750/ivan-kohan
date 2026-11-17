/** WebHjerte heart mark. `solid` fills it, otherwise outline. */
export function HeartMark({
  className,
  solid = true,
  title,
}: {
  className?: string;
  solid?: boolean;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        d="M12 21.2 10.6 20C5.4 15.4 2 12.4 2 8.7 2 5.7 4.3 3.5 7.2 3.5c1.7 0 3.3.8 4.8 2.3 1.5-1.5 3.1-2.3 4.8-2.3 2.9 0 5.2 2.2 5.2 5.2 0 3.7-3.4 6.7-8.6 11.3L12 21.2Z"
        fill={solid ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth={solid ? 0 : 1.2}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** ECG / heartbeat line, drawn on load. */
export function EcgLine({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      fill="none"
    >
      <path
        className="ecg-line"
        d="M0 62 H330 l18 -4 l16 4 H430 l16 18 l22 -78 l28 108 l20 -48 H610 l14 -10 l18 10 H820 l16 18 l22 -78 l28 108 l20 -48 H1200"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
