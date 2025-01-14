import React, { useEffect, useRef, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import Loading from './Loading';
import { useWindowStore } from '@/store/useWindowStore';
import { WIN95_ICONS } from '@/config/icons';

const Desktop = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {
        windows,
        openWindow,
        selectedIcons,
        toggleIconSelection,
        clearSelection,
        updateIconPosition,
        resetPositions
    } = useWindowStore();

    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const lastClickedIcon = useRef<string | null>(null);

    useEffect(() => {
        // Reset positions and wait for hydration
        resetPositions();
    }, [resetPositions]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleDragEnd = (result: DropResult) => {
        // Always return to original position, regardless of destination
        const { draggableId } = result;
        const window = windows.find(w => w.id === draggableId);
        if (window) {
            updateIconPosition(draggableId, window.position);
        }
    };

    const handleIconClick = (id: string, e: React.MouseEvent) => {
        e.preventDefault();

        if (e.ctrlKey || e.metaKey) {
            toggleIconSelection(id, true);
            return;
        }

        if (lastClickedIcon.current === id) {
            // Double click detected
            openWindow(id);
            lastClickedIcon.current = null;
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
                clickTimeoutRef.current = null;
            }
        } else {
            // First click
            if (clickTimeoutRef.current) {
                clearTimeout(clickTimeoutRef.current);
            }
            clickTimeoutRef.current = setTimeout(() => {
                toggleIconSelection(id, false);
                lastClickedIcon.current = null;
            }, 300);
            lastClickedIcon.current = id;
        }
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('.desktop-icon')) {
                clearSelection();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [clearSelection]);

    if (isLoading) {
        return <Loading onComplete={handleLoadingComplete} />;
    }

    return (
        <div className="min-h-screen bg-[#008080] relative overflow-hidden">
            <div className="p-4 h-[calc(100vh-40px)] desktop-area">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="desktop" type="icon">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="relative h-full"
                            >
                                {windows.map((window, index) => (
                                    <Draggable
                                        key={window.id}
                                        draggableId={window.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`desktop-icon absolute ${selectedIcons.includes(window.id) ? 'icon-selected' : ''
                                                    } ${snapshot.isDragging ? 'dragging' : ''}`}
                                                style={{
                                                    ...provided.draggableProps.style,
                                                    position: 'absolute',
                                                    left: window.position.x,
                                                    top: window.position.y,
                                                    transition: snapshot.isDragging ? undefined : 'all 0.2s ease-out',
                                                    zIndex: snapshot.isDragging ? 1000 : 1
                                                }}
                                                onClick={(e) => handleIconClick(window.id, e)}
                                            >
                                                <DesktopIcon
                                                    icon={WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]}
                                                    label={window.title}
                                                    isSelected={selectedIcons.includes(window.id)}
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
                {windows
                    .filter((w) => w.isOpen)
                    .map((window) => (
                        <Window
                            key={window.id}
                            window={window}
                            position={window.windowPosition}
                        />
                    ))}
            </div>
            <Taskbar />
        </div>
    );
};

export default Desktop; 