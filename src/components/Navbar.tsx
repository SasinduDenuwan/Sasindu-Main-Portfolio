'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
    const [active, setActive] = useState('Home');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-300 rounded-full px-6 py-3 border 
                ${scrolled
                    ? 'bg-black/40 backdrop-blur-xl border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white/90'
                    : 'bg-transparent border-transparent text-white'}`}
        >
            <div className="flex justify-between items-center w-full">
                <a
                    href="#home"
                    className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('Home');
                    }}
                >
                    Sasindu Denuwan
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-1 relative">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-white group text-white/70"
                        >
                            <span className="relative z-10">{item}</span>
                            {active === item && (
                                <motion.div
                                    layoutId="nav_indicator"
                                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10 z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white/80 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        className="md:hidden mt-4 bg-black/80 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden absolute top-full left-0 w-full"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`px-4 py-3 text-left rounded-xl text-sm font-medium transition-all ${active === item
                                            ? 'bg-white/10 text-white border border-white/5'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}