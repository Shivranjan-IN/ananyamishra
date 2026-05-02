import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FloatingHearts } from "@/components/FloatingHearts";

export const Route = createFileRoute("/memory")({
  component: MemoryPage,
  head: () => ({
    meta: [
      { title: "A special memory 💖 — for Lali" },
      { name: "description", content: "Ek choti si yaad, sirf tumhare liye Lali." },
      { property: "og:title", content: "A special memory 💖 — for Lali" },
      { property: "og:description", content: "Ek choti si yaad, sirf tumhare liye Lali." },
    ],
  }),
});

function MemoryPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-20">
      <FloatingHearts count={18} />

      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% -10%, oklch(0.5 0.2 350 / 0.45), transparent 60%)",
        }}
      />

      <article className="relative z-10 mx-auto max-w-2xl space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-script text-2xl text-accent text-center"
        >
          a tiny chapter from my heart…
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif-display text-5xl md:text-6xl text-shimmer leading-tight text-center"
        >
          The Earrings Day 💖
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6 font-serif-display text-lg md:text-xl leading-relaxed text-foreground/90"
        >
          <p>
            Lali, sach bataun? Mujhe wo din aaj bhi yaad hai jaise abhi kal hi
            ki baat ho. Tumne wo earrings pehne the — wahi, jo maine tumhe diye
            the. Choti si cheez thi, par tumne usse pehna toh poori duniya
            chamak gayi 🌙
          </p>

          <p>
            Tum hass rahi thi kisi baat pe, aur main bas tumhe dekhta reh gaya.
            Wo moment kuch alag tha — jaise time ne ek second ke liye saans rok
            li ho. Tumhare chehre pe wo light, wo smile, aur kaano me wo do
            choti choti cheezein jo maine sirf tumhare liye chuni thi… honestly
            Lali, mere paas words nahi hain.
          </p>

          <p>
            Aaj bhi jab wo yaad aati hai, dil ek beat skip karta hai. Pata nahi
            tumhe pata bhi hai ya nahi — par us din mujhe laga, “haan, yehi
            hai. Yehi meri favourite memory hai.” Aur shayad hamesha rahegi.
          </p>

          <p className="font-script text-2xl text-primary text-center pt-4">
            Thank you, Lali — usse pehnne ke liye, aur mere life me hone ke
            liye 💗
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 pt-6"
        >
          <Link
            to="/surprise"
            className="px-6 py-3 rounded-full font-serif-display text-base border border-border bg-card/10 backdrop-blur hover:bg-card/20 transition"
          >
            ← back to surprise
          </Link>
          <Link
            to="/"
            className="px-6 py-3 rounded-full font-serif-display text-base"
            style={{
              background: "var(--gradient-gold)",
              color: "oklch(0.18 0.05 350)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            🏠 home
          </Link>
        </motion.div>
      </article>
    </main>
  );
}