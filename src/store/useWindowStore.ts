import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WIN95_ICONS } from '@/config/icons';

export interface Position {
    x: number;
    y: number;
}

export interface Window {
    id: string;
    title: string;
    isOpen: boolean;
    isActive: boolean;
    isMinimized?: boolean;
    component: string;
    order: number;
    position: Position;
    selected?: boolean;
    windowPosition?: Position;
    zIndex: number;
    icon: string;
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
    clearStore: () => void;
    minimizeWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
}

const DEFAULT_WINDOWS: Window[] = [
    {
        id: 'computer',
        title: 'Tech Stack',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        component: 'techstack',
        order: 0,
        position: { x: 20, y: 20 },
        windowPosition: { x: 120, y: 30 },
        zIndex: 0,
        icon: WIN95_ICONS.computer
    },
    {
        id: 'about',
        title: 'About Me',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        component: 'about',
        order: 1,
        position: { x: 20, y: 130 },
        windowPosition: { x: 180, y: 130 },
        zIndex: 0,
        icon: WIN95_ICONS.about
    },
    {
        id: 'projects',
        title: 'Projects',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        component: 'projects',
        order: 2,
        position: { x: 20, y: 220 },
        windowPosition: { x: 260, y: 230 },
        zIndex: 0,
        icon: WIN95_ICONS.projects
    },
    {
        id: 'resume',
        title: 'Resume',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        component: 'resume',
        order: 3,
        position: { x: 20, y: 320 },
        windowPosition: { x: 340, y: 330 },
        zIndex: 0,
        icon: WIN95_ICONS.resume
    },
    {
        id: 'contact',
        title: 'Contact',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        component: 'contact',
        order: 4,
        position: { x: 20, y: 420 },
        windowPosition: { x: 420, y: 430 },
        zIndex: 0,
        icon: WIN95_ICONS.contact
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
                            ? {
                                ...window,
                                isOpen: true,
                                isActive: true,
                                isMinimized: false,
                                zIndex: maxZIndex + 1,
                                icon: WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]
                            }
                            : { ...window, isActive: false }
                    ),
                    activeWindow: id,
                };
            }),
            closeWindow: (id) => set((state) => ({
                windows: state.windows.map((window) =>
                    window.id === id
                        ? {
                            ...window,
                            isOpen: false,
                            isActive: false,
                            isMinimized: false,
                            icon: WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]
                        }
                        : window
                ),
                activeWindow: state.activeWindow === id ? null : state.activeWindow,
            })),
            setActiveWindow: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map((window) =>
                        window.id === id
                            ? {
                                ...window,
                                isActive: true,
                                zIndex: maxZIndex + 1,
                                icon: WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]
                            }
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
            clearStore: () => {
                localStorage.removeItem('windows-store');
                set({ windows: DEFAULT_WINDOWS, activeWindow: null, selectedIcons: [] });
            },
            minimizeWindow: (id) => set((state) => ({
                windows: state.windows.map(window =>
                    window.id === id ? { ...window, isMinimized: true, isActive: false } : window
                ),
                activeWindow: state.activeWindow === id ? null : state.activeWindow,
            })),
            restoreWindow: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map(window =>
                        window.id === id
                            ? {
                                ...window,
                                isMinimized: false,
                                isActive: true,
                                zIndex: maxZIndex + 1,
                                icon: WIN95_ICONS[window.id as keyof typeof WIN95_ICONS]
                            }
                            : { ...window, isActive: false }
                    ),
                    activeWindow: id,
                };
            }),
        }),
        {
            name: 'windows-store',
            skipHydration: false
        }
    )
); 