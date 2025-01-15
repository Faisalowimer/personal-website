import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/components/window/iconWindows/contact/formValidation';

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not set');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = contactFormSchema.parse(body);

        console.log('Attempting to send email with:', { name, email, subject });

        // TODO: Change to my email once domain is confirmed
        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: ["delivered@resend.dev"],
            replyTo: email,
            subject: `[Portfolio Contact] ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            console.error('Resend API error:', error);
            return NextResponse.json(
                { error: 'Failed to send email', details: error },
                { status: 500 }
            );
        }

        console.log('Email sent successfully:', data);
        return NextResponse.json(
            { message: 'Email sent successfully', data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error in email API route:', error);
        if (error instanceof Error) {
            return NextResponse.json(
                { error: error.message },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
} 