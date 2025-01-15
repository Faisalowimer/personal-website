import { useState } from 'react';
import { Win95Button } from '@/components/ui/Win95Button';
import { ABOUT_ME_SECTIONS, TabType, TABS } from '@/components/window/iconWindows/aboutMe/config';
import Image from 'next/image';

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState<TabType>('personal');

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Notepad Header */}
            <div className="flex items-center gap-2 p-2 border-b border-gray-400">
                <Image
                    src="/icons/about.png"
                    alt="Notepad"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                />
                <span className="text-sm font-bold">Personal Story Overview</span>
            </div>

            {/* Menu Bar */}
            <div className="flex p-2 border-b border-gray-400">
                {TABS.map(tab => (
                    <Win95Button
                        key={tab.id}
                        active={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Win95Button>
                ))}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                {activeTab === 'personal' ? (
                    <div className="relative">
                        <div className="float-right ml-6 mb-4">
                            <div className="w-48 h-48 border-2 border-gray-400 bg-gray-100 flex items-center justify-center shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf]">
                                <span className="text-gray-400">Profile Picture</span>
                            </div>
                        </div>
                        <div className="text-sm whitespace-pre-wrap">
                            {ABOUT_ME_SECTIONS[activeTab]}
                        </div>
                    </div>
                ) : (
                    <div className="text-sm whitespace-pre-wrap">
                        {ABOUT_ME_SECTIONS[activeTab]}
                    </div>
                )}
            </div>
        </div>
    );
};