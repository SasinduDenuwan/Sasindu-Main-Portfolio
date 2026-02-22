'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import SkillChip from '@/components/SkillBar';
import { skills, SkillCategory } from '@/data';
import { Cpu } from 'lucide-react';

const CATEGORIES: SkillCategory[] = ['All', 'Frontend', 'Backend', 'Tools'];

const categoryColors: Record<SkillCategory, string> = {
    All: 'from-blue-500 to-purple-500',
    Frontend: 'from-cyan-400 to-blue-500',
    Backend: 'from-green-400 to-emerald-600',
    Tools: 'from-orange-400 to-rose-500',
};

export default function Skills() {
    const [active, setActive] = useState<SkillCategory>('All');

    const filtered = active === 'All'
        ? skills
        : skills.filter((s) => s.category === active);

    return (
        <SectionWrapper id="skills" className="relative z-10">
            {/* Section header */}
            <div className="flex flex-col items-center mb-12">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                    <Cpu size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">
                    Tech Stack
                </h2>
                <p className="mt-3 text-white/40 text-base font-light max-w-md text-center">
                    Technologies I work with daily to build amazing products
                </p>
            </div>

            {/* Category filter tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
                {CATEGORIES.map((cat) => {
                    const isActive = active === cat;
                    return (
                        <motion.button
                            key={cat}
                            onClick={() => setActive(cat)}
                            whileTap={{ scale: 0.95 }}
                            className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                                    ? 'border-transparent text-white shadow-lg'
                                    : 'border-white/10 text-white/50 hover:text-white hover:border-white/25 bg-white/5'
                                }`}
                        >
                            {/* Active gradient background */}
                            {isActive && (
                                <motion.span
                                    layoutId="skill-tab-bg"
                                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryColors[cat]}`}
                                    style={{ zIndex: -1 }}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                            {cat}
                            {/* Count badge */}
                            <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-white/10'}`}>
                                {cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* Skills grid */}
            <div className="max-w-5xl mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2, delay: i * 0.03 }}
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