import React from 'react';
import step1 from "../../assets/user.png"
import step2 from "../../assets/package.png"
import step3 from "../../assets/rocket.png"

const Steps = () => {
    return (
        <div className='bg-[#f9fafc] py-30'>
            <section>
                <div className='text-center'>
                    <h1 className='text-5xl font-bold'>Get Started in 3 Steps</h1>
                    <p className='text-sm my-5 text-gray-400'>Start using premium digital tools in minutes, not hours.</p>


                    <div className='grid sm:grid-cols-1 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 md:justify-between md:gap-4'>


                        <div className='space-y-5 border border-gray-200 p-6 rounded-xl'>
                            <div className='flex justify-between '>
                                <div></div>
                                <div className='bg-gradient text-white p-4 text-center rounded-full h-6 w-6 flex items-center justify-center'>
                                    01</div>
                            </div>
                            <div className='bg-[#f3e8fe] p-3 rounded-full w-max mx-auto'>
                                <img className='mx-auto' src={step1} alt="" />
                            </div>
                            <h1 className='text-2xl font-semibold'>Create Account</h1>
                            <p className='text-gray-400 text-sm'>Sign up for free in seconds. No credit card required to get started.</p>

                        </div>

                        <div className='space-y-5 border border-gray-200 p-6 rounded-xl'>
                            <div className='flex justify-between '>
                                <div></div>
                                <div className='bg-gradient text-white p-4 text-center rounded-full h-6 w-6 flex items-center justify-center'>
                                    02</div>
                            </div>
                            <div className='bg-[#f3e8fe] p-3 rounded-full w-max mx-auto'>

                                <img className='mx-auto' src={step2} alt="" />
                            </div>
                            <h1 className='text-2xl font-semibold'>Choose Products</h1>
                            <p className='text-gray-400 text-sm'>Browse our catalog and select the tools that fit your needs.</p>

                        </div>

                        <div className='space-y-5 border border-gray-200 p-6 rounded-xl'>
                            <div className='flex justify-between '>
                                <div></div>
                                <div className='bg-gradient text-white p-4 text-center rounded-full h-6 w-6 flex items-center justify-center'>
                                    03</div>
                            </div>
                            <div className='bg-[#f3e8fe] p-3 rounded-full w-max mx-auto'>
                                <img className='mx-auto' src={step3} alt="" />

                            </div>
                            <h1 className='text-2xl font-semibold'>Start Creating</h1>
                            <p className='text-gray-400 text-sm'>Download and start using your premium tools immediately.</p>

                        </div>

                    </div>
                </div>

            </section>


        </div>
    );
};

export default Steps;