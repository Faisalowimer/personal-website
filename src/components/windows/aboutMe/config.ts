type AboutMeSections = {
    [key: string]: string;
};

export type TabType = 'personal' | 'journey' | 'interests' | 'education';

export const TABS: { id: TabType; label: string }[] = [
    { id: 'personal', label: 'Story' },
    { id: 'journey', label: 'Journey' },
    { id: 'interests', label: 'Interests' },
    { id: 'education', label: 'Education' },
];

export const ABOUT_ME_SECTIONS: AboutMeSections = {
    personal: `Hello! 👋 

I'm Faisal Owimer, a passionate software engineer with a love for creating elegant solutions to complex problems. Born and raised in Saudi Arabia, I've always been fascinated by technology and its potential to transform lives.

What drives me:
• Building intuitive and impactful applications
• Solving real-world problems through code
• Continuous learning and growth
• Contributing to the tech community

When I'm not coding, you might find me exploring new technologies, reading about AI advancements, or working on side projects that challenge my creativity.`,

    journey: `Professional Journey:

🚀 Current Focus
• Full Stack Development with Next.js and TypeScript
• Building scalable web applications
• Exploring AI/ML integration in web apps

💼 Experience Highlights
• Developed and maintained multiple production applications
• Worked with diverse tech stacks and frameworks
• Led technical implementations of various features
• Collaborated with cross-functional teams

🛠 Core Strengths
• Full Stack Development
• Problem Solving
• Technical Architecture
• Team Collaboration`,

    interests: `Interests & Hobbies:

🖥 Tech Interests
• Artificial Intelligence & Machine Learning
• Web Development & Modern Frameworks
• Open Source Contributions
• System Architecture & Design

🎯 Personal Interests
• Reading Tech Blogs & Documentation
• Contributing to Developer Communities
• Learning New Programming Languages
• Building Side Projects

🌟 Current Focus Areas
• Exploring AI/ML Applications
• Improving Developer Experience
• Learning about Scalable Systems
• Contributing to Open Source`,

    education: `Education & Learning:

🎓 Formal Education
• Bachelor's in Computer Science
• Various Technical Certifications

📚 Continuous Learning
• Online Courses & Workshops
• Technical Documentation
• Developer Conferences
• Community Meetups

🌱 Current Learning Goals
• Advanced AI/ML Concepts
• System Design Patterns
• Cloud Architecture
• Performance Optimization`
}; 