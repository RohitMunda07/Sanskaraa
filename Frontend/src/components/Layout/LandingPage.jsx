import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, UserRound, ArrowLeftFromLine } from 'lucide-react';
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import TopButton from '../common/TopButton';
import '../../pages/style.css'

const LandingPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);

  const scrollToSection = (id, urlPath) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, "", urlPath);
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);

  };

  const toggleEventDropdown = () => {
    setIsEventDropdownOpen(!isEventDropdownOpen);
  };

  return (
    <div className="scroll-smooth transition-all ease-in-out duration-700 font-sans ">
      {/* Custom Styles */}
      <style jsx='true'>{`
        .hero-bg {
                background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                url('/assets/banner-image-1-updated.png') no-repeat top left;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top left;
                height: 70vh;
                width: 100%;
              }

        .service-card:hover {

          transform: translateY(-10px);
          box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .testimonial-card {
          border-left: 4px solid #f59e0b;
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-[#973c00] text-white sticky top-0 z-50 shadow-md">
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
              onClick={() => scrollToSection('services', '/services')}
              className="nav_items">Services</a>
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
              onClick={() => scrollToSection('about-us', '/about-us')}
              className="nav_items">About Us</a>
            <a
              onClick={() => scrollToSection('contact-us', '/contact-us')}
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
            <a href="#services" className="menu_nav_items">Services</a>
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

      {/* banner image */}
      <section className="">
        <img src="/assets/banner_image_upscale.png" alt="" className='w-full lg:h-[90vh]' />
      </section>


      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Problem We Solve</h2>
            <p className="text- text-gray-600 max-w-3xl mx-auto">
              Organizing traditional Indian events is complex with fragmented vendors and lack of trust. We bring everything together in one trusted platform.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 text-lg text-center  px-10 py-10 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-clock"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
              <p className="text-gray-600 md:!w-full">
                Searching for multiple vendors takes weeks of coordination and negotiations.
              </p>
            </div>
            <div className="bg-amber-50 text-lg text-center  px-10 py-10 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust Issues</h3>
              <p className="text-gray-600 md:!w-full">
                No reliable way to verify quality of pandits, decorators or caterers.
              </p>
            </div>
            <div className="bg-amber-50 text-lg text-center  px-10 py-10 rounded-lg">
              <div className="text-amber-600 text-4xl mb-4">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fragmented</h3>
              <p className="text-gray-600 md:!w-full">
                Different vendors booked separately increases costs and coordination hassles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 flex flex-col">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All your ritual and event needs met in one simple platform with verified service providers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Decoration */}
            <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 group ">
              <div className="h-48 overflow-hidden ">
                <img
                  src="/assets/decoration-image.jpg"
                  alt="Beautiful wedding mandap decoration with flowers and drapes in traditional red and gold colors"
                  className={`w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-6 min-w-full">
                <h3 className="text-2xl font-semibold mb-2">Event Decoration</h3>
                <p className="text-lg text-start text-gray-600">
                  Stunning mandaps, floral arrangements, lighting and theme-based decor for all ceremonies.
                </p>
                <a href="#" className=" text-amber-600 font-medium">
                  View Options <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </a>
              </div>
            </div>

            {/* Catering */}
            <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 group ">
              <div className="h-48 overflow-hidden ">
                <img
                  src="/assets/caterer-image.jpg"
                  alt="Traditional vegetarian thali with metal plates containing various Indian dishes served at events"
                  className={`w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Catering Services</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Authentic satvik food, thali options and menu customization for all event sizes.
                </p>
                <a href="#" className="text-amber-600 font-medium inline-flex items-center">
                  View Options <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </a>
              </div>
            </div>

            {/* Pandit Booking */}
            <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 group ">
              <div className={`h-48 overflow-hidden `}>
                <img
                  src="/assets/Pandit Ji Booking.jpg"
                  alt="Vedic priest conducting a Hindu ceremony with fire pit, flowers and ritual items"
                  className={`w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Pandit Ji Booking</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Verified priests for all ceremonies with expertise in regional rituals and customs.
                </p>
                <a href="#" className="text-amber-600 font-medium inline-flex items-center">
                  Find a Priest <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </a>
              </div>
            </div>

            {/* Puja Samagri */}
            <div className="service-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300 group ">
              <div className="h-48 overflow-hidden ">
                <img
                  src="/assets/puja-samagri.jpg"
                  alt="Collection of various Hindu puja items arranged beautifully - incense, flowers, diyas, holy threads and other ritual materials"
                  className={`w-full h-full transition-all ease-in-out duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Puja Samagri Delivery</h3>
                <p className="text-lg text-gray-600 mb-4">
                  Complete puja kits for all occasions with same-day delivery available.
                </p>
                <a href="#" className="text-amber-600 font-medium inline-flex items-center">
                  Shop Now <i className="fas fa-chevron-right ml-1 text-sm"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Explore Services btn */}
          <div className='self-center'>
            <button
              onClick={() => navigate('/services')}
              className="bg-[#973c00] md:text-xl mt-5 w-[12rem] md:!w-2xs hover:bg-[#d84915] text-white px-8 py-4 rounded-full font-semibold transition">
              Explore Services <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>


        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Sanskaraa?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides everything you need for flawless traditional events.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Vendors</h3>
              <p className="text-gray-600 text-sm">
                All partners carefully vetted for quality and reliability
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-rupee-sign text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">
                No hidden costs with upfront package pricing
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-headset text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ritual Guidance</h3>
              <p className="text-gray-600 text-sm">
                Expert advice for traditional ceremony requirements
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-bolt text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Service</h3>
              <p className="text-gray-600 text-sm">
                Same-day or next-day bookings available
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-language text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">Regional Experts</h3>
              <p className="text-gray-600 text-sm">
                Pandits specialized in local traditions and languages
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="about-us" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who Benefits from Sanskaraa?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We serve a diverse range of clients seeking authentic traditional services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-amber-500 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full mr-4">
                    <i className="fas fa-home text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold">Households</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Families planning Griha Pravesh ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Parents organizing baby naming ceremonies</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Individuals celebrating religious milestones</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t-4 border-amber-500 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 p-3 text-amber-600 rounded-full mr-4">
                    <i className='fas fa-ring text-xl'></i>
                  </div>
                  <h3 className="text-xl font-semibold">Wedding Planners</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Professional event coordinators</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Destination wedding organizers</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Need integrated traditional services</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t-4 border-amber-500 rounded-lg overflow-hidden bg-gray-50">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-full mr-4">
                    <i className="fas fa-globe text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold">NRIs & Expats</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Diaspora seeking authentic rituals abroad</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Limited access to reliable priests locally</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-amber-500 mt-1 mr-2 text-sm"></i>
                    <span>Need puja items shipped internationally</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className=" py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sustainable Business Model</h2>
            <p className="text-amber-200 max-w-3xl mx-auto">
              Our revenue streams ensure quality service while keeping the platform accessible.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Business model content would continue here */}
          </div>
        </div>
      </section>

      <TopButton />
    </div>
  );
};

export default LandingPage;