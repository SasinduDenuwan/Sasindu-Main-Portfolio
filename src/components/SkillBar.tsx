'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/data';
import * as Si from 'react-icons/si';

type SiKeys = keyof typeof Si;

export default function SkillChip({ skill, index }: { skill: Skill; index: number }) {
    const IconComponent = Si[skill.icon as SiKeys] as React.ElementType;
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.035, ease: [0.34, 1.56, 0.64, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover={{ scale: 1.1, y: -6 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default overflow-hidden transition-all duration-300"
            style={{
                background: hovered
                    ? `radial-gradient(circle at center, ${skill.color}18 0%, rgba(255,255,255,0.04) 70%)`
                    : 'rgba(255,255,255,0.04)',
                border: hovered
                    ? `1px solid ${skill.color}50`
                    : '1px solid rgba(255,255,255,0.08)',
                boxShadow: hovered
                    ? `0 0 20px ${skill.color}25, 0 8px 30px rgba(0,0,0,0.3)`
                    : '0 2px 10px rgba(0,0,0,0.2)',
            }}
        >
            {/* Icon glow background */}
            <motion.div
                animate={{ opacity: hovered ? 0.2 : 0 }}
                className="absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <motion.div
                animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative z-10 text-4xl"
            >
                {IconComponent ? (
                    <IconComponent style={{ color: skill.color }} />
                ) : (
                    <span className="text-base font-black" style={{ color: skill.color }}>
                        {skill.name.substring(0, 2).toUpperCase()}
                    </span>
                )}
            </motion.div>

            {/* Name */}
            <motion.span
                animate={{ color: hovered ? '#fff' : 'rgba(255,255,255,0.55)' }}
                className="relative z-10 text-[11px] font-semibold text-center leading-tight"
            >
                {skill.name}
            </motion.span>

            {/* Animated bottom bar */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-2/3 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
            />
        </motion.div>
    );
}