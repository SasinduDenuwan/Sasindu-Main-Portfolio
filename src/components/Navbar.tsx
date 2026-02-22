
// src/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
    const [active, setActive] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            // Update active section based on scroll position (simplified)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-colors ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold">
                    Alex Morgan
                </a>
                <div className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`hover:text-blue-600 transition ${active === item ? 'text-blue-600' : ''
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
                {/* Mobile menu button (simplified) */}
            </div>
        </motion.nav>
    );
}