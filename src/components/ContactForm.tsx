'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { Send, CheckCircle2 } from 'lucide-react';

const inputClass = "w-full px-3.5 sm:px-4 py-3 sm:py-3.5 bg-white/[0.04] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/40 focus:border-purple-500/40 text-white text-sm placeholder:text-white/20 transition-all font-light hover:border-white/20";

export default function ContactForm() {
    const [sent, setSent] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setSent(true);
        reset();
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <div className="glass-strong border border-white/10 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-bl from-purple-500/8 to-transparent rounded-bl-3xl" />

            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 text-white/90">Send a Message</h3>

            <AnimatePresence>
                {sent && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        className="mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3 p-3.5 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold text-xs sm:text-sm"
                    >
                        <CheckCircle2 size={16} /> Message sent! I&apos;ll get back to you soon.
                    </motion.div>
                )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
                <div>
                    <label htmlFor="name" className="block mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold text-white/45 uppercase tracking-widest">
                        Your Name
                    </label>
                    <input id="name" type="text" placeholder="John Doe" {...register('name')} className={inputClass} />
                    {errors.name && <p className="text-red-400 text-[10px] sm:text-xs mt-1.5 font-medium">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold text-white/45 uppercase tracking-widest">
                        Email Address
                    </label>
                    <input id="email" type="email" placeholder="john@example.com" {...register('email')} className={inputClass} />
                    {errors.email && <p className="text-red-400 text-[10px] sm:text-xs mt-1.5 font-medium">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="message" className="block mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold text-white/45 uppercase tracking-widest">
                        Message
                    </label>
                    <textarea id="message" rows={4} placeholder="Tell me about your project..." {...register('message')} className={`${inputClass} resize-none`} />
                    {errors.message && <p className="text-red-400 text-[10px] sm:text-xs mt-1.5 font-medium">{errors.message.message}</p>}
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full overflow-hidden flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm text-black shadow-[0_0_30px_rgba(168,85,247,0.3)] disabled:opacity-50 disabled:pointer-events-none transition-all"
                    style={{ background: 'linear-gradient(135deg, #c084fc, #818cf8, #60a5fa)' }}
                >
                    <div className="absolute inset-0 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none" />
                    <AnimatePresence mode="wait">
                        {isSubmitting ? (
                            <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full" />
                                Sending...
                            </motion.span>
                        ) : (
                            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                Send Message <Send size={15} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </motion.button>
            </form>
        </div>
    );
}