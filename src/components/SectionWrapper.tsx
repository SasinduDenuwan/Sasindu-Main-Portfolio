'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: Props) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

    return (
        <motion.section
            id={id}
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`py-24 px-4 md:px-8 max-w-6xl mx-auto ${className}`}
        >
            {children}
        </motion.section>
    );
}