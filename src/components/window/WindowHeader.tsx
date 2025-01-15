import Image from 'next/image';
import { ReactNode } from 'react';

interface WindowHeaderProps {
    icon: string;
    title: string;
    actions?: ReactNode;
}

export const WindowHeader = ({ icon, title, actions }: WindowHeaderProps) => {
    return (
        <div className="flex items-center justify-between gap-2 p-2 border-b border-gray-400">
            <div className="flex items-center gap-2">
                <Image
                    src={icon}
                    alt={title}
                    width={16}
                    height={16}
                    className="w-4 h-4"
                />
                <span className="text-sm font-bold">{title}</span>
            </div>
            {actions && (
                <div className="flex gap-2">
                    {actions}
                </div>
            )}
        </div>
    );
}; 