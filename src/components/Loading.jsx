import React from "react";

const WinterSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Snowflake base */}
        <div className="absolute w-16 h-16 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#3b82f6"
            className="w-full h-full drop-shadow-xl"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3m15.364-6.364L5.636 18.364m13.728 0L5.636 5.636"
            />
          </svg>
        </div>

        {/* Glow effect */}
        <div className="absolute w-10 h-10 rounded-full bg-blue-300 blur-xl opacity-40 animate-pulse"></div>

        {/* Small bouncing dot */}
        <div className="absolute w-4 h-4 bg-white rounded-full animate-bounce-soft shadow-lg"></div>
      </div>
    </div>
  );
};

export default WinterSpinner;
