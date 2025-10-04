import { useState, useRef, useEffect, forwardRef } from 'react';

interface MultiAudioPlayerProps {
  autoPlay?: boolean;
  tracks?: string[];
}

const MultiAudioPlayer = forwardRef<HTMLAudioElement, MultiAudioPlayerProps>(({ 
  autoPlay = false, 
  tracks = ['/powerpoint-crazy-song-249520.mp3', '/trashu.mp3'] 
}, ref) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(!autoPlay);
  const audioRefs = useRef<HTMLAudioElement[]>([]);

  useEffect(() => {
    // Set volume for all audio elements with different levels
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        if (index === 0) {
          // Background music at normal volume
          audio.volume = isMuted ? 0 : volume * 0.6; // 60% of slider volume
        } else if (index === 1) {
          // Level-up sound at lower volume
          audio.volume = isMuted ? 0 : Math.min(volume * 0.3, 1.0); // 30% of slider volume, capped at 1.0
        } else {
          // Slot machine sound at very low volume
          audio.volume = isMuted ? 0 : Math.min(volume * 0.2, 1.0); // 20% of slider volume, capped at 1.0
        }
      }
    });
  }, [volume, isMuted]);

  useEffect(() => {
    if (autoPlay && !isPlaying) {
      console.log('Attempting multi-audio auto-play...');
      const timer = setTimeout(() => {
        const playPromises = audioRefs.current.map(audio => {
          if (audio) {
            return audio.play().catch(error => {
              console.error('Individual audio play failed:', error);
              return null;
            });
          }
          return null;
        }).filter(Boolean);

        Promise.all(playPromises).then(() => {
          console.log('Multi-audio auto-play successful');
          setIsPlaying(true);
          setTimeout(() => setShowControls(true), 1000);
        }).catch((error) => {
          console.error('Multi-audio auto-play failed:', error);
          setIsPlaying(false);
          setShowControls(true);
        });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [autoPlay, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRefs.current.forEach(audio => {
        if (audio) audio.pause();
      });
    } else {
      audioRefs.current.forEach(audio => {
        if (audio) audio.play().catch(console.error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Hidden audio elements for each track */}
      {tracks.map((track, index) => (
        <audio
          key={index}
          ref={(node) => {
            if (node) {
              audioRefs.current[index] = node;
              // Set the first audio element as the main ref
              if (index === 0 && ref) {
                if (typeof ref === 'function') {
                  ref(node);
                } else {
                  ref.current = node;
                }
              }
            }
          }}
          loop
          preload="auto"
          onEnded={() => setIsPlaying(false)}
        >
          <source src={track} type="audio/mpeg" />
        </audio>
      ))}

      {showControls && (
        <div className="glass-card p-4 flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-200"
            >
              {isMuted || volume === 0 ? (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              )}
            </button>

            {/* Volume Slider */}
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default MultiAudioPlayer;
