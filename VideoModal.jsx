import React from 'react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="relative bg-gray-900 rounded-lg shadow-xl w-full max-w-3xl mx-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold z-10"
        >
          &times;
        </button>
        <div className="aspect-video w-full">
          {/* Placeholder for actual video */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-300 text-lg">
            <p>Video Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;


