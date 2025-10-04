import posterTrailer from '@/assets/poster_trailer.jpg';

const Trailer = () => {
  return (
    <section className="relative">
      {/* Wavy Divider */}
      <div className="relative -mt-1">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-12 sm:h-16 lg:h-20"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="#000000"
          />
        </svg>
      </div>

      {/* Water Background Section */}
      <div className="bg-gradient-to-b from-transparent to-black/20 relative py-16 sm:py-24 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="animated-grid"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12">
              TRASH UTILITY
            </h2>

          {/* Framed Video */}
          <div className="relative inline-block max-w-3xl w-full">
            {/* Outer Frame */}
            <div className="bg-gradient-to-br from-black to-black p-3 sm:p-6 rounded-3xl shadow-strong">
              {/* Inner Frame */}
              <div className="bg-gradient-to-br from-vibrant-purple to-vibrant-purple p-2 sm:p-4 rounded-2xl">
                {/* Video Container */}
                <div className="relative overflow-hidden rounded-xl bg-black aspect-square w-full">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/2ndvid.mp4?v=1" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            {/* Floating Animation */}
            <div className="absolute inset-0 animate-[bob_4s_ease-in-out_infinite] pointer-events-none" />
          </div>

          {/* Caption */}
            <p className="text-white/90 text-lg sm:text-xl font-medium mt-6">
              Official Trailer
            </p>
        </div>
      </div>
    </section>
  );
};

export default Trailer;