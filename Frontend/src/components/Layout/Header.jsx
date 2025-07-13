import { ArrowLeftFromLine, Menu, UserRound } from 'lucide-react';
import React, { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);

    };

    const toggleEventDropdown = () => {
        setIsEventDropdownOpen(!isEventDropdownOpen);
    };

    return (
        <div className='sticky top-0 z-50'>
            {/* Navigation */}
            <nav className="bg-[#973c00] text-white  shadow-md">
                <div className="container mx-auto px-4 py-3 flex justify-around items-center">
                    {isMenuOpen ?
                        <ArrowLeftFromLine className='lg:hidden cursor-pointer'
                            onClick={toggleMenu} /> :
                        <Menu
                            className='lg:hidden cursor-pointer'
                            onClick={toggleMenu}
                        />
                    }

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <img
                            src="/logo-sanskaraa.png"
                            alt="Sanskaraa logo - traditional diya with flame in orange and gold colors"
                            className="rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-25 lg:h-20"
                        />
                        <a href="/" className="text-2xl md:text-3xl lg:text-5xl font-bold">Sanskaraa</a>
                    </div>

                    {/* nav-items for larger screen*/}
                    <div className="hidden lg:flex space-x-6">
                        <a
                            onClick={() => navigate('/', { state: { scrollTo: 'services-section' } })}
                            className="nav_items">Services
                        </a>

                        <div className="relative">
                            <button
                                className="nav_items flex items-center"
                                onClick={toggleEventDropdown}
                            >
                                <span>Events</span>
                                <span>{isEventDropdownOpen ? <RiArrowDropUpLine fontSize={35} className='inline' /> :
                                    <RiArrowDropDownLine fontSize={35} className='inline' />}</span>
                            </button>

                            {/* larger screen drop-down */}
                            {isEventDropdownOpen && (
                                <div className="absolute bg-[#973c00] text-white text-lg mt-2 py-2 rounded shadow-lg w-48">
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50/20">Weddings</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50/20">Griha Pravesh</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50/20">Pooja Ceremonies</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50/20">Satyanarayan Katha</a>
                                </div>
                            )}
                        </div>
                        <a
                            className="nav_items">About Us</a>
                        <a
                            className="nav_items">Contact</a>
                    </div>

                    <button
                        className="flex gap-x-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-6 !w-fit rounded-md  transition font-[Kalnia] cursor-pointer"
                        onClick={() => navigate('/sign-in')}
                    >
                        <span><UserRound /></span>
                        <span className='hidden md:block'>Sign In</span>
                    </button>

                </div>
            </nav>

            {/* Hero Section */}
            <section

                className={`fixed w-full h-[70vh] bg-amber-50/70 backdrop-blur-sm 
       transition-all duration-500 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>

                {/* left-nav-items from small screen*/}
                <ul className="space-y-8 p-10">
                    <li>
                        <a
                            onClick={() => navigate('/', { state: { scrollTo: 'services-section' } })}
                            className="menu_nav_items">Services</a>
                    </li>
                    <div className="relative">
                        <ul
                            className="menu_nav_items text-start cursor-pointer"
                            onClick={toggleEventDropdown}
                        >
                            <span className=''>Events</span>
                            <span>{isEventDropdownOpen ? <RiArrowDropUpLine fontSize={35} className='inline' /> :
                                <RiArrowDropDownLine fontSize={35} className='inline' />}</span>
                        </ul>

                        {isEventDropdownOpen && (
                            <ul className={`relative left-5 text-gray-800 text-xl mt-2 py-2 rounded shadow-lg w-48
                            transition-all ease-in-out duration-500
                                ${isEventDropdownOpen ? 'h-fit' : 'h-0'}
                                 `}>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50">Weddings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50">Griha Pravesh</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50">Pooja Ceremonies</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-amber-50">Satyanarayan Katha</a>
                                </li>
                            </ul>
                        )}
                    </div>
                    <a href="#about" className="menu_nav_items">About Us</a>
                    <a href="#contact" className="menu_nav_items">Contact</a>
                </ul>
            </section>
        </div>
    )
}
