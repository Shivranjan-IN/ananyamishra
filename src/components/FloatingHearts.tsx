import { useMemo } from "react";

export function FloatingHearts({ count = 24 }: { count?: number }) {
  const hearts = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 8 + Math.random() * 10,
        size: 12 + Math.random() * 28,
        opacity: 0.4 + Math.random() * 0.5,
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up"
          style={{
            left: `${h.left}%`,
            bottom: `-40px`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            color: "oklch(0.72 0.19 10)",
            filter: "drop-shadow(0 0 8px oklch(0.72 0.19 10 / 0.6))",
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}