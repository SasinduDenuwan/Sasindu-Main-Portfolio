'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Skill } from '@/data';
import * as Si from 'react-icons/si';

type SiKeys = keyof typeof Si;

export default function SkillChip({ skill, index }: { skill: Skill; index: number }) {
    const IconComponent = Si[skill.icon as SiKeys] as React.ElementType;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            whileHover={{ scale: 1.08, y: -4 }}
            className="group relative flex flex-col items-center gap-3 p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/25 hover:bg-white/10 transition-all duration-300 cursor-default overflow-hidden"
        >
            {/* Glow behind icon on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl rounded-2xl"
                style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <div className="relative z-10 text-5xl transition-transform duration-300 group-hover:scale-110">
                {IconComponent ? (
                    <IconComponent style={{ color: skill.color }} />
                ) : (
                    <span className="text-xl font-bold" style={{ color: skill.color }}>
                        {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                )}
            </div>

            {/* Name */}
            <span className="relative z-10 text-sm font-semibold text-white/60 group-hover:text-white transition-colors text-center leading-tight">
                {skill.name}
            </span>
        </motion.div>
    );
}