// src/components/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';

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
        // Here you would send the data to your API (e.g., using fetch)
        console.log('Form data:', data);
        // Simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Message sent!');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
            </div>
            <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
}