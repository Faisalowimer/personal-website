interface DriveItemData {
    label: string;
    icon: string;
    totalSpace: string;
    usedSpace?: string;
}

interface PerformanceMetric {
    label: string;
    value: number;
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
        icon: "/icons/drive.png",
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
        icon: "/icons/drive.png",
        totalSpace: "PostgreSQL, Prisma, MongoDB, Redis",
        usedSpace: "80%"
    },
    {
        label: "Authentication & Security (G:)",
        icon: "/icons/password_generator.png",
        totalSpace: "Clerk, Firebase",
        usedSpace: "85%"
    },
    {
        label: "Cloud & DevOps (H:)",
        icon: "/icons/drive.png",
        totalSpace: "AWS, Docker, CI/CD",
        usedSpace: "75%"
    },
    {
        label: "Testing & Quality (I:)",
        icon: "/icons/drive.png",
        totalSpace: "Puppeteer, Vitest, Storybook",
        usedSpace: "80%"
    },
    {
        label: "Version Control (J:)",
        icon: "/icons/drive.png",
        totalSpace: "Git, GitHub",
        usedSpace: "95%"
    },
    {
        label: "Languages & Libraries (K:)",
        icon: "/icons/drive.png",
        totalSpace: "Typescript, Shadcn, FramerMotion, Zod, TanStack, MagicUI, Lucid, Pangea, Resend, Sendgrid",
        usedSpace: "88%"
    },
];

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
    {
        label: "Problem Solving",
        value: 99.99
    },
    {
        label: "Team Collaboration",
        value: 99.99
    },
    {
        label: "Learning Speed",
        value: 99.99
    },
    {
        label: "Code Quality",
        value: 99.99
    },
    {
        label: "System Design",
        value: 99.99
    },
    {
        label: "Documentation",
        value: 99.99
    }
];