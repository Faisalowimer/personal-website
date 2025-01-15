import { useEffect, useState } from 'react';
import Hourglass from '../Hourglass';
import Image from 'next/image';

interface LoadingIndicatorProps {
    message?: string;
    onComplete?: () => void;
}

export const LoadingIndicator = ({ message, onComplete }: LoadingIndicatorProps) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(interval);
                    onComplete?.();
                    return 100;
                }
                return next;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <Image
                src="/icons/api.png"
                alt="API"
                width={32}
                height={32}
                className="w-14 h-14 mb-2"
            />
            {message && <span className="text-sm">{message}</span>}
            <div className="flex items-center gap-2">
                <span>{progress}%</span>
                <Hourglass />
            </div>
            <div className="w-48 h-4 border-2 border-[#808080] bg-[#c0c0c0] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_#0a0a0a]">
                <div
                    className="h-full bg-[#000080] transition-all duration-100"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}; 