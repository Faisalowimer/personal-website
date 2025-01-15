import { useState } from 'react';
import { PROJECTS } from '@/components/window/iconWindows/projects/config';
import { Win95Button } from '@/components/ui/Win95Button';
import { ProjectDetails } from '@/components/window/iconWindows/projects/ProjectDetails';
import Image from 'next/image';

type SortKey = 'date' | 'type';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const [sortKey, setSortKey] = useState<SortKey>('date');
    const [sortMenuOpen, setSortMenuOpen] = useState(false);

    const sortedProjects = [...PROJECTS].sort((a, b) => {
        if (sortKey === 'date') {
            // Convert date strings to Date objects for proper comparison
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB.getTime() - dateA.getTime(); // Most recent first
        }
        return a.type.localeCompare(b.type); // Alphabetical by type
    });

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header */}
            <div className="flex items-center gap-2 p-2 border-b border-gray-400">
                <Image
                    src="/icons/projects.png"
                    alt="Projects"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                />
                <span className="text-sm font-bold">Projects Explorer Overview</span>
            </div>

            {/* Toolbar */}
            <div className="flex items-center gap-4 p-2 border-b border-gray-400">
                <div className="relative">
                    <Win95Button
                        active={sortMenuOpen}
                        onClick={() => setSortMenuOpen(!sortMenuOpen)}
                    >
                        Sort By: {sortKey === 'date' ? 'Date' : 'Type'}
                    </Win95Button>

                    {sortMenuOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#404040] border-b-[#404040] shadow-md z-10">
                            <button
                                className="w-full px-4 py-1 text-left hover:bg-[#000080] hover:text-white"
                                onClick={() => {
                                    setSortKey('date');
                                    setSortMenuOpen(false);
                                }}
                            >
                                Date
                            </button>
                            <button
                                className="w-full px-4 py-1 text-left hover:bg-[#000080] hover:text-white"
                                onClick={() => {
                                    setSortKey('type');
                                    setSortMenuOpen(false);
                                }}
                            >
                                Type
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Content */}
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
                                className={`flex items-center gap-2 p-1 hover:bg-[#000080]/10 cursor-pointer ${selectedProject === project.id ? 'bg-[#000080]/20' : ''
                                    }`}
                            >
                                <Image
                                    src="/icons/folder.png"
                                    alt={project.title}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                                <div className="grid grid-cols-[2fr_1fr_1fr] gap-4 flex-1">
                                    <span>{project.title}</span>
                                    <span className="text-gray-600">{project.type}</span>
                                    <span className="text-gray-600">{project.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-2 py-1 border-t border-gray-400">
                <span>{PROJECTS.length} projects</span>
            </div>
        </div>
    );
};