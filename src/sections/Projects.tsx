import SectionWrapper from '@/components/SectionWrapper';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';
import { Layers } from 'lucide-react';

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="relative z-10 w-full">
            <div className="flex flex-col items-center mb-16">
                <div className="flex items-center gap-2 mb-2 text-indigo-400">
                    <Layers size={18} />
                    <span className="font-semibold tracking-wider uppercase text-sm">Portfolio</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">Featured Projects</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </SectionWrapper>
    );
}