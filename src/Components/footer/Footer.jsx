import React from 'react';
import footerImg from "../../assets/DigiTools.png"
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";




const Footer = () => {
    return (
        <div className='bg-[#101727] py-30 text-white '>
            <section>
                <div className='flex flex-wrap sm:flex-nowrap sm:justify-between'>

                    <div className='space-y-4 order-1 sm:order-0  w-1/2 mb-5 sm:mb-0'>
                        <img src={footerImg} alt="" />
                        <p className='text-sm text-gray-300'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                    </div>

                    <ul className='space-y-4 order-5 sm:order-0  w-1/3  mb-5 sm:mb-0'>
                        <li className='font-semibold text-lg'>Product</li>
                        <li className='text-sm text-gray-300'>Features</li>
                        <li className='text-sm text-gray-300'>Pricing</li>
                        <li className='text-sm text-gray-300'>Templates</li>
                        <li className='text-sm text-gray-300'>Integrations</li>
                    </ul>

                    <ul className='space-y-4 order-3 sm:order-0  w-1/3'>
                        <li className='font-semibold text-lg'>Company</li>
                        <li className='text-sm text-gray-300'>About</li>
                        <li className='text-sm text-gray-300'>Blog</li>
                        <li className='text-sm text-gray-300'>Careers</li>
                        <li className='text-sm text-gray-300'>Press</li>
                    </ul>

                    <ul className='space-y-4 order-4 sm:order-0  w-1/3 '>
                        <li className='font-semibold text-lg'>Resources</li>
                        <li className='text-sm text-gray-300'>Documentation</li>
                        <li className='text-sm text-gray-300'>Help Center</li>
                        <li className='text-sm text-gray-300'>Community</li>
                        <li className='text-sm text-gray-300'>Contact</li>
                    </ul>

                    <div className='order-2 sm:order-0  ml-auto sm:ml-0 '>
                        <h1 className='font-semibold text-lg'>Social Links</h1>
                        <div className='flex gap-4 mt-4'>

                            <div className='text-black bg-white p-3 rounded-full text-xl'>
                                <FaInstagramSquare />
                            </div>
                            <div className='text-black bg-white p-3 rounded-full text-xl'>
                                <FaFacebookSquare />
                            </div>
                            <div className='text-black bg-white p-3 rounded-full text-xl'>
                                <FaYoutube />
                            </div>

                        </div>
                    </div>

                </div>




                <div className='text-gray-400 mt-7'>

                    <hr />
                </div>

                <div className='flex justify-between mt-5 *:text-gray-300 text-sm'>
                    <span >© 2026 Digitools. All rights reserved.</span>
                    <ul className='flex gap-4'>
                        <li>Privacy Policy</li>
                        <li>Terms of service</li>
                        <li>Cookies</li>
                    </ul>

                </div>

            </section>

        </div>
    );
};

export default Footer;