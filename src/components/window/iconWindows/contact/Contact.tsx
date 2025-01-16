import { Win95Button } from '@/components/ui/Win95Button';
import { ContactForm } from './ContactForm';
import { WIN95_ICONS } from '@/store/useWindowStore';
import { WindowHeader } from '@/components/window/WindowHeader';
import { WindowToolbar } from '@/components/window/WindowToolbar';
import { faisalContact } from '@/utils/contactUtils';
import { WindowStatusBar } from '@/components/window/WindowStatusBar';
import { useContactStore } from '@/store/useContactStore';
import ReactConfetti from 'react-confetti';

export const Contact = () => {
    const { sending, sent, isFormValid, sendEmail } = useContactStore();

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Confetti overlay */}
            {sent && (
                <ReactConfetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={500}
                    gravity={0.2}
                    initialVelocityY={30}
                    tweenDuration={100}
                />
            )}

            {/* Header section */}
            <WindowHeader
                icon={WIN95_ICONS.contact}
                title="New Message"
                actions={
                    <button
                        type="submit"
                        form="contact-form"
                        disabled={sending || !isFormValid()}
                        className="win95-btn disabled:opacity-50 font-bold"
                    >
                        {sending ? 'Sending...' : sent ? 'Sent!' : 'Send'}
                    </button>
                }
            />

            {/* Toolbar section */}
            <WindowToolbar>
                <Win95Button
                    onClick={() => window.open(faisalContact.LinkedIn, '_blank')}
                >
                    LinkedIn
                </Win95Button>
                <Win95Button
                    onClick={() => window.open(faisalContact.GitHub, '_blank')}
                >
                    GitHub
                </Win95Button>
            </WindowToolbar>

            {/* Content section - Contact form */}
            <div className="flex-1 p-4 overflow-auto">
                <ContactForm onSubmit={sendEmail} />
            </div>

            {/* Status bar section - Sending message status */}
            <WindowStatusBar>
                {sending ? 'Sending message...' :
                    sent ? 'Message sent successfully!' :
                        'Ready'}
            </WindowStatusBar>
        </div>
    );
};