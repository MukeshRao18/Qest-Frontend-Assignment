import React from 'react';

const GeminiButton = () => {
  return (
    <div 
      className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl shadow-lg flex items-center justify-center z-50"
      style={{
        background: 'linear-gradient(135deg, rgb(255, 139, 93) 0%, rgb(255, 116, 128) 50%, rgb(251, 85, 147) 100%)'
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 7.5L12 6L13.5 7.5L12 9L10.5 7.5Z"
          fill="white"
        />
        <path
          d="M6.5 11.5L8 10L9.5 11.5L8 13L6.5 11.5Z"
          fill="white"
        />
        <path
          d="M14.5 11.5L16 10L17.5 11.5L16 13L14.5 11.5Z"
          fill="white"
        />
        <path
          d="M10.5 15.5L12 14L13.5 15.5L12 17L10.5 15.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default GeminiButton;