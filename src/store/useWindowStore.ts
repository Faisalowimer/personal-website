import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Position {
    x: number;
    y: number;
}

export interface Window {
    id: string;
    title: string;
    isOpen: boolean;
    isActive: boolean;
    component: string;
    order: number;
    position: Position;
    selected?: boolean;
    windowPosition?: Position;
    zIndex: number;
}

interface WindowStore {
    windows: Window[];
    activeWindow: string | null;
    selectedIcons: string[];
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    setActiveWindow: (id: string) => void;
    updateIconPosition: (id: string, position: Position) => void;
    updateWindowPosition: (id: string, position: Position) => void;
    toggleIconSelection: (id: string, multiSelect: boolean) => void;
    clearSelection: () => void;
    bringToFront: (id: string) => void;
    resetPositions: () => void;
}

const DEFAULT_WINDOWS = [
    {
        id: 'computer',
        title: 'My Computer',
        isOpen: false,
        isActive: false,
        component: 'computer',
        order: 0,
        position: { x: 20, y: 20 },
        windowPosition: { x: 120, y: 100 },
        zIndex: 0
    },
    {
        id: 'about',
        title: 'About Me',
        isOpen: false,
        isActive: false,
        component: 'about',
        order: 1,
        position: { x: 20, y: 130 },
        windowPosition: { x: 180, y: 180 },
        zIndex: 0
    },
    {
        id: 'projects',
        title: 'Projects',
        isOpen: false,
        isActive: false,
        component: 'projects',
        order: 2,
        position: { x: 20, y: 220 },
        windowPosition: { x: 260, y: 260 },
        zIndex: 0
    },
    {
        id: 'resume',
        title: 'Resume',
        isOpen: false,
        isActive: false,
        component: 'resume',
        order: 3,
        position: { x: 20, y: 320 },
        windowPosition: { x: 340, y: 340 },
        zIndex: 0
    },
    {
        id: 'contact',
        title: 'Contact',
        isOpen: false,
        isActive: false,
        component: 'contact',
        order: 4,
        position: { x: 20, y: 420 },
        windowPosition: { x: 420, y: 420 },
        zIndex: 0
    }
];

export const useWindowStore = create(
    persist<WindowStore>(
        (set) => ({
            windows: DEFAULT_WINDOWS,
            activeWindow: null,
            selectedIcons: [],
            openWindow: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map((window) =>
                        window.id === id
                            ? { ...window, isOpen: true, isActive: true, zIndex: maxZIndex + 1 }
                            : { ...window, isActive: false }
                    ),
                    activeWindow: id,
                };
            }),
            closeWindow: (id) => set((state) => ({
                windows: state.windows.map((window) =>
                    window.id === id ? { ...window, isOpen: false, isActive: false } : window
                ),
                activeWindow: state.activeWindow === id ? null : state.activeWindow,
            })),
            setActiveWindow: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map((window) =>
                        window.id === id
                            ? { ...window, isActive: true, zIndex: maxZIndex + 1 }
                            : { ...window, isActive: false }
                    ),
                    activeWindow: id,
                };
            }),
            updateIconPosition: (id, position) => set((state) => ({
                windows: state.windows.map((window) =>
                    window.id === id ? { ...window, position } : window
                ),
            })),
            updateWindowPosition: (id, position) => set((state) => ({
                windows: state.windows.map((window) =>
                    window.id === id ? { ...window, windowPosition: position } : window
                ),
            })),
            toggleIconSelection: (id, multiSelect) => set((state) => {
                const isSelected = state.selectedIcons.includes(id);
                const newSelectedIcons = multiSelect
                    ? isSelected
                        ? state.selectedIcons.filter((i) => i !== id)
                        : [...state.selectedIcons, id]
                    : [id];
                return { selectedIcons: newSelectedIcons };
            }),
            clearSelection: () => set({ selectedIcons: [] }),
            bringToFront: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map((window) =>
                        window.id === id ? { ...window, zIndex: maxZIndex + 1 } : window
                    ),
                };
            }),
            resetPositions: () => set((state) => ({
                windows: state.windows.map((window, index) => ({
                    ...window,
                    position: DEFAULT_WINDOWS[index].position,
                    windowPosition: DEFAULT_WINDOWS[index].windowPosition
                }))
            })),
        }),
        {
            name: 'windows-store',
            skipHydration: false
        }
    )
); 