// src/components/Footer.tsx
import { socialLinks } from '@/data';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                        >
                            {link.name} {/* Replace with actual icons later */}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}