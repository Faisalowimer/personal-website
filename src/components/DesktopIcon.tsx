import React from 'react';
import Image from 'next/image';

interface DesktopIconProps {
    icon: string;
    label: string;
    onClick: () => void;
}

const DesktopIcon = ({ icon, label, onClick }: DesktopIconProps) => {
    return (
        <div className="w-[80px]">
            <button
                onClick={onClick}
                className="w-full flex flex-col items-center gap-1 p-2 text-white hover:bg-[#000080]/40 focus:bg-[#000080]/40"
            >
                <Image
                    src={icon}
                    alt={label}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
                <span className="text-sm text-center break-words">{label}</span>
            </button>
        </div>
    );
};

export default DesktopIcon; 