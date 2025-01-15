import { DriveItem } from '@/components/window/iconWindows/techStack/DriveItem';
import { WIN95_ICONS } from '@/config/icons';
import { WindowHeader } from '../../WindowHeader';
import { PerformanceBar } from '@/components/window/iconWindows/techStack/PerformanceBar';
import { TECH_SKILLS, PERFORMANCE_METRICS } from '@/components/window/iconWindows/techStack/config';

export const TechStack = () => {
    const showProficiency = false; // Toggle this to show/hide proficiency

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header section */}
            <WindowHeader
                icon={WIN95_ICONS.computer}
                title="Tech Stack Overview"
            />

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
                {/* Experience Section */}
                <div className="mb-6">
                    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2">
                        <span className="text-gray-600">Experience:</span>
                        <span>Full Stack Software Engineer</span>
                        <span className="text-gray-600">Interests:</span>
                        <span>Web Development, SaaS, AI</span>
                        <span className="text-gray-600">Learning:</span>
                        <span>How to utilize AI to move humanity forward and be more lazy</span>
                        <span className="text-gray-600">Status:</span>
                        <span>Available for opportunities that interest my curiosity and passion</span>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Technical Skills</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {TECH_SKILLS.map((skill) => (
                            <DriveItem
                                key={skill.label}
                                label={skill.label}
                                icon={skill.icon}
                                totalSpace={skill.totalSpace}
                                usedSpace={showProficiency ? skill.usedSpace : undefined}
                                className={skill.label.includes('Languages & Libraries') ? 'col-span-2' : ''}
                            />
                        ))}
                    </div>
                </div>

                {/* Performance Section */}
                <div>
                    <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Core Competencies</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4 pb-4">
                        {PERFORMANCE_METRICS.map((metric) => (
                            <PerformanceBar
                                key={metric.label}
                                label={metric.label}
                                value={metric.value}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};