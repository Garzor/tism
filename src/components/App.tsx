import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import Index from '@/pages/Index';
import MultiAudioPlayer from './MultiAudioPlayer';

const App = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(true);
  const [musicAutoPlay, setMusicAutoPlay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnterSite = () => {
    // Create both audio elements and play immediately on user interaction
    const audio1 = new Audio('/the-comedy-circus-clown-345516.mp3');
    audio1.loop = true;
    audio1.volume = 0.3; // Lower volume since we'll have two tracks
    
    const audio2 = new Audio('/level-up-bonus-sequence-2-186891.mp3');
    audio2.loop = true;
    audio2.volume = 0.2;
    
    const audio3 = new Audio('/slot-machine-coin-payout-1-188227.mp3');
    audio3.loop = true;
    audio3.volume = 0.15;
    
    // Play all three audio tracks
    Promise.all([audio1.play(), audio2.play(), audio3.play()]).then(() => {
      console.log('All three audio tracks playing successfully');
      // Store the main audio element reference for the MultiAudioPlayer component
      if (audioRef.current) {
        audioRef.current.src = audio1.src;
        audioRef.current.currentTime = audio1.currentTime;
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
              '/the-comedy-circus-clown-345516.mp3',
              '/level-up-bonus-sequence-2-186891.mp3',
              '/slot-machine-coin-payout-1-188227.mp3'
            ]}
          />
        </>
      )}
    </>
  );
};

export default App;
