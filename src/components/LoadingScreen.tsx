import { useState, useRef } from 'react';
import tismLogo from '/tislogo.png';
import PsychedelicBackground from './PsychedelicBackground';

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen = ({ onEnter }: LoadingScreenProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    setIsTransitioning(true);
    // Add a small delay for smooth transition
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  const handleMouseEnter = () => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(console.error);
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      {/* Psychedelic Background */}
      <PsychedelicBackground />

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-12">
          <img 
            src={tismLogo} 
            alt="TISM CULT Logo" 
            className="h-64 sm:h-72 lg:h-80 xl:h-96 object-contain mx-auto drop-shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-200 gentle-tilt"
            onClick={handleEnter}
          />
        </div>

        {/* Enter Button */}
        <button
          onClick={handleEnter}
          onMouseEnter={handleMouseEnter}
          disabled={isTransitioning}
          className="btn-pump"
        >
          <span className="digital-text">I've got the TISM</span>
        </button>

      </div>

      {/* Hidden Audio for Button Hover */}
      <audio
        ref={hoverAudioRef}
        preload="auto"
        src="/button.mp3"
      />
    </div>
  );
};

export default LoadingScreen;
