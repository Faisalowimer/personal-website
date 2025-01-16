import { useState } from 'react';
import { Win95Button } from '@/components/ui/Win95Button';
import { WIN95_ICONS } from '@/store/useWindowStore';
import { WindowHeader } from '@/components/window/WindowHeader';
import { WindowToolbar } from '@/components/window/WindowToolbar';
import { WindowStatusBar } from '@/components/window/WindowStatusBar';
import { ABOUT_ME_SECTIONS, TabType, TABS } from '@/components/window/iconWindows/aboutMe/config';
import Image from 'next/image';

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState<TabType>('personal');

    // Function to count words in a string
    const getWordCount = (text: string): number => {
        // Remove HTML tags and decode HTML entities
        const strippedText = text.replace(/<[^>]*>/g, ' ').replace(/&[^;]+;/g, ' ');
        return strippedText.trim().split(/\s+/).length;
    };

    // Function to count life-changing events and decisions
    const getLifeChangingCounts = (text: string): { events: number; decisions: number } => {
        const events = (text.match(/\(Life-changing event\)/g) || []).length;
        const decisions = (text.match(/\(Life-changing decision\)/g) || []).length;
        return { events, decisions };
    };

    // Get word count for current tab
    const currentWordCount = getWordCount(ABOUT_ME_SECTIONS[activeTab]);
    // Get life events and decisions count for journey tab
    const { events: lifeEvents, decisions: lifeDecisions } =
        activeTab === 'journey' ? getLifeChangingCounts(ABOUT_ME_SECTIONS.journey) : { events: 0, decisions: 0 };

    return (
        <div className="flex flex-col h-full font-mono text-xs">
            {/* Header section */}
            <WindowHeader
                icon={WIN95_ICONS.about}
                title="Personal Story Overview"
            />

            {/* Toolbar section */}
            <WindowToolbar>
                {TABS.map(tab => (
                    <Win95Button
                        key={tab.id}
                        active={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Win95Button>
                ))}
            </WindowToolbar>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-auto">
                {activeTab === 'personal' ? (
                    <div className="relative">
                        <div className="float-right ml-6 mb-2">
                            <div className="relative w-48 h-48 border-2 border-gray-400 bg-gray-100 shadow-[inset_-1px_-1px_#0a0a0a,inset_1px_1px_#ffffff,inset_-2px_-2px_grey,inset_2px_2px_#dfdfdf] overflow-hidden">
                                <Image
                                    src="/faisal.png"
                                    alt="Profile Picture"
                                    fill
                                    sizes="192px"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                        <div
                            className="text-sm whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: ABOUT_ME_SECTIONS[activeTab] }}
                        />
                    </div>
                ) : (
                    <div
                        className="text-sm whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: ABOUT_ME_SECTIONS[activeTab] }}
                    />
                )}
            </div>

            {/* Status Bar section */}
            <WindowStatusBar>
                <div className="flex gap-6">
                    <span>{currentWordCount} words</span>
                    {activeTab === 'journey' && (
                        <>
                            <span>{lifeDecisions} life-changing decisions</span>
                            <span>{lifeEvents} life-changing events</span>
                        </>
                    )}
                </div>
            </WindowStatusBar>
        </div>
    );
};
