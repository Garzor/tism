const WannaPlaySection = () => {

  return (
    <section className="relative min-h-[60vh] bg-black flex flex-col justify-center items-center overflow-hidden">
      {/* Scrolling Joker Cards Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex animate-scroll-jokers" style={{ width: '200%' }}>
          {/* First row of jokers */}
          {[...Array(20)].map((_, i) => (
            <img
              key={`row1-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-20"
            />
          ))}
          {/* Duplicate for seamless loop */}
          {[...Array(20)].map((_, i) => (
            <img
              key={`row1-dup-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-20"
            />
          ))}
        </div>
        
        {/* Second row offset */}
        <div className="flex animate-scroll-jokers-reverse mt-8" style={{ width: '200%' }}>
          {[...Array(20)].map((_, i) => (
            <img
              key={`row2-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-15"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <img
              key={`row2-dup-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-15"
            />
          ))}
        </div>

        {/* Third row */}
        <div className="flex animate-scroll-jokers mt-8" style={{ width: '200%' }}>
          {[...Array(20)].map((_, i) => (
            <img
              key={`row3-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-25"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <img
              key={`row3-dup-${i}`}
              src="/joker.png"
              alt="Joker Card"
              className="h-32 w-auto object-contain flex-shrink-0 mx-1 opacity-25"
            />
          ))}
        </div>
      </div>


      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-widest" style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-2xl" style={{ textShadow: '4px 4px 0px #DC2626, 8px 8px 0px #991B1B' }}>
            WANNA
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 drop-shadow-2xl" style={{ textShadow: '4px 4px 0px #FCD34D, 8px 8px 0px #D97706' }}>
            GAMBA?
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          Ready to roll the dice and spin the wheel? The house always wins, but the thrill is free!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-pump">
            <span>LET'S GAMBLE</span>
          </a>
          <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            Join the Fun
          </a>
        </div>
      </div>
    </section>
  );
};

export default WannaPlaySection;
