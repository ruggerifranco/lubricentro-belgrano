'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { navigationLinks, socialLinks } from '../data/links';
import Sidebar from './SideBar';

const NavBar = () => {
    const { asPath } = useRouter();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar visibility
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    // Close sidebar when clicking outside of it
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

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

                {/* Mobile Menu Button */}
                <button
                    className="block lg:hidden text-white text-2xl focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 items-center">
                    {navigationLinks.map(({ href, label }, index) => (
                        <>
                            <Link
                                key={href}
                                href={href}
                                className={`text-white text-lg font-medium transition-colors duration-300 ${asPath === href ? 'underline' : 'hover:text-gray-400'}`}
                            >
                                {label}
                            </Link>
                            {/* Add separator only between items */}
                            {(index < navigationLinks.length - 1) && (
                                <div className="w-px h-6 bg-white" />
                            )}
                        </>
                    ))}
                </div>

                {/* Social Media Icons */}
                <div className="hidden lg:flex space-x-4">
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

            {/* Sidebar Menu for Mobile */}
            <Sidebar ref={sidebarRef} isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        </nav>
    );
};

export default NavBar;
