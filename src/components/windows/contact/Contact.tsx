import { useState } from 'react';
import { Win95Button } from '@/components/ui/Win95Button';
import Image from 'next/image';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';

const INITIAL_FORM: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

type FormErrors = Partial<Record<keyof ContactFormData | 'form', string>>;

export const Contact = () => {
    const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const validateField = (name: keyof ContactFormData, value: string) => {
        try {
            contactFormSchema.shape[name].parse(value);
            setErrors(prev => ({ ...prev, [name]: undefined }));
        } catch (error) {
            if (error instanceof Error) {
                setErrors(prev => ({ ...prev, [name]: error.message }));
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        validateField(name as keyof ContactFormData, value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        try {
            const validatedData = contactFormSchema.parse(form);
            setSending(true);

            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validatedData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSent(true);
            setForm(INITIAL_FORM);
            setTimeout(() => setSent(false), 3000);
        } catch (error) {
            if (error instanceof Error) {
                setErrors({ form: error.message });
            }
        } finally {
            setSending(false);
        }
    };

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-400">
                <div className="flex items-center gap-2">
                    <Image
                        src="/icons/mail.png"
                        alt="Contact"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span className="text-sm font-bold">New Message</span>
                </div>
                <div className="flex gap-2">
                    <Win95Button
                        onClick={handleSubmit}
                        disabled={sending || Object.keys(errors).length > 0}
                    >
                        {sending ? 'Sending...' : sent ? 'Sent!' : 'Send'}
                    </Win95Button>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-4 p-2 border-b border-gray-400">
                <div className="flex">
                    <Win95Button
                        onClick={() => window.open('https://linkedin.com/in/faisalowimer', '_blank')}
                    >
                        LinkedIn
                    </Win95Button>
                    <Win95Button
                        onClick={() => window.open('https://github.com/faisalowimer', '_blank')}
                    >
                        GitHub
                    </Win95Button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
                <form onSubmit={handleSubmit} className="grid gap-4">
                    {/* To Field */}
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                        <label className="font-bold">To:</label>
                        <input
                            type="text"
                            value="faisal@owimer.co"
                            disabled
                            className="px-2 py-1 border-2 border-gray-400 bg-[#dfdfdf]"
                        />
                    </div>

                    {/* From Field */}
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
                        <label htmlFor="name" className="font-bold">From:</label>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-1">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className={`px-2 py-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a] bg-white ${errors.name ? 'border-red-500' : ''}`}
                                />
                                {errors.name && <span className="text-red-500 text-[10px]">{errors.name}</span>}
                            </div>
                            <div className="grid gap-1">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className={`px-2 py-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a] bg-white ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && <span className="text-red-500 text-[10px]">{errors.email}</span>}
                            </div>
                        </div>
                    </div>

                    {/* Subject Field */}
                    <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                        <label htmlFor="subject" className="font-bold">Subject:</label>
                        <div className="grid gap-1">
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Message Subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                                className={`px-2 py-1 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a] bg-white ${errors.subject ? 'border-red-500' : ''}`}
                            />
                            {errors.subject && <span className="text-red-500 text-[10px]">{errors.subject}</span>}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="grid gap-2">
                        <label htmlFor="message" className="font-bold">Message:</label>
                        <div className="grid gap-1">
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type your message here..."
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={8}
                                className={`p-2 border-2 border-[#808080] border-t-[#404040] border-l-[#404040] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a] bg-white resize-none ${errors.message ? 'border-red-500' : ''}`}
                            />
                            {errors.message && <span className="text-red-500 text-[10px]">{errors.message}</span>}
                        </div>
                    </div>

                    {errors.form && (
                        <div className="text-red-500 text-center">{errors.form}</div>
                    )}
                </form>
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-2 py-1 border-t border-gray-400">
                <span>
                    {sending ? 'Sending message...' :
                        sent ? 'Message sent successfully!' :
                            errors.form ? 'Error sending message' : 'Ready'}
                </span>
            </div>
        </div>
    );
};