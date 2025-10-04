// Removed static background image import - now using video background
import gambleLogo from '/gamblelogoo.png';
import char1 from '/ChatGPT Image Sep 12, 2025 at 08_16_08 PM.png';
import char2 from '/ChatGPT Image Sep 12, 2025 at 08_21_43 PM.png';
import char3 from '@/assets/char_3.png';
import char4 from '@/assets/char_4.png';
import char5 from '@/assets/char_5.png';
import char6 from '@/assets/char_6.png';
import char7 from '@/assets/char_7.png';
import char8 from '@/assets/char_8.png';
import TrashRain from './TrashRain';
import BouncingDice from './BouncingDice';

const Hero = () => {
  const characters = [
    { src: char1, alt: 'Blonde Character with Money', glow: 'char-glow-green' },
    { src: char2, alt: 'Green Hoodie Character with Laptop', glow: 'char-glow-green' },
    { src: char3, alt: 'Blue Hoodie Character', glow: 'char-glow-blue' },
    { src: char4, alt: 'Yellow Hoodie Character', glow: 'char-glow-green' },
    { src: char5, alt: 'Pink Hoodie Character', glow: 'char-glow-purple' },
    { src: char6, alt: 'Orange Hoodie Character', glow: 'char-glow-blue' },
    { src: char7, alt: 'Red Hoodie Character', glow: 'char-glow-green' },
    { src: char8, alt: 'White Hoodie Character', glow: 'char-glow-purple' }
  ];

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
      {/* Scrolling Logo at Top */}
      <div className="absolute top-0 left-0 w-full h-20 bg-black/80 backdrop-blur-sm z-30 flex items-center overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set of logos */}
          {[...Array(15)].map((_, i) => (
            <img
              key={`set1-${i}`}
              src={gambleLogo}
              alt="GAMBLE SZN Logo"
              className="h-16 mx-6 object-contain flex-shrink-0"
            />
          ))}
          {/* Duplicate set for seamless loop */}
          {[...Array(15)].map((_, i) => (
            <img
              key={`set2-${i}`}
              src={gambleLogo}
              alt="GAMBLE SZN Logo"
              className="h-16 mx-6 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/8second_looping_chaotic_202510031527_pt2jz.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      
      {/* Trash Rain Effect */}
      <TrashRain />
      
      {/* Bouncing Dice Effect */}
      <BouncingDice />
      
      {/* Spinning Roulette Wheel */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20">
        <img
          src="/ChatGPT Image Oct 3, 2025 at 04_16_11 PM.png"
          alt="Spinning Roulette Wheel"
          className="h-32 sm:h-40 lg:h-48 object-contain roulette-spin drop-shadow-lg"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Logo */}
        <div className="text-center mb-8">
          <img 
            src={gambleLogo} 
            alt="GAMBLE SZN Logo" 
            className="h-48 sm:h-64 lg:h-80 object-contain mx-auto drop-shadow-2xl logo-dynamic"
          />
          
          {/* Subheading */}
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-medium mt-6 mb-8 tracking-wide">
            Because Real Utility is Overrated
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-pump">
              <span>BUY GAMBLE</span>
            </a>
            <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Join Us on X
            </a>
          </div>
        </div>
      </div>

      {/* Character Lineup - Hidden for now */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-4 justify-items-center">
            {characters.map((char, index) => (
              <div key={index} className="relative group">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black/20 rounded-full blur-sm" />
                
                <img
                  src={char.src}
                  alt={char.alt}
                  className={`
                    w-16 h-24 sm:w-20 sm:h-32 lg:w-24 lg:h-36 object-contain 
                    transition-all duration-300 hover:scale-110 hover:-translate-y-2
                    ${char.glow} ${index % 2 === 0 ? 'float-gentle' : 'float-offset'}
                  `}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;