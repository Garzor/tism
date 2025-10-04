import logoPCLOGO from '/PCLOGO.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Episodes', href: '#episodes' },
    { name: 'Cast', href: '#cast' },
    { name: 'Media', href: '#media' },
    { name: 'Join', href: '#join' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Telegram', href: '#', icon: '✈️' },
    { name: 'Discord', href: '#', icon: '🎮' }
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <img 
              src={logoPCLOGO} 
              alt="Pump Crew Footer Logo" 
              className="h-8 sm:h-10 object-contain"
            />
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-200"
                aria-label={social.name}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/40">
            © 2024 Pump Crew. All rights reserved.
          </p>
          
          <p className="text-white/40 text-center">
            This is a parody show site. 🎭
          </p>
          
          <p className="text-white/40">
            Made with 💚 by the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;