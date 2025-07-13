import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './style.css'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <>
            {/* Business Model Section */}
            < section className="grid grid-cols-1 text-left md:grid-cols-4 justify-center items-center gap-y-12 gap-x-12 px-8 md:px-16 py-16 bg-amber-800 text-white" >
                {/* logo */}
                <div
                    onClick={() => navigate('/')}
                    className="cursor-pointer">
                    <div className='flex items-center'>
                        <img src="/logo-sanskaraa.png"
                            className='w-10 h-10'
                            alt="logo-sanskaraa" />

                        <h3 className='font-bold'>Sanskaraa</h3>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className='font-semibold'>Quick Links</h2>
                    <ul className='mt-3 space-y-2'>
                        <li><Link className='footer-nav-list' to='/'>Puja Kits</Link></li>
                        <li><Link className='footer-nav-list' to='/categories'>Categories</Link></li>
                        <li><Link className='footer-nav-list' to='/offers'>Special Offers</Link></li>
                        <li><Link className='footer-nav-list' to='/guides'>Ritual Guides</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className='font-semibold'>Services</h2>
                    <ul className='mt-3 space-y-2'>
                        <li><Link className='footer-nav-list' to='/priest-booking'>Priest Booking</Link></li>
                        <li><Link className='footer-nav-list' to='/custom-kits'>Custom Kits</Link></li>
                        <li><Link className='footer-nav-list' to='/same-day-delivery'>Same Day Delivery</Link></li>
                        <li><Link className='footer-nav-list' to='/puja-services'>Puja Services</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className='font-semibold'>Contact</h2>
                    <ul className='mt-3 space-y-2'>
                        <li ><a className='footer-nav-list' href="tel:+911234567890">+91 12345 67890</a></li>
                        <li ><a className='footer-nav-list' href="mailto:support@sanskaraa.com">support@sanskaraa.com</a></li>
                        <li>Available 24x7</li>
                        <li>Free Delivery on orders ₹499+</li>
                    </ul>
                </div>


            </section >
        </>

    )
}
