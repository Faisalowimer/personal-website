import { useContactStore } from '@/store/useContactStore';
import { ContactFormData } from './formValidation';

interface ContactFormProps {
    onSubmit: () => Promise<void>;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
    const { form, errors, setField } = useContactStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setField(name as keyof ContactFormData, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form id="contact-form" onSubmit={handleSubmit} className="grid gap-4">
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
    );
}; 