import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Reveal } from './Reveal';

const events = [
  {
    day: "15",
    month: "MAR",
    city: "São Paulo, SP",
    venue: "Allianz Parque",
    link: "#"
  },
  {
    day: "22",
    month: "MAR",
    city: "Rio de Janeiro, RJ",
    venue: "Jeunesse Arena",
    link: "#"
  },
  {
    day: "05",
    month: "ABR",
    city: "Belo Horizonte, MG",
    venue: "Mineirão",
    link: "#"
  },
  {
    day: "12",
    month: "ABR",
    city: "Porto Alegre, RS",
    venue: "Auditório Araújo Vianna",
    link: "#"
  }
];

export function Agenda() {
  return (
    <section id="agenda" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Agenda</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group bg-surface hover:bg-surface/80 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="flex flex-col items-center justify-center w-20 md:w-24 bg-background/50 rounded-xl p-4 border border-white/5 group-hover:border-primary/50 transition-colors">
                  <span className="text-3xl md:text-4xl font-bold text-white">{event.day}</span>
                  <span className="text-sm font-medium text-primary tracking-wider">{event.month}</span>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-gray-400">
                    <MapPin size={16} className="text-primary" />
                    <span className="uppercase tracking-wide text-sm">{event.city}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{event.venue}</h3>
                </div>

                <a 
                  href={event.link} 
                  className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 flex items-center gap-2 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Ingressos
                  <ExternalLink size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
