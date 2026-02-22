// src/data/index.ts

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools';
    icon: string;  // react-icons/si component name e.g. 'SiReact'
    color: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;   // path in public/images
    tech: string[];
    github?: string;
    live?: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
    description?: string;
}



export interface SocialLink {
    name: string;
    url: string;
    icon: string; // simple name for styling
}

// ----- Skills -----
export type SkillCategory = 'All' | 'Frontend' | 'Backend' | 'Tools';

export const skills: Skill[] = [
    // Frontend
    { name: 'React', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
    { name: 'React Native', category: 'Frontend', icon: 'SiReact', color: '#61DAFB' },
    { name: 'Expo', category: 'Frontend', icon: 'SiExpo', color: '#000020' },
    { name: 'TypeScript', category: 'Frontend', icon: 'SiTypescript', color: '#3178C6' },
    { name: 'JavaScript', category: 'Frontend', icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'HTML5', category: 'Frontend', icon: 'SiHtml5', color: '#E34F26' },
    { name: 'CSS3', category: 'Frontend', icon: 'SiCss3', color: '#1572B6' },
    { name: 'Tailwind', category: 'Frontend', icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'Next.js', category: 'Frontend', icon: 'SiNextdotjs', color: '#ffffff' },
    { name: 'Redux', category: 'Frontend', icon: 'SiRedux', color: '#764ABC' },
    // Backend
    { name: 'Node.js', category: 'Backend', icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Express', category: 'Backend', icon: 'SiExpress', color: '#ffffff' },
    { name: 'MongoDB', category: 'Backend', icon: 'SiMongodb', color: '#47A248' },
    { name: 'MySQL', category: 'Backend', icon: 'SiMysql', color: '#4479A1' },
    { name: 'Spring', category: 'Backend', icon: 'SiSpring', color: '#6DB33F' },
    { name: 'Spring Boot', category: 'Backend', icon: 'SiSpringboot', color: '#6DB33F' },
    { name: 'Java', category: 'Backend', icon: 'SiJava', color: '#ED8B00' },
    { name: 'Python', category: 'Backend', icon: 'SiPython', color: '#3776AB' },
    // Tools
    { name: 'Git', category: 'Tools', icon: 'SiGit', color: '#F05032' },
    { name: 'Figma', category: 'Tools', icon: 'SiFigma', color: '#F24E1E' },
    { name: 'Postman', category: 'Tools', icon: 'SiPostman', color: '#FF6C37' },
    { name: 'VS Code', category: 'Tools', icon: 'SiVisualstudiocode', color: '#007ACC' },
    { name: 'IntelliJ', category: 'Tools', icon: 'SiIntellijidea', color: '#FE315D' },
    { name: 'Docker', category: 'Tools', icon: 'SiDocker', color: '#2496ED' },
];

// ----- Projects -----
export const projects: Project[] = [
    {
        id: '1',
        title: 'AI-Powered Task Manager',
        description:
            'A smart task manager that uses NLP to categorize and prioritize tasks. Built with Next.js, Tailwind, and OpenAI API.',
        image: '/images/project1.jpg',
        tech: ['Next.js', 'Tailwind', 'OpenAI', 'Prisma'],
        github: 'https://github.com/yourusername/task-manager',
        live: 'https://taskmanager.demo.com',
    },
    {
        id: '2',
        title: 'E-Commerce Dashboard',
        description:
            'Real-time analytics dashboard for e-commerce stores with charts and inventory management.',
        image: '/images/project2.jpg',
        tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
        github: 'https://github.com/yourusername/ecommerce-dashboard',
        live: 'https://dashboard.demo.com',
    },
    // Add more projects...
];

// ----- Education -----
export const education: Education[] = [
    {
        id: '1',
        degree: 'Higher Diploma in Software Engineering',
        institution: 'IJSE – Institute of Software Engineering',
        year: '2024 – 2026',
        description:
            'Pursuing an intensive higher diploma with a strong focus on full-stack development. Gaining hands-on expertise in the MERN Stack, React Native, Spring Boot, TypeScript, Bootstrap, MongoDB, and MySQL — covering front-end, back-end engineering, and deep knowledge of API development across web and mobile platforms.',
    },
    {
        id: '2',
        degree: 'Diploma in Information Technology',
        institution: 'ESOFT Metro Campus',
        year: 'Jul 2023 – Apr 2024',
        description:
            'Completed a comprehensive IT diploma covering software development fundamentals, database management with Microsoft SQL Server, C# programming, CSS3, HTML5, and core project management principles. Graduated with distinction.',
    },
    {
        id: '3',
        degree: 'Diploma in English',
        institution: 'British Way English Academy',
        year: 'Sep 2023 – Nov 2023',
        description:
            'Completed an intensive English communication program focused on professional and business communication, writing, and presentation skills — strengthening the ability to collaborate effectively in international tech environments.',
    },
    {
        id: '4',
        degree: 'Ordinary Level Examination',
        institution: 'Deniyaya Central College',
        year: '2017 – 2023',
        description:
            'Completed secondary education and sat the G.C.E. Ordinary Level examination, achieving 9A passes — building a solid academic foundation that led to a career in software engineering.',
    },
];


// ----- Social Links -----
export const socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/SasinduDenuwan', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sasindu-denuwan/', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:sasindudenuwan2006wpsk@gmail.com', icon: 'email' },
];

// Personal info (used in Hero & About)
export const personalInfo = {
    name: 'Sasindu',
    title: 'Software Engineer',
    shortBio:
        'Full Stack Engineer building exceptional digital experiences with clean, scalable architecture. Specializing in Spring Boot, MERN Stack, and React Native to deliver high-performance web and mobile applications from backend to frontend.',
    email: 'sasindudenuwan2006wpsk@gmail.com',
    location: 'Galle, Sri Lanka',
    avatar: '/images/avatar.jpg', // optional
    experience: '4+ years',       // ← shown in About section quick-facts
};