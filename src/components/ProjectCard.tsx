'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/data';
import * as Si from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

type SiKeys = keyof typeof Si;

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
    'HTML5': { icon: 'SiHtml5', color: '#E34F26' },
    'CSS3': { icon: 'SiCss3', color: '#1572B6' },
    'Bootstrap': { icon: 'SiBootstrap', color: '#7952B3' },
    'JavaScript': { icon: 'SiJavascript', color: '#F7DF1E' },
    'Spring Boot': { icon: 'SiSpringboot', color: '#6DB33F' },
    'Spring Security': { icon: 'SiSpringsecurity', color: '#6DB33F' },
    'MySQL': { icon: 'SiMysql', color: '#4479A1' },
    'Postman': { icon: 'SiPostman', color: '#FF6C37' },
    'Express.js': { icon: 'SiExpress', color: '#ffffff' },
    'Vite': { icon: 'SiVite', color: '#646CFF' },
    'Git': { icon: 'SiGit', color: '#F05032' },
    'Vercel': { icon: 'SiVercel', color: '#ffffff' },
    'Framer Motion': { icon: 'SiFramer', color: '#0055FF' },
    'React Native': { icon: 'SiReact', color: '#61DAFB' },
    'Expo': { icon: 'SiExpo', color: '#ffffff' },
    'NativeWind': { icon: 'SiTailwindcss', color: '#06B6D4' },
    'Firebase': { icon: 'SiFirebase', color: '#FFCA28' },
    'Cloudinary': { icon: 'SiCloudinary', color: '#3448C5' },
};

const CARD_GRADIENTS = [
    { from: 'rgba(139,92,246,0.15)', to: 'rgba(59,130,246,0.08)', border: 'rgba(139,92,246,0.3)', num: 'text-purple-400' },
    { from: 'rgba(59,130,246,0.15)', to: 'rgba(99,102,241,0.08)', border: 'rgba(59,130,246,0.3)', num: 'text-blue-400' },
    { from: 'rgba(16,185,129,0.12)', to: 'rgba(59,130,246,0.06)', border: 'rgba(16,185,129,0.25)', num: 'text-emerald-400' },
    { from: 'rgba(245,158,11,0.12)', to: 'rgba(239,68,68,0.06)', border: 'rgba(245,158,11,0.25)', num: 'text-amber-400' },
    { from: 'rgba(236,72,153,0.12)', to: 'rgba(139,92,246,0.06)', border: 'rgba(236,72,153,0.25)', num: 'text-pink-400' },
];

function TechTag({ tech }: { tech: string }) {
    const mapping = TECH_ICON_MAP[tech];
    const IconComp = mapping ? (Si[mapping.icon] as React.ElementType) : null;
    return (
        <motion.span
            whileHover={{ scale: 1.08, y: -2 }}
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white/65 text-[11px] px-2.5 py-1.5 rounded-full font-medium hover:border-white/20 hover:text-white transition-all cursor-default"
        >
            {IconComp && <IconComp style={{ color: mapping!.color }} className="text-sm shrink-0" />}
            {tech}
        </motion.span>
    );
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const [hovered, setHovered] = useState(false);
    const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ y: -10, scale: 1.015 }}
            className="group relative rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer"
            style={{
                background: hovered
                    ? `radial-gradient(ellipse at top left, ${gradient.from}, rgba(15,15,20,0.98))`
                    : 'rgba(12, 12, 18, 0.95)',
                border: hovered
                    ? `1px solid ${gradient.border}`
                    : '1px solid rgba(255,255,255,0.08)',
                boxShadow: hovered
                    ? `0 25px 60px rgba(0,0,0,0.5), 0 0 40px ${gradient.from}`
                    : '0 4px 20px rgba(0,0,0,0.4)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
        >
            {/* Shimmer sweep on hover */}
            <motion.div
                animate={{ x: hovered ? '200%' : '-100%' }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none"
            />

            {/* Card number badge */}
            <div className="absolute top-5 right-5 z-10">
                <div className={`text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity duration-300 ${gradient.num} select-none font-mono`}>
                    {String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Content */}
            <div className="p-7 flex-1 flex flex-col z-10 relative">
                {/* Title */}
                <h3 className="text-lg font-bold mb-3 text-white/90 group-hover:text-white transition-colors pr-10 leading-snug">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/45 mb-5 flex-1 text-sm leading-relaxed text-justify group-hover:text-white/60 transition-colors">
                    {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                    {project.tech.slice(0, 8).map((tech) => (
                        <TechTag key={tech} tech={tech} />
                    ))}
                    {project.tech.length > 8 && (
                        <span className="flex items-center bg-white/5 border border-white/10 text-white/40 text-[11px] px-2.5 py-1.5 rounded-full font-medium">
                            +{project.tech.length - 8} more
                        </span>
                    )}
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                    <div className="flex gap-3 pt-4 border-t border-white/5">
                        {project.github && (
                            <motion.a
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 glass border border-white/10 rounded-xl text-white/65 text-xs font-semibold hover:text-white hover:border-white/25 transition-all"
                            >
                                <FaGithub size={15} /> GitHub
                            </motion.a>
                        )}
                        {project.live && project.live !== '#' && (
                            <motion.a
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-black transition-all"
                                style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)' }}
                            >
                                <ArrowUpRight size={14} /> Live Demo
                            </motion.a>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}