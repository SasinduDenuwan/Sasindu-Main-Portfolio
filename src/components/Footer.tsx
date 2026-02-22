import { socialLinks } from '@/data';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

interface Props {
    className?: string;
}

const iconMap: Record<string, React.ElementType> = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    email: MdEmail,
};

const colorMap: Record<string, string> = {
    github: 'hover:text-white',
    linkedin: 'hover:text-[#0A66C2]',
    twitter: 'hover:text-[#1DA1F2]',
    email: 'hover:text-rose-400',
};

export default function Footer({ className = '' }: Props) {
    return (
        <footer className={`relative border-t border-white/10 bg-black/60 backdrop-blur-xl py-12 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Alex Morgan</span>
                    <p className="text-white/40 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex gap-3">
                    {socialLinks.map((link) => {
                        const Icon = iconMap[link.icon] ?? FaGithub;
                        const hoverClass = colorMap[link.icon] ?? 'hover:text-white';
                        return (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                className={`p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white/50 ${hoverClass} hover:bg-white/10 hover:border-white/20 hover:scale-110 transition-all duration-200 active:scale-95`}
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}