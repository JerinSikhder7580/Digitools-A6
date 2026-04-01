import { Menu, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';


const Navbar = () => {
    const links = <>
        <li>Products</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
        <li>FAQ</li>
    </>

    const [dropdown, setDropdown] = useState(false)
 


    return (
        <div>

            <section>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2' >
                        <div className='relative sm:hidden block z-10 '>
                            <Menu onClick={() =>setDropdown(!dropdown)} className='cursor-pointer active:scale-95' />
                            {
                                dropdown && <ul className='absolute border bg-white p-5 rounded'>
                                    {links}


                                </ul>

                            }


                        </div>
                        <h1 className='text-gradient text-3xl font-bold'>DigiTools</h1>
                    </div>
                    <ul className='sm:flex gap-7 *:font-semibold hidden'>
                        {links}
                    </ul>



                    {/* // cartdata.length */}




                    <div className='flex gap-3 items-center'>
                        <div className='relative'>
                            <span><ShoppingCart /></span>
                            <span className='absolute top left'>{ }</span>
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