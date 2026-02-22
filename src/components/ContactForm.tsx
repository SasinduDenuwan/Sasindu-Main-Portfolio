'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { Send } from 'lucide-react';

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form data:', data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        alert('Message sent successfully!');
        reset();
    };

    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h3 className="text-2xl font-bold mb-6 text-white/90">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white/60 uppercase tracking-widest">
                        Your Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...register('name')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 text-white placeholder:text-white/20 transition-all font-light"
                    />
                    {errors.name && (
                        <p className="text-red-400 text-sm mt-2 font-medium">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white/60 uppercase tracking-widest">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register('email')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder:text-white/20 transition-all font-light"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-sm mt-2 font-medium">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white/60 uppercase tracking-widest">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell me about your project..."
                        {...register('message')}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 text-white placeholder:text-white/20 transition-all font-light resize-none"
                    />
                    {errors.message && (
                        <p className="text-red-400 text-sm mt-2 font-medium">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                    {isSubmitting ? (
                        <span className="animate-pulse">Sending...</span>
                    ) : (
                        <>
                            Send Message
                            <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}