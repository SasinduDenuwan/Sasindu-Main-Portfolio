// src/sections/Education.tsx
import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { education, certificates } from '@/data';

export default function Education() {
    return (
        <SectionWrapper id="education" className="bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certificates</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Education</h3>
                    {education.map((item) => (
                        <TimelineItem
                            key={item.id}
                            title={item.degree}
                            subtitle={item.institution}
                            year={item.year}
                            description={item.description}
                        />
                    ))}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Certificates</h3>
                    {certificates.map((cert) => (
                        <TimelineItem
                            key={cert.id}
                            title={cert.name}
                            subtitle={cert.issuer}
                            year={cert.year}
                            link={cert.link}
                        />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}