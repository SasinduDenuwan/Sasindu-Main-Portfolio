'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate progress
        const steps = [15, 35, 58, 72, 88, 100];
        let i = 0;
        const interval = setInterval(() => {
            if (i < steps.length) {
                setProgress(steps[i]);
                i++;
            } else {
                clearInterval(interval);
                // Brief pause at 100% then exit
                setTimeout(() => setVisible(false), 400);
            }
        }, 280);
        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden"
                >
                    {/* Ambient glows */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
                        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-600/8 blur-[100px]" />
                    </div>

                    {/* Grid pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.025]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />

                    {/* Central logo block */}
                    <div className="relative flex flex-col items-center gap-8 z-10">
                        {/* Animated logo mark */}
                        <div className="relative">
                            {/* Outer spin ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-4 rounded-full border border-dashed border-purple-500/20"
                            />
                            {/* Inner spin ring (opposite) */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                                className="absolute -inset-2 rounded-full border border-purple-500/30"
                                style={{ borderTopColor: '#a855f7', borderRightColor: 'transparent', borderBottomColor: 'transparent', borderLeftColor: 'transparent' }}
                            />
                            {/* Logo avatar */}
                            <motion.div
                                initial={{ scale: 0.6, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center font-black text-2xl sm:text-3xl"
                                style={{
                                    background: 'linear-gradient(135deg, #1a0533 0%, #0a0520 50%, #030010 100%)',
                                    boxShadow: '0 0 40px rgba(168,85,247,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                                    border: '2px solid rgba(168,85,247,0.3)',
                                }}
                            >
                                <span
                                    style={{
                                        background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    SD
                                </span>
                            </motion.div>
                        </div>

                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                            className="flex flex-col items-center gap-1"
                        >
                            <h1
                                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                                style={{
                                    background: 'linear-gradient(135deg, #ffffff, rgba(255,255,255,0.5))',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                Sasindu Denuwan
                            </h1>
                            <p className="text-white/35 text-xs sm:text-sm font-medium tracking-widest uppercase">
                                Full Stack Engineer
                            </p>
                        </motion.div>

                        {/* Progress bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-3 w-48 sm:w-64"
                        >
                            {/* Track */}
                            <div className="w-full h-[3px] bg-white/8 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${progress}%`,
                                        background: 'linear-gradient(90deg, #a855f7, #818cf8, #60a5fa)',
                                        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                />
                            </div>
                            {/* Percent */}
                            <motion.span
                                className="text-white/30 text-xs font-mono tabular-nums"
                                animate={{ opacity: [0.4, 0.9, 0.4] }}
                                transition={{ duration: 1.6, repeat: Infinity }}
                            >
                                {progress}%
                            </motion.span>
                        </motion.div>

                        {/* Loading dots */}
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-purple-500/60"
                                    animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
