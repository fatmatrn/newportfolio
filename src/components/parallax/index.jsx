import React from 'react';

const Parallax = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-fixed flex justify-center items-center p-5 sm:p-10 md:p-20 text-xl sm:text-2xl text-white font-bold h-[40vh] sm:h-[50vh] md:h-[60vh] bg-[url('/media/bgdata.jpeg')]">
      
      {/* Tüm sayfanın üstüne mavi bir filtre katmanı */}
      <div className="absolute inset-0 bg-orange-950 opacity-30 z-0"></div>

      {/* Sol altta küçük, yarı saydam üçgen */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[40px] sm:border-l-[60px] md:border-l-[80px] border-l-transparent border-t-[40px] sm:border-t-[60px] md:border-t-[80px] border-t-blue-700 border-r-[40px] sm:border-r-[60px] md:border-r-[80px] border-r-transparent rotate-45 opacity-70 z-10"></div>

      <p className="relative z-10 p-3 sm:p-5 bg-blue-700 bg-opacity-35 text-white rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[60%]">
        {"\"Understanding the past comes from understanding data. Predicting the future comes from using data.\""}
      </p>

      <span className="absolute bottom-0 right-0 mr-5 mb-3 text-lg sm:text-xl md:text-2xl font-semibold z-10">
        — Nate Silver
      </span>

      {/* Sağ üstte küçük, yarı saydam üçgen */}
      <div className="absolute top-2 right-0 w-0 h-0 border-l-[40px] sm:border-l-[60px] md:border-l-[80px] border-l-transparent border-t-[40px] sm:border-t-[60px] md:border-t-[80px] border-t-blue-700 border-r-[40px] sm:border-r-[60px] md:border-r-[80px] border-r-transparent rotate-135 opacity-70 z-10"></div>
    </div>
  );
};

export default Parallax;
