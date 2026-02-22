// src/sections/Contact.tsx
import SectionWrapper from '@/components/SectionWrapper';
import ContactForm from '@/components/ContactForm';
import { socialLinks, personalInfo } from '@/data';

export default function Contact() {
    return (
        <SectionWrapper id="contact">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <p className="text-lg mb-4">
                        I’m always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    <div className="space-y-2 mb-6">
                        <p><span className="font-medium">Email:</span> {personalInfo.email}</p>
                        <p><span className="font-medium">Location:</span> {personalInfo.location}</p>
                    </div>
                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xl"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
                <ContactForm />
            </div>
        </SectionWrapper>
    );
}