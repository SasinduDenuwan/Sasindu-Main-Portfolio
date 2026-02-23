'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Navbar() {
    const [active, setActive] = useState('Home');
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActive(id);
            setIsOpen(false);
        }
    };

    return (
        <>
            {/* Scroll progress bar */}
            <motion.div
                className="fixed top-0 left-0 h-[2px] z-[60] origin-left"
                style={{
                    width: `${scrollProgress}%`,
                    background: 'linear-gradient(90deg, #a855f7, #3b82f6, #6366f1)',
                }}
            />

            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 transition-all duration-500 rounded-full px-6 py-3 border
                    ${scrolled
                        ? 'bg-black/50 backdrop-blur-2xl border-white/10 shadow-[0_0_30px_rgba(139,92,246,0.08)]'
                        : 'bg-transparent border-transparent'
                    }`}
            >
                <div className="flex justify-between items-center w-full">
                    <motion.a
                        href="#home"
                        whileHover={{ scale: 1.03 }}
                        className="text-xl font-black tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                        onClick={(e) => { e.preventDefault(); scrollToSection('Home'); }}
                    >
                        Sasindu<span className="text-white/30">.</span>
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-1 relative">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="relative px-4 py-2 text-sm font-medium transition-colors hover:text-white text-white/60 rounded-full"
                            >
                                <span className="relative z-10">{item}</span>
                                {active === item && (
                                    <motion.div
                                        layoutId="nav_indicator"
                                        className="absolute inset-0 rounded-full z-0 border border-purple-500/30"
                                        style={{ background: 'rgba(139,92,246,0.12)' }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Hire Me Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => scrollToSection('Contact')}
                        className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold text-black transition-all relative overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8)' }}
                    >
                        <div className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                        Hire Me
                    </motion.button>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden p-2 text-white/80 hover:text-white rounded-xl border border-white/10 bg-white/5"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? 'x' : 'menu'}
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </motion.div>
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden absolute top-full left-0 w-full"
                        >
                            <div className="flex flex-col p-4 gap-1">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.06 }}
                                        onClick={() => scrollToSection(item)}
                                        className={`px-5 py-3 text-left rounded-2xl text-sm font-medium transition-all ${active === item
                                            ? 'bg-purple-500/15 text-white border border-purple-500/25'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}