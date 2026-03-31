import React from 'react';
import bannerImg from "../../assets/banner.png"
import { Play } from 'lucide-react';



const Banner = () => {

    return (
        <div>
            <section>
                <div className="hero bg-base-200 p-11">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={bannerImg}
                        />
                        <div>
                            <div className='bg-[#e1e7ff] rounded-full w-60 text-center text-sm p-1 flex gap-2 items-center'>
                                <div className='relative   ml-2'>
                                    <div className='infinite-animation absolute top-0 left-0 translate-y-full'></div>
                                    <div className='infinite-animation absolute top-0 left-0  ' style={{ animationDelay: ".7s" }}></div>
                                    <div className='infinite-animation absolute top-0 left-0 -translate-y-full' style={{ animationDelay: "1.4s" }}></div>
                                </div>

                                <div className='text-[#9514FA] '>New: AI-Powered Tools Available</div>

                            </div>
                            <h1 className="text-5xl font-bold mt-4">Supercharge Your <br /> Digital Workflow</h1>
                            <p className="py-6">
                                Access premium AI tools, design assets, templates, and productivity <br />
                                software—all in one place. Start creating faster today. <br />

                                Explore Products
                            </p>
                            <div className='flex gap-4 '>
                                <button className="btn text-white bg-gradient rounded-full">Explore Products</button>
                                <button className="btn text-[#9514FA] btn-outline border border-[#9514FA] rounded-full "> <Play />
                                    Watch Demo</button>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default Banner;