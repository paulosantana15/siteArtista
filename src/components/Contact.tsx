import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    // Simulate submit
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="contato" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contato</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Reveal delay={200}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em contato</h3>
              <p className="text-gray-400 mb-8">
                Para contratação de shows, imprensa ou parcerias, envie uma mensagem ou utilize os canais oficiais.
              </p>
              
              <div className="space-y-4 mb-8">
                <a href="mailto:paulosantanaoficial2021@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors">
                  <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/10">
                    <Mail size={20} />
                  </div>
                  <span>paulosantanaoficial2021@gmail.com</span>
                </a>
              </div>

              <div className="flex gap-4">
                {[Instagram, Twitter, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Seu Nome"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Mensagem"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Enviar Mensagem</span>
                <Send size={18} />
              </button>

              {status === 'success' && (
                <p className="text-green-500 text-center animate-fade-in">Mensagem enviada com sucesso!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center animate-fade-in">Por favor, preencha todos os campos.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
