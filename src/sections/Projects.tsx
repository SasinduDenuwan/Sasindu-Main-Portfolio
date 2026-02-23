'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { Layers, Github, Sparkles } from 'lucide-react';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
} as const;

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="relative z-10 w-full">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold">
                    <Layers size={13} />
                    Portfolio
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center leading-tight">
                    Featured Projects
                </h2>
                <p className="mt-3 text-white/40 text-sm sm:text-base font-light max-w-xs sm:max-w-md text-center px-4 sm:px-0">
                    A curated selection of my best work — from full-stack web apps to mobile experiences
                </p>

                {/* Decorative dots */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex gap-1.5 mt-4"
                >
                    {['bg-purple-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-pink-500'].map((c, i) => (
                        <motion.div
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full ${c}`}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Cards grid with stagger container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto"
            >
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center mt-10 sm:mt-12 md:mt-14"
            >
                <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://github.com/SasinduDenuwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 glass border border-white/10 text-white/60 rounded-full text-xs sm:text-sm font-semibold hover:text-white hover:border-white/25 transition-all"
                >
                    <Github size={15} className="group-hover:rotate-12 transition-transform" />
                    View All on GitHub
                    <Sparkles size={13} className="text-purple-400/70" />
                </motion.a>
            </motion.div>
        </SectionWrapper>
    );
}