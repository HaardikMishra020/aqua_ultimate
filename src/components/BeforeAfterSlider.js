import React, { useState } from "react";

const BeforeAfterSlider = ({ before, after }) => {
  const [sliderPosition, setSliderPosition] = useState(5);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const clientX = event.touches ? event.touches[0].clientX : event.clientX; // 👈 support touch
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };


  const handleStart = () => setIsDragging(true); // mouseDown + touchStart
  const handleEnd = () => setIsDragging(false);  // mouseUp + touchEnd

  return (
    <div className="relative" onMouseUp={handleEnd} onTouchEnd={handleEnd}>
      <div
        className="relative 
    w-[90vw] h-[40vh]    /* default: small screens → wide and short */
    sm:w-[80vw] sm:h-[50vh] 
    lg:w-[30vw] lg:h-[70vh]   /* large screens → original size */
    rounded-2xl m-auto overflow-hidden select-none"
        onMouseMove={handleMove}
        onMouseDown={handleStart}
        onTouchMove={handleMove}
        onTouchStart={handleStart}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={before.imageUrl}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Before Label */}
          <span className="absolute top-3 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded">
            {before.title}
          </span>
        </div>

        {/* After Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={after.imageUrl}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* After Label */}
          <span className="absolute top-3 left-3 bg-black/60 text-white text-sm px-2 py-1 rounded">
            {after.title}
          </span>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `calc(${sliderPosition}% - 1px)` }}
        >
          <div className="bg-white absolute rounded-full h-10 w-10 -left-4 top-1/2 -translate-y-1/2">
          <div className="flex mt-3 justify-center items-center gap-1 text-gray-700 text-xs">
            <span>◀</span>
            <span>▶</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
