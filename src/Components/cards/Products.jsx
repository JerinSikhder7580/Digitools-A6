import { Check } from 'lucide-react';
import React, { use, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Products = ({ cardPromise, cartData, setCartData }) => {


    const products = use(cardPromise)
    // BB4D00 best seller
    // 4F39F6 popular
    // 0A883E new
    const labelColor = (code) => {

        if (code === "best seller") {
            return "187, 77, 0"
        }
        else if (code === "popular") {
            return "79, 57, 246"
        }
        else if (code === "new") {
            return "10, 136, 62"
        }

    }

    const [activeId, setActiveId] = useState([])



    const handleCart = (id) => {

        const particularData = products.find((data) => data.id === id)

        const duplicateData = cartData.find((data) => data.id === id)

        if (duplicateData) {
            return toast.error("Already Added!")


        }


        setActiveId([...activeId, id])

        toast.success("Added to cart successfully")
        setCartData([...cartData, particularData])

    }

    return (
        <div>
            <section>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 '>

                    {
                        products.map(product => {
                            return (
                                <div className='p-6 space-y-3 border-2 border-gray-300 rounded-xl flex flex-col'>
                                    <div className='flex justify-between items-center'>
                                        <div className='p-4 border border-gray-100 rounded-full h-14.5 w-14.5 text-center text-xl'>
                                            <span>{product.icon}</span>
                                        </div>
                                        {/* <span>{product.icon}</span> */}

                                        <span
                                            className=' px-3 rounded-full capitalize font-semibold -mt-[55px]'
                                            style={{ color: `rgba(${labelColor(product.tag)},1)`, backgroundColor: `rgba(${labelColor(product.tag)},.2)` }} >{product.tag}</span>

                                    </div>
                                    <h1>{product.name}</h1>
                                    <p className='text-gray-500'>{product.description}</p>
                                    <span className="text-xl">{product.price}/{product.period}</span>
                                    <ul>
                                        {product.features.map((data, index) =>
                                            <li className='text-gray-500' key={index}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                                <span className='text-sm'>{data}</span>
                                            </li>
                                        )}
                                    </ul>
                                    <div className='flex-1'></div>
                                    <button
                                        onClick={() => handleCart(product.id)}
                                        className={`btn  ${activeId.includes(product.id) ? "text-white bg-green-700" : "bg-gradient text-white "} btn-block rounded-full`}
                                    >{activeId.includes(product.id) ? <><Check size={18} />Added to cart</> : "Buy Now"}</button>



                                </div>
                            )

                        })
                    }
                </div>
            </section >




        </div >
    );
};

export default Products;