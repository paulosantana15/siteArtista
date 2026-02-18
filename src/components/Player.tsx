import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const playlist = [
  { title: "Ecos da Alma", artist: "Paulo Santana", duration: 184 },
  { title: "Noite Dourada", artist: "Paulo Santana", duration: 210 },
  { title: "Ritmo Urbano", artist: "Paulo Santana", duration: 195 },
];

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const progressInterval = useRef<number>();

  const track = playlist[currentTrack];

  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= track.duration) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(progressInterval.current);
    }
    return () => clearInterval(progressInterval.current);
  }, [isPlaying, currentTrack, track.duration]);

  const handleNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-white/10 p-4 z-40 transition-transform duration-500 animate-slide-up">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-surface rounded-md flex items-center justify-center border border-white/10 animate-pulse">
            <span className="text-2xl">🎵</span>
          </div>
          <div className="hidden md:block">
            <h4 className="font-bold text-white text-sm md:text-base">{track.title}</h4>
            <span className="text-xs text-gray-400">{track.artist}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="flex items-center gap-4">
            <button onClick={handlePrev} className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5" />}
            </button>
            <button onClick={handleNext} className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full max-w-xs flex items-center gap-2 text-xs text-gray-400">
            <span>{formatTime(progress)}</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
              <div 
                className="h-full bg-primary group-hover:bg-primary/80 transition-all duration-300"
                style={{ width: `${(progress / track.duration) * 100}%` }}
              />
            </div>
            <span>{formatTime(track.duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center justify-end gap-2 w-1/3">
          <button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 hover:text-white transition-colors">
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden hidden md:block">
            <div className={`h-full bg-white transition-all ${isMuted ? 'w-0' : 'w-3/4'}`} />
          </div>
        </div>
      </div>
    </div>
  );
}
