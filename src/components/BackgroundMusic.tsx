import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Royalty-free romantic piano loop (Pixabay CDN)
const TRACK_URL =
  "https://cdn.pixabay.com/audio/2022/10/30/audio_347ed0cd9b.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "auto";
    (audio as any).playsInline = true;
    audioRef.current = audio;

    // Try autoplay (most browsers block until user interacts)
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));

    // Fallback: start on first user interaction (any gesture)
    const startOnInteract = () => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
          cleanup();
        })
        .catch(() => {});
    };
    const cleanup = () => {
      window.removeEventListener("pointerdown", startOnInteract, true);
      window.removeEventListener("touchstart", startOnInteract, true);
      window.removeEventListener("click", startOnInteract, true);
      window.removeEventListener("keydown", startOnInteract, true);
    };
    window.addEventListener("pointerdown", startOnInteract, true);
    window.addEventListener("touchstart", startOnInteract, true);
    window.addEventListener("click", startOnInteract, true);
    window.addEventListener("keydown", startOnInteract, true);

    return () => {
      cleanup();
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label={playing ? "Mute background music" : "Play background music"}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-accent/40 bg-card/40 px-4 py-2 text-sm text-accent backdrop-blur-md transition hover:bg-card/60 hover:scale-105"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      {playing ? (
        <>
          <Music className="h-4 w-4" />
          <span>music on</span>
        </>
      ) : (
        <>
          <VolumeX className="h-4 w-4" />
          <span>tap to play 💗</span>
        </>
      )}
    </button>
  );
}