import SectionWrapper from '@/components/SectionWrapper';
import { personalInfo, education } from '@/data';
import { MapPin, Mail, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
    return (
        <SectionWrapper id="about" className="relative z-10">
            <div className="flex flex-col items-center mb-16">
                <span className="text-purple-400 font-semibold tracking-wider uppercase text-sm mb-2">Discover</span>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                {/* Left col - Text */}
                <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
                    <p>
                        {personalInfo.shortBio}
                    </p>
                    <p>
                        I’m currently based in <span className="text-white font-medium">{personalInfo.location}</span>.
                        I love solving complex problems and building products that users truly love.
                        Outside of coding, I enjoy AI, open-source contributions, and exploring the latest in tech.
                    </p>
                </div>

                {/* Right col - Info cards */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                    <h3 className="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-4">Quick Facts</h3>

                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 text-white/80 group">
                            <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors border border-blue-500/20">
                                <MapPin size={22} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase tracking-wider font-semibold">Location</p>
                                <p className="font-medium">{personalInfo.location}</p>
                            </div>
                        </li>

                        <li className="flex items-center gap-4 text-white/80 group">
                            <div className="p-3 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                <Mail size={22} className="text-purple-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase tracking-wider font-semibold">Email</p>
                                <a href={`mailto:${personalInfo.email}`} className="font-medium hover:text-white transition-colors">{personalInfo.email}</a>
                            </div>
                        </li>

                        <li className="flex items-center gap-4 text-white/80 group">
                            <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                                <GraduationCap size={22} className="text-emerald-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase tracking-wider font-semibold">Education</p>
                                <p className="font-medium">{education[0]?.degree ?? 'N/A'}</p>
                            </div>
                        </li>

                        {/* <li className="flex items-center gap-4 text-white/80 group">
                            <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors border border-amber-500/20">
                                <Briefcase size={22} className="text-amber-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 uppercase tracking-wider font-semibold">Experience</p>
                                <p className="font-medium">{personalInfo.experience}</p>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
}