import React from 'react';

const Hourglass = () => {
    return (
        <div className="inline-block animate-[hourglassSpin_3s_linear_infinite]">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background */}
                <path
                    d="M3 0H13V4L8 8L13 12V16H3V12L8 8L3 4V0Z"
                    fill="white"
                />
                {/* Main outline */}
                <path
                    d="M3 0H13V4L8 8L13 12V16H3V12L8 8L3 4V0Z"
                    stroke="#7b7b7b"
                    strokeWidth="1"
                    fill="none"
                />
                {/* Top and bottom borders */}
                <path d="M2 0H14V1H2V0Z M2 15H14V16H2V15Z" fill="black" />

                {/* Upper sand container */}
                <path
                    d="M4 1.5H12V3.5L8 7L4 3.5V1.5Z"
                    fill="#7b7b7b"
                />
                {/* Upper sand */}
                <path
                    d="M4.5 2H11.5V3.25L8 6.5L4.5 3.25V2Z"
                    fill="black"
                    className="origin-bottom animate-[upperSand_3s_linear_infinite]"
                />

                {/* Lower sand container */}
                <path
                    d="M4 12.5L8 9L12 12.5V14.5H4V12.5Z"
                    fill="#7b7b7b"
                />
                {/* Lower sand */}
                <path
                    d="M4.5 13V12.75L8 9.5L11.5 12.75V13H4.5Z"
                    fill="black"
                    className="origin-top animate-[lowerSand_3s_linear_infinite]"
                />

                {/* White highlights */}
                <path
                    d="M4 3L8 6.5L12 3V2H4V3Z"
                    fill="white"
                    fillOpacity="0.3"
                />
                <path
                    d="M4 13L8 9.5L12 13V14H4V13Z"
                    fill="white"
                    fillOpacity="0.3"
                />
            </svg>
        </div>
    );
};

export default Hourglass; 