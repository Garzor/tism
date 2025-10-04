import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Index from '@/pages/Index';
import MultiAudioPlayer from './MultiAudioPlayer';

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [musicAutoPlay, setMusicAutoPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnterSite = () => {
    // Create and play the circus audio
    const audio = new Audio('/circus-145017.mp3');
    audio.loop = true;
    audio.volume = 0.4; // Set appropriate volume
    
    // Play the audio track
    audio.play().then(() => {
      console.log('Circus audio playing successfully');
      // Store the main audio element reference for the MultiAudioPlayer component
      if (audioRef.current) {
        audioRef.current.src = audio.src;
        audioRef.current.currentTime = audio.currentTime;
      }
      setMusicAutoPlay(true);
      setShowLoadingScreen(false);
    }).catch((error) => {
      console.error('Audio play failed:', error);
      // Fallback: still proceed to main site
      setMusicAutoPlay(true);
      setShowLoadingScreen(false);
    });
  };

  return (
    <>
      {showLoadingScreen ? (
        <LoadingScreen onEnter={handleEnterSite} />
      ) : (
        <>
          <Index />
          <MultiAudioPlayer 
            autoPlay={musicAutoPlay} 
            ref={audioRef}
            tracks={[
              '/circus-145017.mp3'
            ]}
          />
        </>
      )}
    </>
  );
};

export default App;
