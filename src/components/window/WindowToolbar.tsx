import { ReactNode } from 'react';

interface WindowToolbarProps {
    children: ReactNode;
}

export const WindowToolbar = ({ children }: WindowToolbarProps) => {
    return (
        <div className="flex items-center gap-4 p-2 border-b border-gray-400">
            <div>
                {children}
            </div>
        </div>
    );
}; 