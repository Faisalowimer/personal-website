import { Summary } from '@/components/window/iconWindows/techStack/Summary';
import { DriveItem } from '@/components/window/iconWindows/techStack/DriveItem';
import { WIN95_ICONS } from '@/store/useWindowStore';
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
                {/* Summary Section */}
                <div className="mb-6">
                    <Summary />
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
                    <h3 className="text-sm font-bold mb-4 border-b border-gray-400">Core Competencies</h3>

                    {/* Technical Skills */}
                    <div className="mb-4">
                        <h4 className="text-xs font-bold mb-2 text-gray-600">Technical Skills</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {PERFORMANCE_METRICS
                                .filter(metric => metric.category === 'technical')
                                .map((metric) => (
                                    <PerformanceBar
                                        key={metric.label}
                                        label={metric.label}
                                        value={metric.value}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="pb-4">
                        <h4 className="text-xs font-bold mb-2 text-gray-600">Soft Skills</h4>
                        <div className="grid grid-cols-2 gap-4">
                            {PERFORMANCE_METRICS
                                .filter(metric => metric.category === 'soft')
                                .map((metric) => (
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
        </div>
    );
};