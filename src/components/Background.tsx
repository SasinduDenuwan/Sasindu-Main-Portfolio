'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function ParticleCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const particles: {
            x: number; y: number; vx: number; vy: number;
            size: number; opacity: number; color: string;
        }[] = [];

        const colors = ['#a855f7', '#3b82f6', '#6366f1', '#8b5cf6', '#60a5fa'];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.6 + 0.1,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 130)})`;
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export default function Background() {
    return (
        <div className="fixed inset-0 min-h-screen w-full -z-10 bg-[#030305] overflow-hidden pointer-events-none">
            {/* Deep gradient base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#030305] to-[#00050a]" />

            {/* Animated gradient blobs */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(109,40,217,0.1) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                className="absolute top-[30%] right-[-15%] w-[45%] h-[45%] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(37,99,235,0.1) 50%, transparent 70%)',
                    filter: 'blur(80px)',
                }}
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                className="absolute bottom-[-20%] left-[25%] w-[60%] h-[60%] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(79,70,229,0.1) 50%, transparent 70%)',
                    filter: 'blur(100px)',
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Particle canvas */}
            <ParticleCanvas />

            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)',
                }}
            />
        </div>
    );
}
