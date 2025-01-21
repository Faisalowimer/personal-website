import { ResumeData } from '@/types/resume';
import { Win95Button } from '@/components/ui/Win95Button';
import { useWindowStore } from '@/store/useWindowStore';

interface SummarySectionProps {
    data: ResumeData;
    onLinkClick: (link: string) => void;
}

export const SummarySection = ({ data, onLinkClick }: SummarySectionProps) => {
    const { openWindow } = useWindowStore();

    return (
        <div className="mb-4">
            {/* Summary Header */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h1 className="text-xl font-bold">{data.contact.name}</h1>
                    <h2 className="text-md">{data.contact.location}</h2>
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

            {/* TODO: Add general summary */}
            {/* <p className="text-gray-700 mb-3">{data.summary}</p> */}

            {/* Social Links */}
            <div>
                <Win95Button onClick={() => onLinkClick(data.contact.linkedinUrl)}>
                    LinkedIn
                </Win95Button>
                <Win95Button onClick={() => onLinkClick(data.contact.githubUrl)}>
                    GitHub
                </Win95Button>
                {data.contact.personalWebsiteUrl && (
                    <Win95Button onClick={() => onLinkClick(data.contact.personalWebsiteUrl!)}>
                        Portfolio
                    </Win95Button>
                )}
            </div>
        </div>
    );
}; 