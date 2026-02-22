import SectionWrapper from '@/components/SectionWrapper';
import TimelineItem from '@/components/TimelineItem';
import { education, certificates } from '@/data';
import { BookOpen } from 'lucide-react';

export default function Education() {
    return (
        <SectionWrapper id="education" className="relative z-10 w-full">
            <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <BookOpen size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Background</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent text-center">Education & Certificates</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-white/80 border-b border-white/10 pb-4">Education</h3>
                    <div className="ml-2">
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
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-white/80 border-b border-white/10 pb-4">Certificates</h3>
                    <div className="ml-2">
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
            </div>
        </SectionWrapper>
    );
}