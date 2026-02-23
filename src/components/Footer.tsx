'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Heart } from 'lucide-react';

interface Props { className?: string }

const iconMap: Record<string, React.ElementType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: MdEmail,
};

const colorMap: Record<string, { text: string; bg: string }> = {
    github: { text: 'hover:text-white', bg: 'hover:border-white/30' },
    linkedin: { text: 'hover:text-[#0A66C2]', bg: 'hover:border-[#0A66C2]/40' },
    twitter: { text: 'hover:text-[#1DA1F2]', bg: 'hover:border-[#1DA1F2]/40' },
    email: { text: 'hover:text-rose-400', bg: 'hover:border-rose-400/40' },
};

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

export default function Footer({ className = '' }: Props) {
    const scrollTo = (id: string) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className={`relative border-t border-white/[0.06] bg-black/70 backdrop-blur-2xl py-10 sm:py-12 md:py-14 ${className}`}>
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-48 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-8">

                    {/* Brand */}
                    <div className="flex flex-col items-center sm:items-start gap-1.5 sm:gap-2">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="text-xl sm:text-2xl font-black tracking-tight cursor-default"
                            style={{
                                background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Sasindu Denuwan
                        </motion.span>
                        <p className="text-white/30 text-xs sm:text-sm">Full Stack Engineer · Sri Lanka</p>
                    </div>

                    {/* Nav links (large screens only) */}
                    <div className="hidden xl:flex gap-0.5">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="px-3 py-1.5 text-xs font-medium text-white/35 hover:text-white/70 transition-colors rounded-lg hover:bg-white/5"
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-2 sm:gap-3">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon] ?? FaGithub;
                            const cls = colorMap[link.icon] ?? colorMap.github;
                            return (
                                <motion.a
                                    key={link.name}
                                    whileHover={{ scale: 1.12, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={`p-3 sm:p-3.5 rounded-xl sm:rounded-2xl glass border border-white/10 text-white/40 ${cls.text} ${cls.bg} hover:bg-white/10 transition-all duration-200`}
                                >
                                    <Icon size={17} />
                                </motion.a>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 text-center sm:text-left">
                    <p className="text-white/25 text-[10px] sm:text-xs">
                        © {new Date().getFullYear()} Sasindu Denuwan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}