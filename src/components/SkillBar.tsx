// src/components/SkillBar.tsx
'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/data';

export default function SkillBar({ skill }: { skill: Skill }) {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
}