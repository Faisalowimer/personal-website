export interface ContactInfo {
    name: string;
    location: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    personalWebsiteUrl?: string;
}

export interface ExperienceType {
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    jobSummary: string;
    date: string;
    description: string[];
}

export interface EducationType {
    degree: string;
    school: string;
    location: string;
    date: string;
    gpa?: string;
    honors?: string;
}

export type CertificateType = 'Professional' | 'Educational';

export interface Certificate {
    id: string;
    title: string;
    name: string;
    issuer: string;
    url: string;
    date: string;
    type: CertificateType;
    file?: string;
}

export interface ResumeData {
    contact: ContactInfo;
    experience: ExperienceType[];
    education: EducationType[];
    certificates: Certificate[];
}