import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name cannot exceed 50 characters'),
    email: z.string()
        .email('Please enter a valid email address')
        .max(100, 'Email cannot exceed 100 characters'),
    subject: z.string()
        .min(3, 'Subject must be at least 3 characters')
        .max(100, 'Subject cannot exceed 100 characters'),
    message: z.string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message cannot exceed 1000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;