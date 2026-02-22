'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data';
import * as Si from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';

type SiKeys = keyof typeof Si;

// Map common tech names to react-icons/si icon names
const TECH_ICON_MAP: Record<string, { icon: SiKeys; color: string }> = {
    'Next.js': { icon: 'SiNextdotjs', color: '#fff' },
    'Tailwind': { icon: 'SiTailwindcss', color: '#06B6D4' },
    'OpenAI': { icon: 'SiOpenai', color: '#74aa9c' },
    'Prisma': { icon: 'SiPrisma', color: '#2D3748' },
    'React': { icon: 'SiReact', color: '#61DAFB' },
    'Redux': { icon: 'SiRedux', color: '#764ABC' },
    'Node.js': { icon: 'SiNodedotjs', color: '#339933' },
    'MongoDB': { icon: 'SiMongodb', color: '#47A248' },
    'TypeScript': { icon: 'SiTypescript', color: '#3178C6' },
    'GraphQL': { icon: 'SiGraphql', color: '#E10098' },
    'Docker': { icon: 'SiDocker', color: '#2496ED' },
};

function TechTag({ tech }: { tech: string }) {
    const mapping = TECH_ICON_MAP[tech];
    const IconComp = mapping ? (Si[mapping.icon] as React.ElementType) : null;
    return (
        <span
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full font-medium tracking-wide hover:border-white/20 hover:text-white transition-all"
        >
            {IconComp && <IconComp style={{ color: mapping!.color }} className="text-sm shrink-0" />}
            {tech}
        </span>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const [imgError, setImgError] = useState(false);

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-[#0f0f14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
        >
            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-indigo-500/10 transition-all duration-500 z-0 pointer-events-none" />

            {/* Image */}
            <div className="relative h-56 w-full overflow-hidden bg-black/50 z-10">
                {!imgError ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-b border-white/5">
                        <span className="text-white/10 font-black text-6xl uppercase tracking-widest">{project.title.substring(0, 2)}</span>
                    </div>
                )}

                {/* Overlay links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/25 hover:scale-110 transition-all">
                            <FaGithub size={24} />
                        </a>
                    )}
                    {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-white/10 border border-white/20 rounded-full text-white hover:bg-white/25 hover:scale-110 transition-all">
                            <ExternalLink size={24} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex-1 flex flex-col z-10 relative">
                <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-white/50 mb-5 flex-1 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech) => (
                        <TechTag key={tech} tech={tech} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}