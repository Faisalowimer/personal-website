import React from 'react';
import Image from 'next/image';
import DriveItem from './DriveItem';
import PerformanceBar from './PerformanceBar';
import { TECH_SKILLS, PERFORMANCE_METRICS } from './config';

const TechStack = () => {
    const showProficiency = false; // Toggle this to show/hide proficiency

    return (
        <div className="p-4 flex flex-col h-full">
            {/* Tech Stack Section */}
            <div className="flex gap-4 mb-6">
                <div className="flex-shrink-0">
                    <Image
                        src="/icons/computer.png"
                        alt="Tech Stack"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold mb-2">Tech Stack Overview</h2>
                    <div className="grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 text-sm">
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
            </div>

            {/* Technical Skills Section */}
            <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {TECH_SKILLS.map((skill) => (
                    <DriveItem
                        key={skill.label}
                        label={skill.label}
                        icon={skill.icon}
                        totalSpace={skill.totalSpace}
                        usedSpace={showProficiency ? skill.usedSpace : undefined}
                        className={skill.label.includes('Libraries & Languages') ? 'col-span-2' : ''}
                    />
                ))}
            </div>

            {/* Performance Section */}
            <div className="mt-6">
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
    );
};

export default TechStack; 