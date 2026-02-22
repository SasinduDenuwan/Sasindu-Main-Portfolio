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
        degree: 'B.Sc. in Computer Science',
        institution: 'University of Technology',
        year: '2018 – 2022',
        description: 'Graduated with honors. Focus on software engineering and AI.',
    },
    // ...
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
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: 'twitter' },
    { name: 'Email', url: 'mailto:alex@example.com', icon: 'email' },
];

// Personal info (used in Hero & About)
export const personalInfo = {
    name: 'Alex Morgan',
    title: 'Software Engineer',
    shortBio:
        'I build scalable web applications with modern technologies. Passionate about clean code and user experience.',
    email: 'alex@example.com',
    location: 'San Francisco, CA',
    avatar: '/images/avatar.jpg', // optional
};