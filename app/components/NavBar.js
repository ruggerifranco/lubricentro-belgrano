'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import { navigationLinks, socialLinks } from '../data/links'; // Importa los enlaces
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
    const { asPath } = useRouter();

    return (
        <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 z-50 p-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="text-3xl font-bold text-white hover:text-gray-300">
                        <Image 
                            src={'/logo.png'}
                            width={70}
                            height={70}
                            alt="Logo"
                        />
                    </Link>
                </div>

                {/* Menu */}
                <div className="flex space-x-6 items-center">
                    {navigationLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-white text-lg font-medium transition-colors duration-300 ${asPath === href ? 'underline' : 'hover:text-gray-400'}`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    {socialLinks.map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 transition-colors duration-300"
                            aria-label={label}
                        >
                            <FontAwesomeIcon icon={icon} size="lg" />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
