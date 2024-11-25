import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="logo.jpeg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">School Website</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="#about" className="hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link to="#features" className="hover:underline">Features</Link>
                        </li>
                        <li>
                            <Link to="#gallery" className="hover:underline">Gallery</Link>
                        </li>
                        <li>
                            <Link to="#contact" className="hover:underline">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© 2024 <Link to="#" className="hover:underline">Nixsecura</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;
