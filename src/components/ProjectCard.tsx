'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/data';
import * as Si from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

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

// Per-card subtle accent colors (only for number badge & accent line — not full UI)
const CARD_ACCENTS = [
    { color: '#a855f7', glow: 'rgba(168,85,247,0.12)' },
    { color: '#60a5fa', glow: 'rgba(96,165,250,0.12)' },
    { color: '#34d399', glow: 'rgba(52,211,153,0.1)' },
    { color: '#fbbf24', glow: 'rgba(251,191,36,0.1)' },
    { color: '#f472b6', glow: 'rgba(244,114,182,0.1)' },
];

function TechTag({ tech, delay }: { tech: string; delay: number }) {
    const mapping = TECH_ICON_MAP[tech];
    const IconComp = mapping ? (Si[mapping.icon] as React.ElementType) : null;
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.75, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay, duration: 0.28, type: 'spring', stiffness: 240, damping: 20 }}
            className="flex items-center gap-1 sm:gap-1.5 bg-white/[0.05] border border-white/[0.08] text-white/55 text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full font-medium cursor-default hover:border-white/20 hover:text-white/80 transition-colors"
        >
            {IconComp && <IconComp style={{ color: mapping!.color }} className="text-xs shrink-0" />}
            {tech}
        </motion.span>
    );
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
    const accent = CARD_ACCENTS[index % CARD_ACCENTS.length];
    const cardRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // Mouse tracking for subtle 3D tilt
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const rotX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 180, damping: 28 });
    const rotY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 180, damping: 28 });

    // Spotlight (percentage position)
    const spotX = useSpring(useTransform(mx, [0, 1], [0, 100]), { stiffness: 180, damping: 28 });
    const spotY = useSpring(useTransform(my, [0, 1], [0, 100]), { stiffness: 180, damping: 28 });

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        mx.set((e.clientX - rect.left) / rect.width);
        my.set((e.clientY - rect.top) / rect.height);
    }, [mx, my]);

    const handleMouseLeave = useCallback(() => {
        mx.set(0.5);
        my.set(0.5);
        setHovered(false);
    }, [mx, my]);

    const maxTags = 6;
    const visibleTech = project.tech.slice(0, maxTags);
    const extraCount = project.tech.length - maxTags;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="group h-full"
            style={{ perspective: 900 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX: rotX,
                    rotateY: rotY,
                    transformStyle: 'preserve-3d',
                    // Subtle border and background, no big color blasts
                    background: hovered ? 'rgba(18,18,28,0.97)' : 'rgba(12,12,20,0.96)',
                    border: hovered ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(255,255,255,0.07)',
                    boxShadow: hovered
                        ? '0 24px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)'
                        : '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)',
                    transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
                }}
                className="relative flex flex-col h-full rounded-3xl overflow-hidden"
            >
                {/* Entry shimmer sweep */}
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ delay: index * 0.12 + 0.35, duration: 0.85, ease: 'easeInOut' }}
                    className="absolute inset-0 skew-x-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent pointer-events-none z-20"
                />

                {/* Cursor spotlight — very subtle */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none z-0"
                    style={{
                        background: `radial-gradient(circle 180px at ${spotX}% ${spotY}%, ${accent.glow} 0%, transparent 70%)`,
                        opacity: hovered ? 1 : 0,
                        transition: 'opacity 0.3s',
                    }}
                />

                {/* Top accent line — slides in on hover */}
                <motion.div
                    animate={hovered ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl origin-left pointer-events-none"
                    style={{ background: `linear-gradient(90deg, ${accent.color}, transparent)` }}
                />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex flex-col h-full p-5 sm:p-6 md:p-7 gap-4 sm:gap-5">

                    {/* Number + title row */}
                    <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 + 0.3, duration: 0.4 }}
                                className="flex items-center gap-1.5 mb-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest"
                                style={{ color: accent.color }}
                            >
                                <span
                                    className="inline-flex w-5 h-5 rounded-full items-center justify-center text-[9px] font-black shrink-0"
                                    style={{ background: `${accent.color}20`, border: `1px solid ${accent.color}40` }}
                                >
                                    {index + 1}
                                </span>
                                Project
                            </motion.div>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white/85 group-hover:text-white transition-colors leading-snug">
                                {project.title}
                            </h3>
                        </div>

                        {/* External link icon (top-right) */}
                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-30 shrink-0 mt-1 p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white/40 hover:text-white/80 hover:bg-white/[0.10] hover:border-white/20 transition-all"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={14} />
                            </a>
                        )}
                    </div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 + 0.35, duration: 0.5, ease: 'easeOut' }}
                        className="h-px origin-left"
                        style={{ background: `linear-gradient(90deg, ${accent.color}40, transparent)` }}
                    />

                    {/* Description */}
                    <p className="text-white/45 group-hover:text-white/60 text-xs sm:text-sm leading-relaxed flex-1 transition-colors">
                        {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {visibleTech.map((tech, i) => (
                            <TechTag
                                key={tech}
                                tech={tech}
                                delay={index * 0.12 + 0.38 + i * 0.035}
                            />
                        ))}
                        {extraCount > 0 && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.75 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.12 + 0.38 + maxTags * 0.035 }}
                                className="flex items-center bg-white/[0.04] border border-white/[0.07] text-white/30 text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full font-medium"
                            >
                                +{extraCount}
                            </motion.span>
                        )}
                    </div>

                    {/* Action buttons */}
                    <div className="relative z-30 flex flex-wrap gap-2 sm:gap-3 pt-3 border-t border-white/[0.05]">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white/60 text-xs sm:text-[13px] font-semibold hover:text-white hover:border-white/25 hover:bg-white/[0.09] transition-all cursor-pointer select-none"
                            >
                                <FaGithub size={14} />
                                GitHub
                            </a>
                        )}
                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="relative overflow-hidden flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-[13px] font-bold text-black transition-all cursor-pointer select-none"
                                style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)' }}
                            >
                                <ArrowUpRight size={14} className="relative z-10" />
                                <span className="relative z-10">Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}