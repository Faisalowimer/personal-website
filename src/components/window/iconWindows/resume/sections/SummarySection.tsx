import { ResumeData } from '@/components/window/iconWindows/resume/types';
import { Win95Button } from '@/components/ui/Win95Button';
import { useWindowStore } from '@/store/useWindowStore';

interface SummarySectionProps {
    data: ResumeData;
}

export const SummarySection = ({ data }: SummarySectionProps) => {
    const { openWindow } = useWindowStore();

    return (
        <div className="mb-4">
            {/* Summary Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h1 className="text-xl font-bold">{data.name}</h1>
                    <h2 className="text-md">{data.title}</h2>
                </div>
                <div className="text-sm text-gray-700">
                    <div
                        className="hover:underline cursor-pointer text-xs"
                        onClick={() => openWindow('contact')}
                    >
                        {data.contact.email}
                    </div>
                    <div className="text-xs">{data.contact.phone}</div>
                </div>
            </div>

            <p className="text-gray-700 mb-3">{data.summary}</p>

            {/* Social Links */}
            <div>
                {data.contact.linkedin && (
                    <Win95Button onClick={() => window.open(data.contact.linkedin, '_blank')}>
                        LinkedIn
                    </Win95Button>
                )}
                {data.contact.github && (
                    <Win95Button onClick={() => window.open(data.contact.github, '_blank')}>
                        GitHub
                    </Win95Button>
                )}
                {data.contact.portfolio && (
                    <Win95Button onClick={() => window.open(data.contact.portfolio, '_blank')}>
                        Portfolio
                    </Win95Button>
                )}
            </div>
        </div>
    );
}; 