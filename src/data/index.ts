// src/data/index.ts

export interface Skill {
    name: string;
    level: number; // 0-100
    icon: string;  // react-icons/si component name e.g. 'SiReact'
    color: string; // tailwind text color class for the icon
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

export interface Certificate {
    id: string;
    name: string;
    issuer: string;
    year: string;
    link?: string;
}

export interface SocialLink {
    name: string;
    url: string;
    icon: string; // simple name for styling
}

// ----- Skills -----
export const skills: Skill[] = [
    { name: 'JavaScript', level: 92, icon: 'SiJavascript', color: '#F7DF1E' },
    { name: 'TypeScript', level: 88, icon: 'SiTypescript', color: '#3178C6' },
    { name: 'React', level: 90, icon: 'SiReact', color: '#61DAFB' },
    { name: 'Next.js', level: 85, icon: 'SiNextdotjs', color: '#ffffff' },
    { name: 'Node.js', level: 80, icon: 'SiNodedotjs', color: '#339933' },
    { name: 'Python', level: 75, icon: 'SiPython', color: '#3776AB' },
    { name: 'Tailwind CSS', level: 90, icon: 'SiTailwindcss', color: '#06B6D4' },
    { name: 'GraphQL', level: 70, icon: 'SiGraphql', color: '#E10098' },
    { name: 'MongoDB', level: 72, icon: 'SiMongodb', color: '#47A248' },
    { name: 'Docker', level: 65, icon: 'SiDocker', color: '#2496ED' },
    { name: 'Git', level: 88, icon: 'SiGit', color: '#F05032' },
    { name: 'Prisma', level: 70, icon: 'SiPrisma', color: '#2D3748' },
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
            'Pursuing an intensive higher diploma with a strong focus on full-stack development. Gaining hands-on expertise in the MERN Stack, React Native, Spring Boot, TypeScript, jQuery, Bootstrap, and MySQL — covering both front-end and back-end engineering across web and mobile platforms.',
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


// ----- Certificates -----
export const certificates: Certificate[] = [
    {
        id: '1',
        name: 'AWS Certified Developer – Associate',
        issuer: 'Amazon Web Services',
        year: '2023',
        link: 'https://aws.com/verify/...',
    },
    // ...
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