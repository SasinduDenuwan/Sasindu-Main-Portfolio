'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/data';
import * as Si from 'react-icons/si';

type SiKeys = keyof typeof Si;

export default function SkillChip({ skill, index }: { skill: Skill; index: number }) {
    const IconComponent = Si[skill.icon as SiKeys] as React.ElementType;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.06, y: -4 }}
            className="group relative flex flex-col items-center gap-3 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default overflow-hidden"
        >
            {/* Glow behind icon on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl rounded-2xl"
                style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <div className="relative z-10 text-4xl transition-transform duration-300 group-hover:scale-110">
                {IconComponent ? (
                    <IconComponent style={{ color: skill.color }} />
                ) : (
                    <span className="text-2xl font-bold" style={{ color: skill.color }}>
                        {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                )}
            </div>

            {/* Name */}
            <span className="relative z-10 text-sm font-semibold text-white/70 group-hover:text-white transition-colors text-center leading-tight">
                {skill.name}
            </span>

            {/* Level badge */}
            <div className="relative z-10 w-full bg-white/5 rounded-full h-1.5 mt-1 overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 + 0.2 }}
                />
            </div>
            <span className="relative z-10 text-xs text-white/30 font-mono -mt-1">{skill.level}%</span>
        </motion.div>
    );
}