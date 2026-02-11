import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';

const photos = [
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Concert%20crowd%20hands%20in%20air%20silhouette&image_size=landscape_4_3",
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Musician%20close%20up%20singing%20microphone%20emotional&image_size=portrait_4_3",
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Drummer%20action%20shot%20dynamic%20lighting&image_size=square",
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Guitarist%20solo%20spotlight%20dramatic&image_size=portrait_4_3",
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Band%20bowing%20to%20audience%20end%20of%20show&image_size=landscape_16_9",
  "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Studio%20recording%20session%20black%20and%20white&image_size=square"
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % photos.length);
    }
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="galeria" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <Reveal key={index} delay={index * 100} className={`overflow-hidden rounded-xl cursor-pointer group ${index % 3 === 0 ? 'row-span-2' : ''}`}>
              <div 
                className="w-full h-full relative"
                onClick={() => openModal(index)}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                <img 
                  src={photo} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={closeModal}
          >
            <X size={40} />
          </button>

          <button 
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>

          <img 
            src={photos[selectedImage]} 
            alt="Full screen" 
            className="max-h-[90vh] max-w-[90vw] object-contain shadow-2xl rounded-md"
            onClick={(e) => e.stopPropagation()}
          />

          <button 
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-2"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </section>
  );
}
