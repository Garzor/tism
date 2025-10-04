import char1 from '/ChatGPT Image Sep 12, 2025 at 08_16_08 PM.png';
import char2 from '/ChatGPT Image Sep 12, 2025 at 08_12_49 PM.png';
import char3 from '/ChatGPT Image Sep 12, 2025 at 08_21_43 PM.png';
import char4 from '/ChatGPT Image Sep 12, 2025 at 08_35_11 PM.png';
import char5 from '/ChatGPT Image Sep 12, 2025 at 08_25_30 PM.png';
import char6 from '/ChatGPT Image Sep 12, 2025 at 08_30_32 PM.png';
import char7 from '/ChatGPT Image Sep 12, 2025 at 08_19_06 PM.png';
import char8 from '/ChatGPT Image Sep 12, 2025 at 08_10_12 PM.png';

interface Character {
  id: number;
  name: string;
  description: string;
  image: string;
  glowClass: string;
}

const Cast = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: "Money Mike",
      description: "Always flashing the cash, never stops hustling",
      image: char1,
      glowClass: "char-glow-green"
    },
    {
      id: 2,
      name: "Tired Tony",
      description: "Always checking charts, never sleeps",
      image: char2,
      glowClass: "char-glow-purple"
    },
    {
      id: 3,
      name: "Tech Tim",
      description: "Always coding and trading, laptop never closes",
      image: char3,
      glowClass: "char-glow-blue"
    },
    {
      id: 4,
      name: "Bagholder Ben",
      description: "Money bags leaking, but still holding strong",
      image: char4,
      glowClass: "char-glow-green"
    },
    {
      id: 5,
      name: "Success Sam",
      description: "Always hitting those green checkmarks",
      image: char5,
      glowClass: "char-glow-purple"
    },
    {
      id: 6,
      name: "Social Steve",
      description: "Always scrolling and sharing the latest trends",
      image: char6,
      glowClass: "char-glow-blue"
    },
    {
      id: 7,
      name: "Broke Bobby",
      description: "Wallet's empty but still grinding",
      image: char7,
      glowClass: "char-glow-green"
    },
    {
      id: 8,
      name: "Lost Larry",
      description: "No idea how he got here, but he's staying",
      image: char8,
      glowClass: "char-glow-purple"
    }
  ];

  return (
    <section id="cast" className="py-16 sm:py-24 bg-gradient-to-b from-black/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Meet the Crew
          </h2>
          <p className="text-white/80 text-lg sm:text-xl">
            Each degen has their own unique trading style
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {characters.map((character) => (
            <div 
              key={character.id}
              className="p-6 text-center hover-lift group cursor-pointer"
            >
              {/* Character Pedestal */}
              <div className="relative mb-6">
                {/* Pedestal Shadow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black/20 rounded-full blur-sm" />
                
                {/* Character Image */}
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-24 h-32 sm:w-32 sm:h-40 object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Character Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {character.name}
                </h3>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {character.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm italic">
            "In crypto, we're all just characters in our own trading story"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cast;