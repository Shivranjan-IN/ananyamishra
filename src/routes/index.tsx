import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FloatingHearts } from "@/components/FloatingHearts";
import { GiftBox } from "@/components/GiftBox";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Love 💕" },
      { name: "description", content: "A little surprise made just for you — with all my love." },
    ],
  }),
});

const wishes = [
  "Every day with you feels like a celebration.",
  "Your smile is my favorite sound in the world.",
  "You make ordinary moments unforgettable.",
  "I fall for you a little more, every single day.",
  "Today the whole world should pause to admire you.",
];

function Index() {
  const [opened, setOpened] = useState(false);
  const [wishIndex, setWishIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!opened) return;
    const fire = (origin: { x: number; y: number }) =>
      confetti({
        particleCount: 80,
        spread: 90,
        origin,
        colors: ["#ff5d8f", "#ffd166", "#ffafcc", "#ffffff", "#ff85a1"],
        scalar: 1.1,
        ticks: 250,
      });
    fire({ x: 0.2, y: 0.6 });
    fire({ x: 0.8, y: 0.6 });
    setTimeout(() => fire({ x: 0.5, y: 0.4 }), 250);
    const t = setTimeout(() => fire({ x: 0.5, y: 0.5 }), 1200);
    return () => clearTimeout(t);
  }, [opened]);

  useEffect(() => {
    if (!opened) return;
    const id = setInterval(() => setWishIndex((i) => (i + 1) % wishes.length), 4500);
    return () => clearInterval(id);
  }, [opened]);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingHearts count={28} />

      {/* soft top vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, oklch(0.5 0.2 350 / 0.5), transparent 60%)",
        }}
      />

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <AnimatePresence mode="wait">
          {!opened ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center gap-12"
            >
              <div className="space-y-3">
                <p className="font-script text-2xl md:text-3xl text-accent">a little something for</p>
                <h1 className="font-serif-display text-5xl md:text-7xl tracking-wide text-shimmer leading-tight">
                  My Forever Girl
                </h1>
                <p className="text-muted-foreground text-base md:text-lg italic">
                  Open the gift below — it’s waiting for you 💝
                </p>
              </div>

              <GiftBox opened={opened} onOpen={() => setOpened(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center gap-8 max-w-2xl"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-script text-3xl md:text-4xl text-accent"
              >
                Happy Birthday
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: "easeOut" }}
                className="font-serif-display text-6xl md:text-9xl text-shimmer leading-none animate-pulse-glow"
              >
                My Love
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent"
              />

              <div className="h-24 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={wishIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.7 }}
                    className="font-serif-display italic text-xl md:text-3xl text-foreground/90"
                  >
                    “{wishes[wishIndex]}”
                  </motion.p>
                </AnimatePresence>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="font-script text-2xl md:text-3xl text-primary"
              >
                — yours, always
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                onClick={() => {
                  confetti({
                    particleCount: 150,
                    spread: 160,
                    origin: { y: 0.6 },
                    colors: ["#ff5d8f", "#ffd166", "#ffafcc", "#ffffff"],
                  });
                }}
                className="mt-2 px-8 py-3 rounded-full font-serif-display text-lg tracking-wide transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: "var(--gradient-gold)",
                  color: "oklch(0.18 0.05 350)",
                  boxShadow: "var(--shadow-glow)",
                }}
              >
                One more wish ✨
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <audio ref={audioRef} />
    </main>
  );
}
