import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/question")({
  component: QuestionPage,
  head: () => ({
    meta: [
      { title: "A tiny question 💕" },
      { name: "description", content: "Just one little question for you…" },
    ],
  }),
});

function QuestionPage() {
  const navigate = useNavigate();
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);

  const dodge = () => {
    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 400;
    setNoPos({ x, y });
    setDodges((d) => d + 1);
  };

  const teases = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again 👀",
    "Last chance…",
    "I don't believe you 💔",
    "Try harder 😏",
    "Nope, can't click me",
  ];
  const noLabel = teases[Math.min(dodges, teases.length - 1)];

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      <FloatingHearts count={20} />
      <div className="relative z-10 max-w-2xl space-y-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif-display text-5xl md:text-7xl text-shimmer leading-tight"
        >
          Do you love me?
        </motion.h1>
        <p className="font-script text-2xl text-accent">
          {dodges === 0 ? "(be honest 👉👈)" : `caught dodging ${dodges} time${dodges > 1 ? "s" : ""} 😆`}
        </p>

        <div className="relative h-40 flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: "/quiz" })}
            className="px-10 py-4 rounded-full font-serif-display text-2xl tracking-wide"
            style={{
              background: "var(--gradient-gold)",
              color: "oklch(0.18 0.05 350)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Yes 💖
          </motion.button>

          <motion.button
            animate={{ x: noPos.x, y: noPos.y }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            onMouseEnter={dodge}
            onTouchStart={dodge}
            onClick={dodge}
            className="px-6 py-3 rounded-full text-lg border border-border bg-card/10 backdrop-blur text-foreground/70"
          >
            {noLabel}
          </motion.button>
        </div>
      </div>
    </main>
  );
}