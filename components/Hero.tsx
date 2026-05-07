
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSeason = () => {
    document.getElementById('season')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect simulation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ 
          backgroundImage: 'url(https://www.nintendoworldreport.com/media/53229/1/14.jpg)',
          filter: 'brightness(0.6) saturate(0.8)'
        }}
      />
      
      {/* Animated Motes */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white blur-sm animate-float"
            style={{
              width: Math.random() * 6 + 'px',
              height: Math.random() * 6 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-cinzel text-5xl md:text-8xl text-[#EAEAEA] mb-6 tracking-tighter drop-shadow-2xl animate-fade-in">
          Welcome to <br/><span className="text-sky-gold">the Sky world</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#DCE3EA]/80 mb-12 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
          Your portal to the latest season updates, daily quests, and ancestral memories. Let your light shine brighter together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={scrollToSeason}
            className="px-10 py-5 bg-sky-gold hover:bg-[#FFD166] text-[#0B132B] font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(242,201,76,0.4)] tracking-widest uppercase text-sm"
          >
            Explore the Realms
          </button>
          <button className="px-10 py-5 bg-white/10 hover:bg-white/20 text-[#EAEAEA] font-bold rounded-2xl transition-all border border-white/30 backdrop-blur-md tracking-widest uppercase text-sm">
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0B132B] to-transparent" />
    </div>
  );
};

export default Hero;
