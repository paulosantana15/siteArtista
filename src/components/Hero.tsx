import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Musician%20performing%20on%20stage%20with%20dramatic%20lighting%2C%20silhouette%2C%20atmospheric%20smoke%2C%20purple%20and%20gold%20lighting%2C%20high%20quality%20concert%20photography&image_size=landscape_16_9")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tight text-white">
          <span className="block mb-2">PAULO</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SANTANA</span>
        </h1>
        
        <div className="h-8 md:h-12 overflow-hidden mx-auto max-w-[600px]">
          <p className="text-xl md:text-3xl font-light tracking-widest text-gray-300 animate-typewriter whitespace-nowrap border-r-4 border-primary pr-2">
            MÚSICA • ALMA • RITMO
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 md:bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#sobre" className="text-white/50 hover:text-primary transition-colors">
          <ChevronDown size={40} />
        </a>
      </div>
    </section>
  );
}
