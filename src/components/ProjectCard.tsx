'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ project }: { project: Project }) {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-[#0f0f13] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
        >
            {/* Glowing effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-colors duration-500 z-0 pointer-events-none" />

            <div className="relative h-64 w-full overflow-hidden bg-black/50 z-10">
                {!imgError ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-b border-white/5">
                        <span className="text-white/20 font-bold text-4xl uppercase tracking-widest">{project.title.substring(0, 2)}</span>
                    </div>
                )}

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all"
                        >
                            <Github size={24} />
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/20 hover:scale-110 transition-all"
                        >
                            <ExternalLink size={24} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col z-10 relative">
                <h3 className="text-2xl font-bold mb-3 text-white/90 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-white/50 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}