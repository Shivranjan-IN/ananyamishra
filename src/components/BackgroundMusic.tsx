import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

// Local track uploaded by user
const TRACK_URL = "/music/co2.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Try autoplay (most browsers block until user interacts)
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));

    // Fallback: start on first user interaction
    const startOnInteract = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
    };
    window.addEventListener("pointerdown", startOnInteract);
    window.addEventListener("keydown", startOnInteract);

    return () => {
      window.removeEventListener("pointerdown", startOnInteract);
      window.removeEventListener("keydown", startOnInteract);
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
      className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-card/30 text-accent backdrop-blur-md transition hover:bg-card/50 hover:scale-105"
      style={{ boxShadow: "var(--shadow-glow)" }}
    >
      {playing ? <Music className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}