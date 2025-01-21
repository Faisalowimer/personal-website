import { useWindowStore } from '@/store/useWindowStore';
import Image from 'next/image';

interface StartMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const StartMenu = ({ isOpen, onClose }: StartMenuProps) => {
    const { clearStore } = useWindowStore();

    if (!isOpen) return null;

    const handleResetWindows = () => {
        // First clear the Zustand store from localStorage
        localStorage.removeItem('windows-store');
        // Then clear any other localStorage items
        localStorage.clear();
        // Reset the store state
        clearStore();
        // Close the menu
        onClose();
        // Force a hard refresh
        window.location.reload();
    };

    return (
        <div className="absolute bottom-[50px] left-0 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#404040] border-b-[#404040] shadow-md min-w-[200px]">
            {/* Menu Items */}
            <div className="p-1">
                {/* Programs */}
                {/* <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#000080] hover:text-white cursor-default">
                    <Image
                        src="/icons/programs.png"
                        alt="Programs"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Programs</span>
                    <span className="ml-auto">►</span>
                </div> */}

                {/* Documents */}
                {/* <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#000080] hover:text-white cursor-default">
                    <Image
                        src="/icons/documents.png"
                        alt="Documents"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Documents</span>
                    <span className="ml-auto">►</span>
                </div> */}

                {/* Settings */}
                {/* <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#000080] hover:text-white cursor-default">
                    <Image
                        src="/icons/settings.png"
                        alt="Settings"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Settings</span>
                    <span className="ml-auto">►</span>
                </div> */}

                {/* Divider */}
                <div className="my-1 border-t border-[#808080] border-b border-b-[#ffffff]" />

                {/* Reset Windows (Development Only) */}
                <button
                    onClick={handleResetWindows}
                    className="w-full flex items-center gap-2 px-4 py-1 hover:bg-[#000080] hover:text-white cursor-default"
                >
                    <Image
                        src="/icons/reset.png"
                        alt="Reset"
                        width={16}
                        height={16}
                        className="w-6 h-6"
                    />
                    <span>Restart</span>
                </button>

                {/* Divider */}
                <div className="my-1 border-t border-[#808080] border-b border-b-[#ffffff]" />

                {/* Shut Down */}
                {/* <div className="flex items-center gap-2 px-4 py-1 hover:bg-[#000080] hover:text-white cursor-default">
                    <Image
                        src="/icons/shutdown.png"
                        alt="Shut Down"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                    />
                    <span>Shut Down...</span>
                </div> */}
            </div>
        </div>
    );
}; 