const WannaPlaySection = () => {

  return (
    <section className="relative min-h-[60vh] bg-black overflow-hidden">
      {/* Scrolling Sped Kid Videos */}
      <div className="flex animate-scroll-videos h-full min-h-[60vh]" style={{ width: '200%' }}>
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
    </section>
  );
};

export default WannaPlaySection;
