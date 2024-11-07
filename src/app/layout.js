import localFont from "next/font/local";
import "./globals.css";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { FaKaggle } from "react-icons/fa";
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/projects';
import Parallax from "../components/parallax";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Fatih Yavuz",
  description: "Fatih Yavuz Portfolio",

  icons: {
    icon: "/media/icons/whiteicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html>
      <body className="m-0 flex flex-col h-screen">
    
      
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
            <h2 className="text-white text-2xl">DATA ANALYST&nbsp;&nbsp;|&nbsp;&nbsp;BI ANALYST</h2>

            <div className="inline-flex pt-10 gap-5 space-x-2">
  <a href="https://www.linkedin.com/in/fatih-yavuzz" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
  <SlSocialLinkedin  size={24}/>
    </button>
  </a>
  
  <a href="https://github.com/fatihhyavuz" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
    >
  <RiGithubLine size={24}  />
    </button>
  </a>

  <a href="https://www.kaggle.com/fatihyavuzz" target="_blank" rel="noopener noreferrer">
    <button
      type="button"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
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
        <Parallax/>
      </div>
      <Footer /> {/* Footer burada sabit olarak en alta yerleştirildi */}
         
      </body>
    </html>
  );
}

