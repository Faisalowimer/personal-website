import React from 'react';
import { Window as WindowType } from '@/store/useWindowStore';
import { useWindowStore } from '@/store/useWindowStore';

interface Position {
    x: number;
    y: number;
}

interface WindowProps {
    window: WindowType;
    position?: Position;
}

const Window = ({ window, position }: WindowProps) => {
    const { closeWindow, setActiveWindow } = useWindowStore();

    const handleWindowClick = () => {
        setActiveWindow(window.id);
    };

    return (
        <div
            onClick={handleWindowClick}
            style={{
                position: 'absolute',
                left: position?.x || 100,
                top: position?.y || 100,
                zIndex: window.zIndex,
            }}
            className={`
                border-[2px] 
                border-[#dfdfdf] 
                bg-[#c0c0c0]
                shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]
                w-[300px]
                select-none
                cursor-default
            `}
        >
            <div className={`px-2 py-1 flex justify-between items-center ${window.isActive ? 'bg-[#000080] text-white' : 'bg-[#808080] text-[#c0c0c0]'}`}>
                <span>{window.title}</span>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(window.id);
                    }}
                    className="px-2 bg-[#c0c0c0] text-black hover:bg-[#dfdfdf]"
                >×</button>
            </div>
            <div className="p-4">
                <p>Content for {window.title}</p>
            </div>
        </div>
    );
};

export default Window; 