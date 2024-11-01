"use client";
import React, { useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all"); // Default filter
  const images = [
    { src: "/media/memili.jpeg", category: "cat1" },
    { src: "/media/memili.jpeg", category: "cat1" },
    { src: "/media/memili.jpeg", category: "cat2" },
    { src: "/media/memili.jpeg", category: "cat2" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat1" },
    { src: "/media/bgdata.jpg", category: "cat2" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat1" },
    { src: "/media/bgdata.jpg", category: "cat2" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat1" },
    { src: "/media/bgdata.jpg", category: "cat2" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat3" },
    { src: "/media/bgdata.jpg", category: "cat1" },
    { src: "/media/bgdata.jpg", category: "cat2" },
  ];

  const filters = ["all", "cat1", "cat2", "cat3"];

  const visibleImages = images.filter((image) => activeFilter === "all" || image.category === activeFilter);

  const imagesPerSlide = 8; // Display 8 images per slide

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? Math.max(0, Math.ceil(visibleImages.length / imagesPerSlide) - 1) : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % Math.ceil(visibleImages.length / imagesPerSlide));
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentSlide(0); // Reset to first slide when filter changes
  };

  // Calculate the start and end index for the current slide
  const startIndex = currentSlide * imagesPerSlide;
  const endIndex = startIndex + imagesPerSlide;

  return (
    <div className="relative h-screen w-full bg-white pb-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-5">Portföy</h1>

      {/* Filter Buttons */}
      <div className="mb-6 flex space-x-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              activeFilter === filter ? "bg-blue-700 border border-orange-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {filter === "all" ? "Hepsi" : `Kategori ${filter.slice(-1)}`}
          </button>
        ))}
      </div>

      {/* Carousel container */}
      <div className="grid gap-4 overflow-hidden rounded-lg h-[80%] w-full max-w-5xl px-5 md:px-10 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
        {visibleImages.length > 0 ? (
          visibleImages.slice(startIndex, endIndex).map((image, index) => (
            <div key={index} className="relative w-full h-80 md:h-48 lg:h-56 overflow-hidden rounded-md duration-700 ease-in-out">
              <img src={image.src} className="w-full h-full object-cover" alt={`Slide ${startIndex + index + 1}`} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Hiçbir görüntü bulunamadı.</p>
        )}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {Array.from({ length: Math.ceil(visibleImages.length / imagesPerSlide) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-500" : "bg-gray-300"}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={handlePrev}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 group-hover:bg-blue-800 group-focus:ring-4 group-focus:ring-blue-500">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Önceki</span>
        </span>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 group-hover:bg-orange-600 group-focus:ring-4 group-focus:ring-orange-300">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
          <span className="sr-only">Sonraki</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
