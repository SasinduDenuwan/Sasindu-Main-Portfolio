'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo, education } from '@/data';
import { MapPin, Mail, GraduationCap, User, Sparkles } from 'lucide-react';

const infoCards = [
    {
        icon: MapPin, label: 'Location',
        value: (p: typeof personalInfo) => p.location,
        iconBg: 'bg-blue-500/10', iconColor: 'text-blue-400',
        borderColor: 'border-blue-500/20', hoverBg: 'group-hover:bg-blue-500/20',
        glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
        gradient: 'from-blue-500/8 to-transparent',
    },
    {
        icon: Mail, label: 'Email',
        value: (p: typeof personalInfo) => p.email,
        href: (p: typeof personalInfo) => `mailto:${p.email}`,
        iconBg: 'bg-purple-500/10', iconColor: 'text-purple-400',
        borderColor: 'border-purple-500/20', hoverBg: 'group-hover:bg-purple-500/20',
        glow: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
        gradient: 'from-purple-500/8 to-transparent',
    },
    {
        icon: GraduationCap, label: 'Education',
        value: () => education[0]?.degree ?? 'N/A',
        iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-400',
        borderColor: 'border-emerald-500/20', hoverBg: 'group-hover:bg-emerald-500/20',
        glow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
        gradient: 'from-emerald-500/8 to-transparent',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
} as const;

const cardVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
} as const;

const textVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
} as const;

export default function About() {
    return (
        <SectionWrapper id="about" className="relative z-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-12 sm:mb-14 md:mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold">
                    <User size={13} />
                    Discover
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start max-w-5xl mx-auto">

                {/* Left: bio text */}
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-5 sm:space-y-6"
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-amber-500/20 text-amber-400 text-xs font-semibold">
                        <Sparkles size={11} />
                        Full Stack Developer
                    </div>

                    <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
                        {personalInfo.shortBio}
                    </p>
                    <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light">
                        I&apos;m currently based in{' '}
                        <span className="text-white font-medium">{personalInfo.location}</span>.
                        I love solving complex problems and building products that users truly love.
                        Outside of coding, I enjoy AI, open-source contributions, and exploring the latest in tech.
                    </p>

                    <div className="flex items-center gap-3 pt-1">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {[
                            { label: 'Projects', value: '5+' },
                            { label: 'Year Started', value: '2023' },
                            { label: 'Commits', value: '500+' },
                        ].map(({ label, value }) => (
                            <div key={label} className="text-center p-3 sm:p-4 rounded-2xl glass border border-white/5">
                                <div className="text-xl sm:text-2xl font-black shimmer-text">{value}</div>
                                <div className="text-[10px] sm:text-xs text-white/40 font-medium mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: info cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-3 sm:space-y-4"
                >
                    {infoCards.map(({ icon: Icon, label, value, href, iconBg, iconColor, borderColor, hoverBg, glow, gradient }) => {
                        const displayValue = value(personalInfo as typeof personalInfo);
                        const linkHref = href ? href(personalInfo as typeof personalInfo) : undefined;

                        const content = (
                            <motion.div
                                key={label}
                                variants={cardVariants}
                                className={`group relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass border ${borderColor} transition-all duration-300 ${glow} overflow-hidden`}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                <div className={`relative shrink-0 p-3 sm:p-3.5 ${iconBg} rounded-xl ${hoverBg} transition-colors border ${borderColor}`}>
                                    <Icon size={19} className={iconColor} />
                                </div>
                                <div className="relative min-w-0">
                                    <p className="text-[10px] sm:text-xs text-white/35 uppercase tracking-wider font-semibold mb-0.5">{label}</p>
                                    <p className="font-semibold text-white/85 text-xs sm:text-sm leading-snug truncate">{displayValue}</p>
                                </div>
                            </motion.div>
                        );

                        return linkHref ? (
                            <a key={label} href={linkHref} className="block hover:scale-[1.02] transition-transform duration-300">
                                {content}
                            </a>
                        ) : (
                            <div key={label}>{content}</div>
                        );
                    })}

                    {/* Status card */}
                    <motion.div
                        variants={cardVariants}
                        className="relative flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl glass border border-emerald-500/20 overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative shrink-0 p-3 sm:p-3.5 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20 flex items-center justify-center">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
                            </span>
                        </div>
                        <div className="relative">
                            <p className="text-[10px] sm:text-xs text-white/35 uppercase tracking-wider font-semibold mb-0.5">Status</p>
                            <p className="font-semibold text-emerald-400 text-xs sm:text-sm">Open to Work — Available Now</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}