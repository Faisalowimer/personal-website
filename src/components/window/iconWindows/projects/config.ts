interface Project {
    id: string;
    title: string;
    type: string;
    date: string;
    description: string;
    technologies: string[];
    images: string[];
    links: {
        demo?: string;
        github?: string;
        live?: string;
    };
    role: string;
    contributions: string[];
}

export const PROJECTS: Project[] = [
    {
        id: 'project-1',
        title: 'Personal Portfolio',
        type: 'Web App',
        date: 'Jan, 2025',
        description: 'A Windows 95-themed personal portfolio designed as an interactive experience, showcasing my skills, projects, and personality in a nostalgic yet modern UI.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Zustand',
            'Pangea',
            'Resend',
        ],
        images: [
            '/projects/portfolio-1.png',
            '/projects/portfolio-2.png',
            '/projects/portfolio-3.png',
            '/projects/portfolio-4.png',
            '/projects/portfolio-5.png',
            '/projects/portfolio-6.png',
            '/projects/portfolio-7.png',
            '/projects/portfolio-8.png',
        ],
        links: {
            github: 'https://github.com/Faisalowimer/personal-website',
            //demo: 'https://owimer.co',
            //live: 'https://owimer.co'
        },
        role: 'Full Stack',
        contributions: [
            'Designed and implemented an interactive Windows 95-style UI, balancing nostalgia with modern usability',
            'Global state management using Zustand for for seamless state management and persistent user settings',
            'Implemented draggable icons, and resizable components for a responsive desktop and mobile-friendly experience',
            'Created adaptive layouts and smooth animations using Tailwind CSS for enhanced user interaction',
            'Integrated a real-time endpoint with my React-based Resume, enabling dynamic content updates',
            'Implemented Resend for seamless email functionality in the contact form',
        ]
    },
    {
        id: 'project-2',
        title: 'React Resume',
        type: 'Web App',
        date: 'Jan, 2025',
        description: 'A modern, interactive, and fully customizable resume built using Next.js, allowing real-time content updates via API endpoints.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'API endpoints',
            'Lucid',
            'Vercel',
        ],
        images: [
            '/projects/resume-1.png',
        ],
        links: {
            live: 'https://resume-faisal-owimer.vercel.app/',
            github: 'https://github.com/Faisalowimer/resume'
        },
        role: 'Frontend',
        contributions: [
            'Developed a fully responsive and interactive resume using Next.js and Tailwind CSS',
            'Implemented a dynamic API-powered content system, allowing real-time updates via JSON endpoints',
            'Integrated Lucid library to enhance visual appeal',
            'Deployed the project seamlessly using Vercel for fast and efficient hosting',
            'Built a clean UI with a minimalist design, focusing on readability and accessibility',
            'Optimized the rendering performance for smooth navigation and page transitions',
            'Implemented print and PDF download functionality for easy resume sharing.'
        ]
    }
]; 