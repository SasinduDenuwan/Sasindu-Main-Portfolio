'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '@/data';
import { ArrowDown, Download, Sparkles, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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
        <span className="inline-flex items-center">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {displayed}
            </span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1 inline-block w-0.5 h-8 md:h-10 bg-purple-400 rounded-full"
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
            animate={{
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
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
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-white/30 text-xs tracking-widest uppercase font-semibold">Scroll</span>
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
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Floating background orbs */}
            <FloatingOrb delay={0} size={300} x="-5%" y="10%" color="rgba(139,92,246,0.15)" />
            <FloatingOrb delay={2} size={250} x="75%" y="20%" color="rgba(59,130,246,0.12)" />
            <FloatingOrb delay={1} size={200} x="30%" y="70%" color="rgba(99,102,241,0.1)" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={mounted ? 'visible' : 'hidden'}
                className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
            >
                {/* Status badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Available for Work
                        <Sparkles size={14} className="text-emerald-300" />
                    </div>
                </motion.div>

                {/* Glowing avatar with orbiting ring */}
                <motion.div variants={itemVariants} className="relative mb-10 group">
                    {/* Outer spinning ring */}
                    <div className="absolute inset-[-16px] rounded-full border border-dashed border-purple-500/30 animate-spin-ring" style={{ animationDuration: '12s' }} />

                    {/* Mid gradient ring */}
                    <div className="absolute inset-[-8px] rounded-full p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                        style={{ animation: 'spin-ring 4s linear infinite reverse' }}
                    >
                        <div className="w-full h-full rounded-full bg-[#030305]" />
                    </div>

                    {/* Glow */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl"
                    />

                    {/* Avatar itself */}
                    <div className="relative w-36 h-36 rounded-full flex items-center justify-center text-white text-5xl font-bold overflow-hidden shadow-2xl border border-white/10"
                        style={{ background: 'linear-gradient(135deg, #1a0533 0%, #0a0520 50%, #030010 100%)' }}>
                        <span className="shimmer-text text-5xl font-bold">
                            {personalInfo.name.charAt(0)}
                        </span>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
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

                {/* Animated typewriter title */}
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                    <Code2 size={20} className="text-white/30 shrink-0" />
                    <h2 className="text-xl md:text-3xl text-white/60 font-medium h-10 flex items-center">
                        <TypewriterText />
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-base md:text-lg text-white/40 leading-relaxed mb-10 font-light"
                >
                    {personalInfo.shortBio}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center mb-14">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#"
                        className="relative overflow-hidden group flex items-center gap-2 px-8 py-4 rounded-full font-bold text-black shadow-[0_0_30px_rgba(168,85,247,0.35)] transition-all"
                        style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)' }}
                    >
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                        Download CV
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        href="#projects"
                        className="flex items-center gap-2 px-8 py-4 glass border border-white/10 text-white rounded-full font-medium hover:border-purple-500/40 hover:bg-white/10 transition-all"
                    >
                        View Projects
                        <ArrowDown size={16} className="rotate-[-90deg]" />
                    </motion.a>
                </motion.div>

                {/* Social quick-links */}
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <span className="text-white/25 text-xs tracking-widest uppercase">Find me on</span>
                    <div className="flex gap-3">
                        {[
                            { href: 'https://github.com/SasinduDenuwan', Icon: FaGithub, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/sasindu-denuwan/', Icon: FaLinkedin, label: 'LinkedIn', color: '#0A66C2' },
                        ].map(({ href, Icon, label, color }) => (
                            <motion.a
                                key={label}
                                whileHover={{ scale: 1.15, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="p-3 glass border border-white/10 rounded-2xl text-white/50 hover:text-white hover:border-white/25 transition-all"
                                style={{ '--hover-color': color } as React.CSSProperties}
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            <ScrollIndicator />
        </section>
    );
}