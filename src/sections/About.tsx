// src/sections/About.tsx
import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo } from '@/data';

export default function About() {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-lg mb-4">{personalInfo.shortBio}</p>
                    <p className="text-gray-700 dark:text-gray-300">
                        I’m based in {personalInfo.location}. I love solving complex problems and building products that users love. Outside coding, I enjoy hiking and open-source contributions.
                    </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                    <ul className="space-y-2">
                        <li><span className="font-medium">📍 Location:</span> {personalInfo.location}</li>
                        <li><span className="font-medium">📧 Email:</span> {personalInfo.email}</li>
                        <li><span className="font-medium">🎓 Education:</span> B.Sc. in Computer Science</li>
                        <li><span className="font-medium">💼 Experience:</span> 4+ years</li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}