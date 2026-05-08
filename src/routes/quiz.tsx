import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
  head: () => ({
    meta: [
      { title: "A silly little quiz 🎀" },
      { name: "description", content: "How well do you know us?" },
    ],
  }),
});

type Q = { q: string; options: string[]; correct: number; tease: string };

const questions: Q[] = [
  {
    q: "What's the best part of my day lately? 😄",
    options: ["Food 🍔", "Sleep 😴", "Talking to you 💖", "Phone scrolling"],
    correct: 2,
    tease: "Hmm Lali, soch ke bata 👀 (hint: it's you 💖)",
  },
  {
    q: "Lali, how much do I like you? 💖",
    options: ["Thoda sa 🤏", "Bahut zyada 🥰", "Chand tak 🌙", "Infinity × ∞ 💞"],
    correct: 3,
    tease: "Nope Lali 🙈 itna kam nahi — infinite se bhi zyada 💖",
  },
];

function QuizPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [wrongMsg, setWrongMsg] = useState<string | null>(null);
  const [wrongCount, setWrongCount] = useState(0);

  const extraTeases = [
    "Acha Lali, ek aur chance 🙈",
    "Hint: dil se socho Lali 💗",
    "Lali ji, dimaag nahi dil lagao 😜",
    "Itni smart ho Lali, ye to easy hai 🤭",
    "Galat! Lali ko detention milegi 📚😆",
  ];

  const current = questions[step];

  const choose = (i: number) => {
    if (i === current.correct) {
      setWrongMsg(null);
      setWrongCount(0);
      if (step + 1 >= questions.length) navigate({ to: "/cake" });
      else setStep(step + 1);
    } else {
      const msg =
        wrongCount === 0
          ? current.tease
          : extraTeases[(wrongCount - 1) % extraTeases.length];
      setWrongMsg(msg);
      setWrongCount((c) => c + 1);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 text-center">
      <FloatingHearts count={18} />

      <div className="relative z-10 max-w-2xl w-full space-y-8">
        <p className="font-script text-accent text-xl">
          question {step + 1} of {questions.length}
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <h1 className="font-serif-display text-3xl md:text-5xl text-shimmer leading-tight">
              {current.q}
            </h1>

            <div className="grid sm:grid-cols-2 gap-4">
              {current.options.map((opt, i) => (
                <motion.button
                  key={opt}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => choose(i)}
                  className="px-6 py-4 rounded-2xl border border-border bg-card/10 backdrop-blur font-serif-display text-lg text-left text-foreground/90 hover:bg-card/20 transition-colors"
                >
                  {opt}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {wrongMsg && (
            <motion.p
              key={wrongMsg + step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="font-script text-2xl text-primary"
            >
              {wrongMsg}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}