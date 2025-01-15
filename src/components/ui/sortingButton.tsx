import { SortKey } from "@/components/window/iconWindows/resume/types";
import { useState } from "react";
import { Win95Button } from "@/components/ui/Win95Button";

interface SortingButtonProps {
    sortKey: SortKey;
    onSortChange: (newSortKey: SortKey) => void;
}

export const SortingButton = ({ sortKey, onSortChange }: SortingButtonProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="relative">
            <Win95Button
                active={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                Sort By: {sortKey === 'date' ? 'Date' : 'Type'}
            </Win95Button>

            {menuOpen && (
                <div className="absolute top-full left-0 mt-1 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-r-[#404040] border-b-[#404040] shadow-md z-10">
                    <button
                        className="w-full px-4 py-1 text-left hover:bg-[#000080] hover:text-white"
                        onClick={() => {
                            onSortChange('date');
                            setMenuOpen(false);
                        }}
                    >
                        Date
                    </button>
                    <button
                        className="w-full px-4 py-1 text-left hover:bg-[#000080] hover:text-white"
                        onClick={() => {
                            onSortChange('type');
                            setMenuOpen(false);
                        }}
                    >
                        Type
                    </button>
                </div>
            )}
        </div>
    );
};