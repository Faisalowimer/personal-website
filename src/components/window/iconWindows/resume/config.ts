import { ResumeData } from '@/types/resume';
import { faisalContact } from '@/utils/contactUtils';

export const RESUME_DATA: ResumeData = {
    contact: {
        name: "Faisal Owimer",
        location: faisalContact.Location,
        phone: faisalContact.Phone,
        email: faisalContact.Email,
        linkedinUrl: faisalContact.LinkedIn,
        githubUrl: faisalContact.GitHub,
        personalWebsiteUrl: faisalContact.PersonalWebsite
    },
    experience: [
        {
            title: "Founder",
            company: "Ihsan Tech, Inc.",
            companyUrl: "https://ihsan.tech",
            location: "Manhattan, NY",
            date: "Nov 2024 - Present",
            jobSummary: "Founded a platform connecting Muslim communities with mosques, processing +$19k in donations, supporting community fundraising, events, and streamlining back-office management.",
            description: [
                "Designed and implemented responsive, feature-rich frontend using Next.js, ClerkAuth, React, Zustand, Shadcn, TailwindCSS, and Framer Motion, ensuring seamless user interface and experience",
                "Built scalable backend and database infrastructure using Docker, Redis caching, and Prisma ORM, with comprehensive RESTful API integrations (Stripe, Clerk, SendGrid, Resend, QuickBooks)",
            ]
        },
        {
            title: "Software Engineer",
            company: "Fractal Tech",
            companyUrl: "https://fractalbootcamp.com/",
            location: "Brooklyn, NY",
            jobSummary: "Transitioned to full-stack development, building production-ready applications through intensive bootcamp training in frontend and backend technologies with 1000+ commits and 300+ PRs with >860 hours hands on keyboard.",
            date: "Sep 2024 – Present",
            description: [
                "Developed a range of applications using TypeScript, Next.js, Vite, React, TanStack, Zod, MagicUI, Firebase, Express, WebSockets, OpenAI, Vercel, Netlify, and AWS",
                "Automated data scraping, browser workflows, and UI testing with Puppeteer, Storybook, and Vitest for data aggregation, insights, and reducing manual QA",
            ]
        },
        {
            title: "Product Manager",
            company: "Adaptive Investment Solutions",
            companyUrl: "https://adaptive-investments.com/app/home",
            location: "Manhattan, NY",
            jobSummary: "Led product management and business development efforts to raise seed round.",
            date: "Jun 2020 – May 2024",
            description: [
                "Spearheaded product discovery and pilot user onboarding, increasing user traction and identifying product-market fit",
                "Participated in raising $750K in pre-seed and $1M in bridge funding, collaborating with founders on investor pitches",
                "Developed go-to-market strategy and internal workflows to streamline business operations and product launch",
            ]
        },
        {
            title: "Business Development Manager",
            company: "Saudi Modern Factory",
            companyUrl: "https://www.smf.com.sa/",
            location: "Riyadh, Saudi Arabia",
            jobSummary: "Directed initiatives to increase market share, launch new products, projects, and enhance brand visibility.",
            date: "Jun 2016 – Aug 2018",
            description: [
                "Exceeded annual sales target by 124% (+$1.6M), acquiring 20 new clients and securing $500K in partnerships",
                "Implemented marketing strategies for website and product catalogs to boost brand visibility and drive sales growth",
                "Negotiated high-value contracts and cultivated client relationships, contributing to long-term revenue growth",
            ]
        }
    ],
    education: [
        {
            degree: "Master of Science in Finance",
            school: "Hult International Business School",
            location: "Boston, MA",
            date: "Mar 2020",
            honors: "Dean's List"
        },
        {
            degree: "Master of Science in International Business",
            school: "Hult International Business School",
            location: "Boston, MA",
            date: "Aug 2019",
        },
        {
            degree: "Bachelor of Science in Business Administration, Finance Major",
            school: "Alfaisal University",
            location: "Riyadh, Saudi Arabia",
            date: "Jan 2016",
            honors: "Dean's List"
        }
    ],
    certificates: [
        {
            id: 'cert-1',
            title: 'CFI level I',
            name: 'Chartered Financial Analyst',
            issuer: 'CFA Institute',
            url: 'https://www.cfainstitute.org/programs/cfa-program/candidate-resources/level-i-exam',
            date: 'Dec 2019',
            type: 'Professional',
            file: '/certificates/cfa.pdf'
        },
        {
            id: 'cert-2',
            title: 'FMVA',
            name: 'Financial Modeling & Valuation Analyst',
            issuer: 'CFI Institute',
            url: 'https://corporatefinanceinstitute.com/certifications/financial-modeling-valuation-analyst-fmva-program/',
            date: 'Apr 2020',
            type: 'Professional',
            file: '/certificates/cfi.pdf'
        },
        {
            id: 'cert-3',
            title: 'Full Stack Bootcamp',
            name: 'Full Stack Bootcamp',
            issuer: 'Fractal Tech',
            url: 'https://fractalbootcamp.com/',
            date: 'Dec 2024',
            type: 'Professional',
            file: '/certificates/fractal.pdf'
        }
    ]
}; 