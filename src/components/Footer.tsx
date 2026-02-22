import { socialLinks } from '@/data';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';

interface Props {
    className?: string; // allow className overriding 
}

export default function Footer({ className = '' }: Props) {
    const renderIcon = (iconName: string) => {
        switch (iconName.toLowerCase()) {
            case 'github': return <Github size={20} />;
            case 'linkedin': return <Linkedin size={20} />;
            case 'twitter': return <Twitter size={20} />;
            default: return <ExternalLink size={20} />;
        }
    };

    return (
        <footer className={`relative border-t border-white/10 bg-black/40 backdrop-blur-md py-12 ${className}`}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <p className="text-white/50 text-sm font-medium">
                    © {new Date().getFullYear()} Alex Morgan. Crafted with Next.js & Tailwind.
                </p>

                <div className="flex gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.name}
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all hover:scale-110 active:scale-95 shadow-sm"
                        >
                            {renderIcon(link.icon)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}