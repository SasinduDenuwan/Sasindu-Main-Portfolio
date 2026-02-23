'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data';
import * as Si from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink } from 'lucide-react';

type SiKeys = keyof typeof Si;

// Map common tech names to react-icons/si icon names
const TECH_ICON_MAP: Record<string, { icon: SiKeys; color: string }> = {
    // Existing
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
    // EventGO stack
    'HTML5': { icon: 'SiHtml5', color: '#E34F26' },
    'CSS3': { icon: 'SiCss3', color: '#1572B6' },
    'Bootstrap': { icon: 'SiBootstrap', color: '#7952B3' },
    'JavaScript': { icon: 'SiJavascript', color: '#F7DF1E' },
    'Spring Boot': { icon: 'SiSpringboot', color: '#6DB33F' },
    'Spring Security': { icon: 'SiSpringsecurity', color: '#6DB33F' },
    'MySQL': { icon: 'SiMysql', color: '#4479A1' },
    'Postman': { icon: 'SiPostman', color: '#FF6C37' },
    // NovaEdu stack additions
    'Express.js': { icon: 'SiExpress', color: '#ffffff' },
    'Vite': { icon: 'SiVite', color: '#646CFF' },
    'Git': { icon: 'SiGit', color: '#F05032' },
    'Vercel': { icon: 'SiVercel', color: '#ffffff' },
    'Framer Motion': { icon: 'SiFramer', color: '#0055FF' },
    // Beatify stack additions
    'React Native': { icon: 'SiReact', color: '#61DAFB' },
    'Expo': { icon: 'SiExpo', color: '#000020' },
    'NativeWind': { icon: 'SiTailwindcss', color: '#06B6D4' },
    'Firebase': { icon: 'SiFirebase', color: '#FFCA28' },
    'Cloudinary': { icon: 'SiCloudinary', color: '#3448C5' },
    // Expo Router — no Si icon; renders as text-only chip.
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
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="group relative bg-[#0f0f14] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
        >
            {/* hover glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-indigo-500/10 transition-all duration-500 z-0 pointer-events-none" />

            {/* Content */}
            <div className="p-7 flex-1 flex flex-col z-10 relative">
                <h3 className="text-xl font-bold mb-2 text-white/90 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-white/50 mb-5 flex-1 text-sm leading-relaxed text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto mb-5">
                    {project.tech.map((tech) => (
                        <TechTag key={tech} tech={tech} />
                    ))}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                    <div className="flex gap-3 mt-5">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                                <FaGithub size={14} /> GitHub
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                                <ExternalLink size={14} /> Live Demo
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}