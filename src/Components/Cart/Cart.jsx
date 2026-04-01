import { ShoppingCart } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Cart = ({ cartData, setCartData }) => {
    // console.log(setCartData)



    const handleRemove = (id) => {
        console.log(id)
        const filteredData = cartData.filter(data => data.id !== id)
        console.log(filteredData)
        setCartData(filteredData)



    }

    const handleCheckout = () => {
        setCartData([])
    }


    const price = () => {
        let sum = 0
        cartData.forEach(data => {
            sum = sum + Number(data.price) * 100
        })
        return sum / 100
    }





    return (
        <div>
            <section>
                <div className='border border-gray-300 rounded-2xl p-10'>
                    <h1 className='mb-6'>Your Cart</h1>


                    {
                        cartData.length !== 0 ?

                            < div >

                                <div className='space-y-5'>
                                    {cartData.map((data) =>
                                        <div className='bg-[#F9FAFC] rounded-2xl p-5 flex justify-between items-center'>
                                            <div className='flex gap-5 items-center '>
                                                <div className='bg-white h-14.5 aspect-square flex justify-center items-center rounded-full border-gray-300 border'>
                                                    <span className='text-2xl '>{data.icon}</span>
                                                </div>
                                                <div>
                                                    <h1 className='font-semibold text-lg'>{data.name}</h1>
                                                    <p className='text-gray-500'>${data.price}</p>
                                                </div>

                                            </div>
                                            <button onClick={() => handleRemove(data.id)} className='text-error cursor-pointer'>Remove</button>


                                        </div>
                                    )}







                                </div>
                                <div className='flex justify-between py-5'>
                                    <h2>Total:</h2>
                                    <h6 className=' text-xl font-bold'>{price()}</h6>
                                </div>
                                <button onClick={() => handleCheckout()} type="button" className="btn bg-gradient text-white rounded-full w-full">Proceed to Checkout</button>
                            </div>
                            : <div >
                                <div>
                                    <div className='p-11 flex  justify-center'>

                                        <ShoppingCart size={80}></ShoppingCart>



                                    </div>
                                </div>
                            </div>
                    }






                </div>
            </section >

        </div >
    );
};

export default Cart;