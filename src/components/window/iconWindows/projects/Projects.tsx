import { useState } from 'react';
import { PROJECTS } from '@/components/window/iconWindows/projects/config';
import { WIN95_ICONS } from '@/store/useWindowStore';
import { WindowHeader } from '@/components/window/WindowHeader';
import { WindowToolbar } from '@/components/window/WindowToolbar';
import { SortingButton } from '@/components/ui/sortingButton';
import { ProjectDetails } from '@/components/window/iconWindows/projects/ProjectDetails';
import { WindowStatusBar } from '@/components/window/WindowStatusBar';
import Image from 'next/image';

type SortKey = 'date' | 'type';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [sortKey, setSortKey] = useState<SortKey>('date');

    const sortedProjects = [...PROJECTS].sort((a, b) => {
        if (sortKey === 'date') {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.type.localeCompare(b.type);
    });

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header section */}
            <WindowHeader
                icon={WIN95_ICONS.projects}
                title="Projects Explorer"
            />

            {/* Toolbar section */}
            <WindowToolbar>
                <SortingButton
                    sortKey={sortKey}
                    onSortChange={setSortKey}
                />
            </WindowToolbar>

            {/* Content section */}
            <div className="flex-1 p-2 overflow-auto">
                {selectedProject ? (
                    <ProjectDetails
                        projectId={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                ) : (
                    <div className="grid gap-1">
                        {sortedProjects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => setSelectedProject(project.id)}
                                className="flex items-center p-1 hover:bg-[#000080]/10 cursor-pointer"
                            >
                                <Image
                                    src="/icons/folder.png"
                                    alt={project.title}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                                <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 flex-1 ml-2">
                                    <span>{project.title}</span>
                                    <span className="text-gray-600">{project.type}</span>
                                    <span className="text-gray-600">{project.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Status Bar section */}
            <WindowStatusBar>
                <span>{PROJECTS.length} projects</span>
            </WindowStatusBar>
        </div>
    );
};