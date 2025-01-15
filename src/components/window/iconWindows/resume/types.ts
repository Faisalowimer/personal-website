export type ViewMode = 'resume' | 'certificates';

export type SortKey = 'date' | 'type';

export interface Experience {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    jobSummary: string;
    date: string;
    points: string[];
}

export interface Education {
    degree: string;
    school: string;
    location: string;
    date: string;
    gpa: string;
    honors?: string;
}

export type CertificateType = 'Professional' | 'Educational';

export interface Certificate {
    id: string;
    title: string;
    name: string;
    issuer: string;
    url?: string;
    date: string;
    type: CertificateType;
    file?: string;
}

export interface ResumeData {
    name: string;
    title: string;
    summary?: string;
    contact: {
        email: string;
        phone: string;
        location: string;
        github?: string;
        linkedin?: string;
        portfolio?: string;
    };
    experience: Experience[];
    education: Education[];
    certificates: Certificate[];
}
