import React, { useState } from 'react';

const Premium = ({cartData, activeButton, setActiveButton}) => {



    return (
        <div>
            <section>
                <div className='p-8  text-center space-y-4'>
                    <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                    <p className='text-gray-500 text-sm'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    <div className='border border-gray-300 w-max mx-auto p-1 rounded-full flex gap-2'>
                        <button
                            onClick={() => setActiveButton("products")}
                            className={`${activeButton === "products" ? "bg-[#9514FA] text-white" : "bg-white text-black"} btn  rounded-full   font-bold`}
                        >Products</button>

                        <button
                            onClick={() => setActiveButton("cart")}
                            className={`${activeButton === "cart" ? "bg-[#9514FA] text-white" : "bg-white text-black"} btn  font-bold rounded-full`}
                        >Cart ({cartData.length})</button>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Premium;