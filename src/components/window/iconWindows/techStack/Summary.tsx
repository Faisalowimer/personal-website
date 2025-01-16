import { TECH_SUMMARY } from './config';

interface SummaryProps {
    className?: string;
}

export const Summary = ({ className = '' }: SummaryProps) => {
    return (
        <div className={`grid grid-cols-[auto_1fr] gap-x-2 gap-y-2 ${className}`}>
            <span className="text-gray-600">Experience:</span>
            <span>{TECH_SUMMARY.experience}</span>
            <span className="text-gray-600">Interests:</span>
            <span>{TECH_SUMMARY.interests}</span>
            <span className="text-gray-600">Learning:</span>
            <span>{TECH_SUMMARY.learning}</span>
            <span className="text-gray-600">Status:</span>
            <span>{TECH_SUMMARY.status}</span>
        </div>
    );
}; 