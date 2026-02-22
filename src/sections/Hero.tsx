// src/sections/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import AnimatedText from '@/components/AnimatedText';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="text-center px-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    {/* Avatar/image placeholder */}
                    <div className="w-32 h-32 mx-auto bg-blue-500 rounded-full flex items-center justify-center text-white text-4xl">
                        {personalInfo.name.charAt(0)}
                    </div>
                </motion.div>
                <AnimatedText
                    text={personalInfo.name}
                    className="text-5xl md:text-6xl font-bold mb-4"
                />
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
                >
                    {personalInfo.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-400"
                >
                    {personalInfo.shortBio}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8"
                >
                    <a
                        href="#contact"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        Get in touch
                    </a>
                </motion.div>
            </div>
        </section>
    );
}