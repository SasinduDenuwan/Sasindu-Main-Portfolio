'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data';
import { Download, Code2, Sparkles, Github, Linkedin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const TITLES = [
    'Full Stack Engineer',
    'Spring Boot Developer',
    'MERN Stack Developer',
    'React Native Engineer',
    'AI Enthusiast',
];

function TypewriterText() {
    const [index, setIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [charIdx, setCharIdx] = useState(0);

    useEffect(() => {
        const current = TITLES[index];
        let timeout: ReturnType<typeof setTimeout>;
        if (!deleting) {
            if (charIdx < current.length) {
                timeout = setTimeout(() => setCharIdx((c) => c + 1), 60);
            } else {
                timeout = setTimeout(() => setDeleting(true), 2000);
            }
        } else {
            if (charIdx > 0) {
                timeout = setTimeout(() => setCharIdx((c) => c - 1), 30);
            } else {
                setDeleting(false);
                setIndex((i) => (i + 1) % TITLES.length);
            }
        }
        setDisplayed(current.slice(0, charIdx));
        return () => clearTimeout(timeout);
    }, [charIdx, deleting, index]);

    return (
        <span className="inline-flex items-center gap-1">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {displayed}
            </span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[2px] h-5 sm:h-6 md:h-7 lg:h-8 bg-purple-400 rounded-full"
            />
        </span>
    );
}

function FloatingOrb({ delay, size, x, y, color }: {
    delay: number; size: number; x: string; y: string; color: string;
}) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{ width: size, height: size, left: x, top: y, background: color, filter: 'blur(40px)' }}
            animate={{ y: [0, -20, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
        />
    );
}

function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-white/30 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">Scroll</span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
            >
                <div className="w-1 h-2 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full" />
            </motion.div>
        </motion.div>
    );
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
} as const;

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
} as const;

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Floating orbs */}
            <FloatingOrb delay={0} size={300} x="-5%" y="10%" color="rgba(139,92,246,0.15)" />
            <FloatingOrb delay={2} size={250} x="75%" y="20%" color="rgba(59,130,246,0.12)" />
            <FloatingOrb delay={1} size={200} x="30%" y="70%" color="rgba(99,102,241,0.1)" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mounted ? 'visible' : 'hidden'}
                className="z-10 text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-5 md:gap-6 py-28 sm:py-36"
            >
                {/* Status badge */}
                <motion.div variants={itemVariants}>
                    <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Available for Work
                        <Sparkles size={13} className="text-emerald-300" />
                    </div>
                </motion.div>

                {/* Avatar with orbiting rings */}
                <motion.div variants={itemVariants} className="relative my-2 sm:my-4 group">
                    <div className="absolute inset-[-16px] rounded-full border border-dashed border-purple-500/30 animate-spin-ring" style={{ animationDuration: '12s' }} />
                    <div
                        className="absolute inset-[-8px] rounded-full p-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                            background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)',
                            animation: 'spin-ring 4s linear infinite reverse',
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-[#030305]" />
                    </div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl"
                    />
                    <div
                        className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full shadow-2xl border border-white/10 overflow-hidden"
                    >
                        <Image
                            src="/profile_image.png"
                            alt="Sasindu Denuwan"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-none">
                    <span className="text-white/85">Hi, I&apos;m </span>
                    <span
                        className="inline-block text-glow-purple"
                        style={{
                            background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        {personalInfo.name}
                    </span>
                </motion.h1>

                {/* Typewriter title */}
                <motion.div variants={itemVariants} className="flex items-center gap-2 sm:gap-3">
                    <Code2 size={16} className="text-white/30 shrink-0 hidden sm:block" />
                    <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/60 font-medium flex items-center min-h-[28px] sm:min-h-[36px]">
                        <TypewriterText />
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/40 leading-relaxed font-light px-2 sm:px-0"
                >
                    {personalInfo.shortBio}
                </motion.p>

                {/* CTAs */}
                <motion.div variants={itemVariants} className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 items-center w-full max-w-xs sm:max-w-none sm:w-auto mt-2">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="/Sasindu_Denuwan_Resume.pdf"
                        download="Sasindu_Denuwan_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden group flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-black shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all w-full sm:w-auto"
                        style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)' }}
                    >
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                        <Download size={16} className="group-hover:translate-y-0.5 transition-transform shrink-0" />
                        Download CV
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#projects"
                        className="flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 glass border border-white/10 text-white rounded-full font-medium text-sm sm:text-base hover:border-purple-500/40 hover:bg-white/10 transition-all w-full sm:w-auto"
                    >
                        View Projects
                        <span className="text-white/40">→</span>
                    </motion.a>
                </motion.div>

                {/* Social links */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-4 mt-1">
                    <span className="text-white/25 text-[10px] sm:text-xs tracking-widest uppercase hidden sm:block">Find me on</span>
                    <div className="flex gap-2 sm:gap-3">
                        {[
                            { href: 'https://github.com/SasinduDenuwan', Icon: FaGithub, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/sasindu-denuwan/', Icon: FaLinkedin, label: 'LinkedIn' },
                        ].map(({ href, Icon, label }) => (
                            <motion.a
                                key={label}
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-2.5 sm:p-3 glass border border-white/10 rounded-xl sm:rounded-2xl text-white/50 hover:text-white hover:border-white/25 transition-all"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <ScrollIndicator />
        </section>
    );
}