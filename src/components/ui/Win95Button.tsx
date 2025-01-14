import React from 'react';

interface Win95ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    children: React.ReactNode;
}

export const Win95Button = ({ active, children, className = '', ...props }: Win95ButtonProps) => (
    <button
        {...props}
        className={`
            px-4 py-1 
            border-[2px] 
            bg-[#c0c0c0] 
            font-bold
            text-black
            ${active
                ? 'border-[#808080] border-t-[#404040] border-l-[#404040] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a]'
                : 'border-[#dfdfdf] border-b-[#404040] border-r-[#404040] shadow-[inset_-1px_-1px_#808080,inset_1px_1px_#ffffff]'
            }
            active:border-[#808080] 
            active:border-t-[#404040] 
            active:border-l-[#404040] 
            active:shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a]
            ${className}
        `}
    >
        {children}
    </button>
);
