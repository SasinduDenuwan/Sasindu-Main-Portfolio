'use client';

import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="fixed inset-0 min-h-screen w-full -z-10 bg-black overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
            <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />
        </div>
    );
}
