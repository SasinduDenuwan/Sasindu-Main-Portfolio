'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/data';

export default function SkillBar({ skill }: { skill: Skill }) {
    return (
        <div className="mb-6 group">
            <div className="flex justify-between mb-2">
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors tracking-wide">{skill.name}</span>
                <span className="text-white/50 text-sm font-mono group-hover:text-blue-400 transition-colors">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-3 border border-white/10 overflow-hidden relative">
                {/* Glow effect behind the bar */}
                <motion.div
                    className="absolute top-0 left-0 h-full bg-blue-500/20 blur-md rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                />
                <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 relative z-10"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
}