
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorldSection from './components/WorldSection';
import SpiritWisdom from './components/SpiritWisdom';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen sky-gradient selection:bg-blue-500/30">
      <Navbar isScrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="season" className="py-24 px-6 md:px-12 lg:px-24">
          <WorldSection />
        </section>

        <section id="spirit" className="py-24 bg-black/40">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-cinzel text-[#EAEAEA] mb-4">Travelling Spirit Arrival</h2>
              <p className="text-[#DCE3EA]/70 text-lg">A visitor from a past season has returned to Home. Share your light and rediscover lost memories.</p>
            </div>
            <SpiritWisdom />
          </div>
        </section>

        <section id="social" className="py-24 px-6 md:px-12 lg:px-24">
          <SocialSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
