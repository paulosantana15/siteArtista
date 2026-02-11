import React from 'react';
import { Play } from 'lucide-react';
import { Reveal } from './Reveal';

const videos = [
  {
    title: "Ao Vivo no Estádio",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Music%20video%20thumbnail%20cinematic%20lighting%20concert&image_size=landscape_16_9",
    duration: "4:32"
  },
  {
    title: "Sessão Acústica",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Music%20video%20thumbnail%20studio%20session%20acoustic&image_size=landscape_16_9",
    duration: "3:45"
  },
  {
    title: "Bastidores da Tour",
    image: "https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Music%20video%20thumbnail%20backstage%20documentary&image_size=landscape_16_9",
    duration: "12:10"
  }
];

export function Videos() {
  return (
    <section id="videos" className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vídeos</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Reveal key={index} delay={index * 150}>
              <div className="group relative rounded-xl overflow-hidden aspect-video cursor-pointer">
                <img 
                  src={video.image} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/50">
                    <Play fill="white" className="text-white ml-1" size={32} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-bold text-white">{video.title}</h3>
                  <span className="text-sm text-gray-300">{video.duration}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
