'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Props {
    title: string;
    subtitle: string;
    year: string;
    description?: string;
    link?: string;
    index?: number;
}

const DOT_COLORS = [
    { from: '#c084fc', to: '#818cf8', glow: 'rgba(192,132,252,0.6)' },
    { from: '#60a5fa', to: '#6366f1', glow: 'rgba(96,165,250,0.6)' },
    { from: '#34d399', to: '#06b6d4', glow: 'rgba(52,211,153,0.6)' },
    { from: '#fb923c', to: '#f87171', glow: 'rgba(251,146,60,0.5)' },
];

export default function TimelineItem({ title, subtitle, year, description, link, index = 0 }: Props) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    const dot = DOT_COLORS[index % DOT_COLORS.length];

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative pl-10 pb-10 last:pb-0 group"
        >
            {/* Animated vertical line */}
            <div className="absolute left-0 top-3 bottom-0 w-px bg-white/8 last:hidden">
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.12 + 0.2 }}
                    className="w-full bg-gradient-to-b from-purple-500/50 to-transparent origin-top"
                    style={{ height: '100%' }}
                />
            </div>

            {/* Dot */}
            <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: index * 0.12 + 0.1 }}
                className="absolute left-[-9px] top-2 w-5 h-5 rounded-full border-2 border-black group-hover:scale-125 transition-transform duration-300 z-10"
                style={{
                    background: `linear-gradient(135deg, ${dot.from}, ${dot.to})`,
                    boxShadow: `0 0 12px ${dot.glow}`,
                }}
            />

            {/* Card */}
            <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group/card relative bg-white/[0.04] border border-white/8 rounded-2xl p-6 backdrop-blur-md overflow-hidden"
                style={{
                    transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${dot.from}50`;
                    e.currentTarget.style.boxShadow = `0 8px 30px rgba(0,0,0,0.3), 0 0 20px ${dot.glow}20`;
                    e.currentTarget.style.background = `radial-gradient(ellipse at top left, ${dot.from}10, rgba(255,255,255,0.04))`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
            >
                {/* Year pill */}
                <div
                    className="mb-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider border"
                    style={{
                        background: `${dot.from}18`,
                        borderColor: `${dot.from}40`,
                        color: dot.from,
                    }}
                >
                    {year}
                </div>

                <h3 className="text-lg font-bold text-white/90 mb-1 leading-snug">{title}</h3>
                <h4 className="text-sm font-semibold mb-3" style={{ color: dot.from }}>{subtitle}</h4>

                {description && (
                    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
                )}

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold hover:text-white transition-colors"
                        style={{ color: dot.from }}
                    >
                        View Credential <ExternalLink size={13} />
                    </a>
                )}
            </motion.div>
        </motion.div>
    );
}