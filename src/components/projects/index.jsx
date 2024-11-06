"use client";
import React, { useEffect, useState } from "react";
import "./style.css"

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all"); 
  const [imagesPerSlide, setimagesPerSlide] = useState(window.innerWidth >= 1280 ? 8 : 1); 
  
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1280);
 const images = [
     { 
      src: "/media/projects/evanaliz.jpeg", 
      category: "TABLEAU", 
      header: "EV Sales Analysis", 
      desc: "In this Tableau dashboard, I analyzed data related to electric vehicle (EV) sales in Washington state, USA.",
      link: "https://public.tableau.com/app/profile/fat.h.yavuz/viz/EVANALYSISWASHINGTON_17289124124420/ELOCTONICVEHICLEANALYSIS-WA"
    },

  
    { 
      src: "/media/projects/amazonsales.jpeg", 
      category: "EDA", 
      header: "Amazon Sales EDA Project", 
      desc: "In this project, I analyzed Amazon sales data. After cleaning the data to remove any inconsistencies, I used professional visualizations to conduct a comprehensive analysis.",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/Amazom%20Sales"
    },  
    { 
      src: "/media/projects/auto2.jpeg", 
      category: "TABLEAU", 
      header: "Auto Sales Dashboard ", 
      desc: "This dashboard visualizes various aspects of product sales over time, including country-based sales and other key features.",
      link: "https://public.tableau.com/app/profile/fat.h.yavuz/viz/Auto-Sales-Dashoardfinalversion1/Dashboard1"
    },     { 
      src: "/media/projects/globalsuperstore.jpeg", 
      category: "POWER BI", 
      header: "Global Superstore Analysis", 
      desc: "Performance insights from a global superstore's sales data.",
      link: "https://github.com/fatihhyavuz/Power-BI-Project/tree/main/global-superstore-project"
    }, { 
      src: "/media/projects/imdbeda.jpeg", 
      category: "EDA", 
      header: "IMDB Movie Ratings Analysis", 
      desc: "Analyzing patterns and trends in IMDB movie ratings.",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/Mini%20EDA%20and%20Data%20Visualiztion%20Project"
    },{ 
      src: "/media/projects/maraton.jpeg", 
      category: "EDA", 
      header: "Marathon Performance Data", 
      desc: "Insights into marathon performance and participant trends.",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/Ultra-Marathon-Runing"
    },
    { 
      src: "/media/projects/autosales.jpeg", 
      category: "EDA", 
      header: "Auto Sales Analysis", 
      desc: "This project involved exploring and analyzing product sales data to uncover patterns and trends in various product categories",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/Auto%20Sales%20EDA"
    },
    { 
      src: "/media/projects/bikesales.jpeg", 
      category: "TABLEAU", 
      header: "Bike Sales Trends", 
      desc: "Exploring recent trends in bike sales across different regions.",
      link: "https://public.tableau.com/app/profile/fat.h.yavuz/viz/udemy-project-2/SalesDashboard"
    },  { 
      src: "/media/projects/amazon2.jpeg", 
      category: "POWER BI", 
      header: "Amazon Sales Analysis", 
      desc: "An in-depth analysis of Amazon sales trends and metrics.",
      link: "https://github.com/fatihhyavuz/Power-BI-Project/tree/main/Amazon-Sales-Dashboard"
    },
 
  
    
    { 
      src: "/media/projects/markets.jpeg", 
      category: "POWER BI", 
      header: "Market Sales Overview", 
      desc: "A comprehensive overview of sales trends in various markets.",
      link: "https://github.com/fatihhyavuz/Power-BI-Project/tree/main/online-market%20project"
    },
    { 
      src: "/media/projects/netflixeda.jpeg", 
      category: "EDA", 
      header: "Netflix Data Analysis", 
      desc: "Exploring viewing trends and popular genres on Netflix.",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/netflix"
    },
    { 
      src: "/media/projects/pizzasales.jpeg", 
      category: "POWER BI", 
      header: "Pizza Sales Insights", 
      desc: "A look into pizza sales and customer preferences.",
      link: "https://github.com/fatihhyavuz/Power-BI-Project/tree/main/Pizza%20Sales%20Project"
    },
    { 
      src: "/media/projects/stdperform.jpeg", 
      category: "EDA", 
      header: "Student Performance Analysis", 
      desc: "Analyzing student performance data for educational insights.",
      link: "https://github.com/fatihhyavuz/EDA-Projects/tree/master/Student-Performance-Factors-Analysis"
    }
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); // Büyük ekran sınırını biraz yukarı çekiyoruz
    };
  
    handleResize(); // İlk yüklemede de ekran boyutunu kontrol eder
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  

  const filters = ["all", "EDA", "POWER BI", "TABLEAU"];

  const visibleImages = images.filter((image) => activeFilter === "all" || image.category === activeFilter);



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
    <div id="portfolio" className="relative h-screen w-full bg-white p-10 pt-20 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-blue-950 mb-5">PORTFOLIO</h1>

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
            {filter === "all" ? "ALL" : ` ${filter}`}
          </button>
        ))}
      </div>
      {/* buyuk ekran */}
      {isLargeScreen ? (
     <div>
      {/* Carousel container */}
<div className="grid gap-4 overflow-hidden rounded-lg h-[80%] w-full max-w-10xl min-w-5xl px-5 md:px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-2">

        {visibleImages.length > 0 ? (
          visibleImages.slice(startIndex, endIndex).map((image, index) => (
            <div key={index} className="relative w-full h-80 md:h-48 lg:h-56 overflow-hidden rounded-md duration-700 ease-in-out image-container">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.src} className="w-full h-full object-cover" alt={image.header} />
            </a>
          
            {/* Overlay with button */}
            <div className="hover-overlay absolute inset-0 bg-white opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center">
              <h3 className="text-lg text-blue-700 font-bold mb-2">{image.header}</h3>
              <p className=" sm:text-sm mb-3">{image.desc}</p>
              <a href={image.link} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-orange-700 text-white rounded-md hover:bg-blue-800">Learn More</button>
              </a>
            </div>
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
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-gray-500" : "bg-gray-300"}`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        
        className="absolute top-20 left-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span  onClick={handlePrev} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 group-hover:bg-gray-800 group-focus:ring-4 group-focus:ring-gray-400">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Önceki</span>
        </span>
      </button>
      <button
      
        className="absolute top-20 right-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span   onClick={handleNext} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 group-hover:bg-gray-800 group-focus:ring-4 group-focus:ring-gray-400">
          <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
          <span className="sr-only">Sonraki</span>
        </span>
      </button>
      </div> ):
     
      (

        <div id="custom-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`absolute duration-700 ease-in-out w-full h-full ${
                index === currentSlide ? "block" : "hidden"
              }`}
            >
              <img
                src={image.src}
                className="absolute block w-90% pb-20 h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={image.header}
              />
            </div>
          ))}
        </div>
      
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {visibleImages.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-gray-500" : "bg-gray-300"
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      
      )}

    </div>
  );
};

export default Carousel;


