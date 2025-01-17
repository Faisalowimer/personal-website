import { Win95Button } from './Win95Button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'image' | 'link';
    content: string;
    title?: string;
    images?: string[];
    currentImageIndex?: number;
}

export const Modal = ({ isOpen, onClose, type, content, title, images = [], currentImageIndex = 0 }: ModalProps) => {
    const [activeIndex, setActiveIndex] = useState(currentImageIndex);

    useEffect(() => {
        setActiveIndex(currentImageIndex);
    }, [currentImageIndex]);

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-[#c0c0c0] border-2 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] max-w-2xl w-full mx-4">
                {/* Header */}
                <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                    <span className="font-bold">{title || (type === 'image' ? 'Image Viewer' : 'External Link')}</span>
                    <Win95Button onClick={onClose} className="!px-2 !py-0 text-black">
                        ✕
                    </Win95Button>
                </div>

                {/* Content */}
                <div className="p-4">
                    {type === 'image' ? (
                        <div className="relative">
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={images[activeIndex] || content}
                                    alt="Project Image"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {images.length > 1 && (
                                <div className="flex justify-between mt-4 gap-4">
                                    <Win95Button onClick={handlePrevious}>
                                        ← Previous
                                    </Win95Button>
                                    <span className="flex items-center">
                                        {activeIndex + 1} / {images.length}
                                    </span>
                                    <Win95Button onClick={handleNext}>
                                        Next →
                                    </Win95Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-4 text-center">
                            <p className="mb-4 font-bold">You are about to visit an external link:</p>
                            <p className="text-blue-600 underline mb-4">{content}</p>
                            <div className="flex justify-center gap-4">
                                <Win95Button
                                    onClick={() => window.open(content, '_blank')}
                                >
                                    Open Link
                                </Win95Button>
                                <Win95Button onClick={onClose}>
                                    Cancel
                                </Win95Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}; 