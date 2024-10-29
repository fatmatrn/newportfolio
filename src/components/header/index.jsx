"use client"

import React, { useEffect, useState } from 'react'


const Header = () => {
    const [navbarBg, setNavbarBg] = useState('bg-transparent');
    const [text, setText] = useState('text-white');
    const [icon, setIcon] = useState('./media/icons/whiteicon.jpeg')
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarBg('bg-white shadow-lg');
                setText('text-black');
            } else {
                setNavbarBg('bg-transparent');
                setText('text-white')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0 left-0 z-20 transition-all duration-300 ${navbarBg}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3">
                    <img src="./media/icons/whiteicon.jpeg" className="h-10 rounded-full border-2 border-orange-500" alt="Logo" />
                    <span className={`self-center ${text} text-2xl font-semibold whitespace-nowrap `}>FATIH YAVUZ</span>
                </a>
                
                {/* Hamburger Menu Button for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                {/* Navbar Links */}
                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                        {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item) => (
                            <li key={item} className="relative group">
                                <a href="#" className={`block py-2 px-3 ${text}  md:hover:text-blue-500 dark:md:hover:text-blue-500`}>
                                    {item}
                                </a>
                                <span className="absolute left-0 bottom-0 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;
