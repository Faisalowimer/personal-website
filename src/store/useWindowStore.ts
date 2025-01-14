import { create } from 'zustand';

interface Window {
    id: string;
    title: string;
    isOpen: boolean;
    isActive: boolean;
    component: string;
    order: number;
}

interface WindowStore {
    windows: Window[];
    activeWindow: string | null;
    openWindow: (id: string) => void;
    closeWindow: (id: string) => void;
    setActiveWindow: (id: string) => void;
    reorderIcons: (startIndex: number, endIndex: number) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
    windows: [
        { id: 'computer', title: 'My Computer', isOpen: false, isActive: false, component: 'computer', order: 0 },
        { id: 'about', title: 'About Me', isOpen: false, isActive: false, component: 'about', order: 1 },
        { id: 'resume', title: 'Resume', isOpen: false, isActive: false, component: 'resume', order: 2 },
        { id: 'projects', title: 'Projects', isOpen: false, isActive: false, component: 'projects', order: 3 },
        { id: 'contact', title: 'Contact', isOpen: false, isActive: false, component: 'contact', order: 4 },
    ],
    activeWindow: null,
    openWindow: (id) => set((state) => ({
        windows: state.windows.map((window) =>
            window.id === id ? { ...window, isOpen: true, isActive: true } : { ...window, isActive: false }
        ),
        activeWindow: id,
    })),
    closeWindow: (id) => set((state) => ({
        windows: state.windows.map((window) =>
            window.id === id ? { ...window, isOpen: false, isActive: false } : window
        ),
    })),
    setActiveWindow: (id) => set((state) => ({
        windows: state.windows.map((window) =>
            window.id === id ? { ...window, isActive: true } : { ...window, isActive: false }
        ),
        activeWindow: id,
    })),
    reorderIcons: (startIndex: number, endIndex: number) => set((state) => {
        const newWindows = Array.from(state.windows);
        const [removed] = newWindows.splice(startIndex, 1);
        newWindows.splice(endIndex, 0, removed);
        return { windows: newWindows.map((window, index) => ({ ...window, order: index })) };
    }),
})); 