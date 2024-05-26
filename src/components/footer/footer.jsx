import React from "react";
import newImage from '../../assets/homeimages/new.png';
import { FaLinkedinIn, FaTwitter, FaWhatsapp, FaPinterest } from "react-icons/fa"; // Importing icons

const Footer = () => {
    return (
        <footer className="bg-[#1A1D2B]">
            <div className="container mx-auto p-0.xl md:p-0 xl:px-0">
                <div className="mx-auto max-w-7xl px-6 pb-2 pt-16">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        {/* First Column */}
                        <div className="space-y-4 pt-1">
                            <img
                                src={newImage}
                                alt="New Image"
                                className="w-40 h-24 rounded-full object-cover"
                            />
                            <div className="max-w-md pr-16 text-md text-gray-200">
                                Focus on a digital marketing niche to elevate your agency. Tailor services for industry-specific needs, apply deep expertise, and drive growth. Specialization sets you apart, ensuring client satisfaction.
                            </div>
                            <div className="flex space-x-2">
                                {/* LinkedIn Icon */}
                                <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-200">
                                    <span className="sr-only">LinkedIn</span>
                                    <FaLinkedinIn size="24" />
                                </a>

                                {/* Twitter Icon */}
                                <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-200">
                                    <span className="sr-only">Twitter</span>
                                    <FaTwitter size="24" />
                                </a>

                                {/* WhatsApp Icon */}
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-200">
                                    <span className="sr-only">WhatsApp</span>
                                    <FaWhatsapp size="24" />
                                </a>

                                {/* Pinterest Icon */}
                                <a href="https://www.pinterest.com/example/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-gray-200">
                                    <span className="sr-only">Pinterest</span>
                                    <FaPinterest size="24" />
                                </a>
                            </div>



                        </div>

                        {/* Second Column */}
                        <div className="mt-16 grid grid-cols-2 gap-2 xl:col-span-2 xl:mt-0 pt-11">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-md font-semibold leading-6 text-white">Our Services</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="" className="text-md leading-6 text-gray-300 hover:text-gray-50">Digital Marketing</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-md leading-6 text-gray-300 hover:text-gray-50">Web Development</a>
                                        </li>
                                        <li>
                                            <a href="" className="text-md leading-6 text-gray-300 hover:text-gray-50">SEO Optimization</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Third Column */}
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                {/* Company Section */}
                                <div className="ml-18">
                                    <h3 className="text-md font-semibold leading-6 text-white">Company</h3>
                                    <ul role="list" className="mt-6 space-y-4">
                                        <li>
                                            <a href="/Aboutus" className="text-md leading-6 text-gray-300 hover:text-gray-50">About Us</a>
                                        </li>
                                        <li>
                                            <a href="/services" className="text-md leading-6 text-gray-300 hover:text-gray-50">Service</a>
                                        </li>
                                        <li>
                                            <a href="/contactus" className="text-md leading-6 text-gray-300 hover:text-gray-50">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Copyright Section */}
                    <div class="mt-4 border-t border-gray-400/30 pt-4 sm:mt-12 lg:mt-16">
                        <div class="text-sm text-center text-white mb-2">
                            Copyright © 2024.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
