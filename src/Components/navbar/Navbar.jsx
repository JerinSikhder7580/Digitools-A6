import { ShoppingCart } from 'lucide-react';
import React from 'react';
import navImg from "../../assets/DigiTools.png"


const Navbar = () => {
    return (
        <div>

            <section>
                <div className='flex justify-between items-center'>
                    <div >
                        <h1 className='text-gradient text-3xl font-bold'>DigiTools</h1>
                    </div>
                    <ul className='flex gap-3 *:font-semibold'>
                        <li>Products</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>FAQ</li>
                    </ul>



                    {/* // cartdata.length */}




                    <div className='flex gap-3 items-center'>
                        <div className='relative'>
                            <span><ShoppingCart /></span>
                            <span className='absolute top left'>{}</span>
                        </div>

                        <button className='font-semibold'>Login</button>
                        <button className='btn bg-gradient rounded-full text-white'>Get Started</button>

                    </div>
                </div>

            </section>
            <div className="divider w-full"></div>


        </div>
    );
};

export default Navbar;