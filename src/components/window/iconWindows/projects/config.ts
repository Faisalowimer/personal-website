export enum ProjectStatus {
    IN_DEVELOPMENT = 'In Development',
    DEPLOYED = 'Deployed',
    COMPLETED_DEVELOPMENT = 'Completed in Development',
    ON_HOLD = 'On Hold',
    PLANNING = 'Planning',
}

interface Project {
    id: string;
    title: string;
    type: string;
    date: string;
    description: string;
    technologies: string[];
    images?: string[];
    status: ProjectStatus;
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
            '/projects/portfolio-9.png',
            '/projects/portfolio-10.png',
            '/projects/portfolio-11.png',
        ],
        status: ProjectStatus.DEPLOYED,
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
        status: ProjectStatus.DEPLOYED,
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
    },
    {
        id: 'project-3',
        title: 'Ihsan App',
        type: 'SaaS',
        date: 'Nov, 2024',
        description: 'A SaaS platform that streamlines nonprofit fundraising by connecting donors with organizations and automating back-office operations. Ihsan App simplifies donation management, enhances donor engagement, and enables organizations to efficiently track fundraising goals through a seamless, user-friendly experience.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Shadcn',
            'Tanstack',
            'Zustand',
            'Zod',
            'Lucid',
            'Stripe',
            'Clerk',
            'Resend',
            'Vercel',
            'Prisma',
            'PostgreSQL',
            'Docker',
            'Google Maps API',
        ],
        // images: [
        //     '',
        // ],
        status: ProjectStatus.IN_DEVELOPMENT,
        links: {
            //live: '',
            github: 'https://github.com/Faisalowimer/ihsan-app'
        },
        role: 'Full Stack',
        contributions: [
            'Implemented custom authentication system using Clerk, supporting both donors and organizations',
            'Developed multi-organization management system, allowing users to create and manage multiple organizations while inviting members with role-based access control',
            'Donor dashboard where users can view their subscriptions, donation history, and payment details in real-time',
            'Organization platform that enables nonprofits to track donations, payment activities, and track fundraising goals through an interactive dashboard',
            'Developed a custom Stripe Connect integration to onboard organizations, allowing them to manage transactions, payouts, and financial records seamlessly',
            'Integrated Resend for transactional emails, ensuring donation confirmations, membership invitations, and notifications are delivered reliably',
            'Implemented webhooks for Stripe and Clerk, ensuring real-time updates on transactions, user authentication, and system events',
            'Designed and optimized a PostgreSQL database schema with 7 models, supporting one-to-one, one-to-many, and many-to-many relationships for users, organizations, donations, and payment records',
            'Built a cutomized public donation page, allowing organizations to tailor their donation experience with branding and payment options',
            'Integrated Google Maps API to enhance the onboarding experience and verify nonprofit locations',
            'Designed a responsive, mobile-friendly UI using Tailwind CSS and Shadcn for a clean and modern user experience',
        ]
    },
    {
        id: 'project-4',
        title: 'Algorithm Visualizer',
        type: 'Web App',
        date: 'Oct, 2024',
        description: 'A web application that visualizes search, sorting, and pathfinding algorithms, providing a clear and interactive way to understand how they work.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Framer Motion'
        ],
        images: [
            '/projects/algorithm-1.png',
            '/projects/algorithm-2.png',
            '/projects/algorithm-3.png',
            '/projects/algorithm-4.png',
            '/projects/algorithm-5.png',
            '/projects/algorithm-6.png',
        ],
        status: ProjectStatus.DEPLOYED,
        links: {
            live: 'https://faisal-algorithms.vercel.app/',
            github: 'https://github.com/Faisalowimer/faisal-algorithms'
        },
        role: 'Frontend',
        contributions: [
            'Developed a responsive and interactive algorithm visualizer using React and Framer Motion',
            'Implemented a clean and modern UI using Tailwind CSS',
            'Utilized Framer Motion for smooth animations and transitions',
            'Deployed the project using Vercel for fast and efficient hosting',
        ]
    },
    {
        id: 'project-5',
        title: 'Art Social Media',
        type: 'Social Media App',
        date: 'Oct, 2024',
        description: 'A social media platform to generate and favorite art.',
        technologies: [
            'Next.js',
            'Vite',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Shadcn',
            'Zod',
            'Lucid',
            'Clerk',
            'Prisma',
            'PostgreSQL',
            'Docker',
            'Express',
            'Cors',
            'Axios',
            'p5',
            'Storybook'
        ],
        // images: [
        //     '',
        // ],
        status: ProjectStatus.COMPLETED_DEVELOPMENT,
        links: {
            //live: '',
            github: 'https://github.com/fractal-bootcamp/faisal-socialArt'
        },
        role: 'Full Stack',
        contributions: [
            'Developed a responsive and interactive social media platform using Next.js and Tailwind CSS for the frontend',
            'Developed a RESTful API using Express and PostgreSQL for backend functionality',
            'Integrated Clerk for authentication and user management',
            'Implemented a custom database schema with Prisma for efficient data storage and retrieval',
            'Utilized p5.js for interactive art creation and visualization',
        ]
    },
    {
        id: 'project-6',
        title: 'Invisible Hand',
        type: 'Web Scraper',
        date: 'Nov, 2024',
        description: 'A dynamic web scraper designed to extract real-time pricing and inventory data from Costco’s health and beauty category, supporting automated data processing for dynamic pricing recommendations for supermarkets and grocery stores clients.',
        technologies: [
            'Puppeteer',
            'Node.js',
            'TypeScript',
            'GraphQL',
            'Cron Jobs',
        ],
        status: ProjectStatus.DEPLOYED,
        links: {
            github: 'https://github.com/Faisalowimer/faisal-invisible-hand'
        },
        role: 'Backend',
        contributions: [
            'Developed a dynamic web scraper using Puppeteer to extract real-time product details, pricing, stock levels, and metadata from Costco’s health and beauty category',
            'Intercepted GraphQL network requests to capture structured product data efficiently instead of relying on traditional DOM scraping',
            'Designed an automated file generation system that outputs the scraped data in a structured format with specific naming conventions and timestamped file exports',
            'Implemented a cron job to run the scraper at scheduled intervals, ensuring continuous data updates for real-time pricing analysis',
            'Optimized Puppeteer request interception and parallel execution to improve scraping speed and reduce redundant requests',
            'Built error handling and retry logic to handle dynamic changes in the website’s structure and avoid anti-bot detection mechanisms',
            'Enabled scalability by designing the scraper to be easily adaptable for other categories, supermarkets and grocery store websites in the future',
        ]
    },
    {
        id: 'project-7',
        title: 'Task Manager',
        type: 'Web App',
        date: 'Nov, 2024',
        description: 'An AI-powered task management application that enables users to create, manage, and track tasks efficiently. Features smart categorization, real-time updates, and a clean, interactive UI for better productivity.',
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'React',
            'Shadcn',
            'Zod',
            'Open AI API'
        ],
        // images: [
        //     '',
        // ],
        status: ProjectStatus.COMPLETED_DEVELOPMENT,
        links: {
            github: 'https://github.com/Faisalowimer/faisal-task-manager'
        },
        role: 'Full Stack',
        contributions: [
            'Developed a modern, responsive task management UI using Next.js, Tailwind CSS, and Shadcn for an intuitive user experience',
            'Implemented a real-time task tracking system, ensuring dynamic updates for task creation, completion, and status changes',
            'Integrated Zustand for lightweight state management, allowing seamless task updates and global state persistence',
            'Built AI-powered task automation by integrating OpenAI API, enabling smart task creation, categorization, and recommendations',
            'Implemented Zod validation for form handling, ensuring clean and structured task data entry',
            'Created a dark mode toggle for better accessibility and user preference customization',
        ]
    },
    // {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },
    // {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },
    // {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },// {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },
    // {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },// {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },
    // {
    //     id: 'project-',
    //     title: '',
    //     type: '',
    //     date: '',
    //     description: '',
    //     technologies: [
    //         '',
    //     ],
    //     images: [
    //         '',
    //     ],
    //     status: ProjectStatus.DEPLOYED,
    //     links: {
    //         live: '',
    //         github: ''
    //     },
    //     role: '',
    //     contributions: [
    //         '',
    //     ]
    // },
]; 