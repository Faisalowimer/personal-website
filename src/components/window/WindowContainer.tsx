import { Resume } from './iconWindows/resume/Resume';
import { Contact } from './iconWindows/contact/Contact';
import { AboutMe } from './iconWindows/aboutMe/AboutMe';
import { Projects } from './iconWindows/projects/Projects';
import { TechStack } from './iconWindows/techStack/TechStack';
import { useWindowStore } from '@/store/useWindowStore';
import { Window as WindowType } from '@/store/useWindowStore';

interface Position {
    x: number;
    y: number;
}

interface WindowProps {
    window: WindowType;
    position?: Position;
}

export const WindowContainer = ({ window, position }: WindowProps) => {
    const { closeWindow, setActiveWindow } = useWindowStore();

    const handleWindowClick = () => {
        setActiveWindow(window.id);
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

    return (
        <div
            onClick={handleWindowClick}
            style={{
                position: 'absolute',
                left: position?.x || 100,
                top: position?.y || 100,
                zIndex: window.zIndex,
            }}
            className={`
                border-[2px] 
                border-[#dfdfdf] 
                bg-[#c0c0c0]
                shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]
                w-[650px]
                h-[500px]
                select-none
                cursor-default
                pb-2
            `}
        >
            <div className={`px-2 py-1 flex justify-between items-center ${window.isActive ? 'bg-[#000080] text-white' : 'bg-[#808080] text-[#c0c0c0]'}`}>
                <span className="font-bold ml-1">{window.title}</span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(window.id);
                    }}
                    className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                >×</button>
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