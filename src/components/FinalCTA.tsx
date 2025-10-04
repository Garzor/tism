import { useEffect, useRef } from 'react';
import logoPCLOGO from '/PCLOGO.png';

const FinalCTA = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Confetti particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ['#22C55E', '#7C3AED', '#38BDF8', '#FDE68A'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <section id="join" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Confetti Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logoPCLOGO} 
            alt="Pump Crew Logo" 
            className="h-16 sm:h-24 lg:h-32 object-contain mx-auto drop-shadow-2xl float-gentle"
          />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to Join the Crew?
        </h2>
        
        <p className="text-white/90 text-lg sm:text-xl lg:text-2xl font-medium mb-12 max-w-3xl mx-auto">
          Become part of the most entertaining crypto community in the multiverse
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-pump text-lg px-12 py-5">
            Pump It Now 🚀
          </a>
          <a href="https://x.com/PumpCrew_" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-12 py-5">
            Follow on X
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="glass-card p-6">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-white/80">Winning Trades</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">8</div>
            <div className="text-white/80">Unique Characters</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">∞</div>
            <div className="text-white/80">Memes Created</div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-white/50 text-xs max-w-2xl mx-auto leading-relaxed">
          This is a parody crypto project for entertainment purposes. Always do your own research and never invest more than you can afford to lose. 
          Degens gonna degen, but do it responsibly! 🎭
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;