import { Win95Button } from '@/components/ui/Win95Button';
import { RESUME_DATA } from '@/components/window/iconWindows/resume/config';
import Image from 'next/image';

interface CertificateDetailsProps {
    certificateId: string;
    onClose: () => void;
    onLinkClick: (url: string) => void;
}

export const CertificateDetails = ({ certificateId, onClose, onLinkClick }: CertificateDetailsProps) => {
    const certificate = RESUME_DATA.certificates.find(c => c.id === certificateId);
    if (!certificate) return null;

    const shouldShowName = certificate.title !== certificate.name;

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-400">
                <div className="flex items-center gap-2">
                    <Image
                        src="/icons/certificates.png"
                        alt={certificate.title}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span className="text-sm font-bold">{certificate.title}</span>
                </div>
                <Win95Button onClick={onClose}>Close</Win95Button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
                {/* Certificate Image */}
                <div className="mb-6">
                    <div className="border-2 border-gray-400 bg-gray-100 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
                        <Image
                            src={certificate.file || ''}
                            alt={`${certificate.title} certificate`}
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Certificate Info */}
                <div className="grid gap-6">
                    {/* Details */}
                    <div>
                        <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Certificate Details</h3>
                        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                            <span className="text-gray-600">Title:</span>
                            <span>{certificate.title}</span>
                            {shouldShowName && (
                                <>
                                    <span className="text-gray-600">Name:</span>
                                    <span>{certificate.name}</span>
                                </>
                            )}
                            <span className="text-gray-600">Issuer:</span>
                            <span className="hover:underline cursor-pointer" onClick={() => certificate.url && onLinkClick(certificate.url)}>
                                {certificate.issuer}</span>
                            <span className="text-gray-600">Date:</span>
                            <span>{certificate.date}</span>
                            <span className="text-gray-600">Type:</span>
                            <span>{certificate.type}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 