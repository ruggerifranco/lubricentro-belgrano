import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contacto = () => {
  return (
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
  )
}

export default Contacto