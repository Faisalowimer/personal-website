import { Hourglass } from '@/components/Hourglass';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

interface LoadingProps {
    onComplete: () => void;
}

export const Loading = ({ onComplete }: LoadingProps) => {
    const [progress, setProgress] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(previousProgress => {
                if (previousProgress >= 100) {
                    clearInterval(timer);
                    setShowConfetti(true);
                    setTimeout(onComplete, 2000);
                    return 100;
                }
                const diff = Math.random() * 5;
                return Math.min(previousProgress + diff, 100);
            });
        }, 300);

        return () => clearInterval(timer);
    }, [onComplete]);

    // Calculate number of tiles based on container width
    const getTileCount = (progressPercent: number) => {
        // Each tile is 3px wide with 3px gap
        // For 100% we want to fill the full width minus padding
        const maxTiles = Math.floor(progressPercent / 2);
        return Math.max(0, maxTiles);
    };

    return (
        <div className="fixed inset-0 bg-[#008080] flex items-center justify-center z-50 min-h-screen">
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.3}
                />
            )}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] bg-[#c0c0c0] p-4 border-[2px] shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
                <div className="text-center mb-6">
                    <h2 className="text-lg font-bold mb-3">Welcome to my personal website!</h2>
                    <div className="text-sm flex flex-col items-center justify-center gap-2">
                        {progress === 100 ? (
                            <span className="font-medium text-base">100% Hooray!</span>
                        ) : (
                            <>
                                <span>Travelling back to the 90&apos;s...</span>
                                <span className="inline-flex items-center gap-2 font-medium">
                                    {Math.floor(progress)}%
                                    <Hourglass />
                                </span>
                            </>
                        )}
                    </div>
                </div>
                <div className="relative w-full h-8 bg-[#c0c0c0] border-[2px] border-[#7c7c7c] shadow-[inset_-1px_-1px_#dfdfdf,inset_1px_1px_grey]">
                    <div
                        className="h-full transition-all duration-300 ease-linear flex gap-[3px] px-[3px]"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: progress === 100 ? '#000080' : 'transparent'
                        }}
                    >
                        {Array.from({ length: getTileCount(progress) }).map((_, i, arr) => (
                            <div
                                key={i}
                                className={`h-full w-3 ${progress === 100 ? 'bg-[#000080]' : arr.length - i <= 3 ? 'bg-[#1e90ff]' : 'bg-[#000080]'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
