import SectionWrapper from '@/components/SectionWrapper';
import SkillChip from '@/components/SkillBar';
import { skills } from '@/data';
import { Cpu } from 'lucide-react';

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative z-10">
            <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                    <Cpu size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">Tech Stack</h2>
                <p className="mt-3 text-white/40 text-base font-light max-w-md text-center">Technologies I work with daily to build amazing products</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                    {skills.map((skill, i) => (
                        <SkillChip key={skill.name} skill={skill} index={i} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}