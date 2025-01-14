import React from 'react';

interface WindowProps {
    title: string;
    children: React.ReactNode;
    isActive?: boolean;
    onClose?: () => void;
    onClick?: () => void;
}

const Window = ({ title, children, isActive = true, onClose, onClick }: WindowProps) => {
    return (
        <div
            onClick={onClick}
            className={`
                border-[2px] 
                border-[#dfdfdf] 
                bg-[#c0c0c0]
                shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]
                w-[300px]
                ${isActive ? 'z-10' : 'z-0'}
            `}
        >
            <div className="bg-[#000080] text-white px-2 py-1 flex justify-between items-center">
                <span>{title}</span>
                <button
                    className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose?.();
                    }}
                >
                    ×
                </button>
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    );
};

export default Window; 