'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import { socialLinks, personalInfo } from '@/data';
import { Mail, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconMap: Record<string, React.ElementType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: MdEmail,
};

const socialStyles: Record<string, { hover: string; bg: string; border: string }> = {
    github: { hover: 'hover:text-white hover:border-white/30', bg: 'hover:bg-white/10', border: 'border-white/10' },
    linkedin: { hover: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40', bg: 'hover:bg-[#0A66C2]/10', border: 'border-white/10' },
    twitter: { hover: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40', bg: 'hover:bg-[#1DA1F2]/10', border: 'border-white/10' },
    email: { hover: 'hover:text-rose-400 hover:border-rose-400/40', bg: 'hover:bg-rose-400/10', border: 'border-white/10' },
};

const contactDetails = [
    {
        icon: Mail,
        label: 'Email',
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        hoverBg: 'group-hover:bg-blue-500/20',
        glow: '#3b82f6',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
        color: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20',
        hoverBg: 'group-hover:bg-purple-500/20',
        glow: '#a855f7',
    },
];

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="relative z-10 w-full mb-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center mb-16"
            >
                <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full glass border border-pink-500/20 text-pink-400 text-sm font-semibold">
                    <MessageSquare size={14} />
                    Connect
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent text-center">
                    Get in Touch
                </h2>
                <p className="mt-3 text-white/40 text-base font-light max-w-md text-center">
                    Have a project in mind? Let&apos;s work together and build something amazing.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Left side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <div className="space-y-3">
                        <h3 className="text-3xl font-bold text-white/90">Let&apos;s work together.</h3>
                        <p className="text-base text-white/50 font-light leading-relaxed">
                            I&apos;m always open to discussing new opportunities,
                            collaborations, or just a good tech chat.
                        </p>
                    </div>

                    {/* Contact cards */}
                    <div className="space-y-3">
                        {contactDetails.map(({ icon: Icon, label, value, href, color, bg, border, hoverBg, glow }) => (
                            <motion.a
                                key={label}
                                whileHover={{ x: 4, scale: 1.02 }}
                                href={href}
                                className={`group flex items-center gap-4 p-5 glass border ${border} rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
                                style={{ ['--glow' as string]: glow }}
                            >
                                <div className={`shrink-0 p-3.5 ${bg} rounded-xl ${hoverBg} border ${border} transition-colors`}>
                                    <Icon size={20} className={color} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/35 uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                                    <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{value}</span>
                                </div>
                                <ArrowUpRight size={16} className="ml-auto text-white/20 group-hover:text-white/50 transition-colors" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Social links */}
                    <div>
                        <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Find me on</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((link) => {
                                const Icon = iconMap[link.icon] ?? FaGithub;
                                const styles = socialStyles[link.icon] ?? socialStyles.github;
                                return (
                                    <motion.a
                                        key={link.name}
                                        whileHover={{ scale: 1.06, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 px-5 py-3 rounded-2xl glass ${styles.border} text-white/45 ${styles.hover} ${styles.bg} transition-all duration-200 font-semibold text-sm`}
                                    >
                                        <Icon size={18} />
                                        {link.name}
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <ContactForm />
                </motion.div>
            </div>
        </SectionWrapper>
    );
}