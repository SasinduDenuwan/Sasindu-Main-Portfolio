import SectionWrapper from '@/components/SectionWrapper';
import SkillBar from '@/components/SkillBar';
import { skills } from '@/data';
import { Sparkles } from 'lucide-react';

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="relative z-10">
            <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-2 mb-2 text-blue-400">
                    <Sparkles size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Expertise</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">Technical Skills</h2>
            </div>

            <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-4">
                    {skills.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}