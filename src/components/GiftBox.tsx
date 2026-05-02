import { motion } from "framer-motion";

export function GiftBox({ opened, onOpen }: { opened: boolean; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      disabled={opened}
      aria-label="Open your gift"
      className="relative w-56 h-56 md:w-72 md:h-72 cursor-pointer group focus:outline-none"
      style={{ perspective: "800px" }}
    >
      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-full blur-3xl transition-opacity duration-700 ${
          opened ? "opacity-100" : "opacity-60 group-hover:opacity-90"
        }`}
        style={{ background: "radial-gradient(circle, oklch(0.72 0.19 10 / 0.7), transparent 70%)" }}
      />

      {/* Box body */}
      <motion.div
        animate={opened ? { y: 20 } : { y: [0, -8, 0] }}
        transition={opened ? { duration: 0.4 } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-40 md:w-60 md:h-52 rounded-md"
        style={{
          background: "linear-gradient(160deg, oklch(0.55 0.22 5), oklch(0.4 0.2 10))",
          boxShadow: "var(--shadow-glow)",
        }}
      >
        {/* Vertical ribbon */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6"
          style={{ background: "var(--gradient-gold)" }}
        />
      </motion.div>

      {/* Lid */}
      <motion.div
        initial={false}
        animate={
          opened
            ? { y: -120, rotateZ: -15, opacity: 0 }
            : { y: [0, -4, 0], rotateZ: 0, opacity: 1 }
        }
        transition={
          opened
            ? { duration: 0.9, ease: "easeOut" }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute left-1/2 -translate-x-1/2 w-52 h-12 md:w-64 md:h-14 rounded-md"
        style={{
          top: "calc(50% - 12px)",
          background: "linear-gradient(160deg, oklch(0.6 0.22 5), oklch(0.45 0.2 10))",
          boxShadow: "0 6px 20px oklch(0 0 0 / 0.4)",
        }}
      >
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6"
          style={{ background: "var(--gradient-gold)" }}
        />
        {/* Bow */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1">
          <div
            className="w-8 h-10 rounded-full rotate-[-30deg]"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div
            className="w-8 h-10 rounded-full rotate-[30deg]"
            style={{ background: "var(--gradient-gold)" }}
          />
          <div
            className="absolute left-1/2 top-3 -translate-x-1/2 w-4 h-4 rounded-full"
            style={{ background: "oklch(0.95 0.05 80)" }}
          />
        </div>
      </motion.div>

      {!opened && (
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm md:text-base text-accent font-script">
          tap to open ✨
        </span>
      )}
    </button>
  );
}