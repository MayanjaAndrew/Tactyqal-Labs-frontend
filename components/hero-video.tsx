"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { hero } from "@/lib/content";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      void video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-black select-none">
      <video
        ref={videoRef}
        src={hero.videoSrc}
        autoPlay
        loop
        muted
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/35 via-transparent to-black/15" />
      <div className="absolute right-4 bottom-4 z-30 flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          title={isPlaying ? "Pause video" : "Play video"}
          className="cursor-pointer rounded-full border border-white/20 bg-slate-900/80 p-2.5 text-white shadow-lg backdrop-blur-md transition-all hover:bg-slate-900 active:scale-90"
        >
          {isPlaying ? (
            <Pause className="h-3.5 w-3.5" />
          ) : (
            <Play className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}
