'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { Layers, Github } from 'lucide-react';

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-400 text-xs sm:text-sm font-semibold">
                    <Layers size={13} />
                    Portfolio
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center leading-tight px-2">
                    Featured Projects
                </h2>
                <p className="mt-3 text-white/40 text-sm sm:text-base font-light max-w-sm sm:max-w-md text-center px-4 sm:px-0">
                    A selection of my best work — from web apps to mobile experiences
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full max-w-5xl mx-auto">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center mt-10 sm:mt-12"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://github.com/SasinduDenuwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 glass border border-white/10 text-white/70 rounded-full text-xs sm:text-sm font-semibold hover:text-white hover:border-white/25 transition-all"
                >
                    <Github size={15} />
                    View All on GitHub
                </motion.a>
            </motion.div>
        </SectionWrapper>
    );
}