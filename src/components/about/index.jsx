"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./style.css";

const About = () => {
  const skills = ["Python", "SQL", "Power BI", "Tableau", "Pandas", "Numpy", "Data Visualization", "Excel"];
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // İlk görünümden sonra animasyonun başlaması için bağlantıyı kes
        }
      },
      { threshold: 0.3 } // Görünürlüğün %30'unda tetiklenir
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={aboutRef}
      className={`bg-gray-800 text-white py-16 px-6 lg:px-20 min-h-screen flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 transition duration-300 ease-in-out ${
        isVisible ? 'animate-fadeIn' : '' // Yalnızca görünürken animasyon uygulansın
      }`}
    >
      {/* Left: Image with animation */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
        <img
          src="/media/memili.jpeg"
          alt="Data Scientist Profile"
          className={`w-full max-w-sm h-auto rounded-lg shadow-lg mx-auto relative z-10 transition-transform duration-300 ${
            isVisible ? 'hover:scale-105' : ''
          }`}
        />
        <div className="absolute -bottom-8 right-12 w-2/3 h-2/3 bg-blue-900 opacity-75 rounded-lg z-0 transition-transform duration-300 hover:scale-110"></div>
        <div className="absolute -top-8 left-10 w-2/3 h-2/3 bg-orange-500 opacity-75 rounded-lg z-0 transition-transform duration-300 hover:scale-110"></div>
      </div>

      {/* Right: Title, Summary, and Skills with animation */}
      <div className="lg:w-1/2 lg:pl-16 space-y-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-orange-500 mb-6 animate-text glow text-shadow-md transition-all duration-300 ease-in-out hover:text-blue-500 flex justify-center items-center">
          About Me
        </h1>

        {/* Summary */}
        <p className="text-lg leading-relaxed mb-8 animate-fade-in text-orange-100">
          As a Data Scientist, I transform raw data into meaningful insights, applying machine learning algorithms and statistical techniques to solve complex problems.
        </p>
        <p className="text-lg leading-relaxed mb-8 animate-fade-in text-orange-100">
          With expertise in Python, R, SQL, and data visualization tools like Tableau and PowerBI, I empower businesses with data-driven decisions.
        </p>

        {/* Skills */}
        <h2 className="text-3xl font-semibold text-blue-500 mb-4 animate-text glow text-shadow-md transition-all duration-300 hover:text-orange-500 flex justify-center items-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className={`px-4 py-2 bg-gray-300 rounded-lg text-blue-500 text-sm shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white ${
                isVisible ? `animate-skill fadeIn delay-${index * 200}` : ''
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
