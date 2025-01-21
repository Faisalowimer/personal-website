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
    <div className={`flex items-start gap-2 p-1.5 cursor-pointer group relative ${className}`}>
        <Image
            src={icon}
            alt={label}
            width={20}
            height={20}
            className="w-5 h-5 mt-0.5"
        />
        <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold truncate">{label}</div>
            <div className="text-[11px] text-gray-600 truncate" title={`${usedSpace ? `${usedSpace} proficiency | ` : ''}${totalSpace}`}>
                {usedSpace ? `${usedSpace} proficiency | ` : ''}{totalSpace}
            </div>
        </div>
        {/* Windows 95 style tooltip */}
        <div className="opacity-0 group-hover:opacity-100 absolute left-0 -bottom-12 bg-[#ffffe1] border border-black text-[11px] p-1 z-50 pointer-events-none whitespace-normal max-w-[300px]">
            {usedSpace ? `${usedSpace} proficiency | ` : ''}{totalSpace}
        </div>
    </div>
);
