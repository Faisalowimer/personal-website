import Image from 'next/image';

interface DesktopIconProps {
    icon: string;
    label: string;
    isSelected?: boolean;
}

export const DesktopIcon = ({ icon, label, isSelected }: DesktopIconProps) => {
    return (
        <div className={`w-[80px] p-2 ${isSelected ? 'icon-selected' : ''}`}>
            <div className="flex flex-col items-center gap-1">
                <Image
                    src={icon}
                    alt={label}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
                <span className="text-sm text-center break-words text-white">
                    {label}
                </span>
            </div>
        </div>
    );
};
