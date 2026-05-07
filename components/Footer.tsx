
import React from 'react';

const Footer: React.FC = () => {
  const brandIconUrl = "https://cdn.mobygames.com/covers/11178724-sky-children-of-the-light-playstation-4-front-cover.jpg";

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/altruisrun/' },
  ];

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg">
                <img 
                  src={brandIconUrl} 
                  alt="The Sky Chronicle Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-cinzel text-2xl font-bold tracking-widest text-white uppercase">The Sky Chronicle</span>
            </div>
            <p className="text-blue-100/40 max-w-sm mb-8 leading-relaxed">
              Inspired by the beautiful world of Sky: Children of the Light. The Sky Chronicle is your gateway to a journey of compassion, friendship, and flight.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="text-blue-100/30 hover:text-white transition-colors text-sm uppercase tracking-widest"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Realms</h5>
            <ul className="space-y-4 text-blue-100/40 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Isle of Dawn</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Daylight Prairie</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Valley of Triumph</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Eye of Eden</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h5>
            <ul className="space-y-4 text-blue-100/40 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/20 text-xs">
            © 2024 The Sky Chronicle. Not an official Thatgamecompany product.
          </p>
          <div className="flex gap-8 text-xs text-blue-100/20">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
