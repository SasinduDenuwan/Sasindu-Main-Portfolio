// src/components/AnimatedText.tsx
'use client';

import { motion, Variants } from 'framer-motion';

interface Props {
    text: string;
    className?: string;
    once?: boolean;
}

export default function AnimatedText({ text, className = '', once = true }: Props) {
    const words = text.split(' ');

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', damping: 12, stiffness: 100 },
        },
        hidden: { opacity: 0, y: 20 },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
        >
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    variants={child}
                    className="inline-block mr-1"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}