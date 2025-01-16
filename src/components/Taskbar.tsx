import { Win95Button } from './ui/Win95Button';
import { useState, useEffect } from 'react';
import { useWindowStore, WIN95_ICONS } from '@/store/useWindowStore';
import Image from 'next/image';

export const Taskbar = () => {
    const { windows, setActiveWindow, restoreWindow } = useWindowStore();
    const [currentTime, setCurrentTime] = useState<string>('');
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            // Format time as HH:MM AM/PM
            setCurrentTime(now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }));

            // Format date as MM/DD/YYYY
            setCurrentDate(now.toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            }));
        };

        // Update immediately
        updateDateTime();

        // Update every minute
        const interval = setInterval(updateDateTime, 60000);

        return () => clearInterval(interval);
    }, []);

    const handleTaskbarItemClick = (windowId: string) => {
        const window = windows.find(w => w.id === windowId);
        if (window?.isMinimized) {
            restoreWindow(windowId);
        }
        setActiveWindow(windowId);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#c0c0c0] border-t-[2px] border-[#ffffff] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
            <div className="flex items-center h-full px-1 gap-1">
                <button className="h-[40px] flex items-center gap-2 font-bold px-4 bg-[#c0c0c0] border-[2px] hover:bg-[#dfdfdf] active:bg-[#bdbdbd]"
                    style={{
                        boxShadow: 'inset -1px -1px #0a0a0a, inset 1px 1px #ffffff, inset -2px -2px grey, inset 2px 2px #dfdfdf',
                        borderColor: '#dfdfdf #808080 #808080 #dfdfdf'
                    }}>
                    <Image
                        src={WIN95_ICONS.start}
                        alt="Start"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                    />
                    Start
                </button>

                <div className="w-[1px] h-[70%] bg-gray-600 mx-1 shadow-[1px_0_#ffffff]" />

                <div className="flex-1 flex items-center gap-1">
                    {windows.map((window) => (
                        window.isOpen && (
                            <Win95Button
                                key={window.id}
                                className={`h-[40px] flex items-center gap-2 min-w-[150px] ${window.isActive ? 'active' : ''}`}
                                active={window.isActive}
                                onClick={() => handleTaskbarItemClick(window.id)}
                            >
                                <Image
                                    src={window.icon}
                                    alt={window.title}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                />
                                <span className="truncate">{window.title}</span>
                            </Win95Button>
                        )
                    ))}
                </div>

                <div className="flex items-center h-[40px] px-2 border border-gray-400 shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_grey]">
                    <span className="font-bold text-xs">
                        {currentTime} {currentDate}
                    </span>
                </div>
            </div>
        </div>
    );
};
