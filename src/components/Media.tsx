import { useState } from 'react';
import { X, Play } from 'lucide-react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  title: string;
  thumbnail: string;
  content: string;
}

const Media = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      title: 'Character Concept Art',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    },
    {
      id: 2,
      type: 'video',
      title: 'Behind the Scenes',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    },
    {
      id: 3,
      type: 'image',
      title: 'Meme Collection',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    },
    {
      id: 4,
      type: 'video',
      title: 'Character Animations',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    },
    {
      id: 5,
      type: 'image',
      title: 'Trading Charts Parody',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    },
    {
      id: 6,
      type: 'video',
      title: 'Community Highlights',
      thumbnail: '/placeholder.svg',
      content: '/placeholder.svg'
    }
  ];

  const openLightbox = (media: MediaItem) => {
    setSelectedMedia(media);
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  return (
    <section id="media" className="py-16 sm:py-24 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marquee Ticker */}
        <div className="overflow-hidden mb-12">
          <div className="whitespace-nowrap">
            <div className="inline-block marquee text-2xl sm:text-3xl lg:text-4xl font-bold text-white/20">
              RUGGED → RESPAWNED → WE MULTIPLY → PUMP CREW → RUGGED → RESPAWNED → WE MULTIPLY → PUMP CREW →
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Media & Memes
          </h2>
          <p className="text-white/80 text-lg sm:text-xl">
            Epic moments and community creations
          </p>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <div 
              key={item.id}
              className="glass-card overflow-hidden hover-lift group cursor-pointer"
              onClick={() => openLightbox(item)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl">📱</div>
                </div>
                
                {/* Play Button for Videos */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                )}
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mt-1">
                  {item.type === 'video' ? 'Video' : 'Image'}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedMedia && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-black rounded-2xl overflow-hidden">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media Content */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-8xl">🎬</div>
              </div>

              {/* Media Info */}
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-white/70">
                  {selectedMedia.type === 'video' ? 'Video Content' : 'Image Content'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Media;