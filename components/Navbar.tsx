
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Season', href: '#season' },
    { name: 'Travelling Spirit', href: '#spirit' },
    { name: 'Community', href: '#social' },
  ];

  const loginProviders = [
    { name: 'Nintendo Switch', icon: '🎮', color: 'hover:bg-red-600' },
    { name: 'PlayStation Network', icon: '🟦', color: 'hover:bg-blue-700' },
    { name: 'Google Account', icon: '🌐', color: 'hover:bg-white hover:text-gray-900' },
    { name: 'Apple ID', icon: '🍎', color: 'hover:bg-gray-100 hover:text-gray-900' },
    { name: 'Steam', icon: '⚙️', color: 'hover:bg-slate-700' },
    { name: 'Game Center', icon: '🟣', color: 'hover:bg-purple-600' },
    { name: 'Facebook', icon: '🔵', color: 'hover:bg-blue-600' },
  ];

  const brandIconUrl = "https://cdn.mobygames.com/covers/11178724-sky-children-of-the-light-playstation-4-front-cover.jpg";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform border border-white/20">
              <img 
                src={brandIconUrl} 
                alt="The Sky Chronicle Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-widest text-white uppercase">The Sky Chronicle</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest text-blue-100/70 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="px-6 py-2 bg-sky-gold hover:bg-white text-[#0B132B] font-bold rounded-full text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-sky-gold/20"
            >
              Play Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-white/10 py-6 px-6 flex flex-col gap-4 animate-fade-in-down">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg text-blue-100 py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => { setMobileMenuOpen(false); setIsLoginOpen(true); }}
              className="mt-4 w-full py-4 bg-sky-gold text-[#0B132B] rounded-lg font-bold uppercase tracking-widest"
            >
              Play Free
            </button>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in" 
            onClick={() => setIsLoginOpen(false)}
          />
          <div className="relative w-full max-w-md glass-morphism rounded-[3rem] p-10 shadow-2xl border border-white/10 text-center space-y-8 animate-scale-up overflow-hidden">
            <button 
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="space-y-3">
              <div className="w-20 h-20 bg-sky-gold/10 rounded-full flex items-center justify-center mx-auto border border-sky-gold/30 mb-4 overflow-hidden">
                <img src={brandIconUrl} className="w-full h-full object-cover" alt="Icon" />
              </div>
              <h2 className="font-cinzel text-3xl text-white tracking-widest">Sky Account</h2>
              <p className="text-blue-100/40 text-sm italic">"Your progress follows the light across all horizons."</p>
            </div>

            <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-2">
              {loginProviders.map((provider) => (
                <button 
                  key={provider.name}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold transition-all ${provider.color} hover:scale-[1.02] shadow-sm`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-xl">{provider.icon}</span>
                    <span className="text-xs tracking-[0.2em] uppercase">{provider.name}</span>
                  </span>
                  <svg className="w-4 h-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              ))}
            </div>

            <p className="text-[10px] text-blue-100/20 uppercase tracking-[0.2em] leading-relaxed">
              Linking your account allows you to play on <br/> 
              Mobile, Console, and PC seamlessly.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
