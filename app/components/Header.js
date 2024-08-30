import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/header.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white space-y-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative">
            <span className="relative z-10">Lubricentro & Spa Belgrano</span>
            <span className="absolute inset-0 bg-gray-800 opacity-40 rounded-lg"></span>
          </h1>
          <p className="text-lg md:text-xl mb-6 relative">
            <span className="relative z-10">Explora nuestras ofertas y servicios</span>
            <span className="absolute inset-0 bg-gray-800 opacity-40 rounded-lg"></span>
          </p>
        </div>
        <div className="flex space-x-4">
          <Link href="/lubricentro" className="px-6 py-3 text-lg font-semibold text-white bg-gray-800 rounded-lg border-2 border-gray-600 shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105">

              Lubricentro
           
          </Link>
          <Link href="/spa-service" className="px-6 py-3 text-lg font-semibold text-white bg-gray-800 rounded-lg border-2 border-gray-600 shadow-md hover:bg-gray-700 transition-transform transform hover:scale-105">
  
              Spa & Service
       
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
