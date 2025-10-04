import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Episode {
  id: number;
  title: string;
  synopsis: string;
  details: string;
}

const Episodes = () => {
  const [expandedEpisode, setExpandedEpisode] = useState<number | null>(null);

  const episodes: Episode[] = [
    {
      id: 1,
      title: "The Pump Begins",
      synopsis: "Launch + LP live.",
      details: "The crew discovers their first major token launch. Chaos ensues as they navigate the wild world of liquidity pools and learn the harsh lessons of crypto trading."
    },
    {
      id: 2,
      title: "Moon Mission",
      synopsis: "Massive push & collabs.",
      details: "Our heroes team up with other crypto communities for the ultimate pump campaign. Featuring guest appearances from legendary diamond hands and paper hands alike."
    },
    {
      id: 3,
      title: "Bagholder's Revenge",
      synopsis: "Community quests.",
      details: "The community bands together for epic quests and challenges. Holders get exclusive access to character development and special in-universe rewards."
    },
    {
      id: 4,
      title: "Season Finale",
      synopsis: "Merch + partner drops.",
      details: "The epic conclusion featuring exclusive merchandise drops, partnership announcements, and setting up the next season's storyline. Big reveals await!"
    }
  ];

  const toggleExpanded = (episodeId: number) => {
    setExpandedEpisode(expandedEpisode === episodeId ? null : episodeId);
  };

  return (
    <section id="episodes" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Episodes — Season One
          </h2>
          <p className="text-white/80 text-lg sm:text-xl">
            Follow the crew's journey through crypto chaos
          </p>
        </div>

        {/* Episode Cards Container */}
        <div className="snap-x gap-6 pb-6">
          {episodes.map((episode, index) => (
            <div 
              key={episode.id}
              className="snap-center flex-shrink-0 w-80 sm:w-96"
            >
              <div className="glass-card p-6 hover-lift group cursor-pointer h-full">
                {/* Episode Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-primary bg-primary/20 px-3 py-1 rounded-full">
                    EP.{episode.id}
                  </div>
                  <button
                    onClick={() => toggleExpanded(episode.id)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {expandedEpisode === episode.id ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Episode Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {episode.title}
                </h3>

                {/* Synopsis */}
                <p className="text-white/80 text-base mb-4">
                  {episode.synopsis}
                </p>

                {/* Expandable Details */}
                <div className={`
                  overflow-hidden transition-all duration-300 ease-out
                  ${expandedEpisode === episode.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {episode.details}
                    </p>
                  </div>
                </div>

                {/* Gradient Bottom Edge */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50 group-hover:opacity-100 transition-opacity rounded-b-3xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Scroll horizontally to explore all episodes
          </p>
        </div>
      </div>
    </section>
  );
};

export default Episodes;