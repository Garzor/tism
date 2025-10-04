import { useState, useEffect } from 'react';
import logoTrashUtility from '/ChatGPT Image Oct 2, 2025 at 03_33_40 PM.png';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Utility', href: '#trash-utility' }
  ];

  const rightNavLinks = [
    { name: 'Community', href: 'https://x.com/PumpCrew_' },
    { name: 'About', href: '#join-trash' }
  ];

  return (
    <nav className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className={`
        glass-card px-6 py-4 transition-all duration-300
        ${scrolled ? 'bg-white/20 backdrop-blur-md shadow-strong' : 'bg-white/10 backdrop-blur-sm shadow-soft'}
      `}>
        <div className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <img 
              src={logoTrashUtility} 
              alt="Trash Utility Logo" 
              className="h-12 sm:h-16 object-contain"
            />
          </div>

          {/* Right Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            {rightNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white/90 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;