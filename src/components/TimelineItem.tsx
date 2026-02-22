// src/components/TimelineItem.tsx
'use client';

import { motion } from 'framer-motion';

interface Props {
    title: string;
    subtitle: string;
    year: string;
    description?: string;
    link?: string;
}

export default function TimelineItem({ title, subtitle, year, description, link }: Props) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative pl-8 pb-8 border-l-2 border-blue-500 last:pb-0"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full" />
            <div className="mb-1 text-sm text-blue-600 dark:text-blue-400">{year}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <h4 className="text-md text-gray-600 dark:text-gray-400 mb-2">{subtitle}</h4>
            {description && <p className="text-gray-700 dark:text-gray-300">{description}</p>}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-block mt-2"
                >
                    View Certificate →
                </a>
            )}
        </motion.div>
    );
}