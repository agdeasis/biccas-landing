import React from 'react'

const Collabs = () => {
  return (
   <div className='collabs flex items-center pb-[100px] relative'>
        <div className='mt-[130px] text-center max-w-[1180px] mx-auto px-4'>
            <h1 className='text-1xl md:text-3xl font-bold'>More than 25,000 teams use Collabs</h1>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-[50px] justify-items-center items-center">
                <div className='py-4'>
                    <img src="./images/collabs/unsplash.png" className='block mx-auto max-w-[100%] h-auto' alt="" />
                </div>
                <div className='py-4'>
                    <img src="./images/collabs/notion.png" className='block mx-auto max-w-[100%] h-auto' alt="" />
                </div>
                <div className='py-4'>
                    <img src="./images/collabs/intercom.png" className='block mx-auto max-w-[100%] h-auto' alt="" />
                </div>
                <div className='py-4'>
                    <img src="./images/collabs/descript.png" className='block mx-auto max-w-[100%] h-auto' alt="" />
                </div>
                <div className='py-4 col-span-2 md:col-span-1'>
                    <img src="./images/collabs/grammarly.png" className='block mx-auto max-w-[100%] h-auto' alt="" />
                </div>
            </div>
        </div>
   </div>
  )
}

export default Collabs