import { WIN95_ICONS } from '@/config/icons';
import { Win95Button } from './ui/Win95Button';
import Image from 'next/image';

export const Taskbar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#c0c0c0] border-t-[2px] border-[#ffffff] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
            <Win95Button className="h-[40px] m-1 flex items-center gap-2 font-bold">
                <Image
                    src={WIN95_ICONS.start}
                    alt="Start"
                    width={16}
                    height={16}
                    className="w-5 h-5"
                />
                Start
            </Win95Button>
        </div>
    );
};
