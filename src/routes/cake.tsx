import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/cake")({
  component: CakePage,
  head: () => ({
    meta: [
      { title: "Make a wish 🎂" },
      { name: "description", content: "Blow out the candles!" },
    ],
  }),
});

function CakePage() {
  const navigate = useNavigate();
  const [taps, setTaps] = useState(0);
  const need = 8;
  const lit = taps < need;

  const tap = () => {
    const next = taps + 1;
    setTaps(next);
    if (next >= need) setTimeout(() => navigate({ to: "/surprise" }), 1400);
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      <FloatingHearts count={14} />

      <div className="relative z-10 space-y-8 max-w-xl">
        <h1 className="font-serif-display text-4xl md:text-6xl text-shimmer">
          {lit ? "Make a wish…" : "Wish granted ✨"}
        </h1>
        <p className="font-script text-2xl text-accent">
          {lit ? `tap the candles to blow them out (${taps}/${need}) 💨` : "shhh — it's coming true"}
        </p>

        <button
          onClick={lit ? tap : undefined}
          aria-label="Blow out candles"
          className="relative mx-auto block focus:outline-none"
        >
          {/* Cake */}
          <div className="relative w-72 h-56 mx-auto">
            {/* Top tier */}
            <div
              className="absolute bottom-16 left-1/2 -translate-x-1/2 w-44 h-20 rounded-md"
              style={{
                background: "linear-gradient(180deg, oklch(0.88 0.08 20), oklch(0.75 0.14 15))",
                boxShadow: "0 10px 30px oklch(0 0 0 / 0.4)",
              }}
            />
            {/* Drips */}
            <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 w-44 flex justify-around">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-3 h-6 rounded-b-full"
                  style={{ background: "oklch(0.55 0.22 5)" }}
                />
              ))}
            </div>
            {/* Bottom tier */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 rounded-md"
              style={{
                background: "linear-gradient(180deg, oklch(0.85 0.1 20), oklch(0.7 0.16 10))",
                boxShadow: "0 14px 40px oklch(0 0 0 / 0.5)",
              }}
            />
            {/* Candles */}
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="relative flex flex-col items-center">
                  {lit && (
                    <motion.div
                      animate={{ scaleY: [1, 1.2, 0.9, 1.1, 1], opacity: [0.9, 1, 0.85, 1, 0.95] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                      className="w-3 h-5 rounded-full mb-1"
                      style={{
                        background:
                          "radial-gradient(circle at 50% 70%, oklch(0.95 0.18 80), oklch(0.7 0.22 30) 60%, transparent 80%)",
                        filter: "drop-shadow(0 0 8px oklch(0.85 0.18 60 / 0.9))",
                      }}
                    />
                  )}
                  <div
                    className="w-2 h-10 rounded-sm"
                    style={{ background: "linear-gradient(180deg, oklch(0.95 0.05 350), oklch(0.75 0.1 350))" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </button>

        <p className="text-muted-foreground italic text-sm">
          (psst — pretend your screen is a candle 🤫)
        </p>
      </div>
    </main>
  );
}