import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks, navigationLinks } from '../data/links';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { forwardRef } from 'react';

const Sidebar = forwardRef(({ isOpen, onClose }, ref) => {
    return (
        <div
            ref={ref}
            className={`fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 z-40 p-6 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <button
                className="text-white text-2xl absolute top-6 right-6"
                onClick={onClose}
                aria-label="Close menu"
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <ul className="mt-12 space-y-4">
                {navigationLinks.map(({ href, label }) => (
                    <li key={href} className="border-b border-white">
                        <Link
                            href={href}
                            className="text-white text-xl font-medium transition-colors duration-300 block hover:text-gray-400"
                            onClick={onClose} // Close sidebar on link click
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Social Media Icons in Sidebar */}
            <div className="mt-auto flex justify-center space-x-4 border-t border-white pt-4">
                {socialLinks.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-400 transition-colors duration-300"
                        aria-label={label}
                        onClick={onClose} // Close sidebar on icon click
                    >
                        <FontAwesomeIcon icon={icon} size="2x" />
                    </a>
                ))}
            </div>
        </div>
    );
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
