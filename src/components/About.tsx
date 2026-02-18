import React from 'react';
import { Reveal } from './Reveal';

const timeline = [
  { year: '2018', title: 'Início da Carreira', description: 'Primeiros shows em casas locais e lançamento do primeiro single.' },
  { year: '2020', title: 'Álbum de Estreia', description: 'Lançamento de "Ecos da Alma", aclamado pela crítica independente.' },
  { year: '2022', title: 'Tour Nacional', description: 'Primeira turnê por 15 estados brasileiros com ingressos esgotados.' },
  { year: '2024', title: 'Novo Capítulo', description: 'Preparação para o álbum internacional e novas parcerias.' },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              <img 
                src="https://coreva-normal.trae.ai/api/ide/v1/text_to_image?prompt=Portrait%20of%20a%20cool%20musician%20holding%20a%20guitar%20looking%20away%2C%20studio%20lighting%2C%20dark%20background%2C%20fashion%20photography&image_size=portrait_4_3" 
                alt="Paulo Santana" 
                className="relative rounded-xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">A Jornada</h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Paulo Santana não é apenas um músico; é uma força da natureza. Nascido na encruzilhada entre o ritmo e a poesia, ele traz uma sonoridade única que mistura influências clássicas com batidas modernas. Sua música é um convite para uma viagem interior, onde cada nota conta uma história e cada silêncio grita uma emoção.
              </p>
            </Reveal>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <Reveal key={index} delay={300 + index * 100}>
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300" />
                      <div className="w-0.5 h-full bg-white/10 group-hover:bg-primary/50 transition-colors duration-300" />
                    </div>
                    <div className="pb-8">
                      <span className="text-primary font-mono text-sm">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
