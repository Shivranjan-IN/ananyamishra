import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { FloatingHearts } from "@/components/FloatingHearts";
import bouquetImg from "@/assets/pink-rose-bouquet.png";

export const Route = createFileRoute("/surprise")({
  component: SurprisePage,
  head: () => ({
    meta: [
      { title: "The real surprise 💝" },
      { name: "description", content: "Just for you, my love." },
    ],
  }),
});

function SurprisePage() {
  useEffect(() => {
    const burst = () => {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { x: Math.random(), y: Math.random() * 0.4 + 0.2 },
        colors: ["#ff5d8f", "#ffd166", "#ffafcc", "#ffffff", "#ff85a1"],
      });
    };
    burst();
    const id = setInterval(burst, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      <FloatingHearts count={36} />

      <div className="relative z-10 max-w-2xl space-y-8">
        <motion.img
          src={bouquetImg}
          alt="Pink rose bouquet for Lali"
          width={1024}
          height={1024}
          loading="lazy"
          initial={{ opacity: 0, y: 30, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto w-56 md:w-72 h-auto drop-shadow-[0_20px_40px_oklch(0.72_0.19_10/0.6)] animate-pulse-glow"
        />
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="font-serif-display text-5xl md:text-7xl text-shimmer leading-tight animate-pulse-glow"
        >
          Happy Birthday Ananya 🎂💗
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="font-serif-display italic text-xl md:text-2xl text-foreground/90"
        >
          But honestly… my favorite memory with you is when you wore the
          earrings I gave you 👀
          <br />
          <span className="not-italic">That moment just felt… different 😊</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="space-y-2"
        >
          <p className="font-script text-3xl text-primary">Happy birthday, Lali 🎂💗</p>
          <p className="text-muted-foreground text-sm italic">— P.S. ek smile toh banta hai 😏</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex justify-center gap-4 pt-4"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-full font-serif-display text-base border border-border bg-card/10 backdrop-blur hover:bg-card/20 transition"
          >
            ↺ start over
          </Link>
          <Link
            to="/memory"
            className="px-6 py-3 rounded-full font-serif-display text-base border border-accent/40 bg-accent/10 backdrop-blur hover:bg-accent/20 transition"
          >
            📖 read the memory
          </Link>
          <button
            onClick={() =>
              confetti({
                particleCount: 250,
                spread: 180,
                origin: { y: 0.5 },
                colors: ["#ff5d8f", "#ffd166", "#ffafcc", "#ffffff"],
              })
            }
            className="px-6 py-3 rounded-full font-serif-display text-base"
            style={{
              background: "var(--gradient-gold)",
              color: "oklch(0.18 0.05 350)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            🎉 again!
          </button>
        </motion.div>
      </div>
    </main>
  );
}