import React from 'react';
import Image from 'next/image';

interface DriveItemProps {
    label: string;
    icon: string;
    usedSpace?: string;
    totalSpace: string;
    className?: string;
}

export const DriveItem = ({ label, icon, usedSpace, totalSpace, className = '' }: DriveItemProps) => (
    <div className={`flex items-start gap-2 p-1.5 cursor-pointer ${className}`}>
        <Image
            src={icon}
            alt={label}
            width={20}
            height={20}
            className="w-5 h-5 mt-0.5"
        />
        <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold truncate">{label}</div>
            <div className="text-[11px] text-gray-600 truncate">
                {usedSpace ? `${usedSpace} proficiency | ` : ''}{totalSpace}
            </div>
        </div>
    </div>
);
