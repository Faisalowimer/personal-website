import { Win95Button } from '@/components/ui/Win95Button';
import { LoadingIndicator } from '@/components/ui/LoadingIndicator';
import { CertificateDetails } from './CertificateDetails';
import { useState, useEffect } from 'react';
import { RESUME_DATA, ResumeData } from './config';
import Image from 'next/image';

type ViewMode = 'resume' | 'certificates';

// Set to true to test loading state
const TESTING_MODE = true;
const ARTIFICIAL_DELAY = 3000; // 3 seconds delay

export const Resume = () => {
    const [resumeData, setResumeData] = useState<ResumeData>(RESUME_DATA);
    const [loading, setLoading] = useState(true);
    const [dataReady, setDataReady] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<ViewMode>('resume');
    const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

    useEffect(() => {
        const fetchResumeData = async () => {
            try {
                if (TESTING_MODE) {
                    // Simulate API call with delay
                    await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY));
                    setResumeData(RESUME_DATA);
                    setError(null);
                } else {
                    const response = await fetch('https://resume-faisalowimer.vercel.app/api/resume');
                    if (!response.ok) throw new Error('Failed to fetch resume data');
                    const data = await response.json();
                    setResumeData(data);
                    setError(null);
                }
            } catch (err) {
                console.error('Error fetching resume data:', err);
                setError('Using local data - Could not sync with resume site');
            } finally {
                setDataReady(true);
            }
        };

        fetchResumeData();
    }, []);

    const handleLoadingComplete = () => {
        setLoading(false);
    };

    const renderCertificates = () => (
        <div className="grid gap-1">
            {resumeData.certificates.map((cert) => (
                <div
                    key={cert.id}
                    onClick={() => setSelectedCertificate(cert.id)}
                    className="flex items-center gap-2 p-1 hover:bg-[#000080]/10 cursor-pointer"
                >
                    <Image
                        src="/icons/certificates.png"
                        alt={cert.title}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 flex-1">
                        <span>{cert.title}</span>
                        <span className="text-gray-600">{cert.issuer}</span>
                        <span className="text-gray-600">{cert.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-400">
                <div className="flex items-center gap-2">
                    <Image
                        src="/icons/resume.png"
                        alt="Resume"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span className="text-sm font-bold">{resumeData.name} - Resume</span>
                </div>
                <Win95Button onClick={() => window.print()}>Print</Win95Button>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-4 p-2 border-b border-gray-400">
                <div className="flex">
                    <Win95Button
                        active={viewMode === 'resume'}
                        onClick={() => setViewMode('resume')}
                    >
                        Resume
                    </Win95Button>
                    <Win95Button
                        active={viewMode === 'certificates'}
                        onClick={() => setViewMode('certificates')}
                    >
                        Certificates
                    </Win95Button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
                {(loading || !dataReady) ? (
                    <div className="flex items-center justify-center h-full">
                        <LoadingIndicator
                            message={dataReady ? "Preparing resume & certificates..." : "Fetching resume & certificates data..."}
                            onComplete={handleLoadingComplete}
                        />
                    </div>
                ) : viewMode === 'certificates' ? (
                    selectedCertificate ? (
                        <CertificateDetails
                            certificateId={selectedCertificate}
                            onClose={() => setSelectedCertificate(null)}
                        />
                    ) : (
                        renderCertificates()
                    )
                ) : (
                    <>
                        {/* Header Section */}
                        <div className="mb-6">
                            <h1 className="text-xl font-bold mb-1">{resumeData.name}</h1>
                            <h2 className="text-md mb-2">{resumeData.title}</h2>
                            <p className="mb-2">{resumeData.summary}</p>
                            <div className="grid grid-cols-2 gap-2 text-gray-600">
                                <span>📧 {resumeData.contact.email}</span>
                                <span>📍 {resumeData.contact.location}</span>
                                {resumeData.contact.github && (
                                    <span className="hover:underline cursor-pointer" onClick={() => window.open(resumeData.contact.github, '_blank')}>
                                        GitHub: {resumeData.contact.github}
                                    </span>
                                )}
                                {resumeData.contact.linkedin && (
                                    <span className="hover:underline cursor-pointer" onClick={() => window.open(resumeData.contact.linkedin, '_blank')}>
                                        LinkedIn: {resumeData.contact.linkedin}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Experience Section */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Experience</h3>
                            <div className="grid gap-4">
                                {resumeData.experience.map((exp, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <div>
                                                <span className="font-bold">{exp.title}</span>
                                                <span className="mx-2">@</span>
                                                <span>{exp.company}</span>
                                            </div>
                                            <span className="text-gray-600">{exp.date}</span>
                                        </div>
                                        <div className="text-gray-600 mb-1">{exp.location}</div>
                                        <ul className="list-disc pl-4">
                                            {exp.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Education</h3>
                            <div className="grid gap-4">
                                {resumeData.education.map((edu, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold">{edu.degree}</span>
                                            <span className="text-gray-600">{edu.date}</span>
                                        </div>
                                        <div className="text-gray-600 mb-1">{edu.school}, {edu.location}</div>
                                        {edu.details && (
                                            <ul className="list-disc pl-4">
                                                {edu.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div>
                            <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Skills</h3>
                            <div className="grid gap-4">
                                {resumeData.skills.map((skill, index) => (
                                    <div key={index}>
                                        <span className="font-bold">{skill.category}: </span>
                                        <span>{skill.items.join(', ')}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-2 py-1 border-t border-gray-400">
                <span>
                    {error || (
                        <div className="flex items-center gap-2">
                            <span>You can view original resume here</span>
                            <Win95Button
                                onClick={() => window.open('https://resume-faisalowimer.vercel.app', '_blank')}
                            >
                                View Original
                            </Win95Button>
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
};