
import React, { useState } from 'react';
import { WorldRegion, Spirit } from '../types';

const regions: WorldRegion[] = [
  {
    id: 'isle',
    name: 'Isle of Dawn',
    description: 'A serene coastal realm where new spirits wake to their first sunrise.',
    longDescription: 'The starting point of every journey. Here, the sand glows with the warmth of the rising sun, and the first spirits await to teach you the art of flight and communication. It is a place of peace and beginnings.',
    imageUrl: 'https://p4.wallpaperbetter.com/wallpaper/1007/22/375/sky-game-isle-of-dawn-sky-children-of-the-light-sunlight-flag-hd-wallpaper-preview.jpg',
    color: 'border-amber-400',
    landmarks: ['The Ancient Temple', 'The Boat Station', 'The Cave of Prophecies'],
    spirits: [
      { name: 'Pointing Candidate', memory: 'Guided the first children toward the lighthouse across the vast sands.' },
      { name: 'Chasing Pilgrim', memory: 'Once raced the wind to reach the temple before the stars faded.' },
      { name: 'Refined Mentor', memory: 'Taught the secrets of the murals to those who sought wisdom.' }
    ],
    guideTip: 'Look for the glowing murals; they tell the story of those who came before.'
  },
  {
    id: 'prairie',
    name: 'Daylight Prairie',
    description: 'Vast grassy plains teeming with life and playful creatures of light.',
    longDescription: 'A vibrant ecosystem of floating islands and rolling hills. The Prairie is home to many social spirits and the majestic Mantas that carry travelers across the breeze.',
    imageUrl: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/08/2023083009422200-5cb89ecce6346777f68c471954f44457-1.jpg',
    color: 'border-green-200',
    landmarks: ['Butterfly Fields', 'Bird Nest', 'Village Islands', 'Eight-Player Puzzle'],
    spirits: [
      { name: 'Butterfly Charmer', memory: 'Spent lifetimes dancing with the winged creatures of light.' },
      { name: 'Pollen Reaper', memory: 'Tended to the bellflowers that signal the coming of spring.' },
      { name: 'Laughing Light Catcher', memory: 'Gathered the fragments of joy that fell from the clouds.' }
    ],
    guideTip: 'Hold hands with friends to recharge your light faster in these open fields.'
  },
  {
    id: 'forest',
    name: 'Hidden Forest',
    description: 'A misty woodland where rain falls constantly on ancient ruins.',
    longDescription: 'A realm of mystery and melancholy. The persistent rain drains your light, requiring you to find shelter under glowing mushrooms or ancient gazebos. Deep within lies the secret of the ancestors.',
    imageUrl: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/11/18b90824a4597-screenshoturl.jpg',
    color: 'border-emerald-500',
    landmarks: ['The Brook', 'Boneyard', 'Sunny Forest', 'Underground Cavern'],
    spirits: [
      { name: 'Shivering Trailblazer', memory: 'Sought the end of the rain but found only the beauty in the mist.' },
      { name: 'Blushing Prospector', memory: 'Uncovered the hidden crystals that glow even in the darkest hollows.' },
      { name: 'Hide n\' Seek Pioneer', memory: 'Played among the roots of the ancient trees for centuries.' }
    ],
    guideTip: 'Keep an eye on your cape energy; the rain is beautiful but unforgiving.'
  },
  {
    id: 'valley',
    name: 'Valley of Triumph',
    description: 'A place of eternal snow and thrilling races toward the finish line.',
    longDescription: 'Built for speed and celebration, this realm features grand ice rinks and two massive racing tracks. Spirits here value grace, agility, and the thrill of the descent.',
    imageUrl: 'https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/66/Valley_Thumbnail.png/revision/latest/scale-to-width-down/1200?cb=20240129035548',
    color: 'border-orange-500',
    landmarks: ['Ice Rink', 'The Citadel', 'Flying Race Track', 'Sliding Race Track'],
    spirits: [
      { name: 'Bowing Medalist', memory: 'Honored the champions who descended from the highest peaks.' },
      { name: 'Backflipping Champion', memory: 'Mastered the art of acrobatics in the heart of the stadium.' },
      { name: 'Cheering Spectator', memory: 'Raised a voice of light for every racer that crossed the line.' }
    ],
    guideTip: 'Master the art of sliding to reach the highest speeds on the tracks!'
  },
  {
    id: 'wasteland',
    name: 'Golden Wasteland',
    description: 'A desolate, dangerous realm of dark water and ancient battlegrounds.',
    longDescription: 'Once a flourishing kingdom, now a shadow of its former glory. Dangerous Dark Dragons (Krills) roam the skies, and the water has turned to a murky acid. Only the brave dare to tread here.',
    imageUrl: 'https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/ff/Wasteland_Thumbnail.png/revision/latest/scale-to-width-down/1200?cb=20240129040918',
    color: 'border-emerald-700',
    landmarks: ['Broken Temple', 'The Graveyard', 'Shipwreck', 'Battlefield'],
    spirits: [
      { name: 'Fainting Warrior', memory: 'Protected the gates until the darkness finally took hold.' },
      { name: 'Saluting Captain', memory: 'Led the fleet through the acid seas with unwavering courage.' },
      { name: 'Pleaful Parent', memory: 'Searched for their lost child among the ruins of the great hall.' }
    ],
    guideTip: 'Be still when the blue light of the dragon finds you... or find cover quickly.'
  },
  {
    id: 'vault',
    name: 'Vault Of Knowledge',
    description: 'A towering library of history where secrets are unlocked floor by floor.',
    longDescription: 'An infinite vertical library that stores the memories of the stars. Travelers must work together to activate elevators and unlock the wisdom contained within the constellations.',
    imageUrl: 'https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/75/Vault_Thumbnail.png/revision/latest/scale-to-width-down/1200?cb=20240129043049',
    color: 'border-purple-400',
    landmarks: ['The Archives', 'The Starlight Desert', 'The Office', 'Floor Altars'],
    spirits: [
      { name: 'Meditating Monastic', memory: 'Spent aeons in silence, listening to the hum of the universe.' },
      { name: 'Praying Acolyte', memory: 'Offered light to the stars to keep the constellations burning bright.' },
      { name: 'Greeting Shaman', memory: 'Welcomed every traveler who ascended to the highest platform.' }
    ],
    guideTip: 'Listen to the bells; they guide you through the darkness between floors.'
  }
];

