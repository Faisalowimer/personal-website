import { SortKey } from '@/components/window/iconWindows/resume/types';
import { useState } from 'react';
import { Certificate } from '@/components/window/iconWindows/resume/types';
import { SortingButton } from '@/components/ui/sortingButton';
import Image from 'next/image';

interface CertificatesSectionProps {
    certificates: Certificate[];
    onSelect: (id: string) => void;
    onLinkClick: (url: string) => void;
}

export const CertificatesSection = ({ certificates, onSelect }: CertificatesSectionProps) => {
    const [sortKey, setSortKey] = useState<SortKey>('date');

    const sortedCertificates = [...certificates].sort((a, b) => {
        if (sortKey === 'date') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.type.localeCompare(b.type);
    });

    return (
        <div className="flex flex-col h-full text-xs">
            {/* Toolbar */}
            <div className="flex items-center border-b pb-2 border-gray-400">
                <div>
                    <SortingButton
                        sortKey={sortKey}
                        onSortChange={setSortKey}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto mt-2">
                <div className="grid gap-1">
                    {sortedCertificates.map((cert) => (
                        <div
                            key={cert.id}
                            onClick={() => onSelect(cert.id)}
                            className="flex items-center p-1 hover:bg-[#000080]/10 cursor-pointer"
                        >
                            <Image
                                src="/icons/certificates.png"
                                alt={cert.title}
                                width={16}
                                height={16}
                                className="w-4 h-4"
                            />
                            <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 flex-1 ml-2">
                                <span>{cert.title}</span>
                                <span className="text-gray-600">{cert.type}</span>
                                <span className="text-gray-600">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 