import { useEffect, useRef, useState } from 'react';
import PsychedelicBackground from './PsychedelicBackground';

const TrashUtilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mascotRef.current) {
        const rect = mascotRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    // Check on mount
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const utilities = [
    {
      icon: "🎲",
      title: "Rigged Dice",
      description: "You lose on every roll, but it feels random."
    },
    {
      icon: "🎰",
      title: "Scam Slots",
      description: "Jackpot odds: 0.00000001%. Spin anyway."
    },
    {
      icon: "🎡",
      title: "Rug Roulette",
      description: "Red, black, or straight to zero."
    }
  ];

  return (
    <section id="trash-utility" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Psychedelic Background */}
      <PsychedelicBackground />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Mascot */}
          <div 
            ref={mascotRef}
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <img
              src="/rubik.png"
              alt="Spinning Rubik's Cube"
              className="w-full max-w-md mx-auto object-contain roulette-spin"
            />
          </div>

          {/* Right Side - AM I SPED Image */}
          <div className="flex items-center justify-center">
            <img
              src="/amisped.png"
              alt="AM I A SPED?"
              className="w-full max-w-lg object-contain big-breathe"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrashUtilitySection;
