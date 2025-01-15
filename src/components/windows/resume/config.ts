export interface Experience {
    title: string;
    company: string;
    location: string;
    date: string;
    points: string[];
}

export interface Education {
    degree: string;
    school: string;
    location: string;
    date: string;
    details?: string[];
}

export interface Skill {
    category: string;
    items: string[];
}

interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    type: string;
    file?: string;
}

export interface ResumeData {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        location: string;
        github?: string;
        linkedin?: string;
        portfolio?: string;
    };
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    certificates: Certificate[];
}

export const RESUME_DATA: ResumeData = {
    name: "Faisal Owimer",
    title: "Full Stack Software Engineer",
    summary: "Experienced software engineer with a passion for building innovative web applications and solving complex problems.",
    contact: {
        email: "faisalowimer@gmail.com",
        location: "San Francisco Bay Area",
        github: "https://github.com/Faisalowimer",
        linkedin: "https://linkedin.com/in/faisalowimer",
        portfolio: "https://faisalowimer.com"
    },
    experience: [
        {
            title: "Full Stack Software Engineer",
            company: "Company Name",
            location: "San Francisco, CA",
            date: "2023 - Present",
            points: [
                "Developed and maintained full-stack web applications using Next.js, TypeScript, and Node.js",
                "Implemented responsive UI components and improved application performance",
                "Collaborated with cross-functional teams to deliver high-quality software solutions"
            ]
        }
        // Add more experiences...
    ],
    education: [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University Name",
            location: "City, State",
            date: "2019 - 2023",
            details: [
                "Relevant coursework: Data Structures, Algorithms, Web Development",
                "GPA: 3.8/4.0"
            ]
        }
    ],
    skills: [
        {
            category: "Languages",
            items: ["TypeScript", "JavaScript", "Python", "SQL"]
        },
        {
            category: "Frontend",
            items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "PostgreSQL", "MongoDB"]
        },
        {
            category: "Tools",
            items: ["Git", "Docker", "AWS", "Vercel"]
        }
    ],
    certificates: [
        {
            id: 'cert-1',
            title: 'CFI level I',
            issuer: 'CFA Institute',
            date: 'Dec 2023',
            type: 'Professional Certification',
            file: '/certificates/aws-cert.pdf'
        },
        {
            id: 'cert-2',
            title: 'FMVA ',
            issuer: 'CFI Institute',
            date: 'Nov 2023',
            type: 'Course Certificate',
            file: '/certificates/meta-cert.pdf'
        }
    ]
}; 