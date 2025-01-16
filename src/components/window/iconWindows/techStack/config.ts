interface TechSummaryData {
    experience: string;
    interests: string;
    learning: string;
    status: string;
}

interface DriveItemData {
    label: string;
    icon: string;
    totalSpace: string;
    usedSpace?: string;
}

interface PerformanceMetric {
    label: string;
    value: number;
    category: 'technical' | 'soft';
}

export const TECH_SUMMARY: TechSummaryData = {
    experience: "Full Stack Software Engineer",
    interests: "AI agents, Web Development, SaaS",
    learning: "How to utilize AI agents to move humanity forward and be more lazy",
    status: "Available for opportunities that interest my curiosity and passion in the AI space"
}

export const TECH_SKILLS: DriveItemData[] = [
    {
        label: "Frontend Development (C:)",
        icon: "/icons/browser.png",
        totalSpace: "Next.js, Vite, React, Zustand, TailwindCSS",
        usedSpace: "90%"
    },
    {
        label: "Backend Development (D:)",
        icon: "/icons/backend.png",
        totalSpace: "Node.js, Express, Next.js",
        usedSpace: "85%"
    },
    {
        label: "API Development & Integration (E:)",
        icon: "/icons/drive.png",
        totalSpace: "REST, Clerk, Stripe, Quickbooks, OpenAI",
        usedSpace: "90%"
    },
    {
        label: "Databases (F:)",
        icon: "/icons/database.png",
        totalSpace: "PostgreSQL, Prisma, MongoDB, Redis",
        usedSpace: "80%"
    },
    {
        label: "Security & Authentication (G:)",
        icon: "/icons/auth.png",
        totalSpace: "Clerk, Firebase",
        usedSpace: "85%"
    },
    {
        label: "Cloud & Infrastructure (H:)",
        icon: "/icons/api.png",
        totalSpace: "AWS, Docker, CI/CD",
        usedSpace: "75%"
    },
    {
        label: "Testing & Quality (I:)",
        icon: "/icons/testing.png",
        totalSpace: "Puppeteer, Vitest, Storybook",
        usedSpace: "80%"
    },
    {
        label: "Version Control (J:)",
        icon: "/icons/version_control.png",
        totalSpace: "Git, GitHub",
        usedSpace: "95%"
    },
    {
        label: "Languages & Libraries (K:)",
        icon: "/icons/library.png",
        totalSpace: "Typescript, Shadcn, FramerMotion, Zod, TanStack, MagicUI, Lucid, Pangea, Resend, Sendgrid",
        usedSpace: "88%"
    },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
    // Technical Skills
    {
        label: "Problem Solving & Critical Thinking",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "Data Structures & System Design",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "Object-Oriented Programming",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "Database Management",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "Code Quality & Best Practices",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "Testing & Debugging",
        value: 99.99,
        category: 'technical'
    },
    {
        label: "UI/UX Design",
        value: 99.99,
        category: 'technical'
    },
    // Soft Skills
    {
        label: "Communication & Collaboration",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Adaptability & Flexibility",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Time Management & Organization",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Research & Strategic Analysis",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Project Management",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Knowledge Discovery & Learning",
        value: 99.99,
        category: 'soft'
    },
    {
        label: "Patience & Dedication",
        value: 99.99,
        category: 'soft'
    },
];
