import { useEffect, useRef } from "react";

// Local track uploaded by user
const TRACK_URL = "/music/co2.mp3";

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(TRACK_URL);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    // Try autoplay (most browsers block until user interacts)
    audio.play().catch(() => {});

    // Fallback: start on first user interaction
    const startOnInteract = () => {
      audio.play().catch(() => {});
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

  return null;
}