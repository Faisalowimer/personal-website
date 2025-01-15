interface PerformanceBarProps {
    label: string;
    value: number;
}

export const PerformanceBar = ({ label, value }: PerformanceBarProps) => (
    <div>
        <div className="text-xs mb-1 flex justify-between">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="w-full h-4 bg-gray-200 border border-gray-400">
            <div
                className="h-full bg-[#000080]"
                style={{ width: `${value}%` }}
            />
        </div>
    </div>
);
