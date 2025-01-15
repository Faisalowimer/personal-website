import { ReactNode } from 'react';

interface WindowStatusBarProps {
    children: ReactNode;
}

export const WindowStatusBar = ({ children }: WindowStatusBarProps) => {
    return (
        <div className="flex justify-between items-center px-2 py-1 border-t border-gray-400 relative">
            <span>{children}</span>
        </div>
    );
}; 