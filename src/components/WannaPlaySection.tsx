const WannaPlaySection = () => {

  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      {/* Scrolling Sped Kid Videos */}
      <div className="flex animate-scroll-videos h-full min-h-[50vh]" style={{ width: '200%' }}>
        {/* First set of videos */}
        {[...Array(12)].map((_, i) => (
          <div key={`first-${i}`} className="flex-shrink-0 w-1/12 h-full">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/spedkid.mp4" type="video/mp4" />
            </video>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {[...Array(12)].map((_, i) => (
          <div key={`second-${i}`} className="flex-shrink-0 w-1/12 h-full">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/spedkid.mp4" type="video/mp4" />
            </video>
          </div>
        ))}
      </div>

      {/* Scrolling TISM CULT Logo - Full Height */}
      <div className="absolute bottom-0 left-0 right-0 top-0 z-30 overflow-hidden">
        <div className="flex animate-scroll-logo h-full" style={{ width: '200%' }}>
          {[...Array(12)].map((_, i) => (
            <img
              key={`logo-${i}`}
              src="/tislogo.png"
              alt="TISM CULT Logo"
              className="h-3/4 w-auto object-contain flex-shrink-0 self-center"
            />
          ))}
          {[...Array(12)].map((_, i) => (
            <img
              key={`logo-dup-${i}`}
              src="/tislogo.png"
              alt="TISM CULT Logo"
              className="h-3/4 w-auto object-contain flex-shrink-0 self-center"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WannaPlaySection;
