import { Experience } from '@/components/window/iconWindows/resume/types';

interface ExperienceSectionProps {
    experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-bold mb-3 border-b border-gray-400">Experience</h3>
            <div className="grid gap-6">
                {experiences.map((exp, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <div>
                                <span className="font-bold">{exp.title}</span>
                                <span className="mx-2">@</span>
                                <span className="hover:underline cursor-pointer" onClick={() => exp.companyUrl && window.open(exp.companyUrl, '_blank')}>
                                    {exp.company}
                                </span>
                            </div>
                            <span className="text-gray-600">{exp.date}</span>
                        </div>
                        <div className="text-gray-600 mb-2">{exp.location}</div>
                        <div className="text-gray-700 mb-3">{exp.jobSummary}</div>
                        <ul className="list-none space-y-2">
                            {exp.points.map((point, idx) => (
                                <li key={idx} className="text-gray-700 pl-4 relative">
                                    <span className="absolute left-0">•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}; 