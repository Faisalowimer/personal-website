'use client';
import Desktop from '@/components/Desktop';
import Window from '@/components/Window';
import { useWindowStore } from '@/store/useWindowStore';

export default function Home() {
  const { windows, closeWindow, setActiveWindow } = useWindowStore();

  return (
    <Desktop>
      {windows
        .filter((window) => window.isOpen)
        .map((window) => (
          <Window
            key={window.id}
            title={window.title}
            isActive={window.isActive}
            onClose={() => closeWindow(window.id)}
            onClick={() => setActiveWindow(window.id)}
          >
            {/* Window content will be added later */}
            <p>Content for {window.title}</p>
          </Window>
        ))}
    </Desktop>
  );
}
