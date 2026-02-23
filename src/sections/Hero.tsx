'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import { ArrowDown, ArrowRight, Briefcase, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

                {/* Open to Work Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </span>
                        Open to Work
                    </div>
                </motion.div>

                {/* Glowing Avatar */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', duration: 1.2, bounce: 0.4 }}
                    className="relative mb-8 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 scale-125 animate-pulse" />
                    <div className="relative w-36 h-36 bg-black border-2 border-white/20 rounded-full flex items-center justify-center text-white text-5xl font-light overflow-hidden shadow-2xl">
                        {personalInfo.name.charAt(0)}
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4"
                >
                    <span className="text-white/80">Hi, I&apos;m </span>
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                        {personalInfo.name.split(' ')[0]}
                    </span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex items-center gap-3 mb-5"
                >
                    <Briefcase size={20} className="text-white/40" />
                    <h2 className="text-2xl md:text-4xl text-white/60 font-medium">
                        {personalInfo.title}
                    </h2>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="max-w-xl mx-auto text-lg text-white/45 leading-relaxed mb-10"
                >
                    {personalInfo.shortBio}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <a
                        href="#"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.25)]"
                    >
                        Download CV
                        <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                    </a>
                    <a
                        href="#projects"
                        className="flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                    >
                        View Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
}