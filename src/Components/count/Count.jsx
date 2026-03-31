import React from 'react';

const Count = () => {
    return (
        <div className='bg-gradient p-7'>
            <section>
                <div className=' flex gap-9 justify-around '>
                    <div>
                        <h1 className='text-4xl font-extrabold text-white mb-5'>50K+</h1>
                        <p className='text-white'>Active Users</p>


                    </div>
                    <div className=' w-0.5 bg-gray-400'>
                        
                    </div>
                    <div>
                        <h1 className='text-4xl font-extrabold text-white mb-5'>200+</h1>
                        <p className='text-white'>Premium Tools</p>
                    </div>
                      <div className=' w-0.5 bg-gray-400'>
                        
                    </div>
                    <div>
                        <h1 className='text-4xl font-extrabold text-white mb-5'>4.9</h1>
                        <p className='text-white'>Rating</p>
                    </div>

                </div>

            </section>

        </div>
    );
};

export default Count;