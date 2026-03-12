import { useRef, useEffect } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useStore } from "@/src/store/useStore";

const MusicStreamLine = ({ color }: { color: string }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playMusic = useStore((state) => state.playMusic);
  const toggleMusic = useStore((state) => state.toggleMusic);

  useGSAP(() => {
    if (!divRef.current) return;
    const bars = Array.from(divRef.current.children);

    gsap.killTweensOf(bars);

    bars.forEach((bar, index) => {
      const randomDuration = 0.3 + Math.random() * 0.2;
      const randomDelay = index * 0.1 + Math.random() * 0.1;
      const randomScale = 3 + Math.random() * 2;

      if (playMusic) {
        gsap.to(bar, {
          scaleY: randomScale,
          duration: randomDuration,
          delay: randomDelay,
          yoyo: true,
          repeat: -1,
        });
      } else {
        gsap.to(bar, {
          scaleY: 1,
          duration: 0.2,
          ease: "ease.out",
        });
      }
    });
  }, [playMusic]);

  useEffect(() => {
    const audio = audioRef.current;
    //  console.log("audio", audio);
    if (!audio) return;

    if (playMusic) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoply blocked or failed", err);
          toggleMusic(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [playMusic]);

  return (
    <div onClick={() => toggleMusic(!playMusic)} className="music-stream-line">
      <div ref={divRef} className="flex gap-1">
        <div className={clsx("w-0.5 h-1", color)} />
        <div className={clsx("w-0.5 h-1", color)} />
        <div className={clsx("w-0.5 h-1", color)} />
      </div>
      <audio ref={audioRef} src={"/main-optimized.mp3"} preload="auto" loop />
    </div>
  );
};

export default MusicStreamLine;
