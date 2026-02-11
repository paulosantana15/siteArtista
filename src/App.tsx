import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Music } from './components/Music';
import { Videos } from './components/Videos';
import { Agenda } from './components/Agenda';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Player } from './components/Player';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="bg-background min-h-screen text-gray-100 selection:bg-primary selection:text-white">
      <Header />
      <Hero />
      <About />
      <Music />
      <Videos />
      <Agenda />
      <Gallery />
      <Contact />
      <Footer />
      <Player />
    </main>
  );
}

export default App;
