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
          Our Story, Lali 💖
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
            Lali… ye kahani aaj ki nahi hai. Ye us din shuru hui thi jab maine
            tumhe pehli baar didi ki engagement me dekha tha. Mujhe aaj bhi
            sab kuch waise hi yaad hai. Didi ga rahi thi, aur mai unki video
            bana raha tha… phir achanak meri nazar tum par padi. Shayad wahi
            hamara pehla eye contact tha.
          </p>

          <p>
            Us waqt mujhe samajh nahi aaya tha ki mujhe kya hua, par tumhari
            aankhein aaj bhi waise hi yaad hain. Tumne apne face par hath
            rakha hua tha, aur tumhari aankhon me ek ajeeb si gehri soch
            thi… jaise tum khud me hi kahi uljhi hui ho. Sach kahu to us din
            maine tumhe kam, tumhari aankhon ko zyada dekha tha. Shayad usi
            din se tum mujhe pasand aane lagi thi.
          </p>

          <p>
            Aaj 3 saal ho gaye… aur tum kehti ho ki sab jaldi ho gaya. Par
            mere liye ye ehsaas kabhi jaldi wala tha hi nahi. Mujhe fark nahi
            padta tum pehle kaisi dikhti thi, aaj kaisi ho, ya 20 saal baad
            kaisi dikhogi… kyunki chehre badal jate hain, par aankhein nahi
            badalti. Aur mujhe tumhari wahi aankhein sabse zyada pasand hain.
            Aur haan… tum hamesha mere liye sabse handsome rahogi. 💗
          </p>

          <p>
            Tumne shayad bina jaane meri life ki bahut si problems solve ki
            hain. Shayad mai kabhi properly bata nahi paya, par tum mere liye
            bahut lucky ho. Tumse baat ho ya na ho, phir bhi hamesha lagta
            hai ki tum mere paas hi ho… aur bas ye feeling hi mujhe sukoon
            de deti hai.
          </p>

          <p>
            But honestly… my favorite memory with you is when you wore the
            earrings I gave you 👀 That moment just felt… different.
          </p>

          <p>
            Bas ek chhoti si request hai… agar kabhi mujhse galti ho jaye,
            to mujhse lad liya karo, gussa kar liya karo… par chup mat hua
            karo. Tumhari khamoshi bahut hurt karti hai.
          </p>

          <p>
            Mai bas itna chahta hu ki tum meri life me hamesha raho. Sirf
            isliye nahi ki mai tumhari bhabhi ka bhai hu… balki isliye
            kyunki mai dil se chahta hu ki tum hamesha meri zindagi ka
            hissa raho.
          </p>

          <p className="font-script text-2xl text-primary text-center pt-4">
            Happy Birthday, Lali 💗
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