const seasonalQuests = [
  { id: 1, title: 'Fractured Echoes', status: 'Completed', icon: '✨', description: 'Gather the first shards of the Ancestral Lantern.' },
  { id: 2, title: 'Woven Glow', status: 'Completed', icon: '🧶', description: 'Mend the threads of light in the Hidden Forest.' },
  { id: 3, title: 'The Heart of the Forge', status: 'Active', icon: '🔥', description: 'Reignite the central spark at the Daylight Prairie peak.' },
  { id: 4, title: 'Eternal Radiance', status: 'Locked', icon: '☀️', description: 'Complete the restoration of the Great Lighthouse.' },
];

const seasonalRewards = [
  { name: 'Lantern of Unity', type: 'Ultimate Gift', icon: '🏮' },
  { name: 'Mender’s Cloak', type: 'Apparel', icon: '🧥' },
  { name: 'Golden Seams Mask', type: 'Accessory', icon: '👺' },
  { name: 'Sparkling Sandals', type: 'Cosmetic', icon: '👡' },
];

const WorldSection: React.FC = () => {
  const [selectedRealm, setSelectedRealm] = useState<WorldRegion | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'spirits'>('overview');
  const [selectedSpirit, setSelectedSpirit] = useState<Spirit | null>(null);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);

  const closeModal = () => {
    setSelectedRealm(null);
    setActiveTab('overview');
    setSelectedSpirit(null);
  };

  const openModal = (region: WorldRegion) => {
    setSelectedRealm(region);
    setActiveTab('overview');
    setSelectedSpirit(null);
  };

  const handleRevealSpirit = (spirit: Spirit) => {
    setSelectedSpirit(spirit);
  };

  return (
    <div className="space-y-32">
      {/* --- SEASON HUB --- */}
      <div className="relative group rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)] min-h-[550px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] group-hover:scale-105" 
          style={{ backgroundImage: 'url(https://thatgamecompany.com/wp-content/uploads/2024/01/Sky_PC_Keyart_Textless.jpg)' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/70 to-transparent" />
        
        <div className="relative z-10 p-12 md:p-20 lg:p-24 max-w-3xl">
          <h2 className="font-cinzel text-5xl md:text-7xl text-white mb-6 leading-none">
            Season of <br/><span className="text-sky-gold drop-shadow-[0_0_20px_rgba(242,201,76,0.5)]">Lightmending</span>
          </h2>
          <p className="text-xl text-blue-100/70 font-light leading-relaxed mb-10">
            The realms are fracturing, and the ancient light begins to fade. Journey with the Ancestral Mender to gather the scattered shards and weave the light back into the world.
          </p>
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => setIsPassModalOpen(true)}
              className="px-8 py-4 bg-sky-gold text-[#0B132B] font-bold rounded-2xl text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
            >
              Seasonal Pass
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold rounded-2xl text-xs uppercase tracking-widest backdrop-blur-md">View Roadmap</button>
          </div>
        </div>
      </div>

      {/* Seasonal Pass Info Modal */}
      {isPassModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fade-in" onClick={() => setIsPassModalOpen(false)} />
          <div className="relative w-full max-w-2xl glass-morphism rounded-[3rem] p-10 md:p-14 shadow-2xl border border-sky-gold/20 animate-scale-up overflow-hidden">
            <button 
              onClick={() => setIsPassModalOpen(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="text-center space-y-8">
              <div className="inline-block p-4 rounded-full bg-sky-gold/10 border border-sky-gold/30 mb-2">
                <svg className="w-12 h-12 text-sky-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                </svg>
              </div>
              <h2 className="font-cinzel text-3xl md:text-5xl text-white tracking-widest">Seasonal Pass</h2>
              <p className="text-blue-100/60 max-w-md mx-auto italic font-light">"Awaken your inner light and unlock the full potential of your journey through the fractured realms."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  { title: "Instant Glow", desc: "Receive 30 Seasonal Candles immediately upon purchase.", icon: "🕯️" },
                  { title: "Ultimate Gifts", desc: "Unlock exclusive rewards like the 'Lantern of Unity'.", icon: "🏮" },
                  { title: "Double Rewards", desc: "Gain one extra gift from every seasonal spirit.", icon: "🎁" },
                  { title: "Daily Bonus", desc: "One extra Seasonal Candle for every day you log in.", icon: "✨" },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-center group hover:bg-white/10 transition-colors">
                    <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                    <div>
                      <h4 className="text-sky-gold font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[10px] text-blue-100/40 uppercase tracking-widest leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <button className="w-full py-5 bg-sky-gold text-[#0B132B] font-extrabold rounded-2xl uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] transition-transform active:scale-95">
                  Get Pass Now
                </button>
                <p className="mt-4 text-[9px] text-white/20 uppercase tracking-widest">Available in the In-Game Shop and Web Store</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SEASONAL PROGRESSION & REWARDS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-8">
          <h3 className="font-cinzel text-2xl text-white tracking-widest uppercase">Quest Roadmap</h3>
          <div className="space-y-6 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
            {seasonalQuests.map((quest) => (
              <div key={quest.id} className={`relative flex gap-6 group transition-opacity ${quest.status === 'Locked' ? 'opacity-30' : 'opacity-100'}`}>
                <div className={`z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                  quest.status === 'Completed' ? 'bg-sky-gold border-sky-gold text-[#0B132B]' : 
                  quest.status === 'Active' ? 'bg-[#0B132B] border-sky-gold text-sky-gold animate-pulse shadow-[0_0_15px_rgba(242,201,76,0.3)]' : 
                  'bg-[#0B132B] border-white/20'
                }`}>
                  <span className="text-sm font-bold">{quest.status === 'Completed' ? '✓' : quest.id}</span>
                </div>
                <div className="flex-1 glass-morphism p-5 rounded-2xl border border-white/5 group-hover:border-white/20 transition-all">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl">{quest.icon}</span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{quest.title}</h4>
                  </div>
                  <p className="text-[10px] text-blue-100/40 leading-relaxed uppercase tracking-wider">{quest.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-10">
          <h3 className="font-cinzel text-2xl text-white tracking-widest uppercase">Seasonal Treasures</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {seasonalRewards.map((reward, i) => (
              <div key={i} className="glass-morphism p-6 rounded-[2rem] border border-white/5 text-center group hover:border-sky-gold/30 transition-all">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {reward.icon}
                </div>
                <h4 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{reward.name}</h4>
                <span className="text-[9px] text-sky-gold/40 uppercase font-bold tracking-widest">{reward.type}</span>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-sky-gold/5 to-transparent border border-sky-gold/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-sky-gold flex items-center justify-center text-4xl shadow-lg">🕯️</div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-cinzel text-xl text-white mb-2 uppercase tracking-widest">Lightmending Sparks</h4>
              <p className="text-sm text-blue-100/50 leading-relaxed">
                Collect Seasonal Candles to unlock the memories of the Lightmenders. Each shard you find brings us closer to a restored horizon.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- REALMS EXPLORATION --- */}
      <div className="pt-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl text-[#EAEAEA] mb-4 uppercase tracking-widest">Explore the Realms</h2>
          <div className="w-24 h-1 bg-sky-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((region) => (
            <div 
              key={region.id}
              className={`group relative h-96 rounded-3xl overflow-hidden border-2 ${region.color} transition-all duration-700 hover:scale-[1.02] cursor-pointer shadow-2xl`}
              onClick={() => openModal(region)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="font-cinzel text-3xl text-[#EAEAEA] mb-2 tracking-widest">{region.name}</h3>
                <p className="text-[#DCE3EA]/70 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm">
                  {region.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-sky-gold font-bold uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  Enter Memory Gate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Realm Details Modal */}
      {selectedRealm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-fade-in" 
            onClick={closeModal}
          />
          <div className="relative w-full max-w-4xl bg-[#0B132B] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl animate-scale-up overflow-y-auto max-h-[90vh]">
            
            <div className="h-56 md:h-72 relative shrink-0">
              <img 
                src={selectedRealm.imageUrl} 
                alt={selectedRealm.name} 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] to-transparent" />
              
              <div className="absolute bottom-6 left-8 md:left-12">
                <h2 className="font-cinzel text-4xl md:text-5xl text-[#EAEAEA] mb-2">{selectedRealm.name}</h2>
                <div className="flex gap-4">
                  <button 
                    onClick={() => { setActiveTab('overview'); setSelectedSpirit(null); }}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'overview' ? 'bg-sky-gold text-[#0B132B]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    Overview
                  </button>
                  <button 
                    onClick={() => setActiveTab('spirits')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeTab === 'spirits' ? 'bg-sky-gold text-[#0B132B]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                  >
                    Spirits
                  </button>
                </div>
              </div>

              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white hover:bg-sky-gold hover:text-[#0B132B] transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 md:p-12">
              {activeTab === 'overview' ? (
                <div className="flex flex-col md:flex-row gap-12 animate-fade-in">
                  <div className="flex-1">
                    <p className="text-lg text-[#DCE3EA]/80 leading-relaxed mb-8">
                      {selectedRealm.longDescription}
                    </p>
                    
                    <div className="p-6 rounded-2xl bg-sky-gold/5 border border-sky-gold/20">
                      <h4 className="text-sky-gold font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Spirit Guide Tip
                      </h4>
                      <p className="italic text-[#DCE3EA]/90">"{selectedRealm.guideTip}"</p>
                    </div>
                  </div>

                  <div className="md:w-64 space-y-8">
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4 text-sky-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Landmarks
                      </h4>
                      <ul className="space-y-3">
                        {selectedRealm.landmarks.map(landmark => (
                          <li key={landmark} className="flex items-center gap-3 text-[#DCE3EA]/60 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-sky-gold" />
                            {landmark}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button 
                      onClick={() => setActiveTab('spirits')}
                      className="w-full py-4 bg-sky-gold text-[#0B132B] font-bold rounded-xl uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(242,201,76,0.2)]"
                    >
                      View Spirits
                    </button>
                  </div>
                </div>
              ) : (
                <div className="animate-fade-in">
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-cinzel text-white">Ancestral Spirits</h3>
                        <p className="text-sm text-[#DCE3EA]/40">Found in {selectedRealm.name}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedRealm.spirits.map((spirit, idx) => (
                          <div 
                            key={spirit.name} 
                            onClick={() => handleRevealSpirit(spirit)}
                            className={`group p-6 rounded-2xl cursor-pointer border transition-all ${selectedSpirit?.name === spirit.name ? 'bg-sky-gold/10 border-sky-gold' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${selectedSpirit?.name === spirit.name ? 'bg-sky-gold text-[#0B132B]' : 'bg-white/10 text-white/40'}`}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                                </svg>
                              </div>
                              <h4 className={`font-bold transition-colors ${selectedSpirit?.name === spirit.name ? 'text-sky-gold' : 'text-[#EAEAEA]'}`}>{spirit.name}</h4>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <span className="text-[10px] uppercase tracking-widest text-[#DCE3EA]/40">Resident Spirit</span>
                              <div className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-80 shrink-0">
                      <div className="sticky top-0 p-8 rounded-3xl bg-black/40 border border-white/5 h-full min-h-[300px] flex flex-col justify-center text-center">
                        {selectedSpirit ? (
                          <div className="animate-fade-in space-y-6">
                            <div className="w-16 h-16 bg-sky-gold/20 text-sky-gold rounded-full flex items-center justify-center mx-auto border border-sky-gold/30 shadow-[0_0_15px_rgba(242,201,76,0.3)]">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-cinzel text-xl text-sky-gold mb-2">{selectedSpirit.name}</h4>
                              <div className="w-12 h-px bg-white/20 mx-auto mb-4" />
                              <p className="text-[#DCE3EA]/70 italic leading-relaxed text-sm">
                                "{selectedSpirit.memory}"
                              </p>
                            </div>
                            <button className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 hover:text-white transition-colors">
                              Close Memory
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-4 opacity-40">
                            <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm">Select a spirit to reveal their ancestral memories from the past.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setActiveTab('overview'); setSelectedSpirit(null); }}
                    className="mt-12 text-[#DCE3EA]/60 hover:text-white flex items-center gap-2 text-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Exploration Overview
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldSection;
