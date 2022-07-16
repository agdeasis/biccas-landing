import React from 'react'
import Benefits from './Benefits'

const Features = () => {
    return (
        <section className='section-features relative z-9 overflow-y-hidden'>
            <img src="./images/eclipse-red.png" className='absolute left-0' alt="" />
            <div className='max-w-[1180px] mx-auto block py-12'>
                <div className='flex flex-wrap  px-5 justify-center md:justify-start items-start mt-[50px]'>
                    <div className='md:w-[35%] text-center md:text-left mt-4 mb-4'>
                         <h1 className='text-2xl md:text-4xl font-medium md:max-w-[280px]'>Our Features you can get</h1>
                    </div>
                    <div className='md:w-[40%] text-center md:text-left mt-4 mb-4'>
                        <p className='text-[#a6a6a6]'>We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                    </div>
                    <div className='md:w-[25%] text-center md:text-right mt-4 mb-4'>
                         <button className='rounded-full  bg-[#54BD95]  px-7 py-4 ease-in duration-300 hover:bg-[#2F9870] text-white '>Get Started</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3 mt-[80px] relative z-9">
                    <div className='p-5 text-center md:text-left'>
                        <img src="./images/features/collabs.png" className='mx-auto dblock max-w-full h-auto' alt="" />
                        <h4 className='text-2xl font-medium mt-5' > Collboration Teams </h4>
                        <p className='mt-3 text-[#a6a6a6]'>Here you can handle projects together with team virtually</p>
                    </div>
                    <div className='p-5 text-center md:text-left'>
                        <img src="./images/features/cloud.png" className='mx-auto dblock max-w-full h-auto' alt="" />
                        <h4 className='text-2xl font-medium mt-5' > Cloud Storage </h4>
                        <p className='mt-3 text-[#a6a6a6]'>No nedd to worry about storage because we provide storage up to 2 TB</p>
                    </div>
                    <div className='p-5 text-center md:text-left'>
                        <img src="./images/features/analytics.png" className='mx-auto dblock max-w-full h-auto' alt="" />
                        <h4 className='text-2xl font-medium mt-5' >Daily Analytics</h4>
                        <p className='mt-3 text-[#a6a6a6]'>We always provide useful informatin to make it easier for you every day</p>
                    </div>
                </div>

                <Benefits />


            </div>
            

        </section>
    )
}

export default Features