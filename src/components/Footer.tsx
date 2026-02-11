import React from 'react';

export function Footer() {
  return (
    <footer className="bg-surface py-8 border-t border-white/10 pb-28 md:pb-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Pulo Santana. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
