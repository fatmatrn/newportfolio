"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const About = () => {
  const skills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "SQL",
    "Power BI",
    "Tableau",
    "Pandas",
    "Numpy",
    "Data Visualization",
    "Excel",
    "Data Preprocessing",
  ];

  const [isVisible, setIsVisible] = useState(false);  // Başlangıçta animasyon görünmez
  const aboutRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // About kısmı görünür olursa animasyon başlasın
          observer.disconnect(); // Sadece bir kez tetiklenmesi için observer'ı kapatıyoruz
        }
      },
      { threshold: 0.3 } // Görünürlüğün %30'unda tetiklenir
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current); // Observer'ı "aboutRef" elementine bağlıyoruz
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      skillRefs.current.forEach((skill, index) => {
        if (skill) {
          setTimeout(() => {
            skill.classList.add("animate-skill");
          }, index * 500); // Animasyon sırasıyla, her skill için 500ms arayla
        }
      });
    }
  }, [isVisible]);

  return (
    <div
      id="about"
      ref={aboutRef}
      className={`bg-gray-800 text-white py-16 px-6 lg:px-20 min-h-screen flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 transition duration-300 ease-in-out ${
        isVisible ? "animate-fadeIn" : "" // Yalnızca görünürken animasyon
      }`}
    >
      {/* Left: Image with animation */}
      <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
        <img
          src="/media/photo.jpeg"
          alt="Data Scientist Profile"
          className={`w-full max-w-sm h-auto rounded-lg shadow-lg mx-auto relative z-10 transition-transform duration-300 ${
            isVisible ? "hover:scale-105" : ""
          }`}
        />
        <div className="absolute -bottom-8 right-12 w-2/3 h-2/3 bg-blue-900 opacity-75 rounded-lg z-0 transition-transform duration-300 hover:scale-110"></div>
        <div className="absolute -top-8 left-10 w-2/3 h-2/3 bg-orange-500 opacity-75 rounded-lg z-0 transition-transform duration-300 hover:scale-110"></div>
      </div>

      {/* Right: Title, Summary, and Skills with animation */}
      <div className="lg:w-1/2 lg:pl-16 space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-orange-500 mb-6 animate-text glow text-shadow-md transition-all duration-300 ease-in-out hover:text-blue-500 flex justify-center items-center">
          ABOUT ME
        </h1>

        {/* Summary */}
        <p className="text-lg text-center leading-relaxed mb-8 animate-fade-in text-orange-100">
          Passionate about data science and machine learning, I’m a dedicated Data Scientist and ML Engineer with a strong foundation in analytics, programming, and model development. With hands-on experience in building impactful machine learning models, I continuously strive to optimize solutions and drive data-driven decision-making.
        </p>
        <p className="text-lg text-center leading-relaxed mb-8 animate-fade-in text-orange-100">
          As a young professional, I bring fresh perspectives, adaptability, and a strong eagerness to learn, always looking for innovative ways to solve problems and collaborate on cutting-edge projects.
        </p>

        {/* Skills */}
        <h2 className="text-3xl font-semibold text-blue-500 mb-4 animate-text glow text-shadow-md transition-all duration-300 hover:text-orange-500 flex justify-center items-center">
          Skills
        </h2>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              ref={(el) => (skillRefs.current[index] = el)} // Refs array'ini güncelliyoruz
              className={`px-4 py-2 bg-gray-300 rounded-lg text-blue-500 text-sm shadow-md transition-all duration-300 ease-in-out hover:bg-blue-500 hover:text-white`}
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
