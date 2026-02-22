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
            className="relative pl-8 pb-10 border-l border-white/20 last:border-transparent last:pb-0 group"
        >
            <div className="absolute left-[-9px] top-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full ring-4 ring-black shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform" />

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:bg-white/10 transition-colors">
                <div className="mb-2 inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-blue-300 tracking-wider">
                    {year}
                </div>
                <h3 className="text-xl font-bold text-white/90 mb-1">{title}</h3>
                <h4 className="text-sm font-medium text-purple-300 mb-3">{subtitle}</h4>

                {description && <p className="text-white/60 text-sm leading-relaxed mb-4">{description}</p>}

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-white transition-colors"
                    >
                        View Credential <span className="ml-1">→</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
}