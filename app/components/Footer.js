import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationLinks, socialLinks } from '../data/links';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 w-full">
            <div className="container mx-auto px-4">
                {/* Sección de Menú */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Enlaces Rápidos</h2>
                        <ul className="space-y-2">
                            {navigationLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href} className="hover:text-gray-400 transition-colors">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Información de Contacto */}
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
                        <p className="text-lg mb-4">Belgrano 457, Escobar, Buenos Aires, Argentina</p>
                        <p className="text-lg mb-4">
                            Email: <a href="mailto:info@tuempresa.com" className="hover:text-gray-400 transition-colors">info@tuempresa.com</a>
                        </p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            {socialLinks.map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 transition-colors"
                                    aria-label={label}
                                >
                                    <FontAwesomeIcon icon={icon} size="2x" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sección de Copyright */}
                <div className="text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Franco Ruggeri. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
