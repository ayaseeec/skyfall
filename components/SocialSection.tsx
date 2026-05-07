
import React from 'react';

const SocialSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 space-y-8">
        <h2 className="font-cinzel text-4xl md:text-5xl text-[#EAEAEA] leading-tight">
          Spread Your Wings <br/><span className="text-[#F2C94C]">Together</span>
        </h2>
        <p className="text-xl text-[#DCE3EA]/70 leading-relaxed">
          Sky is a realm built on connection. Meet players from around the world, explore beautiful realms, and journey through every season together, sharing light, stories, and unforgettable moments.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-6 items-start">
            <div className="p-3 rounded-2xl bg-blue-500/20 text-[#F2C94C] border border-[#F2C94C]/30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#EAEAEA] mb-2">Meaningful Connections</h4>
              <p className="text-[#DCE3EA]/60">Non-verbal communication through emotes and musical instruments allows for unique, deep connections.</p>
            </div>
          </div>
          
          <div className="flex gap-6 items-start">
            <div className="p-3 rounded-2xl bg-[#F2C94C]/20 text-[#F2C94C] border border-[#F2C94C]/30">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#EAEAEA] mb-2">Infinite Customization</h4>
              <p className="text-[#DCE3EA]/60">Collect cosmetics, capes, and hairstyles to express your unique inner light.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-[#F2C94C] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img 
            src="https://nintendoeverything.com/wp-content/uploads/sky-children-light-4.jpg" 
            alt="Community play"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 to-transparent flex items-end p-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                  className="w-12 h-12 rounded-full border-2 border-[#0B132B] shadow-xl"
                  alt="Player"
                />
              ))}
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-[#0B132B] flex items-center justify-center text-xs font-bold text-white">
                +1M
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
