"use client";
import React, { useState } from "react";

function ImageCarousel() {
  const images = [
    "/banner_carousel_1.png",
    "/placeholder.jpg",
    "/banner_main.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {        
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="z-20 absolute top-0 left-0 w-full h-full">
        <div className="flex justify-between items-center w-full h-full px-4">
          <button
            onClick={handlePrev}
            className="text-black bg-white p-3 rounded-full shadow-2xl"
          >
            <i className="fa-solid fa-arrow-left cursor-pointer text-2xl"></i>
          </button>
          <button
            onClick={handleNext}
            className="text-black bg-white p-3 rounded-full shadow-2xl"
          >
            <i className="fa-solid fa-arrow-right cursor-pointer text-sm"></i>
          </button>
        </div>
      </div>
      <img
        src={images[currentIndex]}
        alt="Carousel"
        className="w-full h-52 lg:h-96 "
      />
    </div>
  );
}

export default ImageCarousel;
