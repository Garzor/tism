import { useEffect, useRef, useState } from 'react';

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
    <section id="trash-utility" className="relative bg-black py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Mascot */}
          <div 
            ref={mascotRef}
            className={`transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <img
              src="/dice.png"
              alt="Spinning Dice"
              className="w-full max-w-md mx-auto object-contain roulette-spin"
            />
          </div>

          {/* Right Side - Speech Bubble and Utilities */}
          <div className="space-y-8">
            {/* Speech Bubble */}
            <div className="relative">
              <div className="bg-gradient-to-br from-vibrant-purple/20 to-vibrant-purple/10 backdrop-blur-sm border-2 border-vibrant-purple/50 rounded-3xl p-6 shadow-2xl relative">
                <div className="text-white text-lg sm:text-xl font-medium leading-relaxed">
                  "Welcome to the Casino Utility Pack - where the house always wins!"
                </div>
                
                {/* Speech bubble pointer */}
                <div className="absolute -left-4 top-8 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-vibrant-purple/50"></div>
              </div>
              
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-vibrant-purple/20 to-vibrant-purple/10 backdrop-blur-sm border-2 border-vibrant-purple/50 rounded-3xl shadow-2xl blur-sm -z-10"></div>
            </div>

            {/* Utilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {utilities.map((utility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:border-vibrant-purple/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3">{utility.icon}</div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      <span className="text-vibrant-purple">{utility.title}</span>
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {utility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrashUtilitySection;
