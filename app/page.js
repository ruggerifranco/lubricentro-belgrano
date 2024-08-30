import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen bg-gray-900">
      <NavBar />
      <Header />

      {/* Sección sobre nosotros */}
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-800 bg-cover bg-center transition-all duration-500 ease-in-out" style={{ backgroundImage: "url('/nosotros.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-gray-800"></div>
        <div className="relative p-8 md:p-16 max-w-3xl mx-auto text-center bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nosotros</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Somos un lubricentro de autos con servicio de spa para motos ubicados en Escobar. Ofrecemos un servicio personalizado con lavado profundo y detalles para el cuidado de tu moto o auto. Nuestro lugar está especialmente ambientado para brindarte una experiencia única y completa.
          </p>
          <Link href="/nosotros" className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-gray-600">
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
            <Link href="/spa-service" className="inline-block bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-gray-600">
              Descubre Nuestro Spa & Service
            </Link>
          </div>
        </div>
      </section>
      {/* Sección de Contacto */}
      <section className="w-full py-16 bg-gray-800" >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">Contáctanos</h1>

          {/* Información de Contacto */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Nuestra Ubicación</h2>
              <p className="text-lg text-gray-300 mb-4">
                Belgrano 457, Escobar, Buenos Aires, Argentina
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Email: <a href="mailto:info@tuempresa.com" className="text-white hover:text-gray-400 transition-colors">info@tuempresa.com</a>
              </p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
                <a href="mailto:info@tuempresa.com" className="text-white hover:text-gray-400 transition-colors">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </div>
            </div>


            {/* Mapa */}
            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.281636794739!2d-58.709425684834465!3d-34.21051483062043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb74346a34a87%3A0x1b25145f13d2e5f7!2sBelgrano%20457%2C%20Escobar%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1634109813490!5m2!1ses!2sus"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
