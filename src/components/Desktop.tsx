import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult, DroppableProvided, DraggableProvided } from '@hello-pangea/dnd';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import { useWindowStore } from '@/store/useWindowStore';
import { WIN95_ICONS } from '@/config/icons';

interface DesktopProps {
    children: React.ReactNode;
}

const Desktop = ({ children }: DesktopProps) => {
    const { windows, openWindow, reorderIcons } = useWindowStore();

    const handleDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        reorderIcons(result.source.index, result.destination.index);
    };

    return (
        <div className="min-h-screen bg-[#008080] relative overflow-hidden">
            <div className="p-4 h-[calc(100vh-40px)]">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="desktop">
                        {(provided: DroppableProvided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="relative h-full"
                            >
                                {windows
                                    .sort((a, b) => a.order - b.order)
                                    .map((window, index) => (
                                        <Draggable
                                            key={window.id}
                                            draggableId={window.id}
                                            index={index}
                                        >
                                            {(provided: DraggableProvided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        ...provided.draggableProps.style,
                                                        position: 'absolute',
                                                        top: `${index * 6 + 1}rem`,
                                                        left: '1rem',
                                                    }}
                                                >
                                                    <DesktopIcon
                                                        icon={WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]}
                                                        label={window.title}
                                                        onClick={() => openWindow(window.id)}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                {children}
            </div>
            <Taskbar />
        </div>
    );
};

export default Desktop; 