'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { Layers, Sparkles } from 'lucide-react';

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
                    <Layers size={14} />
                    Portfolio
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <p className="mt-3 text-white/40 text-base font-light max-w-md text-center">
                    A selection of my best work — from web apps to mobile experiences
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                {projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex justify-center mt-12"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    href="https://github.com/SasinduDenuwan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-3.5 glass border border-white/10 text-white/70 rounded-full text-sm font-semibold hover:text-white hover:border-white/25 transition-all"
                >
                    <Sparkles size={16} />
                    View All on GitHub
                </motion.a>
            </motion.div>
        </SectionWrapper>
    );
}