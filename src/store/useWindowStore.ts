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
    isMinimized?: boolean;
    isMaximized?: boolean;
    component: string;
    order: number;
    position: Position;
    selected?: boolean;
    windowPosition?: Position;
    zIndex: number;
    icon: string;
}

export interface WindowStore {
    windows: Window[];
    activeWindow: string | null;
    selectedIcons: string[];
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    minimizeWindow: (id: string) => void;
    restoreWindow: (id: string) => void;
    setActiveWindow: (id: string) => void;
    toggleMaximize: (id: string) => void;
    updateIconPosition: (id: string, position: Position) => void;
    updateWindowPosition: (id: string, position: Position) => void;
    toggleIconSelection: (id: string, multiSelect: boolean) => void;
    clearSelection: () => void;
    bringToFront: (id: string) => void;
    resetPositions: () => void;
    clearStore: () => void;
}

export const WIN95_ICONS = {
    about: '/icons/about.png',
    computer: '/icons/computer.png',
    projects: '/icons/projects.png',
    resume: '/icons/resume.png',
    contact: '/icons/contact.png',
    start: '/icons/windows_95_logo.png'
} as const;

const DEFAULT_WINDOWS: Window[] = [
    {
        id: 'about',
        title: 'About Me',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        isMaximized: false,
        component: 'about',
        order: 0,
        position: { x: 20, y: 20 },
        windowPosition: { x: 120, y: 10 },
        zIndex: 0,
        icon: WIN95_ICONS.about
    },
    {
        id: 'computer',
        title: 'Tech Stack',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        isMaximized: false,
        component: 'techstack',
        order: 1,
        position: { x: 20, y: 130 },
        windowPosition: { x: 120, y: 90 },
        zIndex: 0,
        icon: WIN95_ICONS.computer
    },
    {
        id: 'projects',
        title: 'Projects',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        isMaximized: false,
        component: 'projects',
        order: 2,
        position: { x: 20, y: 220 },
        windowPosition: { x: 120, y: 170 },
        zIndex: 0,
        icon: WIN95_ICONS.projects
    },
    {
        id: 'resume',
        title: 'Resume',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        isMaximized: false,
        component: 'resume',
        order: 3,
        position: { x: 20, y: 320 },
        windowPosition: { x: 120, y: 250 },
        zIndex: 0,
        icon: WIN95_ICONS.resume
    },
    {
        id: 'contact',
        title: 'Contact',
        isOpen: false,
        isActive: false,
        isMinimized: false,
        isMaximized: false,
        component: 'contact',
        order: 4,
        position: { x: 20, y: 420 },
        windowPosition: { x: 120, y: 330 },
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
                localStorage.clear();
                set({
                    windows: DEFAULT_WINDOWS.map(window => ({
                        ...window,
                        isOpen: false,
                        isActive: false,
                        isMinimized: false,
                        isMaximized: false,
                        zIndex: 0,
                        position: { ...window.position },
                        windowPosition: window.windowPosition ? { ...window.windowPosition } : undefined
                    })),
                    activeWindow: null,
                    selectedIcons: []
                });
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
            toggleMaximize: (id) => set((state) => {
                const maxZIndex = Math.max(...state.windows.map(w => w.zIndex));
                return {
                    windows: state.windows.map((window) =>
                        window.id === id
                            ? {
                                ...window,
                                isMaximized: !window.isMaximized,
                                isActive: true,
                                zIndex: maxZIndex + 1
                            }
                            : window
                    ),
                    activeWindow: id
                };
            }),
        }),
        {
            name: 'windows-store',
            skipHydration: false
        }
    )
); 