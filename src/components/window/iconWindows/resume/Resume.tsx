import { useEffect } from 'react';
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

    useEffect(() => {
        fetchResumeData();
    }, [fetchResumeData]);

    const getStatusMessage = () => {
        if (loading) return 'Loading data...';
        if (error) return error;
        if (viewMode === 'certificates') return `${resumeData.certificates.length} certificates`;
        if (isUsingLocalData) return 'Using local data, information may not be up to date.';
        return 'Resume loaded successfully';
    };

    return (
        <div className="flex flex-col h-full text-xs">
            {/* Header section*/}
            <WindowHeader
                icon={WIN95_ICONS.resume}
                title={viewMode === 'certificates' ? 'Certificates Overview' : `${resumeData.name} Resume`}
                actions={
                    <Win95Button
                        onClick={() => window.open('https://resume-faisal-owimer.vercel.app/', '_blank')}
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
                {loading ? (
                    <div className="h-full flex items-center justify-center">
                        <LoadingIndicator
                            message={dataReady ? "Preparing resume & certificates..." : "Fetching resume & certificates data..."}
                        />
                    </div>
                ) : viewMode === 'certificates' ? (
                    selectedCertificate ? (
                        <CertificateDetails
                            certificateId={selectedCertificate}
                            onClose={() => setSelectedCertificate(null)}
                        />
                    ) : (
                        <CertificatesSection
                            certificates={resumeData.certificates}
                            onSelect={setSelectedCertificate}
                        />
                    )
                ) : (
                    <>
                        <SummarySection data={resumeData} />
                        <ExperienceSection experiences={resumeData.experience} />
                        <EducationSection education={resumeData.education} />
                    </>
                )}
            </div>

            {/* Status Bar section */}
            <WindowStatusBar>
                <div className={`${error ? 'text-red-600' : ''} ${isUsingLocalData ? 'text-yellow-600' : ''}`}>
                    {getStatusMessage()}
                </div>
            </WindowStatusBar>
        </div>
    );
};