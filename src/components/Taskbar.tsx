import { WIN95_ICONS } from '@/config/icons';
import { Win95Button } from './ui/Win95Button';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Taskbar = () => {
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

    return (
        <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#c0c0c0] border-t-[2px] border-[#ffffff] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
            <div className="flex justify-between items-center h-full px-1">
                <Win95Button className="h-[40px] flex items-center gap-2 font-bold">
                    <Image
                        src={WIN95_ICONS.start}
                        alt="Start"
                        width={16}
                        height={16}
                        className="w-5 h-5"
                    />
                    Start
                </Win95Button>

                <div className="flex items-center h-[40px] px-2 border border-gray-400 shadow-[inset_-1px_-1px_#ffffff,inset_1px_1px_#0a0a0a,inset_-2px_-2px_#dfdfdf,inset_2px_2px_grey]">
                    <span className="font-bold text-xs">
                        {currentTime} {currentDate}
                    </span>
                </div>
            </div>
        </div>
    );
};
