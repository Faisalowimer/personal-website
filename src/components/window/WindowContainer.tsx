import { Resume } from './iconWindows/resume/Resume';
import { Contact } from './iconWindows/contact/Contact';
import { AboutMe } from './iconWindows/aboutMe/AboutMe';
import { Projects } from './iconWindows/projects/Projects';
import { TechStack } from './iconWindows/techStack/TechStack';
import { useWindowStore } from '@/store/useWindowStore';
import { Window as WindowType } from '@/store/useWindowStore';
import { useState } from 'react';

interface Position {
    x: number;
    y: number;
}

interface WindowProps {
    window: WindowType;
    position?: Position;
}

export const WindowContainer = ({ window, position }: WindowProps) => {
    const { closeWindow, setActiveWindow, minimizeWindow } = useWindowStore();
    const [isMaximized, setIsMaximized] = useState(false);
    const [previousPosition, setPreviousPosition] = useState<Position | null>(null);

    const TASKBAR_HEIGHT = 50; // Height of the taskbar
    const TOP_MARGIN = 40; // Margin from the top of the screen
    const BOTTOM_MARGIN = 40; // Margin from the taskbar

    const handleWindowClick = () => {
        setActiveWindow(window.id);
    };

    const handleMaximizeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isMaximized) {
            // Store current position before maximizing
            setPreviousPosition({ x: position?.x || 100, y: position?.y || 100 });
        }
        setIsMaximized(!isMaximized);
    };

    const handleMinimizeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        minimizeWindow(window.id);
    };

    const renderContent = () => {
        switch (window.id) {
            case 'computer':
                return <TechStack />;
            case 'about':
                return <AboutMe />;
            case 'projects':
                return <Projects />;
            case 'resume':
                return <Resume />;
            case 'contact':
                return <Contact />;
            default:
                return <div className="p-4">Content for {window.title}</div>;
        }
    };

    const windowStyle = isMaximized ? {
        position: 'fixed',
        left: '50%',
        top: TOP_MARGIN,
        transform: 'translateX(-50%)',
        width: '90vw',
        height: `calc(100vh - ${TASKBAR_HEIGHT + TOP_MARGIN + BOTTOM_MARGIN}px)`,
        zIndex: window.zIndex,
    } as const : {
        position: 'absolute',
        left: previousPosition?.x || position?.x || 100,
        top: previousPosition?.y || position?.y || 100,
        width: '650px',
        height: '500px',
        zIndex: window.zIndex,
    } as const;

    // Skip rendering if window is minimized
    if (window.isMinimized) return null;

    return (
        <div
            onClick={handleWindowClick}
            style={windowStyle}
            className={`
                border-[2px] 
                border-[#dfdfdf] 
                bg-[#c0c0c0]
                shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]
                select-none
                cursor-default
                pb-2
            `}
        >
            <div className={`px-2 py-1 flex justify-between items-center ${window.isActive ? 'bg-[#000080] text-white' : 'bg-[#808080] text-[#c0c0c0]'}`}>
                <span className="font-bold ml-1">{window.title}</span>
                <div className="flex gap-1">
                    <button
                        onClick={handleMinimizeClick}
                        className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                    >
                        _
                    </button>
                    <button
                        onClick={handleMaximizeClick}
                        className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                    >
                        {isMaximized ? '❐' : '□'}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            closeWindow(window.id);
                        }}
                        className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                    >×</button>
                </div>
            </div>
            <div className="p-2 h-[calc(100%-28px)]">
                <div className="relative h-full border-[2px] bg-[#c0c0c0]">
                    <div className="absolute inset-0 border-[2px] border-l-[#868686] border-t-[#868686] border-r-[#dfdfdf] border-b-[#dfdfdf]">
                        <div className="absolute inset-0 border-[2px] border-l-[#404040] border-t-[#404040] border-r-white border-b-white overflow-auto win95-scrollbar">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};