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
        description: 'A Windows 95-themed personal portfolio website showcasing my projects and skills.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Zustand'
        ],
        images: [
            '/projects/portfolio-1.png',
            '/projects/portfolio-2.png'
        ],
        links: {
            github: 'https://github.com/username/portfolio',
            live: 'https://portfolio.com'
        },
        role: 'Full Stack Developer',
        contributions: [
            'Designed and implemented Windows 95-style UI components',
            'Built state management system using Zustand',
            'Implemented drag and drop functionality',
            'Created responsive layouts and animations'
        ]
    },
    {
        id: 'project-2',
        title: 'E-commerce Platform',
        type: 'AI',
        date: 'Dec, 2024',
        description: 'A modern e-commerce platform with real-time inventory management.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Prisma',
            'PostgreSQL',
            'Stripe'
        ],
        images: [
            '/projects/ecommerce-1.png',
            '/projects/ecommerce-2.png'
        ],
        links: {
            demo: 'https://demo.ecommerce.com',
            github: 'https://github.com/username/ecommerce'
        },
        role: 'Full Stack Developer',
        contributions: [
            'Implemented Stripe payment integration',
            'Built real-time inventory tracking system',
            'Created admin dashboard for order management',
            'Optimized database queries and API endpoints'
        ]
    }
]; 