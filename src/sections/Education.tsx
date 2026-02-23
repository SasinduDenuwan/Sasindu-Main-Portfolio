'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { education } from '@/data';
import { BookOpen } from 'lucide-react';

export default function Education() {
    return (
        <SectionWrapper id="education" className="relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-10 sm:mb-12 md:mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold">
                    <BookOpen size={13} />
                    Background
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center">
                    Education
                </h2>
                <p className="mt-3 text-white/40 text-sm sm:text-base font-light max-w-sm sm:max-w-md text-center px-4 sm:px-0">
                    My academic journey and continuous learning path
                </p>
            </motion.div>

            <div className="max-w-3xl mx-auto w-full">
                <div className="ml-2 sm:ml-4 pl-3 sm:pl-4">
                    {education.map((item, i) => (
                        <TimelineItem
                            key={item.id}
                            title={item.degree}
                            subtitle={item.institution}
                            year={item.year}
                            description={item.description}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}