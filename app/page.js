import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Link from 'next/link';
import Image from 'next/image';
import Footer from "./components/Footer";
import Contacto from "./contacto/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900">
      <NavBar />
      <Header />

      {/* Sección sobre nosotros */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-gray-800 bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: "url('/nosotros.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-gray-800"></div>
        <div className="relative p-8 md:p-16 max-w-3xl mx-auto text-center bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Somos un lubricentro de autos con servicio de spa para motos ubicados en Escobar. Ofrecemos un servicio personalizado con lavado profundo y detalles para el cuidado de tu moto o auto. Nuestro lugar está especialmente ambientado para brindarte una experiencia única y completa.
          </p>
          <Link
            href="/nosotros"
            className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
          >
            Más Sobre Nosotros
          </Link>
        </div>
      </section>

      {/* Sección Spa & Service */}
      <section className="w-full bg-gray-800 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Imagen */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/spa.png"
              alt="Spa & Service"
              layout="responsive"
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Descripción */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Spa & Service</h2>
            <p className="text-lg text-gray-300 mb-6">
              Entendemos que tu moto es tu compañera de aventuras y debe estar siempre lista para ofrecerte lo mejor. Por eso, nuestro equipo se compromete a brindarte el mejor servicio con la mayor tecnología y calidad. Realizamos diagnósticos precisos, soluciones integrales, y usamos los mejores insumos del mercado. Además, entregamos los elementos reemplazados para asegurar total transparencia y confianza.
            </p>
            <Link
              href="/spa-service"
              className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-gray-600"
            >
              Descubre Nuestro Spa & Service
            </Link>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="w-full py-16 bg-gray-800">
        <Contacto />
      </section>

      <Footer />
    </main>
  );
}
