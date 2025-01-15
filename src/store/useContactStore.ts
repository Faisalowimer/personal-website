import { create } from 'zustand';
import { ZodError } from 'zod';
import { ContactFormData, contactFormSchema } from '@/components/window/iconWindows/contact/formValidation';

type FormErrors = Partial<Record<keyof ContactFormData | 'form', string>>;

const INITIAL_FORM: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
};

interface ContactStore {
    form: ContactFormData;
    errors: FormErrors;
    sending: boolean;
    sent: boolean;
    setForm: (form: ContactFormData) => void;
    setField: (name: keyof ContactFormData, value: string) => void;
    validateField: (name: keyof ContactFormData, value: string) => void;
    resetForm: () => void;
    sendEmail: () => Promise<void>;
    isFormValid: () => boolean;
}

export const useContactStore = create<ContactStore>((set, get) => ({
    form: INITIAL_FORM,
    errors: {},
    sending: false,
    sent: false,

    setForm: (form) => set({ form }),

    setField: (name, value) => {
        set(state => ({
            form: { ...state.form, [name]: value }
        }));
        get().validateField(name, value);
    },

    validateField: (name, value) => {
        try {
            if (value.length > 0) {
                contactFormSchema.shape[name].parse(value);
                set(state => ({
                    errors: { ...state.errors, [name]: undefined }
                }));
            } else {
                set(state => ({
                    errors: { ...state.errors, [name]: undefined }
                }));
            }
        } catch (error) {
            if (error instanceof ZodError) {
                const message = error.errors[0]?.message || 'Invalid input';
                set(state => ({
                    errors: { ...state.errors, [name]: message }
                }));
            }
        }
    },

    resetForm: () => set({ form: INITIAL_FORM, errors: {}, sent: false }),

    sendEmail: async () => {
        set({ sending: true, errors: {} });

        try {
            const validatedData = contactFormSchema.parse(get().form);

            console.log('Sending email with data:', validatedData);
            const response = await fetch('/api/resend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(validatedData),
            });

            const data = await response.json();
            console.log('Response from server:', data);

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            set({ sent: true });
            setTimeout(() => {
                get().resetForm();
                set({ sent: false });
            }, 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            if (error instanceof ZodError) {
                const fieldErrors: FormErrors = {};
                error.errors.forEach(err => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
                    }
                });
                set({ errors: fieldErrors });
            } else if (error instanceof Error) {
                set(state => ({
                    errors: { ...state.errors, form: error.message }
                }));
            }
        } finally {
            set({ sending: false });
        }
    },

    isFormValid: () => {
        const state = get();
        const hasAllFields = Object.values(state.form).every(value => value.length > 0);
        const hasNoErrors = Object.values(state.errors).every(error => !error);
        return hasAllFields && hasNoErrors;
    },
})); 