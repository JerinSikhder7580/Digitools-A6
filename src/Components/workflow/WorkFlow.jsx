import React from 'react';

const WorkFlow = () => {
    return (
        <div className='bg-gradient py-30 text-center'>
            <section>
                <div className='space-y-4'>
                    <h1 className='text-3xl font-bold text-white'>Ready to Transform Your Workflow?</h1>
                    <p className='text-gray-200'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    <div className='flex gap-4  justify-center'>
                        <button className='btn btn-outline bg-white text-[#7625f8] rounded-full'>Explore Products</button>
                        <button className='btn btn-outline text-white rounded-full'>View Pricing</button>
                    </div>

                    <p className='text-gray-200'>14-day free trial • No credit card required • Cancel anytime</p>

                </div>
            </section>

        </div>
    );
};

export default WorkFlow;