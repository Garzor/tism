import { useEffect, useRef } from 'react';

const PsychedelicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const RAINBOW = [
      '#ff0049','#ff7a00','#ffee00','#00d46a','#00a3ff','#3b35ff','#b100ff','#ff1493'
    ];

    let width = 0, height = 0, dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    function resize(){
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width * dpr);
      height = Math.floor(rect.height * dpr);
      canvas.width = width; 
      canvas.height = height;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const bands = RAINBOW.length;
    const waves = Array.from({length: bands}, (_,i) => ({
      amp: 8 + i*3.2,
      kx: 0.0028 + i*0.00065,
      speed: 0.35 + i*0.07,
      phase: Math.random()*Math.PI*2,
      color: RAINBOW[i]
    }));

    function draw(t: number){
      const time = t/1000;
      ctx.clearRect(0,0,canvas.width,canvas.height);

      for(let i=0;i<bands;i++){
        const w = waves[i];
        const baseline = canvas.height*(0.12 + i*(0.78/(bands)));
        ctx.beginPath();
        const step = 3;
        for(let x=0; x<=canvas.width+step; x+=step){
          const y = baseline
            + Math.sin(x*w.kx + time*w.speed + w.phase)*w.amp
            + Math.sin((x+ i*40)*w.kx*0.7 + (time*0.6 - i)*w.speed)*w.amp*0.35
            + Math.sin((x*0.45 + i*130)*w.kx*1.8 + time*w.speed*0.9)*w.amp*0.22;
          if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = w.color;
        ctx.globalAlpha = 0.85; 
        ctx.fill();

        ctx.globalAlpha = 0.12; 
        ctx.strokeStyle = '#ffffff'; 
        ctx.lineWidth = 1.25; 
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(draw);
    }

    resize();
    const animationId = requestAnimationFrame(draw);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#ff1493' }}>
      {/* Rays */}
      <div 
        className="absolute -inset-[300%]"
        style={{
          background: `
            repeating-conic-gradient(from var(--a) at 50% 100%,
              #ff0000 0deg 10deg,  #ff7a00 10deg 20deg,
              #ffee00 20deg 30deg, #00d46a 30deg 40deg,
              #00a3ff 40deg 50deg, #3b35ff 50deg 60deg,
              #b100ff 60deg 70deg, #ff1493 70deg 80deg
            ),
            repeating-conic-gradient(from calc(var(--a) + 5deg) at 50% 100%,
              #ff0000 0deg 10deg,  #ff7a00 10deg 20deg,
              #ffee00 20deg 30deg, #00d46a 30deg 40deg,
              #00a3ff 40deg 50deg, #3b35ff 50deg 60deg,
              #b100ff 60deg 70deg, #ff1493 70deg 80deg
            )
          `,
          animation: 'sweep 12s linear infinite'
        }}
        aria-hidden="true"
      />

      {/* Sun */}
      <div 
        className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-[52%] rounded-full overflow-hidden"
        style={{
          width: 'min(58vmin, 70vh)',
          height: 'min(58vmin, 70vh)',
          background: 'radial-gradient(circle at 50% 60%, rgba(255,200,0,.65), rgba(255,120,0,.2) 60%, rgba(0,0,0,0) 61%)',
          boxShadow: '0 0 40px rgba(255, 204, 0, .35), 0 0 180px rgba(255, 140, 0, .25) inset'
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `repeating-radial-gradient(circle at 50% 50%,
              #ff5a00 0 5%, #ffee00 5% 10%, #00d46a 10% 15%, #00a3ff 15% 20%,
              #3b35ff 20% 25%, #b100ff 25% 30%, #ff1493 30% 35%, #ff5a00 35% 40%
            )`,
            WebkitMask: 'linear-gradient(#000 0 50%, transparent 50% 100%)',
            mask: 'linear-gradient(#000 0 50%, transparent 50% 100%)'
          }}
        />
      </div>

      {/* Horizon Glow */}
      <div 
        className="absolute left-0 right-0 bottom-1/2 pointer-events-none"
        style={{
          height: '16vmin',
          background: 'radial-gradient(60% 120% at 50% 100%, rgba(255,200,0,.55), rgba(255,200,0,0) 60%)',
          mixBlendMode: 'screen'
        }}
        aria-hidden="true"
      />

      {/* Ocean Canvas */}
      <canvas 
        ref={canvasRef}
        className="absolute left-0 right-0 bottom-0 w-full h-[56%]"
        style={{ imageRendering: 'optimizeSpeed' }}
      />
    </div>
  );
};

export default PsychedelicBackground;
