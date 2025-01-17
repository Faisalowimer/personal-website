import { useState } from 'react';
import { PROJECTS } from './config';
import { Win95Button } from '@/components/ui/Win95Button';
import Image from 'next/image';
import { Modal } from '@/components/ui/Modal';

interface ProjectDetailsProps {
    projectId: string;
    onClose: () => void;
}

export const ProjectDetails = ({ projectId, onClose }: ProjectDetailsProps) => {
    const [modalContent, setModalContent] = useState<{ type: 'image' | 'link', content: string, imageIndex?: number } | null>(null);

    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return null;

    const handleImageClick = (index: number) => {
        setModalContent({
            type: 'image',
            content: project.images[index],
            imageIndex: index
        });
    };

    const handleLinkClick = (link: string) => {
        setModalContent({ type: 'link', content: link });
    };

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-400">
                <div className="flex items-center gap-2">
                    <Image
                        src="/icons/folder.png"
                        alt={project.title}
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span className="text-sm font-bold">{project.title}</span>
                </div>
                <Win95Button onClick={onClose}>Close</Win95Button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4 overflow-auto">
                {/* Project Images - Only show if images exist */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-sm font-bold mb-2 border-gray-400">Screenshots</h3>
                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-win95">
                            {project.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 border-2 border-gray-400 bg-gray-100 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] cursor-pointer"
                                    onClick={() => handleImageClick(index)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        width={320}
                                        height={180}
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Project Info */}
                <div className="grid gap-4">
                    {/* Description */}
                    <div>
                        <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Description</h3>
                        <p>{project.description}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 bg-[#dfdfdf] border border-gray-400"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Role & Contributions */}
                    <div>
                        <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Role & Contributions</h3>
                        <p className="mb-2 font-semibold">{project.role}</p>
                        <ul className="list-disc pl-4">
                            {project.contributions.map((contribution, index) => (
                                <li key={index} className="mb-2">{contribution}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-bold mb-2 border-b border-gray-400">Links</h3>
                        <div className="flex gap-2">
                            {project.links.live && (
                                <Win95Button onClick={() => handleLinkClick(project.links.live!)}>
                                    Live Site
                                </Win95Button>
                            )}
                            {project.links.demo && (
                                <Win95Button onClick={() => handleLinkClick(project.links.demo!)}>
                                    Demo
                                </Win95Button>
                            )}
                            {project.links.github && (
                                <Win95Button onClick={() => handleLinkClick(project.links.github!)}>
                                    GitHub
                                </Win95Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalContent !== null}
                onClose={() => setModalContent(null)}
                type={modalContent?.type || 'image'}
                content={modalContent?.content || ''}
                title={project.title}
                images={modalContent?.type === 'image' ? project.images : undefined}
                currentImageIndex={modalContent?.imageIndex}
            />
        </div>
    );
};