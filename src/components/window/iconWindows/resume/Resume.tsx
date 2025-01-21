import { Modal } from '@/components/ui/Modal';
import { Win95Button } from '@/components/ui/Win95Button';
import { WIN95_ICONS } from '@/store/useWindowStore';
import { WindowHeader } from '@/components/window/WindowHeader';
import { WindowToolbar } from '@/components/window/WindowToolbar';
import { useResumeStore } from '@/store/useResumeStore';
import { SummarySection } from '@/components/window/iconWindows/resume/sections/SummarySection';
import { WindowStatusBar } from '@/components/window/WindowStatusBar';
import { LoadingIndicator } from '@/components/ui/LoadingIndicator';
import { EducationSection } from '@/components/window/iconWindows/resume/sections/EducationSection';
import { ExperienceSection } from '@/components/window/iconWindows/resume/sections/ExperienceSection';
import { CertificateDetails } from '@/components/window/iconWindows/resume/CertificateDetails';
import { CertificatesSection } from '@/components/window/iconWindows/resume/sections/CertificatesSection';
import { useEffect, useState } from 'react';

export const Resume = () => {
    const {
        resumeData,
        loading,
        dataReady,
        error,
        viewMode,
        selectedCertificate,
        isUsingLocalData,
        setViewMode,
        setSelectedCertificate,
        fetchResumeData
    } = useResumeStore();

    const [modalContent, setModalContent] = useState<{ type: 'link', content: string } | null>(null);

    useEffect(() => {
        fetchResumeData();
    }, [fetchResumeData]);

    const handleLinkClick = (link: string) => {
        setModalContent({ type: 'link', content: link });
    };

    const getStatusMessage = () => {
        if (loading) return 'Loading data...';
        if (error) return error;
        if (viewMode === 'certificates') return `${resumeData?.certificates?.length || 0} certificates`;
        if (isUsingLocalData) return 'Using local data, information may not be up to date.';
        return 'Resume loaded successfully';
    };

    // Show loading indicator until data is ready
    if (loading || !dataReady) {
        return (
            <div className="flex flex-col h-full text-xs">
                <WindowHeader
                    icon={WIN95_ICONS.resume}
                    title="Loading Resume..."
                />
                <div className="flex-1 p-2 overflow-auto">
                    <div className="h-full flex items-center justify-center">
                        <LoadingIndicator
                            message={dataReady ? "Preparing resume & certificates..." : "Fetching resume & certificates data..."}
                        />
                    </div>
                </div>
                <WindowStatusBar>
                    <div>{getStatusMessage()}</div>
                </WindowStatusBar>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-xs">
            {/* Header section*/}
            <WindowHeader
                icon={WIN95_ICONS.resume}
                title={viewMode === 'certificates' ? 'Certificates Overview' : `${resumeData.contact.name} Resume`}
                actions={
                    <Win95Button
                        onClick={() => handleLinkClick('https://resume-faisal-owimer.vercel.app/')}
                    >
                        View Original
                    </Win95Button>
                }
            />

            {/* Toolbar section */}
            <WindowToolbar>
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
            </WindowToolbar>

            <div className="flex-1 p-2 overflow-auto">
                {viewMode === 'certificates' ? (
                    selectedCertificate ? (
                        <CertificateDetails
                            certificateId={selectedCertificate}
                            onClose={() => setSelectedCertificate(null)}
                            onLinkClick={handleLinkClick}
                        />
                    ) : (
                        <CertificatesSection
                            certificates={resumeData.certificates}
                            onSelect={setSelectedCertificate}
                            onLinkClick={handleLinkClick}
                        />
                    )
                ) : (
                    <>
                        <SummarySection data={resumeData} onLinkClick={handleLinkClick} />
                        <ExperienceSection experiences={resumeData.experience} onLinkClick={handleLinkClick} />
                        <EducationSection education={resumeData.education} onLinkClick={handleLinkClick} />
                    </>
                )}
            </div>

            {/* Status Bar section */}
            <WindowStatusBar>
                <div className={`${error ? 'text-red-600' : ''} ${isUsingLocalData ? 'text-yellow-600' : ''}`}>
                    {getStatusMessage()}
                </div>
            </WindowStatusBar>

            {/* Modal for links */}
            <Modal
                isOpen={modalContent !== null}
                onClose={() => setModalContent(null)}
                type={modalContent?.type || 'link'}
                content={modalContent?.content || ''}
                title="External Link"
            />
        </div>
    );
};