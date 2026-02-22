import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import { socialLinks, personalInfo } from '@/data';
import { Mail, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconMap: Record<string, React.ElementType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: MdEmail,
};

const colorMap: Record<string, string> = {
    github: 'hover:text-white hover:border-white/30',
    linkedin: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
    twitter: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/40',
    email: 'hover:text-rose-400 hover:border-rose-400/40',
};

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="relative z-10 w-full mb-20">
            <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-2 mb-2 text-pink-400">
                    <MessageSquare size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Connect</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">Get in Touch</h2>
                <p className="mt-3 text-white/40 text-base font-light max-w-md text-center">Have a project in mind? Let&apos;s work together.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                {/* Left side */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-semibold text-white/90">Let&apos;s work together.</h3>
                        <p className="text-lg text-white/50 font-light leading-relaxed">
                            I&apos;m always open to discussing new opportunities, collaborations, or just a good tech chat.
                        </p>
                    </div>

                    {/* Email card */}
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-white hover:text-blue-400 transition-colors group">
                            <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                                <Mail size={22} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">Email</p>
                                <span className="text-base font-medium tracking-wide">{personalInfo.email}</span>
                            </div>
                        </a>
                    </div>

                    {/* Social brand icons */}
                    <div>
                        <h4 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Find me on</h4>
                        <div className="flex gap-3">
                            {socialLinks.map((link) => {
                                const Icon = iconMap[link.icon] ?? FaGithub;
                                const hoverClass = colorMap[link.icon] ?? 'hover:text-white hover:border-white/30';
                                return (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={link.name}
                                        className={`flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 ${hoverClass} hover:bg-white/10 hover:scale-105 transition-all duration-200 font-medium text-sm active:scale-95`}
                                    >
                                        <Icon size={20} />
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
            </div>
        </SectionWrapper>
    );
}