import React from 'react';

const PricingCard = () => {
    return (
        <div>

            <section>
                <div className='py-30'>
                    <div className='text-center'>
                        <h1 className='text-black font-bold text-5xl'>Simple, Transparent Pricing</h1>
                        <p className='text-sm text-gray-400 my-5 '>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                    </div>
                    <div className='grid grid-cols-3 gap-5'>
                        <div className='p-6 space-y-4 border border-gray-300 rounded-md flex flex-col' >
                            <div>
                                <h1 className='text-2xl font-semibold'>Starter</h1>
                                <p className='text-sm text-gray-400'>Perfect for getting started</p>
                            </div>
                            <div>
                                <div className='flex items-center '>
                                    <span className='text-3xl font-bold '>$0/</span>
                                    <p className='text-md text-gray-400'>Month</p>
                                </div>

                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>High-resolution image generation</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Customizable style templates</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Batch processing capabilities</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>AI-driven image enhancements</span>
                                    </li>

                                </ul>
                            </div>
                            <div className='flex-1'></div>
                            <button className='btn w-full bg-gradient text-white rounded-full'>Get Started Free</button>

                        </div>



                        <div className='p-6 space-y-4 bg-gradient  rounded-md flex flex-col' >
                            <div className='text-center -mt-10'>
                                <h1 className='text-[#BB4D00] bg-[#fef3c6] btn rounded-full'>Most Popular</h1>

                            </div>
                            <div>
                                <h1 className='text-2xl font-semibold text-white'>Pro</h1>
                                <p className='text-sm text-gray-400'>Best for professionals</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <span className='text-3xl font-bold text-white '>$29/</span>
                                    <p className='text-md text-gray-400 text-white'>Month</p>
                                </div>

                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>High-resolution image generation</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>High-resolution image generation</span>
                                    </li>

                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block  text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>High-resolution image generation</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>Customizable style templates</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>Batch processing capabilities</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span className='text-white'>AI-driven image enhancements</span>
                                    </li>

                                </ul>
                            </div>
                            <div className='flex-1'></div>

                            <button className='btn  w-full bg-white text-[#7625f8] rounded-full'>Get Started Free</button>

                        </div>



                        <div className='p-6 space-y-4 border border-gray-300 rounded-md flex flex-col' >
                            <div>
                                <h1 className='text-2xl font-semibold'>Starter</h1>
                                <p className='text-sm text-gray-400'>Perfect for getting started</p>
                            </div>
                            <div>
                                <div className='flex items-center'>
                                    <span className='text-3xl font-bold '>$99/</span>
                                    <p className='text-md text-gray-400'>Month</p>
                                </div>

                                <ul className="mt-6 flex flex-col gap-2 text-xs">
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>High-resolution image generation</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Customizable style templates</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Batch processing capabilities</span>
                                    </li>
                                    <li className='text-gray-400 text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>AI-driven image enhancements</span>
                                    </li>

                                </ul>
                            </div>
                            <div className='flex-1'></div>
                            <button className='btn w-full bg-gradient text-white rounded-full'>Get Started Free</button>

                        </div>
                    </div>



                </div>
            </section>

        </div>
    );
};

export default PricingCard;