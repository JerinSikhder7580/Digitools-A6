import React, { useEffect, useState } from 'react';

const Cart = ({ cartData, setCartData }) => {

    const [total, setTotal] = useState(0)
    useEffect(() => {
        cartData.forEach(data => {

            setTotal((prev) => prev + data.price)
        });
    }, [])


    return (
        <div>
            <section>
                <div className='border border-gray-300 rounded-2xl p-10'>
                    <h1 className='mb-6'>Your Cart</h1>
                    <div className='space-y-5'>
                        {cartData.map((data) =>
                            <div className='bg-[#F9FAFC] rounded-2xl p-5 flex justify-between items-center'>
                                <div className='flex gap-5 items-center '>
                                    <div className='bg-white h-14.5 aspect-square flex justify-center items-center rounded-full border-gray-300 border'>
                                        <span className='text-2xl '>{data.icon}</span>
                                    </div>
                                    <div>
                                        <h1>{data.name}</h1>
                                        <p>{data.price}</p>
                                    </div>

                                </div>
                                <button className='text-error'>Remove</button>


                            </div>
                        )}
                    </div>
                    <div className='flex justify-between'>
                        <h2>Total:</h2>
                        <h6>{total}</h6>
                    </div>
                    <button type="button" class="btn btn-outline-primary"></button>


                </div>
            </section>

        </div>
    );
};

export default Cart;