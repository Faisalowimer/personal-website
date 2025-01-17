import { Education } from '@/components/window/iconWindows/resume/types';

interface EducationSectionProps {
    education: Education[];
    onLinkClick: (link: string) => void;
}

export const EducationSection = ({ education }: EducationSectionProps) => {
    return (
        <div className="mb-6">
            <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Education</h3>
            <div className="grid gap-3">
                {education.map((edu, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="font-bold">{edu.degree}</span>
                            <span className="text-gray-600">{edu.date}</span>
                        </div>
                        <div className="text-gray-600">
                            {[edu.school, edu.location, edu.gpa, edu.honors]
                                .filter(Boolean)
                                .join(' | ')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}; 