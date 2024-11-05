"use client";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import Carousel from "../../components/projects";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { FaKaggle } from "react-icons/fa";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        {" "}
        {/* Bu kısım video alanını kaplıyor */}
        {/* Arka plan videosu */}
        <div className="relative flex-grow w-full h-screen">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <video
              className="w-full h-full object-cover"
              src="/media/video/home.mp4"
              autoPlay
              loop
              muted
            />

            {/* Mavi filigran */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-700 opacity-30"></div>
          </div>

          {/* İçerik */}
          <div className="relative h-full flex flex-col items-center justify-center">
            <h1 className="text-white font-bold text-5xl">
              {Array.from("FATIH YAVUZ").map((char, index) => (
                <span
                  key={index}
                  className="relative inline-block"
                  style={{
                    textShadow: "3px 3px 0px #ff6a00", // Turuncu gölge
                  }}
                >
                  {char === " " ? "\u00A0" : char}{" "}
                  {/* Boşluk için özel karakter kullan */}
                </span>
              ))}
            </h1>
            <h2 className="text-white text-2xl">DATA ANALYST | BI ANALYST</h2>
            <div className="inline-flex pt-10 gap-5 space-x-2">
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
  <SlSocialLinkedin  size={24}/>
    </button>
  </a>
  
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
  <RiGithubLine size={24}  />
    </button>
  </a>

  <a href="https://www.kaggle.com" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
      <FaKaggle size={24} />
    </button>
  </a>
</div>



          </div>
        </div>
        {/* Çocuk elemanlar */}
        <main className="relative z-10">{children}</main>
        <Carousel/>
      </div>
      <Footer /> {/* Footer burada sabit olarak en alta yerleştirildi */}
    </>
  );
};

export default MainLayout;
