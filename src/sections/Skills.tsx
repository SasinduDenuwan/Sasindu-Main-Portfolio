'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import SkillChip from '@/components/SkillBar';
import { skills, SkillCategory } from '@/data';
import { Cpu, Layers, Server, Wrench } from 'lucide-react';

const CATEGORIES: { label: SkillCategory; icon: React.ElementType; gradient: string }[] = [
    { label: 'All', icon: Layers, gradient: 'from-blue-500 to-purple-500' },
    { label: 'Frontend', icon: Cpu, gradient: 'from-cyan-400 to-blue-500' },
    { label: 'Backend', icon: Server, gradient: 'from-green-400 to-emerald-600' },
    { label: 'Tools', icon: Wrench, gradient: 'from-orange-400 to-rose-500' },
];

export default function Skills() {
    const [active, setActive] = useState<SkillCategory>('All');
    const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active);

    return (
        <SectionWrapper id="skills" className="relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-10 sm:mb-12 md:mb-14"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold">
                    <Cpu size={13} />
                    Expertise
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center">
                    Tech Stack
                </h2>
                <p className="mt-3 text-white/40 text-sm sm:text-base font-light max-w-sm sm:max-w-md text-center px-4 sm:px-0">
                    Technologies I work with daily to build amazing products
                </p>
            </motion.div>

            {/* Filter tabs */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0"
            >
                {CATEGORIES.map(({ label, icon: Icon, gradient }) => {
                    const isActive = active === label;
                    const count = label === 'All' ? skills.length : skills.filter(s => s.category === label).length;
                    return (
                        <motion.button
                            key={label}
                            onClick={() => setActive(label)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.04 }}
                            className={`relative flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 border overflow-hidden ${isActive
                                    ? 'border-transparent text-white shadow-lg'
                                    : 'border-white/10 text-white/50 hover:text-white hover:border-white/20 bg-white/[0.04]'
                                }`}
                        >
                            {isActive && (
                                <motion.span
                                    layoutId="skill-tab-bg"
                                    className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-90`}
                                    style={{ zIndex: -1 }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            <Icon size={13} className="relative z-10 shrink-0" />
                            <span className="relative z-10">{label}</span>
                            <span className={`relative z-10 text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-bold ${isActive ? 'bg-white/25 text-white' : 'bg-white/8 text-white/40'}`}>
                                {count}
                            </span>
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Skills grid */}
            <div className="max-w-5xl mx-auto">
                <motion.div layout className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                transition={{ duration: 0.25, delay: i * 0.02, type: 'spring', stiffness: 200, damping: 20 }}
                            >
                                <SkillChip skill={skill} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}