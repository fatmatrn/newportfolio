import React from 'react'
import { SlSocialLinkedin } from "react-icons/sl";
import { RiGithubLine } from "react-icons/ri";
import { FaKaggle } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer id="contact" className="relative bottom-0 !bg-white   px-4 text-center w-full z-10">
        <h2 className="text-4xl text-gray-700 font-bold pt-8 pb-16">Get in Touch</h2>
        
        <div className="flex justify-center pb-16 sm:gap-40 gap-10 ">
          <div className="flex flex-col items-center ">
            <a href="https://www.linkedin.com/in/fatih-yavuzz" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-orange-500"
              >
                <SlSocialLinkedin size={24} />
              </button>
            </a>
            <span className=" text-gray-800  mt-2">LinkedIn</span>
          </div>

          <div className="flex flex-col items-center ">
            <a href="https://github.com/fatihhyavuz" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-orange-500"
              >
                <RiGithubLine size={24} />
              </button>
            </a>
            <span className=" text-gray-800  mt-2">GitHub</span>
          </div>

          <div className="flex flex-col items-center">
            <a href="https://www.kaggle.com/fatihyavuzz" target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-orange-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-orange-500"
              >
                <FaKaggle size={24} />
              </button>
            </a>
            <span className=" text-gray-800  mt-2">Kaggle</span>
          </div>
        </div>

        <p className="text-sm  text-gray-600  py-4 border-t border-gray-600">© 2024 Fatih Yavuz. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Footer
