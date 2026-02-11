import React, { useRef, useState } from 'react';
import { Play, Disc } from 'lucide-react';
import { Reveal } from './Reveal';

const albums = [
  {
    title: "Ecos da Alma",
    year: "2020",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Album%20cover%20art%20abstract%20neon%20colors%20dark%20moody&image_size=square",
    links: { spotify: "#", apple: "#" }
  },
  {
    title: "Dourado",
    year: "2022",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Album%20cover%20art%20minimalist%20gold%20and%20black%20geometry&image_size=square",
    links: { spotify: "#", apple: "#" }
  },
  {
    title: "Horizonte Roxo",
    year: "2024",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Album%20cover%20art%20surreal%20landscape%20purple%20sky&image_size=square",
    links: { spotify: "#", apple: "#" }
  }
];

function TiltCard({ album }: { album: typeof albums[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={(e) => { setIsHovering(true); handleMouseMove(e); }}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square rounded-xl transition-transform duration-200 ease-out"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovering ? 1.05 : 1})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl pointer-events-none z-20" />
      <img 
        src={album.image} 
        alt={album.title} 
        className="w-full h-full object-cover rounded-xl shadow-2xl"
      />
      
      {/* Overlay Content */}
      <div className={`absolute inset-0 bg-black/60 rounded-xl flex flex-col items-center justify-center p-6 transition-opacity duration-300 z-30 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-bold text-center mb-2">{album.title}</h3>
        <span className="text-primary mb-6">{album.year}</span>
        
        <div className="flex gap-4">
          <button className="p-3 bg-primary rounded-full hover:bg-white hover:text-primary transition-colors transform hover:scale-110">
            <Play fill="currentColor" size={20} />
          </button>
          <button className="p-3 bg-secondary rounded-full hover:bg-white hover:text-secondary transition-colors transform hover:scale-110">
            <Disc size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Music() {
  return (
    <section id="musica" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Discografia</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {albums.map((album, index) => (
            <Reveal key={index} delay={index * 150}>
              <TiltCard album={album} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
