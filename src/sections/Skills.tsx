// src/sections/Skills.tsx
import SectionWrapper from '@/components/SectionWrapper';
import SkillBar from '@/components/SkillBar';
import { skills } from '@/data';

export default function Skills() {
    return (
        <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="max-w-2xl mx-auto">
                {skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                ))}
            </div>
        </SectionWrapper>
    );
}