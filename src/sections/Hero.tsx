'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

                {/* Glowing Avatar Container */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1, bounce: 0.5 }}
                    className="relative mb-8 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-pulse" />
                    <div className="relative w-36 h-36 bg-black border border-white/20 rounded-full flex items-center justify-center text-white text-5xl font-light overflow-hidden shadow-2xl">
                        {/* If avatar image exists: <img src={personalInfo.avatar} alt="avatar" className="w-full h-full object-cover" /> */}
                        {personalInfo.name.charAt(0)}
                    </div>
                </motion.div>

                {/* Name Typography */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-4">
                        <span className="text-white">Hi, I'm </span>
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                            {personalInfo.name.split(' ')[0]}
                        </span>
                    </h1>
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-4xl text-white/70 font-medium mb-6 bg-gradient-to-r from-white/80 to-white/40 bg-clip-text text-transparent"
                >
                    {personalInfo.title}
                </motion.h2>

                {/* Bio text */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="max-w-xl mx-auto text-lg text-white/50 leading-relaxed mb-10"
                >
                    {personalInfo.shortBio}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <a
                        href="#contact"
                        className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Let's Talk
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                    >
                        View Work
                        <Download size={18} className="text-white/50 group-hover:text-white transition-colors" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}