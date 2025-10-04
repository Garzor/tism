import BouncingChips from './BouncingChips';

const JoinTrashSection = () => {
  const socialLinks = [
    {
      name: 'Twitter/X',
      href: 'https://x.com/PumpCrew_',
      icon: (
        <img
          src="/X_logo_2023_(white).png"
          alt="X Logo"
          className="w-16 h-16 object-contain"
        />
      )
    },
    {
      name: 'Dexscreener',
      href: 'https://dexscreener.com',
      icon: (
        <img
          src="/dexlogo.png"
          alt="Dexscreener Logo"
          className="w-16 h-16 object-contain"
        />
      )
    },
    {
      name: 'Pumpfun',
      href: 'https://pump.fun',
      icon: (
        <img
          src="/PUMPLOGO.png"
          alt="Pump Logo"
          className="w-16 h-16 object-contain"
        />
      )
    }
  ];

  return (
    <section id="join-trash" className="relative bg-black pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Bouncing Chips */}
      <BouncingChips />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mb-12 sm:mb-16">
          <img
            src="/gamblelogoo.png"
            alt="GAMBLE SZN Logo"
            className="h-40 sm:h-56 lg:h-72 xl:h-80 mx-auto object-contain bounce-around"
          />
        </div>

        {/* Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white/70 hover:text-vibrant-purple transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(124,58,237,0.8)]"
              aria-label={link.name}
            >
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-vibrant-purple/50 group-hover:bg-vibrant-purple/10 transition-all duration-300">
                {link.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinTrashSection;
